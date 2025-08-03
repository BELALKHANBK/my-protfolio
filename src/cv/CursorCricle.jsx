import React, { useEffect, useState } from "react";
import "../App.css"; // CSS ফাইলের নাম ঠিক রাখো

const petalsCount = 8;

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => setClicked(false), 600); // ফুল পেটাল আউট করার সময়
      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-circle"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {clicked &&
        [...Array(petalsCount)].map((_, i) => (
          <span key={i} className="petal" style={{ '--i': i }} />
        ))}
    </div>
  );
};

export default CursorCircle;
