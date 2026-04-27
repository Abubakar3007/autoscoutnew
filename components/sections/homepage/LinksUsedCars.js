import Heading from "@/components/ui/Heading"
import Link from "next/link"

export default function LinksUsedCars() {

    const carLinks = [
        {
            title: "Audi",
            links: [
                {
                    title: "A1",
                    href: "/listing"
                },
                {
                    title: "A3",
                    href: "/listing"
                },
                {
                    title: "A4",
                    href: "/listing"
                },
                {
                    title: "A6",
                    href: "/listing"
                },
                {
                    title: "Q3",
                    href: "/listing"
                },
                {
                    title: "More Audi models",
                    href: "/listing"
                },
            ]
        },
        {
            title: "BMW",
            links: [
                {
                    title: "1 Series",
                    href: "/listing"
                },
                {
                    title: "3 Series",
                    href: "/listing"
                },
                {
                    title: "5 Series",
                    href: "/listing"
                },
                {
                    title: "x1",
                    href: "/listing"
                },
                {
                    title: "x3",
                    href: "/listing"
                },
                {
                    title: "More BMW models",
                    href: "/listing"
                },
            ]
        },
        {
            title: "VW",
            links: [
                {
                    title: "Caddy",
                    href: "/listing"
                },
                {
                    title: "Golf",
                    href: "/listing"
                },
                {
                    title: "Polo",
                    href: "/listing"
                },
                {
                    title: "Tiguan",
                    href: "/listing"
                },
                {
                    title: "Touran",
                    href: "/listing"
                },
                {
                    title: "More VW models",
                    href: "/listing"
                },
            ]
        },
        {
            title: "Mercedes",
            links: [
                {
                    title: "A-Class",
                    href: "/listing"
                },
                {
                    title: "B-Class",
                    href: "/listing"
                },
                {
                    title: "C-Class",
                    href: "/listing"
                },
                {
                    title: "E-Class",
                    href: "/listing"
                },
                {
                    title: "S-Class",
                    href: "/listing"
                },
                {
                    title: "More Mercedes models",
                    href: "/listing"
                },
            ]
        },
        {
            title: "Other brands",
            links: [
                {
                    title: "Audi",
                    href: "/listing"
                },
                {
                    title: "BMW",
                    href: "/listing"
                },
                {
                    title: "VW",
                    href: "/listing"
                },
                {
                    title: "Mercedes",
                    href: "/listing"
                },
                {
                    title: "Other brands",
                    href: "/listing"
                },
            ]
        },
        {
            title: "Structure type",
            links: [
                {
                    title: "SUV",
                    href: "/listing"
                },
                {
                    title: "Sedan",
                    href: "/listing"
                },
                {
                    title: "Hatchback",
                    href: "/listing"
                },
                {
                    title: "Coupe",
                    href: "/listing"
                },
                {
                    title: "More structure types",
                    href: "/listing"
                },
            ]
        },
        {
            title: "Region",
            links: [
                {
                    title: "Dhaka",
                    href: "/listing"
                },
                {
                    title: "Chittagong",
                    href: "/listing"
                },
                {
                    title: "Khulna",
                    href: "/listing"
                },
                {
                    title: "Rajshahi",
                    href: "/listing"
                },
                {
                    title: "More regions",
                    href: "/listing"
                },
            ]
        }
    ]

    return (
        <section className="py-14 md:py-20 bg-neutral-100">
            <div className="wrapper">

                <Heading as="h2" className="sm:text-[28px] text-2xl mb-10 text-center w-fit mx-auto">Looking for a used car?</Heading>

                {/* link list */}
                <div className="grid car-grid gap-y-6 sm:gap-y-10 gap-x-3 sm:gap-x-6">
                    {
                        carLinks.map((data, index) => (
                            <div key={index}>
                                <h4 className="text-lg sm:mb-6 mb-4 font-medium leading-7">{data.title}</h4>
                                <ul
                                    data-dropdown={data.title}
                                    className="space-y-2"
                                >
                                    {
                                        data.links.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    className="text-blue-500 border-b border-transparent hover:border-blue-500 sm:text-base text-sm leading-6"
                                                    href={link.href}
                                                    title={link.title}>
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}