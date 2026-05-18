import Link from "next/link";

export default function ShowMore({ text, className = "", btnClass = "", onClick }) {
    return (
        <div className={`${className} text-center`}>
            <button
                className={`inline-block cursor-pointer secondary-btn ${btnClass}`}
                title="More cars"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}