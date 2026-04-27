import EditInfoPopup from "@/components/sections/profile/EditInfoPopup";
import EditProfileEmail from "@/components/sections/profile/EditProfileEmail";
import LogoutPopup from "@/components/sections/profile/LogoutPopup";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";
import ProfileUpdatePopup from "@/components/sections/profile/ProfileUpdatePopup";
import SendOtpPopup from "@/components/sections/profile/SendOtpPopup";
import MyAdsCard from "@/components/ui/MyAdsCard";

export default function MyAds() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <ProfileHeader />

                {/* profile wrapper */}
                <div className="flex flex-col gap-6 lg:items-center lg:flex-row">
                    <ProfileSidebar />

                    {/* profile right wrapper */}
                    <div className="w-full">

                        {/* cards */}
                        <div className="space-y-6">
                            <MyAdsCard />
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