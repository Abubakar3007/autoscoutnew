import Checkbox from "@/components/ui/Checkbox";
import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function Environment() {
    const emissionData = [
        { id: 1, name: "Euro 1" },
        { id: 2, name: "Euro 2" },
        { id: 3, name: "Euro 3" },
        { id: 4, name: "Euro 4" },
        { id: 5, name: "Euro 5" },
        { id: 6, name: "Euro 6" },
        { id: 7, name: "Euro 6c" },
        { id: 8, name: "Euro 6d" },
        { id: 9, name: "Euro 6d-TEMP" },
    ]
    return (
        <div className="p-5 rounded-md sm:p-6 bg-white shadow-box-shadow">

            <Heading as="h2" className="text-xl mb-6">Environment</Heading>

            <div className="grid gap-4">
                <div>
                    <Label
                        htmlFor="emission"
                        name="Emission class (min)"
                        className="mb-1"
                    />

                    <CustomSelect
                        data={emissionData}
                        name="emission"
                        placeholder="Choose"
                        className="w-full"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="invisible mb-1 text-sm font-semibold opacity-0">hide</span>

                    <div className="flex items-center gap-3">
                        <Checkbox
                            name="shoot"
                            id="shoot"
                        />

                        <Label
                            htmlFor="shoot"
                            name="Shoot particle filter"
                            className="text-sm cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}