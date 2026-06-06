"use client";

import { useState } from "react";

const ColorPicker = ({ colors = [] }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <p className="text-lg font-semibold">Select color</p>

      <div className="flex items-center gap-3">
        {colors.map((color) => {
          const isActive = selectedColor === color;

          return (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className="size-7 cursor-pointer rounded-full border border-black"
            >
              <div
                className="h-full w-full rounded-full border border-black transition-all duration-150"
                style={{
                  backgroundColor: color,
                  transform: isActive ? "scale(0.7)" : "scale(1)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
