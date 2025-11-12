export default function Button({text,className=""}){
    return(
        <button className={`primary-btn ${className}`}>
            {text}
        </button>
    )
}