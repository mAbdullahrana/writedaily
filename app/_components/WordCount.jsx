"use client";

import { useState } from "react";
import { useWordCount } from "../_hooks/useWordCount";
import Tooltip from "./Tooltip";

export default function WordCount({ editor }) {
  const [hovered, setHovered] = useState(false);
  const wordCount = useWordCount(editor);

  const progress = Math.min((wordCount / 500) * 100, 100);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-row-reverse items-center gap-2">
    <div
      className="relative w-10 h-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
      
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e2e8f0"
          strokeWidth="11"
          fill="transparent"
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="blue"
          strokeWidth="11"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white ">
        Goal
      </div>

      {hovered && (
        <Tooltip>
          Today: {wordCount} / Goal: {500}
        </Tooltip>
      )}
    </div>

    <div className="text-mediumDark hover:text-white">
      Words: {wordCount}
    </div>
    </div>
  );
}

