import AboutReview from "@/components/sections/dealer/AboutReview";
import DealerInfoCard from "@/components/sections/dealer/DealerInfoCard";
import DealerTab from "@/components/sections/dealer/DealerTab";
import SignelReview from "@/components/sections/dealer/SingleReview";
import WriteReviewPopup from "@/components/sections/dealer/WriteReviewPopup";

export default function Reviews() {
    // Create an array for star counts
    const stars = [1, 2, 3, 4, 5];

    return (
        <section className="md:py-20 py-14">
            <div className="wrapper">
                {/* dealer info */}
                <DealerInfoCard />

                <div className="pt-20">
                    {/* Tabs */}
                    <DealerTab url="/dealer/reviews" />

                    {/* About review */}
                    <AboutReview />

                    {/* Review tab buttons */}
                    <div>
                        <div className="[&>button]:h-8 review-tab-btns whitespace-nowrap no-scroll overflow-x-auto [&>button]:flex-shrink-0 [&>button]:px-4 [&>button]:rounded-sm [&>button]:border [&>button]:flex [&>button]:border-neutral-400 [&>button]:items-center [&>button]:cursor-pointer max-w-[496px] mx-auto w-full flex gap-4 text-neutral-400">
                            {/* All button */}
                            <button className="!border-gray-800 !text-gray-800">
                                <img
                                    src="/icons/fill-star.svg"
                                    alt="Fill star"
                                    className="inline-block w-4 mr-2"
                                />
                                All
                            </button>

                            {/* Star buttons dynamically rendered */}
                            {stars.map((star) => (
                                <button key={star}>
                                    <img
                                        src="/icons/disabled-star.svg"
                                        alt="Disabled star"
                                        className="inline-block w-4 mr-2"
                                    />
                                    {star}
                                </button>
                            ))}
                        </div>

                        <WriteReviewPopup/>

                        {/* reviews here */}
                        <div id="reviews-container" className="mt-10 space-y-6">
                            <SignelReview />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
