"use client";
import { useState, useRef, useEffect } from "react";
import Checkbox from "./Checkbox";
import Label from "./Label";

export default function CustomSelectCheckbox({ data = [], name, placeholder = "Choose" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const selectRef = useRef(null);

  // Toggle dropdown
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle checkbox select/unselect
  const handleSelect = (itemLabel) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemLabel)) {
        // Remove if already selected
        return prevSelected.filter((label) => label !== itemLabel);
      } else {
        // Add new selection
        return [...prevSelected, itemLabel];
      }
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Displayed text in button
  const displayText =
    selectedItems.length > 0 ? selectedItems.join(", ") : placeholder;

  return (
    <div
      ref={selectRef}
      className="relative custom-select w-full"
      role="combobox"
      aria-expanded={isOpen}
    >
      {/* select button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`
          w-full
          h-12
          px-4
          pr-10
          text-sm
          border
          border-neutral-400
          rounded-md
          bg-[url('/icons/dropdown-arrow.svg')]
          bg-neutral-50
          bg-[position:calc(100%-13px)_center]
          bg-no-repeat
          outline-none
          transition-all
          duration-200
          ease-in-out
          focus:border-blue-500
          text-[#333]
          cursor-pointer
          font-medium
          text-left
          whitespace-nowrap
        `}
        aria-label="Select option"
        aria-haspopup="listbox"
      >
        <span className="overflow-hidden text-ellipsis">{displayText}</span>
      </button>

      {/* hidden input for form submission */}
      <input type="hidden" name={name} value={selectedItems.join(", ")} />

      {/* dropdown list */}
      <ul
        className={`
          absolute
          left-0
          right-0
          mt-1
          bg-white
          border
          z-20
          border-neutral-300
          rounded-md
          shadow-lg
          text-sm
          overflow-y-auto
          transition-all
          duration-200
          ease-in-out
          font-medium
          ${isOpen ? "opacity-100 visible max-h-[260px]" : "opacity-0 invisible max-h-0"}
          [&>li]:py-3 [&>li]:px-4 [&>li]:cursor-pointer [&>li:hover]:bg-blue-500/10 [&>li]:flex [&>li]:gap-2 [&>li]:items-center
        `}
        role="listbox"
      >
        {data.map((item, index) => {
          const isChecked = selectedItems.includes(item.label);
          return (
            <li
              key={index}
              onClick={() => handleSelect(item.label)}
              role="option"
              aria-selected={isChecked}
              className={isChecked ? "bg-blue-500/10" : "bg-transparent"}
            >
              <Checkbox
                name={name}
                id={`${name}-${index}`}
                checked={isChecked}
                readOnly
              />
              <Label
                htmlFor={`${name}-${index}`}
                name={item.label}
                className="font-medium cursor-pointer"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
