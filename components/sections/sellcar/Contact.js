import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";

export default function Contact() {

    const countryCodes = [
        {value: "0", label: "Select"},
        {value: "1", label: "+91"},
        {value: "2", label: "+92"},
        {value: "3", label: "+93"},
        {value: "4", label: "+94"},
        {value: "5", label: "+95"},
        {value: "6", label: "+96"},
        {value: "7", label: "+97"},
        {value: "8", label: "+98"},
        {value: "9", label: "+99"},
    ]

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="contact">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Contact</Heading>

            {/* location about */}
            <div className="my-6">
                <h4 className="mb-2 text-base font-medium leading-6">Location of the car</h4>
                <p className="text-sm">Interested parties can find your car using the proximity search.</p>
            </div>

            {/* fields */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="zip" name="ZIP code" className="mb-1" />
                    <Input id="zip" placeholder="Enter zip code" />
                </div>

                {/* city */}
                <div>
                    <Label htmlFor="city" name="City" className="mb-1" />
                    <Input id="city" placeholder="Enter city" />
                </div>
            </div>

            <div className="my-6">
                <h4 className="mb-2 text-base font-medium leading-6">Phone number</h4>
                <p className="text-sm">This makes it even easier for interested parties to contact you for questions and viewing appointments.</p>
            </div>

            {/* fields */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="country-code" name="Country code" className="mb-1" />
                    <CustomSelect data={countryCodes} name="country-code" placeholder="Choose"/>
                </div>

                {/* Phone number */}
                <div>
                    <Label htmlFor="phone-number" name="Phone number" className="mb-1"/>
                    <Input id="phone-number" placeholder="Enter phone number" />
                </div>
            </div>


            <div className="mt-6">
                <h4 className="mb-2 text-base font-mediium">Add as a contact option to the ad?*</h4>

                {/* radio button */}
                <div className="flex gap-4" data-radio="contact_option">
                    {/* no */}
                    <div className="flex gap-3">
                        <Radio id="no" name="user-option" />
                        <Label htmlFor="no" name="No" className="cursor-pointer"/>
                    </div>

                    {/* yes */}
                    <div className="flex gap-3">
                        <Radio id="yes" name="user-option" />
                        <Label htmlFor="yes" name="Yes"  className="cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}