import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const interactiveSelector = "a, button, input, select, textarea, [role='button']";

    const moveCursor = (event) => {
      cursor.style.translate = `${event.clientX}px ${event.clientY}px`;
      cursor.classList.add("is-visible");
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
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", setActive);
      document.removeEventListener("pointerout", setActive);
      document.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true"></span>;
}
