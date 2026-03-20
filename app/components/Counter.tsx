"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8 text-center">
      <p className="text-gray-400 text-sm mb-2">
        Page visitée
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-lg transition"
      >
        👁️ {count} fois
      </button>
    </div>
  );
}