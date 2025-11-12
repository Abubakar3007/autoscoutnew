import ChangePasswordForm from "@/components/sections/profile/ChangePasswordForm";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";

export default function ChangePassword() {
    return (
        <section className="py-20">
            <div className="wrapper">

                <ProfileHeader />

                {/* profile wrapper */}
                <div className="flex flex-col gap-6 lg:items-center lg:flex-row">
                    <ProfileSidebar/>

                    {/* profile right wrapper */}
                    <div className="w-full">
                        {/* Change password form */}
                        <ChangePasswordForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}