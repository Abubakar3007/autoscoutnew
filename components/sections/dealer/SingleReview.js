import StarWrapper from "@/components/ui/StarWrapper";

export default function SignelReview() {
    return (
        <div class="pb-6 border-b border-neutral-400">
            {/* header  */}
            <div class="flex items-center justify-between gap-4 mb-4">

                {/* left */}
                <div>
                    <h3 class="mb-1 text-xl font-semibold leading-8">Caroline</h3>
                    <div class="flex items-center gap-2">

                        {/* stars */}
                        <StarWrapper />
                        <a href="" class="text-sm text-blue-500">Details</a>
                    </div>
                </div>
                
                {/* review date */}
                <span class="text-sm text-gray-500 h-max">02/20/2024</span>
            </div>

            {/* paragraph */}
            <p class="leading-6">I am very satisfied with the car dealer and would happily recommend him 100%. His cars are in top condition. That's why I give it more than 5 stars. Thank you for everything.</p>
        </div>
    )
}