export default function ListSearchBox() {
    return (
        <div className="flex items-center gap-2 p-3 mb-2 lg:p-6 lg:block lg:rounded-md box shadow-box-shadow bg-white">

            {/*  my search header */}

            <div className="items-center justify-between hidden pb-3 mb-5 text-base font-semibold border-b lg:flex border-neutral-400">
                <h4 className="leading-6">My search <span>(0)</span></h4>

                {/* clear search button */}
                <button 
                    className="text-blue-500 cursor-pointer">
                    <img
                        src="/icons/search-remove.svg"
                        alt="Remove search"
                        className="inline-block mr-2"
                    />
                    <span className="align-middle">Clear all</span>
                </button>
            </div>

            {/* responsive filter button */}
            <button
                className="flex items-center flex-shrink-0 w-full p-2 text-sm text-white bg-blue-500 rounded-md h-max lg:hidden max-w-106 gap-1.5"
                onclick="openPopup('filter_popup')"
            >
                <img
                    src="/icons/filter-icon.svg"
                    alt="filter icon"
                />
                <span>Filter</span>
                <span className="inline-block w-5 font-semibold leading-5 text-gray-500 align-middle bg-white rounded-full search-num text-10">22</span>
            </button>

            {/* when user search or select anything add here inside this list */}
            <ul
                data-filter="more_filter"
                className="flex lg:flex-wrap gap-1 lg:gap-3 overflow-scroll lg:overflow-hidden lg:max-h-90 [&>li>.del]:bg-[url('/icons/close-btn.svg')] [&>li>.del]:w-3 [&>li>.del]:h-3 [&>li]:whitespace-nowrap [&>li]:rounded-md [&>li&>.del]:inline-block [&>li>.del]:bg-cover [&>li>span]:align-middle [&>li>.del]:mr-1 [&>li>.del]:cursor-pointer [&>li]:bg-gray-100 [&>li]:py-1.5 [&>li]:px-4 text-sm [&>li]:h-max"
            >
                <li>
                    <span className="del"></span>
                    <span>Audi</span>
                </li>
            </ul>

            {/* when user click this button hen show all filter list */}
            <button
                className="hidden mx-auto mt-3 text-base font-semibold text-blue-500 lg:block w-fit cursor-pointer"
            >
                View all
            </button>
        </div>
    )
}