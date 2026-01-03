"use client";

import { useState } from "react";

interface SalaryInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function SalaryInput({ value, onChange }: SalaryInputProps) {
  const [displayValue, setDisplayValue] = useState(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\s/g, "");
    setDisplayValue(rawValue);

    const numValue = parseInt(rawValue, 10);
    if (!isNaN(numValue) && numValue >= 0) {
      onChange(numValue);
    } else if (rawValue === "") {
      onChange(0);
    }
  };

  const formatDisplay = () => {
    if (value > 0) {
      setDisplayValue(value.toLocaleString("sv-SE"));
    }
  };

  const handleFocus = () => {
    setDisplayValue(value > 0 ? value.toString() : "");
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="salary"
        className="block text-sm font-medium text-[#24292f] dark:text-[#e6edf3] mb-2"
      >
        Månadslön
      </label>
      <div className="relative">
        <input
          type="text"
          id="salary"
          value={displayValue}
          onChange={handleChange}
          onBlur={formatDisplay}
          onFocus={handleFocus}
          placeholder="35 000"
          className="github-input w-full pr-16 text-[#24292f] dark:text-[#e6edf3]"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[#57606a] dark:text-[#8b949e] font-medium">
          SEK/mån
        </span>
      </div>
      <p className="text-xs text-[#57606a] dark:text-[#8b949e]">
        Bruttolön före skatt
      </p>
    </div>
  );
}
