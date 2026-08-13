import { useEffect, useState } from "react";
import type { BootLine } from "../data/types";

interface TypewriterResult {
  visibleLines: BootLine[];
  typedPrompt: string;
  done: boolean;
}

export function useTypewriter(lines: BootLine[], active: boolean): TypewriterResult {
  const [visibleLines, setVisibleLines] = useState<BootLine[]>([]);
  const [typedPrompt, setTypedPrompt] = useState<string>("");
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (!active || done) return;

    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const target = lines[lineIndex].prompt;
    let i = 0;
    setTypedPrompt("");

    const typeTimer = window.setInterval(() => {
      i += 1;
      setTypedPrompt(target.slice(0, i));
      if (i >= target.length) {
        window.clearInterval(typeTimer);
        window.setTimeout(() => {
          setVisibleLines((prev) => [...prev, lines[lineIndex]]);
          setLineIndex((prev) => prev + 1);
        }, 220);
      }
    }, 28);

    return () => window.clearInterval(typeTimer);
  }, [active, lineIndex, done, lines]);

  return { visibleLines, typedPrompt, done };
}
