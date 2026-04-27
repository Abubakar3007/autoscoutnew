import Link from "next/link";

export default function SavedSearchCar({ setIsPopup }) {

    const searchData = [
        { title: "Make/Model", value: "Volkswagen" },
        { title: "Country", value: "Austria" },
        { title: "Body shape", value: "Small car" },
        { title: "Exterior color", value: "Black" },
        { title: "Initial registration", value: "From 1994 to 2015" },
        { title: "Country", value: "Austria" },
    ]

    return (
        <div className="p-5 rounded-md sm:p-6 bg-white shadow-box-shadow box">

            {/* title and delete button */}
            <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-xl font-semibold leading-8 line-clamp-1 text-ellipsis">
                    <Link
                        href="listing.html"
                        title="Go to search result"
                        className="hover:text-blue-500">
                        Volkswagen
                    </Link>
                </h3>

                {/* delete button */}
                <button
                    aria-label="Delete saved search button"
                    title="Delete save search"
                    onClick={() => { setIsPopup(true) }}
                    className="flex-shrink-0 text-sm font-semibold text-[#E53835] cursor-pointer">
                    <img
                        src="/icons/trash-btn.svg"
                        alt="Delete button"
                        className="inline-block w-5 mr-1"
                    />
                    <span className="align-middle">Delete</span>
                </button>
            </div>

            {/* Notification */}
            <div className="relative flex items-center gap-4 mb-6">
                <label
                    for="notify"
                    className="text-base leading-6 text-gray-500 cursor-pointer">
                    Receive new offers by email
                </label>

                <input
                    type="checkbox"
                    id="notify"
                    className="w-12 cursor-pointer h-6 appearance-none bg-neutral-400 rounded-3xl before:content-[''] before:w-4 before:h-4 before:rounded-full before:inline-block before:bg-gray-50 before:shadow-box-shadow before:transition-transform before:ease-in-out before:duration-200 before:relative before:left-[5px] before:top-[3px] checked:bg-blue-500 checked:before:translate-x-6"
                />
            </div>

            {/* Save search list */}
            <ul className="grid gap-x-6 gap-y-4 [&>li]:flex [&>li>span]:flex-1 [&>li>strong]:flex-1 [&>li>strong]:font-medium [&>li]:gap-2 [&>li>span]:text-gray-500 sm:grid-cols-2">
                {
                    searchData.map((item, index) => (
                        <li key={index}>
                            <span>{item.title}</span>
                            <strong>{item.value}</strong>
                        </li>
                    ))
                }
            </ul>

            {/* Save search date */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-neutral-400">
                <p className="text-gray-500">Saved on <strong> October 21, 2023</strong></p>
                <Link
                    href="/listing"
                    title="Go to search result"
                    className="flex-shrink-0 sm:px-6 primary-btn-sm">
                    View result
                </Link>
            </div>
        </div>
    )
}