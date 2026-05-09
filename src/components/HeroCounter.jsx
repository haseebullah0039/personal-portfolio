import { useEffect, useRef, useState } from "react";

export default function HeroCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const frameRef = useRef(0);
  const resetRef = useRef(0);
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    let startTime = 0;

    const animate = (time) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / 3000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    const startCounter = () => {
      window.cancelAnimationFrame(frameRef.current);
      window.cancelAnimationFrame(resetRef.current);
      startTime = 0;
      setCount(0);
      setIsCounting(false);

      resetRef.current = window.requestAnimationFrame(() => {
        setIsCounting(true);
        frameRef.current = window.requestAnimationFrame(animate);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
        } else {
          window.cancelAnimationFrame(frameRef.current);
          window.cancelAnimationFrame(resetRef.current);
          setIsCounting(false);
          setCount(0);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameRef.current);
      window.cancelAnimationFrame(resetRef.current);
    };
  }, [value]);

  return (
    <b ref={ref} className={`counter-number ${isCounting ? "is-counting" : ""}`}>
      {count}
      {suffix}
    </b>
  );
}
