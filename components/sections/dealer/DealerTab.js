import Link from "next/link";

export default function DealerTab({url}) {

    const tabs = [
        {
            title: "About",
            href: "/dealer/about",
        },
        {
            title: "Our vehicles",
            href: "/dealer/vehicles",
        },
        {
            title: "Reviews",
            href: "/dealer/reviews",
        },
    ]

    return (
        <div className="flex w-full mx-auto no-scroll overflow-x-auto max-w-[677px] [&>a]:flex-1 text-center [&>a]:whitespace-nowrap sm:text-xl text-gray-500 font-semibold border-b border-neutral-400 [&>a]:px-4 [&>a]:pb-2">
            {tabs.map((tab, index) => (
                <Link
                    key={index}
                    href={tab.href}
                    title={tab.title}
                    className={`${url === tab.href ? "text-blue-500 border-b-4 border-blue-500" : ""}`}>
                    {tab.title}
                </Link>
            ))}
        </div>
    )
}