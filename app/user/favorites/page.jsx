"use client";
import FavoriteCard from "@/components/sections/profile/FavoriteCard";
import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileSidebar from "@/components/sections/profile/ProfileSidebar";
import SimilarVehiclePopup from "@/components/sections/profile/SimilarVehiclePopup";
import Pagination from "@/components/ui/Pagination";
import DeleteAdPopup from "@/components/sections/popups/DeleteAdPopup";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function Favorites() {

    const [isOpen, setIsOpen] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const [favoriteCars, setFavoriteCars] = useState(() => {
        if (typeof window !== "undefined") {
            const cartData = JSON.parse(
                localStorage.getItem("cart-storage")
            );

            return cartData?.state?.items || [];
        }

        return [];
    });

    // pagination for favorite cars
    const [pagePrev, setPagePrev] = useState(0);
    const pagePerItem = 4;

    const startIndex = pagePrev * pagePerItem;
    const endIndex = startIndex + pagePerItem;

    const [carId, setCarId] = useState(null); // for delete ad popup

    // find car id in favorite cars and set to local storage for delete ad popup
    const handleClick = (id) => {
        setIsPopup(true);
        setCarId(id);
    }

    // remove from favorite cars
    const handleRemoveFromFavorite = () => {
        removeFromCart(carId);
        console.log(carId, removeFromCart);
        setIsPopup(false);
    }

    // console.log(favoriteCars.length);

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
                            {
                                favoriteCars.slice(startIndex, endIndex).map((car) => (
                                    <FavoriteCard
                                        key={car.id}
                                        setIsOpen={setIsOpen} // for similar vehicle popup
                                        setIsPopup={setIsPopup} // for delete ad popup
                                        car={car}
                                        onClick={handleClick}
                                    />
                                ))
                            }
                        </div>

                        {/* Pagination */}
                        <Pagination
                            pagePrev={pagePrev}
                            setPagePrev={setPagePrev}
                            pagePerItem={pagePerItem}
                            totalCars={favoriteCars.length}
                        />
                    </div>
                </div>
            </div>

            {/* Similar */}
            {
                isOpen && <SimilarVehiclePopup setIsOpen={setIsOpen} />
            }

            {/* Delete ad popup */}
            {
                isPopup && <DeleteAdPopup
                    setIsPopup={setIsPopup}
                    title="Delete ad"
                    description="Are you sure to want to remove ad from favorite?"
                    onConfirm={handleRemoveFromFavorite}
                />
            }
        </section>
    )
}