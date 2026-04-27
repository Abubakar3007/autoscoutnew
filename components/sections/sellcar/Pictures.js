import Heading from "@/components/ui/Heading";
import UploadCarPic from "./UploadCarPic";
import { useState } from "react";

export default function Pictures() {
    const [images, setImages] = useState([]);

    const handleUploadPic = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newImages = files.map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    // Handle drag & drop
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            const newImages = files.map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const handleDeletePic = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="picture">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">
                Pictures
            </Heading>

            <div className="pic_upload">
                <p className="text-sm leading-6">A maximum of 50 images can be uploaded.</p>

                <div className="mt-2 mb-4">
                    <span><i className="bx bx-info-circle"></i></span>
                    <p className="text-sm leading-6">
                        Advertisements with pictures in landscape format sell faster! We recommend cropping some
                        of the images to a 4:3 ratio for better viewing.
                    </p>
                </div>

                {/* Uploaded Images Grid */}
                {images.length > 0 && (
                    <div className="grid gap-2 image-grid mb-6">
                        {images.map((image, index) => (
                            <UploadCarPic
                                key={index}
                                image={image}
                                onDelete={() => handleDeletePic(index)}
                            />
                        ))}
                    </div>
                )}

                {/* Upload Box */}
                <div
                    className="p-3 border border-blue-500 border-dashed cursor-pointer transition hover:bg-blue-50"
                    id="pic_ad"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <label
                        htmlFor="upload"
                        className="h-[150px] w-full flex items-center justify-center flex-col gap-2 text-base text-gray-500 font-medium cursor-pointer"
                    >
                        <span className="text-blue-500">
                            <img
                                src="/icons/plus-icon.png"
                                alt="Plus icon"
                                className="inline-block mr-2"
                            />
                            Choose images
                        </span>
                        <span>or</span>
                        <span>Simply drag your images here</span>
                    </label>

                    <input
                        type="file"
                        id="upload"
                        multiple
                        name="images[]"
                        onChange={handleUploadPic}
                        hidden
                        accept="image/*"
                    />
                </div>
            </div>
        </div>
    );
}
