import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { useState, useRef, useEffect } from "react";

export default function SimilarVehiclePopup({ setIsOpen }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const cardRef = useRef(null);
    const totalSlides = 4; // number of cards

    // detect actual card width dynamically on mount + resize
    useEffect(() => {
        function updateCardWidth() {
            if (cardRef.current) {
                const style = getComputedStyle(cardRef.current);
                const width = cardRef.current.offsetWidth;
                const gap = parseInt(style.marginRight || 0) || 24; // handle spacing
                setCardWidth(width + gap);
            }
        }

        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);
        return () => window.removeEventListener("resize", updateCardWidth);
    }, []);

    // navigation
    const handleSlideLeft = () => {
        setSlideIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleSlideRight = () => {
        setSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : totalSlides - 1));
    };

    return (
        <div
            className="fixed left-0 w-full py-10 transition-all duration-200 ease-in-out bg-gray-100 z-[1000] bottom-0"
            data-popup="similar"
        >
            {/* Header */}
            <div className="relative mb-10">
                <Heading
                    as="h2"
                    className="mx-auto font-semibold leading-8 border-b border-blue-500 text-[28px] w-fit"
                >
                    Similar vehicle
                </Heading>

                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-6 right-4 cursor-pointer"
                    aria-label="Close popup"
                    title="Close popup"
                >
                    <img src="/icons/close-btn.svg" alt="close icon" className="w-5" />
                </button>
            </div>

            <div className="relative wrapper">
                {/* Left button */}
                <button
                    onClick={handleSlideLeft}
                    disabled={slideIndex === 0}
                    className="absolute z-10 cursor-pointer flex items-center justify-center w-12 h-12 text-center -translate-y-1/2 rounded-md left-2 ssxl:-left-14 top-1/2 shadow-card-shadow bg-gray-50 disabled:opacity-40"
                    aria-label="Previous slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        className="mx-auto"
                    >
                        <path
                            d="M14.666 1.66675L6.33268 10.0001L14.666 18.3334"
                            stroke="#347DFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>

                {/* Slider */}
                <div className="overflow-hidden">      {/* viewport */}
                    <div
                        className="flex gap-6 transition-transform duration-300 ease-in-out"
                        style={{
                            transform: cardWidth > 0 ? `translateX(-${slideIndex * cardWidth}px)` : "none",
                        }}
                    >
                        {/* Assign ref to first card */}
                        <Card ref={cardRef} className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] flex-shrink-0" />
                        <Card className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] flex-shrink-0" />
                        <Card className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] flex-shrink-0" />
                        <Card className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] flex-shrink-0" />
                    </div>
                </div>

                {/* Right button */}
                <button
                    onClick={handleSlideRight}
                    disabled={slideIndex === totalSlides - 1}
                    className="absolute z-10 flex items-center cursor-pointer justify-center w-12 h-12 text-center -translate-y-1/2 rounded-md right-2 ssxl:-right-14 top-1/2 shadow-card-shadow bg-gray-50 disabled:opacity-40"
                    aria-label="Next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                    >
                        <path
                            d="M6.33398 1.66675L14.6673 10.0001L6.33399 18.3334"
                            stroke="#347DFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
