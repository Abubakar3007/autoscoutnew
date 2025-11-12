import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";
import SavedSearchCar from "@/components/sections/profile/SavedSearchCar";
import Pagination from "@/components/ui/Pagination";

export default function SavedSearches() {
    return (
        <section className="py-20">
            <div className="wrapper">

                {/* profile header */}
                <ProfileHeader />

                {/* Profile wrapper */}
                <div className="flex flex-col gap-6 lg:items-center lg:flex-row">

                    <ProfileSidebar />

                    <div className="w-full">

                        {/* saved search cards */}
                        <div className="space-y-6">
                            <SavedSearchCar />
                            <SavedSearchCar />
                        </div>

                        {/* Pagination */}
                        <Pagination />

                    </div>
                </div>
            </div>
        </section>
    )
}