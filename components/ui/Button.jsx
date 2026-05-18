export default function Button({ text, className = "", type = "button" }) {
    return (
        <button
            type={type}
            className={`primary-btn ${className}`}>
            {text}
        </button>
    )
}