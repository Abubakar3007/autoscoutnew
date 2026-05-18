"use client";
import { useState, useRef, useEffect } from "react";
import GalleryPopup from "./GalleryPopup";
import Image from "next/image";

export default function Gallery({ carImage, title }) {

  const [activeImage, setActiveImage] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const scrollRef = useRef();

  return (
    <>
      <div className="flex gap-6 mb-10 gallery" data-box="gallery">
        {/* ========== Big Image ========== */}
        <div
          onClick={() => setIsPopupOpen(true)}
          className="relative w-full cursor-pointer max-w-[636px]"
          id="gallery-box"
        >
          <div className="w-full overflow-hidden rounded-md h-[470px]">
            <Image
              src={carImage[activeImage]}
              alt="Car image"
              loading="lazy"
              className="object-cover w-full h-full"
              height={100}
              width={100}
            />
          </div>

          {/* image counter */}
          <div className="absolute flex items-center gap-2 px-2 py-1 text-sm font-semibold text-center text-white rounded-md min-w-20 bg-black/40 bottom-3 right-3">
            <Image src="/icons/gallery-icon.svg" alt="landscape" width={24} height={24} />
            <span>
              {activeImage + 1} / {carImage.length}
            </span>
          </div>
        </div>

        {/* ========== Thumbnails ========== */}
        <div className="flex flex-col w-full gap-2 max-w-[100px]" data-slider="small_slider">
          {/* Up Button */}
          <button
            onClick={() => setActiveImage((prev) => {
              const prevIndex = Math.max(prev - 1, 0);
              scrollRef.current.scrollBy({
                top: -100,
                behavior: "smooth"
              })
              return prevIndex;
            })}
            disabled={activeImage === 0}
            className="w-full h-8 bg-gray-100 rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Image
              src="/icons/chevron-right-blue.svg"
              alt="prev button"
              className="mx-auto -rotate-90"
              width={24}
              height={24}
            />
          </button>

          {/* Thumbnail List */}
          <ul
            ref={scrollRef}
            className="small-images overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 
          h-[394px] space-y-2 [&>li>img]:w-full [&>li]:cursor-pointer 
          [&>li]:h-[100px] [&>li]:rounded-md [&>li]:overflow-hidden 
          [&>li>img]:h-full [&>li]:border-2 [&>li>img]:object-cover"
          >
            {carImage.map((image, index) => (
              <li
                key={index}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 ${activeImage === index ? "border-blue-500" : "border-transparent"
                  }`}
              >
                <Image src={image} alt="Car image" width={40} height={40} />
              </li>
            ))}
          </ul>

          {/* Down Button */}
          <button
            onClick={() => setActiveImage((prev) => {
              const nextIndex = Math.min(prev + 1, carImage.length - 1);
              scrollRef.current?.scrollBy({
                top: 100,
                behavior: "smooth"
              });

              return nextIndex;
            })}
            disabled={activeImage === carImage.length - 1}
            className="w-full h-8 bg-gray-100 rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Image
              src="/icons/chevron-right-blue.svg"
              alt="next button"
              className="mx-auto rotate-90"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>

      {/* ✅ Popup */}
      {isPopupOpen && (
        <GalleryPopup
          title={title}
          images={carImage}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}
