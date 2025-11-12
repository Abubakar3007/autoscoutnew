import Heading from "@/components/ui/Heading";

export default function ProfileHeader() {
    return (
        <div className="flex items-center justify-between gap-3 mb-10">
            <Heading as="h1" className="pb-2 font-semibold leading-8 border-b border-blue-500 w-fit text-[28px]">My profile</Heading>

            {/* Open profile button */}
            <button id="open-profile" className="font-semibold cursor-pointer lg:hidden">
                <svg width="24" height="24" className="inline-block mr-1" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <rect x="3" y="5" width="18" height="2.4" rx="1.2" fill="#333"></rect>
                    <rect x="3" y="11" width="18" height="2.4" rx="1.2" fill="#333"></rect>
                    <rect x="3" y="17" width="18" height="2.4" rx="1.2" fill="#333"></rect>
                </svg>
                <span className="align-middle">Profile</span>
            </button>
        </div>
    )
}