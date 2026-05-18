import Image from "next/image";
export default function ObjectHeading({ ...props }) {
    return (
        <div className="top-0 z-50 py-6 mb-10 rounded-md box bg-gray-50 shadow-box-shadow">
            {/* heading & price */}
            <div className="flex items-center justify-between gap-6 pb-4 mb-4 border-b border-neutral-400">
                <h1 className="font-semibold text-[28px]">{props.title}</h1>
                {/* price */}
                <div className="font-bold text-blue-500 text-[28px]">{props.price}</div>
            </div>
            {/*  location , favorite & share buttons */}
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <img src="/icons/location.svg" alt="location" />
                    <h4 className="text-lg font-semibold text-gray-500">{props.location}</h4>
                </div>
                {/* heart & share */}
                <div className="gap-4 flex [&>button]:w-8 [&>button]:h-8 [&>button]:border [&>button]:border-neutral-400 [&>button]:rounded-full [&>button]:grid [&>button]:place-items-center">
                    {/* heart */}
                    <button
                        className='cursor-pointer'
                        title="Add to favorite car"
                        onClick={props.handleAddToCart}
                    >
                        {
                            props.findCars ? (
                                <Image src="/icons/fill-heart.svg" alt="heart icon" width={24} height={24} />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.0012 3.77415C11.9587 2.01665 14.9837 2.07498 16.8695 3.96415C18.7545 5.85415 18.8195 8.86415 17.0662 10.8275L9.9995 17.9042L2.9345 10.8275C1.18116 8.86415 1.247 5.84915 3.13116 3.96415C5.01866 2.07748 8.03783 2.01415 10.0012 3.77415ZM15.6895 5.14165C14.4395 3.88998 12.4228 3.83915 11.1145 5.01415L10.002 6.01248L8.88866 5.01498C7.57616 3.83832 5.56366 3.88998 4.31033 5.14332C3.06866 6.38498 3.00616 8.37248 4.15033 9.68582L10.0003 15.545L15.8503 9.68665C16.9953 8.37248 16.9328 6.38748 15.6895 5.14165Z" fill="#347DFF"></path>
                                </svg>
                            )
                        }
                    </button>
                    {/* share */}
                    <button id="share-btn" className="cursor-pointer" title="Share this car">
                        <img src="/icons/share-black.svg" alt="share" />
                    </button>
                </div>
            </div>
        </div>
    )
}
