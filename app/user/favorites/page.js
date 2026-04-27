"use client";
import FavoriteCard from "@/components/sections/profile/FavoriteCard";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";
import SimilarVehiclePopup from "@/components/sections/profile/SimilarVehiclePopup";
import Pagination from "@/components/ui/Pagination";
import DeleteAdPopup from "@/components/sections/popups/DeleteAdPopup";
import { useState } from "react";

export default function Favorites() {

    const [isOpen, setIsOpen] = useState(false);

    const [isPopup, setIsPopup] = useState(false);

    return (
        <section className="py-20">
            <div className="wrapper">

                {/* Profile header */}
                <ProfileHeader />

                {/* profile wrapper */}
                <div className="flex flex-col gap-6 lg:flex-row">

                    <ProfileSidebar />

                    {/* profile right wrapper */}

                    <div className="w-full">
                        {/* cards */}
                        <div className="space-y-6">
                            <FavoriteCard
                                setIsOpen={setIsOpen} // for similar vehicle popup
                                setIsPopup={setIsPopup} // for delete ad popup
                            />
                            <FavoriteCard
                                setIsOpen={setIsOpen} // for similar vehicle popup
                                setIsPopup={setIsPopup} // for delete ad popup
                            />
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>

            {/* Similar */}
            {
                isOpen && <SimilarVehiclePopup setIsOpen={setIsOpen} />
            }

            {/* Delete ad popup */}
            {
                isPopup && <DeleteAdPopup setIsPopup={setIsPopup} title="Delete ad" description="Are you sure to want to remove ad from favorite?"/>
            }
        </section>
    )
}