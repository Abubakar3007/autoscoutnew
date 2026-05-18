// components/ui/Label.js
export default function Label({ htmlFor, name, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium leading-6 ${className}`}>
      {name}
    </label>
  );
}