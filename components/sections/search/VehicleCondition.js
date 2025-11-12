import Checkbox from "@/components/ui/Checkbox";
import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";

export default function VehicleCondition() {

    const ownerOptions = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
    ];

    const vehiclesList = [
        { value: "new", label: "New" },
        { value: "used", label: "Used" },
        { value: "annual", label: "Annual car" },
        { value: "antique", label: "Antique car" },
        { value: "demonstration", label: "Demonstration car" },
        { value: "daily", label: "Daily admission" },
    ]

    return (
        <div className="p-5 mb-6 rounded-md sm:mb-10 sm:p-6 bg-white shadow-box-shadow">

            <Heading as="h2" className="mb-6 text-xl leading-8">Vehicle condition</Heading>

            {/* owner,accident & guarantee */}
            <div className="grid gap-4 car-grid">

                <div>
                    <Label
                        htmlFor="owner"
                        name="Vehicle owner (Max)"
                        className="mb-1 leading-6"
                    />

                    <CustomSelect
                        options={ownerOptions}
                        name="owner"
                        placeholder="Choose"
                    />

                </div>

                {/* accident & guarantee */}
                <div className="flex flex-col justify-center">
                    <span className="invisible mb-1 text-sm font-semibold opacity-0">hide</span>

                    <div className="flex items-center gap-3">
                        <Checkbox
                            name="guarantee"
                            id="accident"
                        />

                        <Label
                            htmlFor="accident"
                            name="Accident vehicle"
                            className="cursor-pointer text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <span className="invisible mb-1 text-sm font-semibold opacity-0">hide</span>

                    <div className="flex items-center gap-3">
                        <Checkbox
                            name="guarantee"
                            id="guarantee"
                        />

                        <Label
                            htmlFor="guarantee"
                            name="Guarantee"
                            className="cursor-pointer text-sm"
                        />
                    </div>
                </div>
            </div>

            {/*  vehicle about list */}
            <ul className="grid gap-4 car-grid mt-4 text-sm">
                {vehiclesList.map((vehicle) => (
                    <li
                        className="flex items-center gap-3"
                        key={vehicle.value}
                    >
                        <Checkbox
                            name="guarantee"
                            id={vehicle.value}
                        />

                        <Label
                            htmlFor={vehicle.value}
                            name={vehicle.label}
                            className="cursor-pointer"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}