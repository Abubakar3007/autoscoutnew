export default function ObjectHeading(){
    return(
    <div className="top-0 z-50 p-6 mb-10 rounded-md box bg-gray-50 shadow-box-shadow">
        {/* heading & price */}
        <div className="flex items-center justify-between gap-6 pb-4 mb-4 border-b border-neutral-400">
            <h1 className="font-semibold text-[28px]">Porsche 911 <span className="text-xl text-gray-500">Carrera S Cabrio </span></h1>
            {/* price */}
            <div className="font-bold text-blue-500 text-[28px]">€379,00</div>
        </div>
        {/*  location , favorite & share buttons */}
        <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
                <img src="/icons/location.svg" alt="location" />
                <h4 className="text-lg font-semibold text-gray-500">Ludres,FR</h4>
            </div>
            {/* heart & share */}
            <div className="gap-4 flex [&>button]:w-8 [&>button]:h-8 [&>button]:border [&>button]:border-neutral-400 [&>button]:rounded-full [&>button]:grid [&>button]:place-items-center">
                {/* heart */}
                <button className='cursor-pointer' title="Add to favorite car">
                    <img src="/icons/favorite-black.svg" alt="heart" />
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
