"use client";

import { useState } from "react";

const ColorPicker = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  return (
    <div className="mt-5 flex items-center gap-3">
      {product.colors.map((color) => {
        const isActive = selectedColor === color;

        return (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            className="size-7 rounded-full border border-black box-border"
          >
            <div
              className="block w-full h-full rounded-full transition-all duration-150 border border-black"
              style={{
                backgroundColor: color,
                transform: isActive ? "scale(0.7)" : "scale(1)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColorPicker;
