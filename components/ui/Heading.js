export default function Heading ({as: Tag = "h2", className = "", children}){
    return (
        <Tag className={`${className} pb-2 border-b border-blue-500 w-fit font-semibold`}>{children}</Tag>
    )
}