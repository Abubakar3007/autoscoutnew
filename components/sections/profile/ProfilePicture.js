export default function ProfilePicture() {
    return (
        <div className="relative md:min-h-[186px] min-h-[140px]">

            {/* Profile picture */}
            <div className="relative z-20 w-20 h-20 -translate-x-1/2 border-4 border-gray-200 rounded-full md:w-[120px] md:h-[120px] bg-white left-1/2 shadow-box-shadow">
                {/* if user not have profile then show this */}
                <img
                    src="/images/user-default-image.svg"
                    alt="user no dp"
                />

                {/* Open upload button */}
                <button 
                    // onClick={}
                    className="absolute grid bg-blue-500 rounded-full md:w-9 md:h-9 h-7 w-7 place-items-center -top-1 -right-1 cursor-pointer">
                    <img
                        src="/icons/edit-white-pencil.svg"
                        alt="Edit"
                        className="w-3 md:w-auto"
                    />
                </button>
            </div>

            {/* User info */}
            <div className="absolute z-10 w-full p-4 pt-12 text-center rounded-md md:pt-20 top-14 shadow-box-shadow bg-white">
                <h3 className="text-xl font-semibold leading-8">Jhon Smith</h3>
            </div>
        </div>
    )
}