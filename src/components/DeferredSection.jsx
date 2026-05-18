import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_IDLE_TIMEOUT_MS = 2200;

function shouldLoadForHash(sectionId) {
  if (!sectionId || typeof window === "undefined") {
    return false;
  }

  return window.location.hash === `#${sectionId}`;
}

export default function DeferredSection({
  loader,
  sectionId,
  minHeight = 720,
  rootMargin = "700px 0px",
  componentProps = {}
}) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(() => shouldLoadForHash(sectionId));
  const LazySection = useMemo(() => lazy(loader), [loader]);

  useEffect(() => {
    if (shouldLoad) {
      return undefined;
    }

    const target = containerRef.current;
    if (!target) {
      return undefined;
    }

    const loadSection = () => {
      setShouldLoad(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadSection();
        }
      },
      { rootMargin }
    );

    observer.observe(target);

    const handleHashChange = () => {
      if (shouldLoadForHash(sectionId)) {
        loadSection();
      }
    };

    let idleTimerId = null;
    let idleCallbackId = null;

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(loadSection, {
          timeout: DEFAULT_IDLE_TIMEOUT_MS
        });
      } else {
        idleTimerId = window.setTimeout(loadSection, DEFAULT_IDLE_TIMEOUT_MS);
      }

      if (sectionId) {
        window.addEventListener("hashchange", handleHashChange);
      }
    }

    return () => {
      observer.disconnect();

      if (typeof window !== "undefined") {
        if (idleCallbackId !== null && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleCallbackId);
        }

        if (idleTimerId !== null) {
          window.clearTimeout(idleTimerId);
        }

        if (sectionId) {
          window.removeEventListener("hashchange", handleHashChange);
        }
      }
    };
  }, [rootMargin, sectionId, shouldLoad]);

  return (
    <div
      id={sectionId}
      ref={containerRef}
      style={{ minHeight: shouldLoad ? undefined : minHeight }}
    >
      {shouldLoad ? (
        <Suspense fallback={<div style={{ minHeight }} aria-hidden="true" />}>
          <LazySection {...componentProps} sectionId={null} />
        </Suspense>
      ) : null}
    </div>
  );
}
