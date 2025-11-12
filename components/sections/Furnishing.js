"use client"
import { useState } from "react";
import Heading from "../ui/Heading";

export default function Furnishing({ heading, dataId, items }) {

    const [showMore,setShowMore] = useState(false);

    return (
        <div className="p-6 rounded-md box bg-white shadow-box-shadow" data-box={dataId}>
            <Heading as="h3" className="text-xl w-fit pb-2 border-b border-blue-500 mb-6 font-semibold">{heading}</Heading>
            {/* list */}
            <ul className={`flex furnishing-list flex-wrap gap-2 overflow-hidden transition-all duration-300 ${showMore?'max-h-full':'max-h-[100px]'} ease text-base font-medium [&>li]:leading-6 [&>li]:after:content-['|'] [&>li]:after:ml-2`}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* show more button */}
            <div className="mt-4 text-center">
                <button 
                    id="furnishing-show"
                    className="text-sm font-semibold text-blue-500 cursor-pointer"
                    onClick={() => setShowMore(!showMore)}
                >
                    <span>{showMore?'Show less':'Show more'}</span>
                    <img
                        src="/icons/chevron-left-blue.svg"
                        alt="dropdown"
                        className={`inline-block ml-1 transition-all duration-300 ease-in-out ${showMore ? 'rotate-90':'-rotate-90'}`}
                    />
                </button>
            </div>
        </div>
    )
}