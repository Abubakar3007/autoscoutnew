import Heading from "../ui/Heading";

export default function DetailsBox({ dataId, heading, items }) {
    return (
        <div className="p-6 rounded-md box bg-white shadow-box-shadow" data-box={dataId}>
            <Heading as="h3" className="text-xl w-fit pb-2 border-b border-blue-500 mb-6 font-semibold">{heading}</Heading>
            {/* list */}
            <ul className="grid gap-4 w-full grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] [&>li>span]:text-sm [&>li>span]:text-gray-500 font-medium [&>li>strong]:text-base [&>li>span]:mb-2 [&>li>span]:block">
                {items.map((item, index) => (
                    <li key={index}>
                        <span>{item.title}</span>
                        <strong className="font-semibold">{item.value}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}