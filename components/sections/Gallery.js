"use client";
import { useState, useRef } from "react";
import GalleryPopup from "./GalleryPopup";

export default function Gallery() {
  const images = [
    "/images/cars/car-image1.jpeg",
    "/images/cars/car-image2.jpeg",
    "/images/cars/car-image3.jpeg",
    "/images/cars/car-image4.jpeg",
    "/images/cars/car-image5.jpeg",
    "/images/cars/car-image6.jpeg",
    "/images/cars/car-image7.jpeg",
    "/images/cars/car-image8.jpeg",
    "/images/cars/car-image9.jpeg",
    "/images/cars/car-image10.jpeg",
    "/images/cars/car-image11.jpeg",
    "/images/cars/car-image12.jpeg",
    "/images/cars/car-image13.jpeg",
    "/images/cars/car-image14.jpeg",
    "/images/cars/car-image15.jpeg",
    "/images/cars/car-image16.jpeg",
    "/images/cars/car-image17.jpeg",
    "/images/cars/car-image18.jpeg",
    "/images/cars/car-image19.jpeg",
  ];

  const [activeImage, setActiveImage] = useState(0);
  const scrollRef = useRef(null);

  const [isPopupOpen,setIsPopupOpen] = useState(false);

  // ✅ Scroll down
  const handleNext = () => {
    const next = activeImage + 1;
    if (next < images.length) {
      setActiveImage(next);
      scrollToImage(next);
    }
  };

  // ✅ Scroll up
  const handlePrev = () => {
    const prev = activeImage - 1;
    if (prev >= 0) {
      setActiveImage(prev);
      scrollToImage(prev);
    }
  };

  // ✅ Scroll function
  const scrollToImage = (index) => {
    const container = scrollRef.current;
    const thumbnail = container?.children[index];
    if (thumbnail && container) {
      container.scrollTo({
        top: thumbnail.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    <div className="flex gap-6 mb-10 gallery" data-box="gallery">
      {/* ========== Big Image ========== */}
      <div 
        onClick={() => setIsPopupOpen(true)}
        className="relative w-full cursor-pointer max-w-[636px]" 
        id="gallery-box">
        <div className="w-full overflow-hidden rounded-md h-[470px]">
          <img
            src={images[activeImage]}
            alt="Car image"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>

        {/* image counter */}
        <div className="absolute flex items-center gap-2 px-2 py-1 text-sm font-semibold text-center text-white rounded-md min-w-20 bg-black/40 bottom-3 right-3">
          <img src="/icons/gallery-icon.svg" alt="landscape" />
          <span>
            {activeImage + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* ========== Thumbnails ========== */}
      <div className="flex flex-col w-full gap-2 max-w-[100px]" data-slider="small_slider">
        {/* Up Button */}
        <button
          onClick={handlePrev}
          disabled={activeImage === 0}
          className="w-full h-8 bg-gray-100 rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <img
            src="/icons/chevron-right-blue.svg"
            alt="prev button"
            className="mx-auto -rotate-90"
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
          {images.map((image, index) => (
            <li
              key={index}
              onClick={() => setActiveImage(index)}
              className={`transition-all duration-300 ${
                activeImage === index ? "border-blue-500" : "border-transparent"
              }`}
            >
              <img src={image} alt="Car image" loading="lazy" />
            </li>
          ))}
        </ul>

        {/* Down Button */}
        <button
          onClick={handleNext}
          disabled={activeImage === images.length - 1}
          className="w-full h-8 bg-gray-100 rounded-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <img
            src="/icons/chevron-right-blue.svg"
            alt="next button"
            className="mx-auto rotate-90"
          />
        </button>
      </div>
    </div>

      {/* ✅ Popup */}
      {isPopupOpen && (
        <GalleryPopup
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}
