"use client"
import DeleteAdPopup from "@/components/sections/popups/DeleteAdPopup";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";
import SavedSearchCar from "@/components/sections/profile/SavedSearchCar";
import Pagination from "@/components/ui/Pagination";
import { useState } from "react";

export default function SavedSearches() {

    const [isPopup, setIsPopup] = useState(false);

    return (
        <section className="py-20">
            <div className="wrapper">

                {/* profile header */}
                <ProfileHeader />

                {/* Profile wrapper */}
                <div className="flex flex-col gap-6 lg:flex-row">

                    <ProfileSidebar />

                    <div className="w-full">

                        {/* saved search cards */}
                        <div className="space-y-6">
                            <SavedSearchCar setIsPopup={setIsPopup}/>
                            <SavedSearchCar setIsPopup={setIsPopup}/>
                        </div>

                        {/* Pagination */}
                        <Pagination />

                    </div>
                </div>
            </div>

            {
                isPopup && <DeleteAdPopup setIsPopup={setIsPopup} title="Remove saved search" description="Are you want to remove this search from saved searches list?" />
            }
        </section>
    )
}