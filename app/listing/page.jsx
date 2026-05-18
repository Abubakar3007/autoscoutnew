"use client"
import ListHeader from "@/components/sections/listing/ListHeader";
import ListingFilter from "@/components/sections/listing/ListingFilter";
import VerticalCard from "@/components/ui/VerticalCard";
import { useSearchParams } from "next/navigation";
import { filterByForm } from "@/services/product";
import { useState, useEffect } from "react";
import Pagination from "@/components/ui/Pagination";

export default function Listing() {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();

    const brand = searchParams.get("brand");
    const model = searchParams.get("model");
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");
    const registrationFrom = searchParams.get("registrationFrom");
    const registrationTo = searchParams.get("registrationTo");

    useEffect(() => {
        const fetchAllCars = async () => {
            setLoading(true);
            const carsData = await filterByForm(brand, model, priceFrom, priceTo, registrationFrom, registrationTo);
            setCars(carsData);
            setLoading(false);
        }

        fetchAllCars();
    }, [brand, model, priceFrom, priceTo, registrationFrom, registrationTo]);

    const [pagePrev, setPagePrev] = useState(0);

    let perPageShowItem = 10;
    const startIndex = pagePrev * perPageShowItem;
    const endIndex = startIndex + perPageShowItem;

    return (
        <>
            {
                loading && (<h1>Loading....</h1>)
            }
            <section className="py-20">
                <div className="wrapper">
                    <ListHeader total={cars.length} brand={brand} />

                    {/* wrapper of list */}
                    <div className="flex flex-col items-start gap-8 pt-2 sm:gap-10 lg:pt-20 lg:flex-row">

                        {/* left wrapper */}
                        <ListingFilter total={cars.length} />

                        {/* right wrapper */}
                        <div className="w-full">

                            {/* cards */}
                            <div className="space-y-6 cards">
                                {
                                    cars.slice(startIndex, endIndex).map((car) => (
                                        <VerticalCard key={car.id} car={car} />
                                    ))
                                }
                            </div>

                            {/* pagination */}
                            <Pagination pagePrev={pagePrev} setPagePrev={setPagePrev} pagePerItem={10} totalCars={cars.length} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}