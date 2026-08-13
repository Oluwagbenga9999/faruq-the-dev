import type { ProjectStatus } from "../data/types";

interface StatusPillProps {
  status: ProjectStatus;
}

export default function StatusPill({ status }: StatusPillProps) {
  const styles =
    status === "Shipped"
      ? "border-teal-700 text-teal-400 bg-teal-950/40"
      : status === "In progress"
      ? "border-purple-700 text-purple-300 bg-purple-950/40"
      : "border-zinc-700 text-zinc-400 bg-zinc-900/60 border-dashed";

  return (
    <span className={`font-mono text-[11px] px-2 py-1 rounded border ${styles} tracking-wide`}>
      {status}
    </span>
  );
}
