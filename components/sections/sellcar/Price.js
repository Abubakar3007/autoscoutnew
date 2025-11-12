import Checkbox from "@/components/ui/Checkbox";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function Price() {
    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="price">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Price</Heading>

            {/* Fields */}
            <div className="grid grid-cols-2 gap-4">

                {/* Price */}
                <div className="col-span-2">
                    <Label htmlFor="price" name="Your offer price for your vehicle:" className="mb-1"/>
                    <Input id="price" placeholder="price" />
                </div>

                {/* Basis negotiation */}
                <div className="flex gap-2">
                    <Checkbox name="basis" id="basis" />
                    <Label htmlFor="basis" name="Basis negotiation" className="cursor-pointer" />
                </div>

                {/* Vat */}
                <div className="flex gap-2">
                    <Checkbox name="vat" id="vat" />
                    <Label htmlFor="vat" name="VAT reportable" className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}