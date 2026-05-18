"use client";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import HeroSection from "@/components/sections/homepage/HeroSection";
import Demand from "@/components/sections/homepage/Demand";
import ShowMore from "@/components/ui/ShowMore";
import AvdertiseCar from "@/components/sections/homepage/AdvertiseCar";
import ChooseUs from "@/components/sections/homepage/ChooseUs";
import LinksUsedCars from "@/components/sections/homepage/LinksUsedCars";
import { allCarsData } from "@/services/product";
import { useEffect, useState } from "react";
export default function Home() {

  const [cars, setCars] = useState([]);
  const [recentlyLoadMore, setRecentlyLoadMore] = useState(1);
  const [interestLoadMore, setInterestLoadMore] = useState(1);

  useEffect(() => {
    const fetchAllCars = async () => {
      const allCars = await allCarsData();
      setCars(allCars);
    }

    fetchAllCars();
  }, []);


  return (
    <>
      <HeroSection />

      {/* Demand section */}
      <Demand />

      {/* Advertise or sell car */}
      <AvdertiseCar />

      {/* recently added cars */}
      <section className="pt-20">
        <div className="wrapper">
          <Heading as="h2" className="text-[28px] font-semibold pb-2 mb-10 border-b border-blue-500 w-fit">Recently added cars</Heading>
          {/* cards */}
          <div className="grid gap-6 sm:grid-cols-[repeat(auto-fill,_minmax(318px,_1fr))]">
            {
              cars.length &&
              cars.slice(0, (3 * recentlyLoadMore)).map((car, index) => (
                <Card car={car} key={index} />
              ))
            }
          </div>

          {/* More button */}
          <ShowMore
            text="Load more"
            className="mt-10"
            btnClass="max-w-[250px] w-full"
            onClick={() => setRecentlyLoadMore(recentlyLoadMore + 1)}
          />
        </div>
      </section>

      {/* Intrest added cars */}
      <section className="pt-20">
        <div className="wrapper">
          <Heading as="h2" className="text-[28px] font-semibold pb-2 mb-10 border-b border-blue-500 w-fit">This might also interest you</Heading>
          {/* cards */}
          <div className="grid gap-6 sm:grid-cols-[repeat(auto-fill,_minmax(318px,_1fr))]">
            {
              cars.length &&
              cars.slice(0, (3 * interestLoadMore)).map((car, index) => (
                <Card car={car} key={index} />
              ))
            }
          </div>

          {/* More button */}
          <ShowMore
            text="Load more"
            className="mt-10"
            btnClass="max-w-[250px] w-full"
            onClick={() => setInterestLoadMore(interestLoadMore + 1)}
          />
        </div>
      </section>

      {/* Why choose us */}
      <ChooseUs />

      {/* Links used cars */}
      <LinksUsedCars />
    </>
  )
}