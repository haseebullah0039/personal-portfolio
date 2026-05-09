import { useEffect, useState } from "react";

const skills = [
  "Graphic Designer",
  "Video Editor",
  "Photographer",
  "Videographer"
];

export default function HeroTyping() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const isComplete = typedText === currentSkill;
    const isEmpty = typedText === "";

    const delay = isComplete && !isDeleting ? 850 : isEmpty && isDeleting ? 180 : isDeleting ? 44 : 82;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setSkillIndex((index) => (index + 1) % skills.length);
        return;
      }

      setTypedText((value) =>
        isDeleting
          ? currentSkill.slice(0, Math.max(value.length - 1, 0))
          : currentSkill.slice(0, value.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, skillIndex, typedText]);

  return (
    <span className="typing-title" aria-label={skills[skillIndex]} aria-live="polite">
      {typedText}
      <span className="typing-cursor" aria-hidden="true"></span>
    </span>
  );
}
