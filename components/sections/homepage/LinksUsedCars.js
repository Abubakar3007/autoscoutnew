import Heading from "@/components/ui/Heading"
import Link from "next/link"

export default function LinksUsedCars() {

    const carLinks = [
        {
            title: "Audi",
            links: [
                {
                    title: "A1",
                    href: "/lst/audi/a1"
                },
                {
                    title: "A3",
                    href: "/auto/audi/audi-a3/"
                },
                {
                    title: "A4",
                    href: "/lst/audi/a4"
                },
                {
                    title: "A6",
                    href: "/lst/audi/a6"
                },
                {
                    title: "Q3",
                    href: "/lst/audi/q3"
                },
                {
                    title: "More Audi models",
                    href: "/auto/audi/"
                },
            ]
        },
        {
            title: "BMW",
            links: [
                {
                    title: "1 Series",
                    href: ""
                },
                {
                    title: "3 Series",
                    href: ""
                },
                {
                    title: "5 Series",
                    href: ""
                },
                {
                    title: "x1",
                    href: ""
                },
                {
                    title: "x3",
                    href: ""
                },
                {
                    title: "More BMW models",
                    href: ""
                },
            ]
        },
        {
            title: "VW",
            links: [
                {
                    title: "Caddy",
                    href: ""
                },
                {
                    title: "Golf",
                    href: ""
                },
                {
                    title: "Polo",
                    href: ""
                },
                {
                    title: "Tiguan",
                    href: ""
                },
                {
                    title: "Touran",
                    href: ""
                },
                {
                    title: "More VW models",
                    href: ""
                },
            ]
        },
        {
            title: "Mercedes",
            links: [
                {
                    title: "A-Class",
                    href: ""
                },
                {
                    title: "B-Class",
                    href: ""
                },
                {
                    title: "C-Class",
                    href: ""
                },
                {
                    title: "E-Class",
                    href: ""
                },
                {
                    title: "S-Class",
                    href: ""
                },
                {
                    title: "More Mercedes models",
                    href: ""
                },
            ]
        },
        {
            title: "Other brands",
            links: [
                {
                    title: "Audi",
                    href: ""
                },
                {
                    title: "BMW",
                    href: ""
                },
                {
                    title: "VW",
                    href: ""
                },
                {
                    title: "Mercedes",
                    href: ""
                },
                {
                    title: "Other brands",
                    href: ""
                },
            ]
        },
        {
            title: "Structure type",
            links: [
                {
                    title: "SUV",
                    href: ""
                },
                {
                    title: "Sedan",
                    href: ""
                },
                {
                    title: "Hatchback",
                    href: ""
                },
                {
                    title: "Coupe",
                    href: ""
                },
                {
                    title: "More structure types",
                    href: ""
                },
            ]
        },
        {
            title: "Region",
            links: [
                {
                    title: "Dhaka",
                    href: ""
                },
                {
                    title: "Chittagong",
                    href: ""
                },
                {
                    title: "Khulna",
                    href: ""
                },
                {
                    title: "Rajshahi",
                    href: ""
                },
                {
                    title: "More regions",
                    href: ""
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