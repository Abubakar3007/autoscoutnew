"use client";
import Image from "next/image";
import { useRef } from "react";
export default function GalleryPopup({ title, images, activeImage, setActiveImage, onClose }) {
    const imagesRef = useRef();
    return (
        <div className="popups">
            <div className="grid w-full h-full place-items-center">
                <div className="relative p-4 pt-10 rounded-md bg-gray-50 shadow-box-shadow wrapper">

                    {/* close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 cursor-pointer"
                    >
                        <Image
                            src="/icons/close-btn.svg"
                            alt="close icon"
                            width={20}
                            height={20}
                        />
                    </button>

                    {/* big image & title container */}
                    <div>
                        <h3 className="mb-6 font-semibold text-center text-xxl">{title}</h3>

                        {/* big image container */}
                        <div className="relative w-full h-gallery-height">
                            <button
                                onClick={() => setActiveImage((prev) => {
                                    let prevImage = Math.max(prev - 1, 0);
                                    imagesRef.current.scrollBy({
                                        left: -100,
                                        behavior: "smooth"
                                    });
                                    return prevImage;
                                })}
                                className="absolute left-0 w-12 h-12 -translate-y-1/2 rounded-sm top-1/2 shadow-card-shadow cursor-pointer"
                            >
                                <Image
                                    src="/icons/chevron-left-blue.svg"
                                    alt="prev button"
                                    width={20}
                                    height={20}
                                />
                            </button>

                            {/* big image */}
                            <div className="w-full h-full overflow-hidden rounded-md">
                                <Image
                                    src={images[activeImage]}
                                    alt="Car image"
                                    loading="lazy"
                                    className="mx-auto rounded-md h-[400px] object-cover"
                                    width={600}
                                    height={400}
                                />
                            </div>

                            {/* next button */}
                            <button
                                onClick={() => setActiveImage((prev) => {
                                    let nextImage = Math.min(prev + 1, images.length - 1);
                                    imagesRef.current.scrollBy({
                                        left: 100,
                                        behavior: "smooth"
                                    });
                                    return nextImage
                                })}
                                className="absolute right-0 w-12 h-12 -translate-y-1/2 top-1/2 shadow-card-shadow cursor-pointer">
                                <img
                                    src="/icons/chevron-right-blue.svg"
                                    alt="next button"
                                    className="mx-auto"
                                />
                            </button>
                        </div>

                        {/* total image number of images */}
                        <div className="mt-6 text-lg font-semibold text-center text-blue-500">{activeImage + 1} / {images.length}</div>
                    </div>

                    {/* small images */}
                    <ul
                        ref={imagesRef}
                        className="flex gap-2 overflow-x-scroll [&>li]:flex-shrink-0 no-scroll mt-6 [&>li]:rounded-md [&>li]:overflow-hidden [&>li]:cursor-pointer [&>li]:border-2 [&>li>img]:object-cover">
                        {
                            images.map((image, index) => (
                                <li key={index} onClick={() => setActiveImage(index)} className={`transition-all duration-300 ${activeImage === index ? "border-blue-500" : "border-transparent"}`}>
                                    <Image
                                        src={image}
                                        alt="Car image"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        className="h-20"
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}