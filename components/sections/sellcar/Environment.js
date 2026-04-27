import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";

export default function Environment() {

    const fuelData = [
        { label: "Gasoline", value: "B" },
        { label: "Diesel", value: "D" },
        { label: "LPG (LPG)", value: "L" },
        { label: "Natural gas (CNG)", value: "C" },
        { label: "Electric/petrol", value: "2" },
        { label: "Electric/diesel", value: "3" },
        { label: "Ethanol", value: "M" },
        { label: "Electrical electric", value: "E" },
        { label: "Hydrogen", value: "H" },
        { label: "Other", value: "O" },
    ]

    const energySourceData = [
        { label: "Normal/Benzin 91", value: "1" },
        { label: "Super 95", value: "2" },
        { label: "Super Plus 98", value: "3" },
        { label: "Normal/Benzin E10 91", value: "4" },
        { label: "Super E10 95", value: "5" },
        { label: "Super Plus E10 98", value: "6" },
    ]

    const emissionClassData = [
        { label: "Select", value: "0" },
        { label: "Euro 1", value: "1" },
        { label: "Euro 6e", value: "10" },
        { label: "Euro 6b", value: "11" },
        { label: "Euro 2", value: "2" },
        { label: "Euro 3", value: "3" },
        { label: "Euro 4", value: "4" },
        { label: "Euro 5", value: "5" },
        { label: "Euro 6", value: "6" },
        { label: "Euro 6c", value: "7" },
        { label: "Euro 6d", value: "8" },
        { label: "Euro 6d-TEMP", value: "9" },
    ]

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="environment">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Environment</Heading>

            {/*  fields */}
            <div>
                <Label htmlFor="fuel" name="Fuel" className="mb-1" />
                <CustomSelect data={fuelData} name="fuel" placeholder="Choose" />
            </div>

            {/* fuel environment */}
            <div className="my-10 space-y-4" data-radio="protocol">

                {/* NEDC */}
                <div className="flex items-start gap-4">
                    <Radio id="nedc" name="protocol" />
                    <label for="nedc" className="text-gray-500 cursor-pointer">
                        <span className="text-gray-800">NEDC</span><br />
                        CO2 emission and fuel consumption values ​​for vehicles according to the
                        applicable NEDC regulations (New European Driving Cycle)
                    </label>
                </div>

                {/* WLTP */}
                <div className="flex items-start gap-4">
                    <Radio id="wltp" name="protocol" />
                    <label for="wltp" className="text-gray-500 cursor-pointer">
                        <span className="text-gray-800">WLTP</span><br />
                        CO2 emission and fuel/electricity consumption values ​​for vehicles
                        according to
                        the upcoming WLTP regulations (World Harmonized Light-Duty Vehicles Test
                        Procedure).
                    </label>
                </div>
            </div>

            {/* energy */}
            <div className="grid grid-cols-2 gap-4">
                {/* energy source */}
                <div>
                    <Label htmlFor="source" name="Energy source" className="mb-1" />
                    <CustomSelect data={energySourceData} name="source" placeholder="Choose"/>
                </div>

                {/* combined  */}
                <div>
                    <Label htmlFor="combined" name="Combined fuel consumption" className="mb-1"/>
                    <Input id="combined" placeholder="eg- 50mpg" />
                </div>

                {/* emission */}
                <div>
                    <Label htmlFor="consumption" name="CO2 emissions combined" className="mb-1" />
                    <Input id="consumption" placeholder="eg- 50Kt" />
                </div>

                {/* emission class */}
                <div>
                    <Label htmlFor="emission-class" name="Emission class" className="mb-1" />
                    <CustomSelect  data={emissionClassData} name="emission-class" placeholder="Choose"/>
                </div>
            </div>
        </div>
    )
}