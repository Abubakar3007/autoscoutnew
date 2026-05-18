import Image from "next/image";
import Link from "next/link";

export default function FavoriteCard({ setIsOpen, setIsPopup, car, onClick }) {

    return (
        <div className="relative rounded-md sm:p-4 card shadow-box-shadow bg-white" data-card="favorite-card">

            {/* car top */}
            <div className="flex flex-col sm:gap-4 sm:flex-row">

                {/* car image */}
                <div className="relative w-full overflow-hidden sm:max-w-[250px]">
                    <Link
                        href={`/object-details/${car.id}`}
                        title={car.title}
                        target="_blank"
                        className="block w-full">
                        <Image
                            src={car.images[0]}
                            alt="object image"
                            className="object-cover w-full sm:rounded-md rounded-t-md sm:h-[222px]"
                            width={400}
                            height={222}
                        />

                        {/* total image number */}
                        <div className="absolute flex items-center gap-2 px-2 py-1 text-sm text-white rounded-md sm:top-auto sm:left-auto top-3 left-3 sm:bottom-2 sm:right-2 bg-black/40">
                            <Image
                                src="/icons/gallery-icon.svg"
                                alt="landscape"
                                width={16}
                                height={16}
                            />
                            <span>{car.total_images}</span>
                        </div>
                    </Link>
                </div>

                {/* car content */}
                <div className="w-full p-4 sm:p-0">

                    <Link href={`/object-details/${car.id}`} title={car.title} className="group">

                        {/* title */}
                        <h3 className="text-xl font-semibold leading-8 line-clamp-1 text-ellipsis group-hover:text-blue-500">{car.title}</h3>
                        <p className="mb-4 text-sm font-medium leading-6 text-gray-500 line-clamp-1 text-ellipsis">
                            {
                                car.top_features.map((item, index) => (
                                    <span key={index}>
                                        {item}
                                        {index !== car.top_features.length - 1 && ", "}
                                    </span>
                                ))
                            }
                        </p>

                        {/* properties */}
                        <ul className="grid grid-cols-2 mb-4 gap-4 text-sm font-medium [&>li]:pl-8 [&>li]:bg-left [&>li]:bg-no-repeat [&>li]:whitespace-nowrap [&>li]:overflow-hidden [&>li]:text-ellipsis">
                            <li className="km">{car.mileage}</li>
                            <li className="auto">{car.transmission}</li>
                            <li className="date">{car.registration}</li>
                            <li className="oil">{car.fuel_type}</li>
                            <li className="hp">{car.power}</li>
                            <li className="user">{car.ownership}</li>
                        </ul>

                        {/* price */}
                        <div className="text-xl font-bold leading-8 text-blue-500">€123,456</div>
                    </Link>
                </div>

                {/* favorite button */}
                <button
                    aria-label="Add to favorite"
                    className="absolute grid w-8 h-8 bg-white cursor-pointer rounded-full place-items-center right-3 top-3"
                >
                    <Image
                        src="/icons/fill-heart.svg"
                        alt="Fill heart"
                        width={16}
                        height={16}
                    />
                </button>
            </div>

            {/* View similar vehicles */}
            <div className="flex items-center justify-between px-4 pt-4 pb-4 mt-4 border-t sm:pb-0 sm:px-0 border-neutral-400">

                {/* Similar left wrapper */}
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* similar cars links here */}
                    <ul className="relative min-w-[116px] min-h-11 [&>li]:absolute [&>li]:top-0 [&>li:nth-child(1)]:z-10 [&>li:nth-child(2)]:left-[22px] [&>li:nth-child(2)]:z-9 [&>li:nth-child(3)]:left-[44px] [&>li:nth-child(3)]:z-8 [&>li:nth-child(4)]:left-[66px] [&>li:nth-child(4)]:z-7">
                        <li>
                            <img src="/images/similar-car1.png" alt="Car image" loading="lazy" />
                        </li>
                        <li>
                            <img src="/images/similar-car2.png" alt="Car image" loading="lazy" />
                        </li>
                        <li>
                            <img src="/images/similar-car3.png" alt="Car image" loading="lazy" />
                        </li>
                        <li>
                            <img src="/images/similar-car4.png" alt="Car image" loading="lazy" />
                        </li>
                    </ul>
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="View similar vehicles button"
                        className="text-sm cursor-pointer font-semibold text-left text-blue-500 view-similar-vehicles">
                        View similar vehicles
                        <img
                            src="/icons/chevron-right-blue.svg"
                            alt="View more"
                            className="inline-block ml-2"
                        />
                    </button>
                </div>

                {/* Delete button */}
                <button
                    aria-label="Remove from favorite"
                    title="Remove from favorite"
                    onClick={() => onClick(car.id)}
                    className="text-sm font-semibold text-[#E53835] cursor-pointer">
                    <img
                        src="/icons/trash-btn.svg"
                        alt="Delete icon"
                        className="inline-block w-5 mr-1"
                    />
                    <span className="align-middle">Delete</span>
                </button>
            </div>
        </div>
    )
}