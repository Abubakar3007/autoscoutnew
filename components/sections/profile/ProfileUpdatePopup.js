"use client";
import Button from "@/components/ui/Button";
import { useState, useRef } from "react";

export default function ProfileUpdatePopup() {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    // Handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }

        e.target.value = "";
    };

    // Handle remove image
    const removeImage = () => {
        setImage(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="popups" id="upload-popup">
            <div className="grid w-full h-full place-items-center">
                <div className="relative w-full p-6 pt-10 rounded-md box bg-gray-50 shadow-box-shadow max-w-[464px]">

                    {/* close button */}
                    <button className="absolute top-2 right-2 cursor-pointer">
                        <img
                            src="/icons/close-btn.svg"
                            alt="close icon"
                            className="w-5"
                        />
                    </button>

                    {/* upload content */}
                    <div className="popup_content">
                        <h3 className="text-xl font-semibold leading-8">Edit profile photo</h3>

                        {/* Upload pic here */}
                        <div className="flex flex-col items-center gap-4 my-6">
                            <img
                                src={image || "/images/user-default-image.svg"}
                                alt="user image"
                                className="w-[120px] h-[120px] rounded-full object-cover"
                            />

                            {image && (
                                <button
                                    onClick={removeImage}
                                    className="text-base font-semibold text-gray-600 underline cursor-pointer"
                                >
                                    Remove photo
                                </button>
                            )}
                        </div>

                        {/* upload and cancel button */}
                        <div className="flex gap-4">
                            {/* Conditional rendering */}
                            {image ? (
                                <Button
                                    text="Save changes"
                                    className="flex-1 secondary-btn"
                                />
                            ) : (
                                <Button
                                    text="Cancel"
                                    className="flex-1 secondary-btn"
                                />
                            )}

                            {/* Choose image button */}
                            <label
                                htmlFor="upload"
                                className="flex-1 text-center cursor-pointer primary-btn leading-[48px]"
                            >
                                <span>Choose image</span>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    id="upload"
                                    hidden
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
