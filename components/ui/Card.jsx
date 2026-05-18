"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../../store/useCartStore";

export default function Card({ className, car }) {
    if (!car) return null;

    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const items = useCartStore((item) => item.items);

    const findItems = items.find((item) => item.id === car.id)

    const handleAddToCart = () => {
        if (findItems) {
            removeFromCart(car.id)
        } else {
            addToCart(car)
        }
    }

    return (
        <div className={`overflow-hidden transition-all ease-in-out rounded-md card duration-400 bg-white shadow-card-shadow group ${className}`}>
            {/* car images */}
            <div className="relative overflow-hidden sm:h-[257px] min-h-[220px]">
                <Link href={`/object-details/${car.id}`} className="block h-full" title="Audi A4 Avant 2.0TDI QUATTRO SPORT">
                    <Image
                        src={car?.images[0]}
                        alt="Car image"
                        className="object-cover w-full h-full"
                        width={100}
                        height={100}
                    />
                </Link>

                {/* favorite button */}
                <button
                    aria-label="Add to favorites"
                    title="Add to favorite"
                    onClick={() => handleAddToCart()}
                    className="absolute grid w-8 h-8 transition-all duration-300 ease-in-out rounded-full cursor-pointer lg:translate-y-20 lg:group-hover:translate-y-0 heart right-4 lg:bottom-4 place-items-center bg-neutral-50 lg:top-auto top-4"
                >
                    {/* when not add favorite then show this */}
                    {
                        findItems ? (
                            <Image src="/icons/fill-heart.svg" alt="favorite" width={20} height={20} />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.0012 3.77415C11.9587 2.01665 14.9837 2.07498 16.8695 3.96415C18.7545 5.85415 18.8195 8.86415 17.0662 10.8275L9.9995 17.9042L2.9345 10.8275C1.18116 8.86415 1.247 5.84915 3.13116 3.96415C5.01866 2.07748 8.03783 2.01415 10.0012 3.77415ZM15.6895 5.14165C14.4395 3.88998 12.4228 3.83915 11.1145 5.01415L10.002 6.01248L8.88866 5.01498C7.57616 3.83832 5.56366 3.88998 4.31033 5.14332C3.06866 6.38498 3.00616 8.37248 4.15033 9.68582L10.0003 15.545L15.8503 9.68665C16.9953 8.37248 16.9328 6.38748 15.6895 5.14165Z" fill="#347DFF"></path>
                            </svg>
                        )
                    }
                </button>
            </div>

            {/* car content */}
            <div className="p-4">
                {/* title */}
                <h3 className="mb-2 text-xl font-semibold leading-8 line-clamp-1">
                    <Link href=''>
                        {car.title}
                    </Link>
                </h3>

                {/* features */}
                <ul className="mb-2 line-clamp-1 text-ellipsis [&>li]:inline-block text-sm space-x-1">
                    <li>{car.registration} |</li>
                    <li>{car.fuel_type} |</li>
                    <li>{car.kms_driven} |</li>
                    <li>{car.transmission} |</li>
                    <li className="font-semibold text-blue-500 cursor-pointer">More</li>
                </ul>

                {/* location */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <img src="/icons/location.svg" alt="location icon" />
                    <span>{car.location || "On site"}</span>
                </div>

                {/* price */}
                <div className="flex items-center justify-between mt-4">
                    <div className="text-xl font-bold leading-8 text-blue-500 textl-xl">{car.price}</div>
                    <span className="px-2 py-1 text-sm text-gray-500 bg-neutral-100">{car.ownership}</span>
                </div>
            </div>
        </div >
    )
}