import { useEffect, useMemo, useRef, useState } from "react";
import { certificates } from "@/data/portfolio";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.24;

function clampScale(value) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
}

function getDistance(touchA, touchB) {
  const deltaX = touchA.clientX - touchB.clientX;
  const deltaY = touchA.clientY - touchB.clientY;

  return Math.hypot(deltaX, deltaY);
}

function getCertificateBySlug(slug) {
  return certificates.find((certificate) => certificate.slug === slug) ?? null;
}

function getBaseDimensions(containerWidth, containerHeight, naturalWidth, naturalHeight) {
  if (!containerWidth || !containerHeight || !naturalWidth || !naturalHeight) {
    return { width: 0, height: 0 };
  }

  const imageRatio = naturalWidth / naturalHeight;
  const containerRatio = containerWidth / containerHeight;

  if (imageRatio > containerRatio) {
    return {
      width: containerWidth,
      height: containerWidth / imageRatio
    };
  }

  return {
    width: containerHeight * imageRatio,
    height: containerHeight
  };
}

export default function CertificateViewerPage({ slug, onClose }) {
  const certificate = useMemo(() => getCertificateBySlug(slug), [slug]);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const stageRef = useRef(null);
  const panStateRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0
  });
  const pinchStateRef = useRef({
    startDistance: 0,
    startScale: 1
  });

  const clampOffset = (nextScale, nextOffset) => {
    const stage = stageRef.current;
    if (!stage) {
      return { x: 0, y: 0 };
    }

    const { width: baseWidth, height: baseHeight } = getBaseDimensions(
      stage.clientWidth,
      stage.clientHeight,
      naturalSize.width,
      naturalSize.height
    );

    const maxX = Math.max(0, ((baseWidth * nextScale) - stage.clientWidth) / 2);
    const maxY = Math.max(0, ((baseHeight * nextScale) - stage.clientHeight) / 2);

    return {
      x: Math.min(maxX, Math.max(-maxX, nextOffset.x)),
      y: Math.min(maxY, Math.max(-maxY, nextOffset.y))
    };
  };

  const applyScale = (nextScale) => {
    const safeScale = clampScale(nextScale);
    setScale(safeScale);
    setOffset((currentOffset) => (
      safeScale <= 1
        ? { x: 0, y: 0 }
        : clampOffset(safeScale, currentOffset)
    ));
  };

  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [slug]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.classList.add("certificate-viewer-active");

    return () => {
      document.body.classList.remove("certificate-viewer-active");
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setOffset((currentOffset) => clampOffset(scale, currentOffset));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [scale, naturalSize.width, naturalSize.height]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        applyScale(scale + ZOOM_STEP);
      }

      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        applyScale(scale - ZOOM_STEP);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, scale]);

  if (!certificate) {
    return (
      <main className="certificate-viewer-page">
        <button className="certificate-viewer-close" type="button" aria-label="Close certificate view" onClick={onClose}>
          <span />
          <span />
        </button>
        <div className="certificate-viewer-empty">
          <h1>Certificate not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="certificate-viewer-page">
      <button className="certificate-viewer-close" type="button" aria-label="Close certificate view" onClick={onClose}>
        <span />
        <span />
      </button>

      <section
        ref={stageRef}
        className="certificate-viewer-stage"
        aria-label={`${certificate.title} certificate viewer`}
        onWheel={(event) => {
          event.preventDefault();
          const direction = event.deltaY > 0 ? -1 : 1;
          applyScale(scale + (direction * ZOOM_STEP));
        }}
        onPointerDown={(event) => {
          if (scale <= 1) {
            return;
          }

          panStateRef.current = {
            isDragging: true,
            startX: event.clientX,
            startY: event.clientY,
            originX: offset.x,
            originY: offset.y
          };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!panStateRef.current.isDragging || scale <= 1) {
            return;
          }

          const deltaX = event.clientX - panStateRef.current.startX;
          const deltaY = event.clientY - panStateRef.current.startY;
          setOffset(clampOffset(scale, {
            x: panStateRef.current.originX + deltaX,
            y: panStateRef.current.originY + deltaY
          }));
        }}
        onPointerUp={(event) => {
          panStateRef.current.isDragging = false;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          panStateRef.current.isDragging = false;
        }}
        onTouchStart={(event) => {
          if (event.touches.length === 1 && scale > 1) {
            const touch = event.touches[0];
            panStateRef.current = {
              isDragging: true,
              startX: touch.clientX,
              startY: touch.clientY,
              originX: offset.x,
              originY: offset.y
            };
            return;
          }

          if (event.touches.length !== 2) {
            return;
          }

          pinchStateRef.current = {
            startDistance: getDistance(event.touches[0], event.touches[1]),
            startScale: scale
          };
        }}
        onTouchMove={(event) => {
          if (event.touches.length === 1 && panStateRef.current.isDragging && scale > 1) {
            event.preventDefault();
            const touch = event.touches[0];
            const deltaX = touch.clientX - panStateRef.current.startX;
            const deltaY = touch.clientY - panStateRef.current.startY;
            setOffset(clampOffset(scale, {
              x: panStateRef.current.originX + deltaX,
              y: panStateRef.current.originY + deltaY
            }));
            return;
          }

          if (event.touches.length !== 2) {
            return;
          }

          event.preventDefault();
          const nextDistance = getDistance(event.touches[0], event.touches[1]);
          const { startDistance, startScale } = pinchStateRef.current;

          if (!startDistance) {
            return;
          }

          applyScale(startScale * (nextDistance / startDistance));
        }}
        onTouchEnd={() => {
          panStateRef.current.isDragging = false;
          pinchStateRef.current = {
            startDistance: 0,
            startScale: scale
          };
        }}
        onDoubleClick={() => {
          if (scale > 1) {
            setScale(1);
            setOffset({ x: 0, y: 0 });
            return;
          }

          applyScale(1 + (ZOOM_STEP * 2));
        }}
      >
        <div className="certificate-viewer-image-wrap">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="certificate-viewer-image"
            style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})` }}
            draggable="false"
            onLoad={(event) => {
              setNaturalSize({
                width: event.currentTarget.naturalWidth,
                height: event.currentTarget.naturalHeight
              });
            }}
          />
        </div>
      </section>
    </main>
  );
}
