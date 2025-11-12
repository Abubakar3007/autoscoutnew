import Heading from "@/components/ui/Heading";

export default function Pictures() {
    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="picture">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Pictures</Heading>

            {/* Box */}
            <div className="pic_upload">
                <p className="text-sm leading-6">A maximum of 50 images can be uploaded.</p>

                <div className="mt-2 mb-4">
                    <span><i className="bx bx-info-circle"></i></span>
                    <p className="text-sm leading-6">Advertisements with pictures in landscape format sell faster! We recommend cropping some of the images to a 4:3 ratio for better viewing.</p>
                </div>

                {/*  pic box here */}
                <div>
                    {/* All pics show here  */}
                    <div className="all_img" id="pic_grid"></div>

                    {/* Pic upload box */}
                    <div className="p-3 border border-blue-500 border-dashed cursor-pointer" id="pic_ad">
                        <label htmlFor="upload" className="h-[150px] w-full flex items-center justify-center flex-col gap-2 text-base text-gray-500 font-medium cursor-pointer">
                            <span className="text-blue-500"><img src="/icons/plus-icon.png" alt="Plus icon" className="inline-block mr-2"/>Choose images</span>
                            <span>or</span>
                            <span>Simply drag you images here</span>
                        </label>
                        <input type="file" id="upload" multiple="" name="images[]" hidden/>
                    </div>
                </div>
            </div>
        </div>
    )
}