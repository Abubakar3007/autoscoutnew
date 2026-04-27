import { useEffect } from "react"

export default function DeleteAdPopup({ setIsPopup, title, description }) {

    return (
        <div className="popups" id="delete-favorite-popup">
            <div className="grid w-full h-full place-items-center">
                <div className="relative w-full p-10 pt-12 text-center rounded-md box bg-gray-50 shadow-box-shadow max-w-[363px]">

                    <img
                        src="/icons/trash-big-icon.svg"
                        alt="Delete icon"
                        className="absolute -translate-x-1/2 left-1/2 -top-8"
                    />

                    <h3 className="text-xl font-semibold leading-8 mb-2">{title}</h3>
                    <p className="text-base leading-6 text-gray-500">{description}</p>

                    {/* buttons */}
                    <div className="flex w-full gap-4 mx-auto mt-6 max-w-250">
                        <button
                            className="flex-1 secondary-btn-sm cursor-pointer"
                            id="close-delete-favorite"
                            onClick={() => setIsPopup(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-1 primary-btn-sm cursor-pointer">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}