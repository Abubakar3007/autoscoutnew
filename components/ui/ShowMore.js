import Link from "next/link";

export default function ShowMore({ text, className = "", btnClass = "" }) {
    return (
        <div className={`${className} text-center`}>
            <Link
                href=""
                className=  {`inline-block secondary-btn ${btnClass}`}
                title="More cars">
                {text}
            </Link>
        </div>
    )
}