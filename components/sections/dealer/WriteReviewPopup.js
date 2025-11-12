import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";

export default function WriteReviewPopup() {
    return (
        <div className="popups show" data-popup="review">
            <div className="grid w-full h-full place-items-center">
                <div className="relative w-full p-6 overflow-y-auto rounded-md box bg-gray-50 shadow-box-shadow max-w-[553px] no-scroll">

                    {/* Close popup button */}
                    <button className="absolute top-2 right-2 cursor-pointer">
                        <img
                            src="/icons/close-btn.svg"
                            alt="Close"
                            className="w-5"
                        />
                    </button>

                    {/* form */}
                    <form>
                        <h3 className="mb-6 text-xl font-semibold">You ratings</h3>
                        {/* review type and stars */}

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                {/* <!-- stars --> */}
                                <div className="flex gap-1">
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                </div>
                                <span>Overall impression</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* <!-- stars --> */}
                                <div className="flex gap-1">
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                </div>
                                <span>Reachability</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* <!-- stars --> */}
                                <div className="flex gap-1">
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                </div>
                                <span>Reliability</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* <!-- stars --> */}
                                <div className="flex gap-1">
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                </div>
                                <span>Offer description</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* <!-- stars --> */}
                                <div className="flex gap-1">
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                    <span className="inline-block w-3 h-3 bg-no-repeat bg-cover fill-star star"></span>
                                </div>
                                <span>Purchase process</span>
                            </div>
                        </div>
                        <h3 className="mt-10 mb-6 text-xl font-semibold">You review</h3>
                        {/* <!-- message textarea --> */}
                        <div>
                            <Label 
                                htmlFor="review"
                                name="Review*"
                                className="mb-2"
                            />

                            <Textarea
                                id="review"
                                placeholder="Enter text"
                                value=""
                                className="resize-none h-[222px]"
                            />

                            <div className="text-xs text-right text-gray-500"><span>0/600</span></div>
                        </div>
                        {/* <!-- button submit --> */}
                        <Button
                            text="Submit review"
                            className="h-12 w-80% mx-auto block mt-6"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}