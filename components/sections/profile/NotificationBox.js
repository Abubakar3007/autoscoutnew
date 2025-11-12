export default function NotificationBox() {
    return (
        <div className="bg-white rounded-md py-6 px-10">
            <h3 className="text-xl font-semibold text-center leading-8 mb-10">We would like to stay in touch with you.</h3>

            {/* notification badge */}
            <div className="flex items-center justify-between gap-10">
                <div>
                    <h3 className="text-xl font-semibold leading-8">Favorites</h3>
                    <p className="text-base leading-6 text-gray-500 mt-2">Updates on your saved vehicles such as price reductions, availability, etc.</p>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="notify"
                        className="w-12 cursor-pointer h-6 appearance-none bg-neutral-400 rounded-3xl before:content-[''] before:w-4 before:h-4 before:rounded-full before:inline-block before:bg-gray-50 before:shadow-box-shadow before:transition-transform before:ease-in-out before:duration-200 before:relative before:left-[5px] before:top-[3px] checked:bg-blue-500 checked:before:translate-x-6"
                    />
                </div>
            </div>
        </div>
    )
}