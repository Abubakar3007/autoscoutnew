import Button from "@/components/ui/Button";
import StarWrapper from "@/components/ui/StarWrapper";

export default function DealerInfoCard() {
    return (
        <div className="p-4 rounded-md bg-white sm:p-6 box shadow-box-shadow">
            {/*  Dealer review */}
            <div className="flex gap-4 pb-4 mb-4 border-b sm:items-center border-neutral-400">

                {/* dealer image */}
                <div className="flex-shrink-0 h-10 rounded-md sm:h-16 sm:w-[90px] overflow-hidden w-14">
                    <img
                        src="/images/dealer-image.png"
                        alt="Dealer image"
                        loading="lazy"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Dealer name & rating */}
                <div>
                    <h1 className="text-2xl font-semibold sm:text-xxl">CT Cartrade Handels </h1>

                    {/* ratings star */}
                    <div className="flex items-center gap-4 mb-1">
                        {/* stars */}
                        <StarWrapper />
                        <a href="" className="text-sm text-blue-500">100 reviews</a>
                    </div>
                </div>
            </div>

            {/* Dealer address */}
            <div className="flex justify-between gap-5">
                {/* location */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 sm:text-lg">
                    <img
                        src="/icons/location.svg"
                        alt="location pin"
                    />
                    <address className="not-italic">Industrial Park Mitterbreiten 2, 9812 Pusarnitz, AT</address>
                </div>

                {/* buttons */}
                <div className="hidden w-full gap-4 lg:flex max-w-[430px]">
                    <a href="" className="flex-1 h-12 text-center secondary-btn">+43 (0)3133 - 37683</a>
                    <Button text="Send e-mail" className="flex-1 h-12"/>
                </div>
            </div>
        </div>
    )
}