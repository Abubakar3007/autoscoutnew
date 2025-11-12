export default function Select({ options = [], className = "", ...props }) {
  return (
    <select
      className={`
        w-full
        h-12
        px-4
        pr-10
        text-sm
        appearance-none
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
        ${className}
      `}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
