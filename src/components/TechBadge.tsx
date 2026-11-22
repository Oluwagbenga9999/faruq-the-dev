import TechIcon from "./TechIcon";

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="tech-tag">
      <TechIcon name={name} size={13} />
      {name}
    </span>
  );
}
