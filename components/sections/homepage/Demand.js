import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function Demand() {

    const carData = [
        {
            title: "City cars",
            image: "/images/city-car-demand.png"
        },
        {
            title: "Electric cars",
            image: "/images/electric-car-demand.png"
        },
        {
            title: "Family cars",
            image: "/images/family-car-demand.png"
        },
        {
            title: "First cars",
            image: "/images/first-car-demand.png"
        }
    ]

    return (
        <section className="py-14 md:py-20">
            <div className="wrapper">
                <Heading as="h2" className="pb-2 mb-10 text-2xl font-semibold leading-9 border-b border-blue-500 sm:text-[28px] w-fit">Currently in demand</Heading>

                {/* types of cards */}
                <div className="grid gap-3 sm:gap-6 car-grid">

                    {
                        carData.map((item, index) => (
                            <Link
                                key={index}
                                href="listing.html"
                                target="_blank"
                                title={`Find ${item.title}`}
                                className="relative z-10 w-full h-full overflow-hidden rounded-md max-h-[260px] before:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-gradient-overlay group"
                            >
                                <img
                                    src={item.image}
                                    alt="demand image"
                                    className="w-full transition-transform duration-300 group-hover:scale-105 ease group-hover:-rotate-2"
                                />

                                {/* title */}
                                <h3 className="absolute bottom-0 left-0 px-4 py-2 text-xl font-semibold leading-8 text-white">{item.title}</h3>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}