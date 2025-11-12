import Link from "next/link";

export default function DealerCard() {
    return (
        <div className="flex flex-col gap-5 p-4 rounded-md box shadow-box-shadow bg-white sm:flex-row">
            {/* dealer image */}
            <a 
                href="dealer-details"
                title="CT Cartrade Handels"
                target="_blank"
                className="w-full sm:grid max-w-[200px] sm:place-items-center"
            >
                <img
                    src="/images/dealer-image.png"
                    alt="Dealer image"
                    loading="lazy"
                    className="sm:m-auto"
                />
            </a>
            {/* card content */}
            <div className="w-full">
                {/*  title */}
                <h3 className="text-xl font-semibold leading-8">
                    <Link href="" className="hover:text-blue-500">CT Cartrade Handels</Link>
                </h3>
                {/*  Reviews */}
                <div className="flex gap-2">
                    {/*  stars */}
                    <div className="flex gap-1">
                        <span className="inline-block w-4 h-4 bg-no-repeat bg-cover fill-star star"></span>
                        <span className="inline-block w-4 h-4 bg-no-repeat bg-cover fill-star star"></span>
                        <span className="inline-block w-4 h-4 bg-no-repeat bg-cover fill-star star"></span>
                        <span className="inline-block w-4 h-4 bg-no-repeat bg-cover fill-star star"></span>
                        <span className="inline-block w-4 h-4 bg-no-repeat bg-cover fill-star star"></span>
                    </div>
                    <a href="" className="text-sm text-blue-500">100 reviews</a>
                </div>
                {/* location */}
                <p className="text-sm text-gray-500 line-clamp-1 text-ellipsis">
                    <img
                        src="/icons/location.svg"
                        alt="Location icon"
                        className="inline-block mr-2"
                    />
                    Industrial Park Mitterbreiten 2, 9812 Pusarnitz, AT
                </p>
                {/* buttons */}
                <div className="flex justify-end gap-2 mt-8 sm:gap-4">
                    <a href="" className="text-center sm:w-full secondary-btn-sm sm:max-w-[150px] !leading-[34px]">About dealer</a>
                    <a href="" className="text-center sm:w-full primary-btn-sm sm:max-w-[150px]">View vehicles</a>
                </div>
            </div>
        </div>
    )
}