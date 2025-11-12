"use client";

export default function GalleryPopup({images,activeImage,setActiveImage,onClose}) {
    
  const handleNext = () => {
    if (activeImage < images.length - 1) {
      setActiveImage(activeImage + 1);
    }
  };

  const handlePrev = () => {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    }
  };

    return (
        <div className="popups">
            <div className="grid w-full h-full place-items-center">
                <div className="relative p-4 pt-10 rounded-md bg-gray-50 shadow-box-shadow wrapper">

                    {/* close button */}
                    <button onClick={onClose} className="absolute top-2 right-2">
                        <img
                            src="/icons/close-btn.svg"
                            alt="close icon"
                            className="w-5 h-5"
                        />
                    </button>

                    {/* big image & title container */}
                    <div>
                        <h3 className="mb-6 font-semibold text-center text-xxl leading-40">Porsche 911 <span className="text-xl text-gray-500">Carrera S Cabrio </span></h3>
                        
                        {/* big image container */}
                        <div className="relative w-full h-gallery-height">
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 w-12 h-12 -translate-y-1/2 rounded-sm top-1/2 shadow-card-shadow">
                                <img
                                    src="/icons/chevron-left-blue.svg"
                                    alt="prev button"
                                    className="mx-auto"
                                />
                            </button>

                            {/* big image */}
                            <div className="w-full h-full overflow-hidden rounded-md">
                                <img
                                    src={images[0]}
                                    alt="Car image"
                                    loading="lazy"
                                    className="h-full mx-auto rounded-md"
                                />
                            </div>

                            {/* next button */}
                            <button 
                                onClick={handleNext}
                                className="absolute right-0 w-12 h-12 -translate-y-1/2 mabsolute top-1/2 shadow-card-shadow">
                                <img
                                    src="/icons/chevron-right-blue.svg"
                                    alt="next button"
                                    className="mx-auto"
                                />
                            </button>
                        </div>

                        {/* total image number of images */}
                        <div className="mt-6 text-lg font-semibold text-center text-blue-500">1/12</div>
                    </div>

                    {/* small images */}
                    <ul className="flex gap-2 overflow-x-scroll [&>li]:w-100 [&>li]:flex-shrink-0 no-scroll mt-6 [&>li]:h-100 [&>li]:rounded-md [&>li]:overflow-hidden [&>li]:cursor-pointer [&>li]:border-2 [&>li>img]:w-full [&>li>img]:h-full [&>li>img]:object-cover">
                        {
                            images.map((image,index)=>(
                                <li key={index} onClick={()=>setActiveImage(index)} className={`transition-all duration-300 ${activeImage === index ? "border-blue-500" : "border-transparent"}`}>
                                    <img
                                        src={image}
                                        alt="Car image"
                                        loading="lazy"
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