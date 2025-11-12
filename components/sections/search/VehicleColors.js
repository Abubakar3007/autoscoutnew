import Heading from "@/components/ui/Heading";
import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";

export default function VehicleColors() {

    const colors = [
        { label: "Beige", value: "1" },
        { label: "Blue", value: "2" },
        { label: "Brown", value: "3" },
        { label: "Bronze", value: "4" },
        { label: "Yellow", value: "5" },
        { label: "Gold", value: "6" },
        { label: "Gray", value: "7" },
        { label: "Green", value: "8" },
        { label: "Orange", value: "9" },
        { label: "Red", value: "10" },
        { label: "Black", value: "11" },
        { label: "Silver", value: "12" },
        { label: "Purple", value: "13" },
        { label: "White", value: "14" },
    ];

    const materialData = [
        { label: "Alcantara", value: "1" },
        { label: "Material", value: "2" },
        { label: "Partial leather", value: "3" },
        { label: "Velor", value: "4" },
        { label: "Full leather", value: "5" },
        { label: "Other", value: "6" },
    ]

    const colorClass = ["beige", "blue-custom", "brown", "bronze", "yellow", "gold", "gray-custom", "green-custom", "orange", "red-custom", "black", "silver", "purple", "white"];

    const getColorClass = (color) => {
        const match = colorClass.find((cls) => cls.toLowerCase().includes(color.toLowerCase()));

        return match || "";
    }

    return (
        <>
            <div className="p-5 mb-6 rounded-md sm:mb-10 sm:p-6 bg-white shadow-box-shadow">

                <Heading as="h2" className="mb-6 text-xl">Exterior color</Heading>

                {/*  list of colors */}
                <ul className="grid gap-4 color-grid [&>li>label]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                    {colors.map((data, index) => {
                        const colorClass = getColorClass(data.label);
                        return (
                            <li key={index}>
                                <Checkbox
                                    name="colors"
                                    id={`in-color-${index}`}
                                    className={colorClass}
                                />
                                <Label htmlFor={`in-color-${index}`} name={data.label} />
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Interior color */}
            <div className="p-5 mb-6 rounded-md sm:mb-10 sm:p-6 bg-white shadow-box-shadow">

                <Heading as="h2" className="mb-6 text-xl">Upholstery color</Heading>

                {/*  list of colors */}
                <ul className="grid gap-4 color-grid [&>li>label]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                    {colors.map((data, index) => {
                        const colorClass = getColorClass(data.label);
                        return (
                            <li key={index}>
                                <Checkbox
                                    name="colors"
                                    id={`ex-color-${index}`}
                                    className={colorClass}
                                />
                                <Label htmlFor={`ex-color-${index}`} name={data.label} />
                            </li>
                        );
                    })}
                </ul>

                {/* material type */}
                <div className="mt-6">

                    <h4 className="mb-4 text-base font-medium leading-6">Interior decoration</h4>

                    <ul className="grid gap-4 car-grid mt-4 text-sm">
                        {materialData.map((data, index) => {
                            return (
                                <li
                                    className="flex items-center gap-3"
                                    key={index}>
                                    <Checkbox
                                        name="colors"
                                        id={`material-${index}`}
                                        className={colorClass}
                                    />
                                    <Label htmlFor={`material-${index}`} name={data.label} className="cursor-pointer" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}