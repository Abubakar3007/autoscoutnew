import Link from "next/link";

export default function MyAdsCard() {
    <div
        className="relative flex flex-col rounded-md sm:gap-4 sm:p-4 bg-gray-50 shadow-box-shadow sm:flex-row"
        data-card="car-card-2"
    >

        {/*  my ads delete and edit box */}
        <div className="absolute z-10 sm:right-2 sm:top-2 top-3 right-3">

            {/* more info button */}
            <button
                aria-label="More info car"
                className="px-2 py-2 bg-white rounded-full sm:bg-transparent sm:py-0 sm:rounded-none info-btn"
            >
                <img
                    src="assets/images/info-btn.svg"
                    alt="Info btn"
                />
            </button>

            <div className="absolute right-0 invisible overflow-hidden transition-all duration-300 ease-in-out rounded-md opacity-0 info-box w-216 bg-gray-50 shadow-box-shadow" data-dropdown="object_info">

                {/* edit button */}
                <Link
                    href=""
                    className="block w-full px-4 py-3 text-blue-500">
                    <img src="/assets/images/edit-pencil-blue.svg" alt="Edit" className="inline-block mr-5" />
                    Edit
                </Link>

                {/* delete button */}
                <button
                    aria-label="Delete car"
                    className="block w-full px-4 py-3 text-left text-red-color"
                >
                    <img
                        src="/assets/images/trash-btn.svg"
                        alt="Delete"
                        className="inline-block mr-5" />
                    Delete
                </button>

                {/* ad active or inactive */}
                {/* if ad active then add here active class */}
                <button
                    aria-label="Ad inactive button"
                    className="status-btn py-3 pr-4 w-full text-left active relative pl-16 before:content-[''] before:w-9 before:h-5 before:rounded-3xl before:top-14 before:left-4 before:bg-neutral-400 before:absolute after:w-3 after:h-3 after:absolute after:left-5 after:top-18 after:rounded-full after:bg-white"
                >
                    Ad inactive
                </button>
            </div>
        </div>

        {/* Car image*/}
        <div className="relative w-full overflow-hidden sm:max-w-324">

            {/* Car image link */}
            <Link
                href="details.html"
                title="Lamborghini Murciélago LP640 E-Ge..."
                target="_blank"
                className="block w-full h-full"
            >

                {/* Car slider images */}
                <div
                    className="relative flex mx-auto transition-transform duration-300 ease-in-out sm:rounded-md sm:h-235 h-250 slide-container"
                    style="transform: translateX(0px);"
                >
                    <img
                        src="assets/images/car-image1.jpeg"
                        alt="object image"
                        className="object-cover w-full h-full sm:rounded-md rounded-t-md"
                    />
                </div>

                {/* total image number */}
                <div className="absolute flex items-center gap-1 px-2 py-1 text-sm text-white rounded-md total-image-count sm:top-auto sm:left-auto top-3 left-3 sm:bottom-2 sm:right-2 bg-black/40">
                    <img src="assets/images/gallery-icon.svg" alt="landscape" />
                    <span>
                        <span className="initial-image">1</span> / <span className="total-image">4</span>
                    </span>
                </div>
            </Link>

            {/* Slider left btn */}
            <button className="absolute -translate-y-1/2 top-1/2 sm:left-2 left-3 card-slide-left">
                <img src="assets/images/slider-left.svg" alt="left" />
            </button>

            {/* Slider right btn */}
            <button className="absolute -translate-y-1/2 top-1/2 sm:right-2 right-3 card-slide-right">
                <img src="assets/images//slider-right.svg" alt="right" />
            </button>
        </div>

        {/* Car content */}
        <div className="w-full">
            <Link
                href="details.html"
                title="Lamborghini Murciélago LP640 E-Ge..."
                target="_blank"
                className="block w-full p-4 group sm:p-0"
            >

                {/* title and description */}
                <h3 className="pr-12 mb-1 text-xl font-semibold leading-8 line-clamp-1 text-ellipsis group-hover:text-blue-500">Lamborghini Murciélago <span className="text-base text-gray-500 group-hover:text-blue-500">LP640 E-Ge...</span></h3>
                <p className="mb-4 text-sm font-medium leading-6 text-gray-500 line-clamp-1 text-ellipsis">Lane departure warning, cruise control, USB, pas</p>

                {/* properties */}
                <ul className="grid grid-cols-2 mb-4 gap-4 text-sm font-medium [&amp;&gt;li]:pl-8 [&amp;&gt;li]:bg-left [&amp;&gt;li]:bg-no-repeat [&amp;&gt;li]:whitespace-nowrap [&amp;&gt;li]:overflow-hidden [&amp;&gt;li]:text-ellipsis">
                    <li className="km">13, 500 km</li>
                    <li className="auto">Automatic box</li>
                    <li className="date">01/2014</li>
                    <li className="oil">Petrol</li>
                    <li className="hp">386 KW (525 HP)</li>
                    <li className="user">Private</li>
                </ul>

                {/* price */}
                <div className="text-xl font-bold leading-8 text-blue-500">€123,456</div>
            </Link>
        </div>
    </div>
}