"use client";

import { useEffect, useState } from "react";

export default function TypingTitle() {
  const text = "SmartInvoice";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-800 text-center md:whitespace-nowrap">
      
      {/* First Line */}
      <span className="block md:inline">Welcome to</span>{" "}

      {/* Second Line (Mobile) */}
      <span className="block md:inline text-blue-600 pr-1">
        {displayText}
        {showCursor && (
          <span className="border-r-2 border-blue-600 ml-1 animate-pulse"></span>
        )}
      </span>

    </h1>
  );
}