import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function Drive() {

    const driveTypeData = [
        { label: "Allrad", value: "4" },
        { label: "Front", value: "F" },
        { label: "Heck", value: "R" },
    ];

    const gearboxData = [
        { label: "Automatic", value: "A" },
        { label: "Manual gearbox", value: "M" },
        { label: "Semi-automatic", value: "S" },
    ]

    const cylindersData = [
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ]

    const gearsData = [
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ]

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="drive">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Drive</Heading>

            {/* <!-- Fields --> */}
            <div className="grid grid-cols-2 gap-4">
                {/* Drive type */}
                <div>
                    <Label htmlFor="drive-type" name="Drive type" />
                    <CustomSelect data={driveTypeData} name="drive-type" placeholder="Choose" />
                </div>

                {/* Gearbox */}
                <div>
                    <Label htmlFor="gearbox" name="Gearbox" />
                    <CustomSelect data={gearboxData} name="gearbox" placeholder="Choose" />
                </div>

                {/* Performance */}
                <div>
                    <Label htmlFor="kw" name="Performance" className="mb-1" />

                    <div className="flex gap-2">
                        <Input id="kw" placeholder="KW" />
                        <Input id="ps" placeholder="PS" />
                    </div>

                </div>

                {/* cylinders */}
                <div>
                    <Label htmlFor="cylinders" name="Cylinders" className="mb-1" />
                    <CustomSelect data={cylindersData} name="cylinders" placeholder="Choose" />
                </div>

                {/* gears */}
                <div>
                    <Label htmlFor="gears" name="Gears" className="mb-1" />
                    <CustomSelect data={gearsData} name="gears" placeholder="Choose" />
                </div>

                {/* Displacement and curb weight */}
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Label htmlFor="displacement" name="Displacement" className="mb-1" />
                        <Input id="displacement" placeholder="e.g. 88cm3"/>
                    </div>

                    {/* crub */}
                    <div className="flex-1">
                        <Label htmlFor="crub" name="Crub" className="mb-1" />
                        <Input id="crub" placeholder="e.g. 88curb" />
                    </div>
                </div>
            </div>
        </div>
    )
}