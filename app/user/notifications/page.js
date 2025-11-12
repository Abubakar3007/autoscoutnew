import NotificationBox from "@/components/sections/profile/NotificationBox";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";

export default function Notifications() {
    return (
        <section className="py-20">
            <div className="wrapper">

                {/* Profile header */}
                <ProfileHeader />

                {/* profile wrapper */}
                <div className="flex flex-col gap-6 lg:items-center lg:flex-row">
                    <ProfileSidebar />

                    {/* profile right wrapper */}
                    <div className="w-full">
                        <NotificationBox/>
                    </div>
                </div>
            </div>
        </section>
    )
}