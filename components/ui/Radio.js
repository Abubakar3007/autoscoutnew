export default function Radio({ id, name }) {
    return (
        <input
            type="radio"
            id={id}
            name={name}
            className="radio"
        />
    )
}