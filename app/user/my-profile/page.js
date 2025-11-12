import EditInfoPopup from "@/components/sections/profile/EditInfoPopup";
import EditProfileEmail from "@/components/sections/profile/EditProfileEmail";
import LogoutPopup from "@/components/sections/profile/LogoutPopup";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";
import ProfileUpdatePopup from "@/components/sections/profile/ProfileUpdatePopup";
import SendOtpPopup from "@/components/sections/profile/SendOtpPopup";
import Button from "@/components/ui/Button";

export default function MyProfile() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <ProfileHeader />

                {/* profile wrapper */}
                <div className="flex flex-col gap-6 lg:items-center lg:flex-row">
                    <ProfileSidebar />

                    {/* profile right wrapper */}
                    <div className="w-full">

                        {/* box */}
                        <div className="w-full p-6 mx-auto rounded-md box bg-white shadow-box-shadow max-w-[600px]">

                            {/* user list info */}
                            <ul className="mb-6 space-y-4 text-gray-500 [&>li]:flex [&>li]:items-center [&>li>img]:inline-block [&>li>img]:mr-4">
                                <li>
                                    <img
                                        src="/icons/user.svg"
                                        alt="User"
                                        className="w-5"
                                    />
                                    <span>John Smith</span>
                                </li>
                                <li>
                                    <img
                                        src="/icons/email-icon.svg"
                                        alt="Email"
                                        className="w-5"
                                    />
                                    <span>johnsmith123@gmail.com</span>
                                </li>
                                <li>
                                    <img
                                        src="/icons/phone.svg"
                                        alt="Phone"
                                        className="w-5"
                                    />
                                    <span>123456789</span>
                                </li>
                                <li>
                                    <img
                                        src="/icons/location.svg"
                                        alt="Location"
                                        className="w-5"
                                    />
                                    <span>Location</span>
                                </li>
                            </ul>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <Button
                                    htmlFor="edit-mail-btn"
                                    text="Change email"
                                    className="flex-1 secondary-btn"
                                />

                                <Button
                                    htmlFor="edit-info-btn"
                                    text="Edit infromation"
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ProfileUpdatePopup/> */}

            {/* edit profile email popup */}
            {/* <EditProfileEmail/> */}

            {/* send otp popup */}
            {/* <SendOtpPopup/> */}

            {/* Edit info */}
            {/* <EditInfoPopup/> */}

            {/* Logout popup */}
            {/* <LogoutPopup/> */}
        </section>
    )
}