import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const interactiveSelector = "a, button, input, select, textarea, [role='button']";

    const paintCursor = () => {
      frameRef.current = null;
      cursor.style.translate = `${pointerRef.current.x}px ${pointerRef.current.y}px`;
      cursor.classList.add("is-visible");
    };

    const moveCursor = (event) => {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY
      };

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(paintCursor);
      }
    };

    const setActive = (event) => {
      if (event.target instanceof Element && event.target.closest(interactiveSelector)) {
        cursor.classList.add("is-active");
      } else {
        cursor.classList.remove("is-active");
      }
    };

    const hideCursor = () => {
      cursor.classList.remove("is-visible", "is-active");
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerover", setActive);
    document.addEventListener("pointerout", setActive);
    document.addEventListener("pointerleave", hideCursor);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", setActive);
      document.removeEventListener("pointerout", setActive);
      document.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true"></span>;
}
