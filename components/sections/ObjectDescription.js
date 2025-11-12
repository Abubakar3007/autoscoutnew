"use client"
import { useState } from "react";
import Heading from "../ui/Heading";

export default function ObjectDescription({ heading, dataId, text }) {
    const [showMore,setShowMore] = useState(false);
    
    return (
        <div className="p-6 rounded-md box bg-white shadow-box-shadow" data-box={dataId}>
            <Heading as="h3" className="text-xl w-fit pb-2 border-b border-blue-500 mb-6 font-semibold">{heading}</Heading>

            <p className={`text-base font-medium leading-6 whitespace-pre-line ${showMore ? 'line-clamp-none' : 'line-clamp-5'} text-ellipsis`}>{text}</p>

            {/* show more button */}
            <div className="mt-4 text-center">
                <button
                    aria-label="Show more button"
                    className="text-sm font-semibold text-blue-500 cursor-pointer"
                    onClick={()=>setShowMore(!showMore)}
                >
                    <span>{showMore ? 'Show less' : 'Show more'}</span>
                    <img
                        src="/icons/chevron-left-blue.svg"
                        alt="dropdown"
                        className={`inline-block ml-1 transition-all duration-300 ease-in-out ${showMore ? 'rotate-90' : '-rotate-90'}`}
                    />
                </button>
            </div>
        </div>
    )
}