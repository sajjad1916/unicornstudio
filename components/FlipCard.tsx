"use client";

import { useState } from "react";

interface FlipCardProps {
  phase: string;
  title: string;
  description: string;
}

export default function FlipCard({ phase, title, description }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-64 perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 flex flex-col items-center justify-center text-center">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            {phase}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="mt-4 text-xs text-gray-500">Tap to see details</div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl border-2 border-blue-700 flex items-center justify-center">
          <p className="text-white leading-relaxed text-sm text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
