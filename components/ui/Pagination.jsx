"use client";
import { useState } from "react"

export default function Pagination({ pagePrev, setPagePrev, pagePerItem, totalCars, className = "" }) {

    const totalPages = Math.ceil(totalCars / pagePerItem)

    return (
        <div className={className}>
            <div className="flex items-center justify-center gap-10 mt-10 pagination">
                {/* previous page link */}
                <button
                    className="cursor-pointer"
                    title="Go to previous page"
                    disabled={pagePrev === 0}
                    onClick={() => setPagePrev((prev) => Math.max(prev - 1, 0))}
                >
                    <img
                        src="/icons/prev-link.svg"
                        alt="Prev link"
                    />
                </button>

                {/* pagination numbers */}
                <ul className="px-5 py-2 rounded-3xl bg-neutral-100 [&>li]:inline-block [&>li>button]:w-10 [&>li>button]:h-10 [&>li>button]:grid [&>li>button]:place-items-center [&>li>button]:rounded-lg">
                    <li>
                        <button onClick={() => setPagePrev(pagePrev)} className="bg-blue-500 text-white cursor-pointer">
                            {pagePrev + 1}
                        </button>
                    </li>
                    {
                        pagePrev + 1 < totalPages && (
                            <li>
                                <button onClick={() => setPagePrev(pagePrev + 1)} className="text-gray-500 cursor-pointer">
                                    {pagePrev + 2}
                                </button>
                            </li>
                        )
                    }
                </ul>

                {/* next page link */}
                <button
                    className="cursor-pointer"
                    title="Go to next page"
                    disable={pagePrev === totalPages - 1}
                    onClick={() => setPagePrev((prev) => Math.min(prev + 1, totalPages - 1))}
                >
                    <img
                        src="/icons/next-link.svg"
                        alt="Next link"
                    />
                </button>
            </div>
        </div>
    )
}