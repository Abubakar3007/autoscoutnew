import StarWrapper from "@/components/ui/StarWrapper";
import ReviewCategory from "./ReviewCategory";
import Button from "@/components/ui/Button";

export default function AboutReview() {

    const reviewCategory = [
        {
            rating: 5,
            title: "Overall impression"
        },
        {
            rating: 5,
            title: "Reachability",
        },
        {
            rating: 5,
            title: "Reliability",
        },
        {
            rating: 5,
            title: "Offer description",
        },
        {
            rating: 5,
            title: "Purchase process"
        }
    ]

    return (
        <div className="w-full mx-auto py-14 md:py-20 max-w-677">
            {/* review base */}
            <div className="flex flex-col items-center justify-center mb-10 gap-x-10 gap-y-5 sm:flex-row">

                {/* left side */}
                <div>
                    <span className="block leading-6 text-center">1200 reviews</span>
                    <div className="grid gap-2 my-4 place-items-center">

                        {/*  average rating */}
                        <div className="text-6xl font-semibold">4.9</div>

                        {/* stars */}
                        <StarWrapper />
                    </div>

                    {/* recommendations */}
                    <span>97 % recommendations</span>
                </div>

                {/*  divider  */}
                <div className="w-80% sm:w-[1px] bg-neutral-400 sm:min-h-[186px] min-h-1"></div>

                {/* Right side */}
                <div className="space-y-2">
                    {
                        reviewCategory.map((item, index) => {
                            return (
                                <ReviewCategory key={index} item={item} />
                            )
                        })
                    }
                </div>
            </div>

            {/* write button */}
            <Button
              text="Rate your review"
              className="mx-auto w-fit secondary-btn block h-12"
            />
        </div>
    )
}