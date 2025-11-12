import StarWrapper from "./StarWrapper";

export default function VerticalCard() {
    return (
        <div className="relative rounded-md sm:p-4 card shadow-box-shadow bg-white group">
            <div className="flex flex-col sm:gap-4 sm:flex-row">

                {/* car image */}
                <div className="relative w-full overflow-hidden sm:max-w-[250px]">

                    <a href="details.html" title="Lamborghini Murciélago LP640 E-Ge..." target="_blank" className="block w-full">
                        <img
                            src="/images/car-image1.jpeg"
                            alt="object image"
                            className="object-cover w-full sm:rounded-md rounded-t-md sm:h-[222px]"
                        />

                        {/* total image number */}
                        <div className="absolute flex items-center gap-2 px-2 py-1 text-sm text-white rounded-md sm:top-auto sm:left-auto top-3 left-3 sm:bottom-2 sm:right-2 bg-black/40">
                            <img
                                src="/icons/gallery-icon.svg"
                                alt="landscape"
                            />
                            <span>12</span>
                        </div>
                    </a>

                    {/* share & favorite button */}
                    <div className="absolute flex gap-2 duration-300 ease-in-out sm:flex-col sm:gap-4 top-3 right-3 sm:-translate-y-1/2 sm:-right-14 sm:top-1/2 trnasition-all sm:group-hover:right-2">

                        <button className="grid w-8 h-8 bg-white rounded-full place-items-center cursor-pointer">
                            {/*  when not add favorite then show this */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.0012 3.77415C11.9587 2.01665 14.9837 2.07498 16.8695 3.96415C18.7545 5.85415 18.8195 8.86415 17.0662 10.8275L9.9995 17.9042L2.9345 10.8275C1.18116 8.86415 1.247 5.84915 3.13116 3.96415C5.01866 2.07748 8.03783 2.01415 10.0012 3.77415ZM15.6895 5.14165C14.4395 3.88998 12.4228 3.83915 11.1145 5.01415L10.002 6.01248L8.88866 5.01498C7.57616 3.83832 5.56366 3.88998 4.31033 5.14332C3.06866 6.38498 3.00616 8.37248 4.15033 9.68582L10.0003 15.545L15.8503 9.68665C16.9953 8.37248 16.9328 6.38748 15.6895 5.14165Z" fill="#347DFF"></path>
                            </svg>
                            {/* otherwise show this */}
                            {/* <img src="/assets/images/heart-blue.svg" alt="heart icon"> */}
                        </button>

                        {/* share button */}
                        <button className="grid w-8 h-8 bg-white rounded-full place-items-center cursor-pointer">
                            <img src="/icons/share.svg" alt="share" />
                        </button>
                    </div>
                </div>

                {/* car content */}
                <div className="w-full p-4 sm:p-0">

                    {/* title */}
                    <h3 className="text-xl font-semibold leading-8 line-clamp-1 text-ellipsis">
                        <a href="details.html" title="Lamborghini Murcielago LP640 E-Ge" className="hover:text-blue-500">Lamborghini Murciélago <span className="text-base text-gray-500">LP640 E-Ge...</span></a>
                    </h3>
                    <p className="mb-4 text-sm font-medium leading-6 text-gray-500 line-clamp-1 text-ellipsis">Lane departure warning, cruise control, USB, pas</p>

                    {/* properties */}
                    <ul className="grid grid-cols-2 mb-4 gap-4 text-sm font-medium [&>li]:pl-8 [&>li]:bg-left [&>li]:bg-no-repeat [&>li]:whitespace-nowrap [&>li]:overflow-hidden [&>li]:text-ellipsis">
                        <li className="km">13, 500 km</li>
                        <li className="auto">Automatic box</li>
                        <li className="date">01/2014</li>
                        <li className="oil">Petrol</li>
                        <li className="hp">386 KW (525 HP)</li>
                        <li className="user">Private</li>
                    </ul>

                    {/* price */}
                    <div className="text-xl font-bold leading-8 text-blue-500">€123,456</div>
                </div>
            </div>

            {/* dealer info */}
            <div className="flex items-center justify-between p-4 border-t sm:pt-4 sm:pb-0 sm:px-0 sm:mt-4 border-neutral-400">
                <div className="flex items-center gap-2">

                    {/* dealer image */}
                    <a href="dealer.html" title="CT Cartrade Handels" className="block">
                        <img
                            src="/images/dealer-image.png"
                            alt="dealer img"
                            className="object-cover rounded-md w-[55px] h-[42px]"
                        />
                    </a>

                    <div>
                        <h5 className="text-sm font-medium">
                            <a href="">CT Cartrade Handels</a>
                        </h5>

                        {/* reviews */}
                        <div className="flex items-center gap-1">
                            <StarWrapper />
                            <span className="text-xs">(100) Reviews</span>
                        </div>
                    </div>
                </div>

                {/* show more */}
                <a href="" className="hidden text-xs font-medium text-blue-500 sm:block">
                    <img
                        src="/icons/show-more.svg"
                        alt="Show more"
                        className="inline-block mr-1"
                    />
                    Show more vehicles
                </a>
            </div>
        </div>
    )
}