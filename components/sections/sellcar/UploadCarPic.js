"use-client"
import { useState } from "react";

export default function UploadCarPic({image , onDelete}) {

    const [rotate, setRotate] = useState(0);

    const handleRotate = () =>{
        setRotate(prevRotate => prevRotate + 90);

        if (rotate === 360) {
            setRotate(0);
        }
    }

    return (
        <div className="relative rounded-md h-[100px] overflow-hidden">

            {/* delete button */}
            <button
                onClick={() => {onDelete()}}
                className="absolute left-2 top-2 cursor-pointer z-10">
                <img src="/icons/delete-image.svg" alt="Delete" />
            </button>

            {/* Rotate button */}
            <button
                onClick={handleRotate}
                className="absolute right-2 top-2 cursor-pointer z-10">
                <img src="/icons/rotate-image.svg" alt="Rotate" />
            </button>

            <img
                className={`w-full h-full object-cover`}
                style={{transform: `rotate(${rotate}deg)`}}
                src={image}
                alt="Car Image"
            />
        </div>
    )
}