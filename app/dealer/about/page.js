import DealerAbout from "@/components/sections/dealer/DealerAbout";
import DealerContact from "@/components/sections/dealer/DealerContact";
import DealerInfoCard from "@/components/sections/dealer/DealerInfoCard";
import DealerInformation from "@/components/sections/dealer/DealerInformation";
import DealerTab from "@/components/sections/dealer/DealerTab";
import ReviewCard from "@/components/sections/dealer/ReviewCard";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import ShowMore from "@/components/ui/ShowMore";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <DealerInfoCard />

                <div className="pt-20">
                    {/* tabs */}
                    <DealerTab url="/dealer/about"/>

                    {/* Dealer about us */}
                    <DealerAbout />

                    {/* Latest offers */}
                    <div className="pt-20">
                        <Heading as="h2" className="pb-2 mb-6 text-2xl font-semibold border-b border-blue-500 sm:mb-10 md:text-xxl w-fit">Latest offers</Heading>
                        {/* cards */}
                        <div className="grid gap-6 sm:grid-cols-card-grid">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        {/* More button */}
                        <ShowMore text="Show all offers" className="mt-10" />
                    </div>

                    {/* Reviews of dealer */}
                    <div className="pt-20">
                        <Heading as="h2" className="pb-2 mb-6 text-2xl font-semibold border-b border-blue-500 sm:mb-10 md:text-[28px] w-fit">Reviews from our customers</Heading>

                        {/* Reviews */}
                        <div className="grid gap-4 sm:gap-6 sm:grid-cols-card-grid">
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>

                        {/* More button */}
                        <ShowMore text="Show all offers" className="mt-10" />
                    </div>


                    {/* Dealer information */}
                    <DealerInformation />
                </div>


                {/* dealer contact */}
                <DealerContact />
            </div>
        </section>
    )
}