import Checkbox from "@/components/ui/Checkbox";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomSelectCheckbox from "@/components/ui/CustomSelectCheckbox";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";

export default function Characteristics() {

    const bodyTypeData = [
        { label: "Convertible", value: "1" },
        { label: "Coupe", value: "2" },
        { label: "Small car", value: "3" },
        { label: "Combi", value: "4" },
        { label: "Limousine", value: "5" },
        { label: "SUV/off-road vehicle/pickup truck", value: "6" },
        { label: "Transporter", value: "7" },
        { label: "Van/minibus", value: "8" },
        { label: "Other", value: "9" },
    ]

    const doorData = [
        { label: "All", value: "1" },
        { label: "2/3", value: "2" },
        { label: "4/5", value: "3" },
        { label: "6/7", value: "4" },
    ]

    const seatingData = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ]

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="features">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Characteristics</Heading>
            {/* form field */}
            <div className="grid grid-cols-2 gap-4">
                {/* body type */}
                <div>
                    <Label htmlFor="body-type" name="Body type" className="mb-1"/>
                    <CustomSelectCheckbox data={bodyTypeData} name="body-type" placeholder="Choose" />
                </div>

                {/* seating */}
                <div>
                    <Label htmlFor="seating" name="Seating*" className="mb-1"/>
                    <CustomSelect data={seatingData} name="seating" placeholder="Choose" />
                </div>

                {/* doors */}
                <div>
                    <Label htmlFor="doors" name="Number of doors" className="mb-1" />
                    <CustomSelect data={doorData} name="doors" placeholder="Choose" />
                </div>
            </div>
        </div>
    )
}