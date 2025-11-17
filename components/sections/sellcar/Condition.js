import Checkbox from "@/components/ui/Checkbox";
import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function Contact() {

    const vehicleType = [
        { value: "0", label: "Select" },
        { value: "1", label: "Used" },
        { value: "2", label: "Old timer" },
    ]

    const registrationDateData = [
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
        { value: "2018", label: "2018" },
        { value: "2017", label: "2017" },
        { value: "2016", label: "2016" },
    ]

    const vehicleOwnerData = [
        { value: "0", label: "Select" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
    ]

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="condition">
            <Heading className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Vehicle condition</Heading>

            {/* fields */}
            <div className="grid grid-cols-2 gap-4">

                {/* model */}
                <div>
                    <Label htmFor="vehicle-type" name="Vehicle type" className="mb-1" />
                    <CustomSelect data={vehicleType} name="vehicle-type" placeholder="Choose" />
                </div>

                {/* Mileage */}
                <div>
                    <Label htmlFor="mileage" name="Mileage" className="mb-1" />
                    <Input id="mileage" placeholder="Enter mileage" />
                </div>

                {/* Registration */}
                <div>
                    <Label htmlFor="registration-from" name="Initial registration" className="mb-1" />
                    <div className="flex gap-2">
                        {/* Registration from */}
                        <CustomSelect data={registrationDateData} name="registration-from" placeholder="From" />
                        {/* Registration to */}
                        <CustomSelect data={registrationDateData} name="registration-to" placeholder="To" />
                    </div>
                </div>

                {/* Vehicle owner */}
                <div>
                    <Label htmlFor="vehicle-owner" name="Vehicle owner" className="mb-1" />
                    <CustomSelect data={vehicleOwnerData} name="vehicle-owner" placeholder="Choose" />
                </div>

                {/* next inspection */}
                <div>
                    <Label htmlFor="next-inspection" name="Next inspection" className="mb-1" />
                    <div className="flex gap-2">
                        {/* from */}
                        <CustomSelect data={registrationDateData} name="next-inspection" placeholder="From" />
                        {/* to */}
                        <CustomSelect data={registrationDateData} name="next-inspection-to" placeholder="Top" />
                    </div>
                </div>

                {/* final inspection */}
                <div>
                    <Label htmlFor="final-inspection" name="Final inspection" className="mb-1" />
                    <div className="flex gap-2">
                        {/* from */}
                        <CustomSelect data={registrationDateData} name="final-inspection" placeholder="From" />
                        {/* to */}
                        <CustomSelect data={registrationDateData} name="final-inspection-to" placeholder="Top" />
                    </div>
                </div>

                {/* belt change */}
                <div>
                    <Label htmlFor="belt-change" name="Last timing belt change" className="mb-1" />
                    <div className="flex gap-2">
                        <CustomSelect data={registrationDateData} name="belt-change" placeholder="From" />
                        {/* to */}
                        <CustomSelect data={registrationDateData} name="belt-change" placeholder="Top" />
                    </div>
                </div>

                {/* Accident vehicle  */}
                <div className="flex flex-col justify-center">
                    <span className="invisible mb-1 text-sm font-semibold opacity-0">hide</span>
                    <div className="flex items-center gap-3">
                        <Checkbox name="accident" id="accident" />
                        <Label htmlFor="accident" name="Accident vehicle" className="text-sm cursor-pointer" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Checkbox name="maintenance" id="maintenance" />
                    <Label htmlFor="maintenance" name="Complete maintenance log" className="text-sm cursor-pointer" />
                </div>

                <div className="flex items-center gap-3">
                    <Checkbox name="non-smoking" id="non-smoking" />
                    <Label htmlFor="non-smoking" name="Non-smoking vehicle" className="text-sm cursor-pointer" />
                </div>
            </div>
        </div>
    )
}