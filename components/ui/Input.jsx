export default function Input({ id, placeholder = "Enter", name, value, onChange, type = "text" }) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={`${placeholder}`}
            className="w-full h-12 px-4 py-3 text-sm transition-all duration-200 ease-in-out border rounded-md outline-none border-neutral-400 h-h-50 bg-neutral-50 focus:border-blue-500"
        />
    )
}