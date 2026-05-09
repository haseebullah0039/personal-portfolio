import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, value }) {
  const skillRef = useRef(null);
  const frameRef = useRef(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = skillRef.current;
    if (!node) {
      return undefined;
    }

    const restartAnimation = () => {
      window.cancelAnimationFrame(frameRef.current);
      setIsActive(false);
      frameRef.current = window.requestAnimationFrame(() => {
        setIsActive(true);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          restartAnimation();
        } else {
          window.cancelAnimationFrame(frameRef.current);
          setIsActive(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="skill" ref={skillRef}>
      <span>
        {label}
        <b>{value}</b>
      </span>
      <i
        className={isActive ? "is-active" : ""}
        style={{ "--skill-target": value }}
      ></i>
    </div>
  );
}
