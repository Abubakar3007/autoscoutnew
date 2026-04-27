import Link from "next/link";

export default function InfoBadge() {
    return (
        <div className="fixed top-0 z-50 w-full transition-all duration-300 ease-in-out -translate-y-[100px] -translate-x-1/2 border-b-4 border-transparent lg:w-1/2 info-msg error left-1/2">
            <div className="flex items-center gap-4 px-4 py-3">

                {/* if success then show this image */}
                <img
                    src="/images/success-badge.png"
                    alt="success icon"
                />

                {/* if warning or error then show this image */}
                <img
                    src="/images/warning.png"
                    alt="warning icon"
                />

                <p className="text-base leading-6">Your car successfully add in favorite. <Link href="/user/favorites" className="text-gray-800 underline">Go to favorite</Link></p>
            </div>
        </div>
    )
}