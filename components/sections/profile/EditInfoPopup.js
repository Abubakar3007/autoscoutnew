import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function EditInfoPopup() {

    const countryData = [
        {
            label: "United States",
            value: "United States"
        },
        {
            label: "Canada",
            value: "Canada"
        },
        {
            label: "United Kingdom",
            value: "United Kingdom"
        },
        {
            label: "Australia",
            value: "Australia"
        },
        {
            label: "New Zealand",
            value: "New Zealand"
        }
    ]

    const stateData = [
        {
            label: "New York",
            value: "New York"
        },
        {
            label: "California",
            value: "California"
        },
        {
            label: "Texas",
            value: "Texas"
        },
        {
            label: "Florida",
            value: "Florida"
        },
        {
            label: "Illinois",
            value: "Illinois"
        }
    ]

    return (
        <div className="popups" id="edit-info">
            <div className="grid w-full h-full place-items-center">
                <div className="relative w-full p-6 rounded-md bg-gray-50 shadow-box-shadow box max-w-[665px]">

                    {/* Close button */}
                    <button id="edit-info-close-btn" className="absolute top-2 right-2 cursor-pointer">
                        <img
                            src="/icons/close-btn.svg"
                            alt="Close btn"
                            className="w-5"
                        />
                    </button>
                    <h3 className="text-xl font-semibold leading-8">Edit information</h3>

                    {/* form */}
                    <form action="">

                        {/* fields */}
                        <div className="grid grid-cols-2 gap-4 my-6">

                            {/* full name */}
                            <div>
                                <Label
                                    htmlFor="full-name"
                                    name="Full name*"
                                    className="mb-1"
                                />
                                <Input
                                    id="full-name"
                                    placeholder="name"
                                />
                            </div>

                            {/* Phone number */}
                            <div>
                                <Label
                                    htmlFor="phone"
                                    name="Phone number*"
                                    className="mb-1"
                                />
                                <Input
                                    id="phone"
                                    placeholder="phone number"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <Label
                                    htmlFor="address"
                                    name="Address*"
                                    className="mb-1"
                                />
                                <Input
                                    id="address"
                                    placeholder="address"
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <Label
                                    htmlFor="country"
                                    name="Country"
                                    className="mb-1"
                                />
                                <CustomSelect
                                    data={countryData}
                                    name="country"
                                    placeholder="Choose" 
                                />
                            </div>

                            {/* City */}
                            <div>
                                <Label
                                    htmlFor="zip-code"
                                    name="City / Zip code"
                                    className="mb-1"
                                />

                                <div className="relative">
                                    <Input
                                        id="zip-code"
                                        placeholder="City / Zip code"
                                    />
                                </div>
                            </div>

                            {/* State */}
                            <div>
                                <Label
                                    htmlFor="state"
                                    name="State/Province*"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={stateData}
                                    name="state"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* <!-- Zip code --> */}
                            <div>
                                <Label
                                    htmlFor="postal-code"
                                    name="ZIP/Postal code*"
                                    className="mb-1"
                                />
                                <Input
                                    id="postal-code"
                                    placeholder="postal code"
                                />
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">A change in contact information will be reflected in all listings in your account.</p>

                        {/* button submit */}
                        <Button
                            text="Save changes"
                            className="w-full mt-6 h-12"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}