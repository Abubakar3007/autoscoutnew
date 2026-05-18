"use client";
import { useState, useEffect, useRef } from "react";

export default function CustomSelect({ data = [], name, placeholder = "Choose", onSelect, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // toggle dropdown
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // when selecting an item
  const handleSelect = (item) => {
    setIsOpen(false);

    // ✅ trigger callback if provided
    if (onSelect) onSelect(name, item.label);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={selectRef}
      className="relative w-full custom-select"
      role="combobox"
      aria-expanded={isOpen}
    >
      {/* select button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`
          w-full h-12 px-4 pr-10 text-sm border border-neutral-400 rounded-md
          bg-[url('/icons/dropdown-arrow.svg')] bg-neutral-50
          bg-[position:calc(100%-13px)_center] bg-no-repeat outline-none
          transition-all duration-200 ease-in-out focus:border-blue-500
          ${value ? 'text-[#333]' : 'text-gray-500'}
          cursor-pointer font-medium text-left whitespace-nowrap
        `}
        aria-label={`Select ${name}`}
        aria-haspopup="listbox"
      >
        <span className="overflow-hidden text-ellipsis">{value || placeholder}</span>
      </button>

      {/* hidden input */}
      <input type="hidden" name={name} value={value} />

      {/* dropdown list */}
      <ul
        className={`absolute dropdown left-0 right-0 mt-1 bg-white border z-20 border-neutral-300 rounded-md shadow-lg text-sm overflow-y-auto transition-all duration-200 ease-in-out font-medium ${isOpen ? "opacity-100 visible max-h-[260px]" : "opacity-0 invisible max-h-0"} [&>li]:py-3 [&>li]:px-4 [&>li]:cursor-pointer [&>li:hover]:bg-blue-500/10`}
        role="listbox"
      >
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelect(item)}
            role="option"
            aria-selected={value === item.label}
            className={value === item.label ? 'bg-blue-500/10' : 'bg-transparent'}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
