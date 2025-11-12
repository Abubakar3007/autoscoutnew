import Checkbox from "@/components/ui/Checkbox";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";

export default function Colors() {

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

    const colorClass = ["beige", "blue-custom", "brown", "bronze", "yellow", "gold", "gray-custom", "green-custom", "orange", "black", "silver", "purple", "white"];

    const getColorClass = (color) =>{
        const match = colorClass.find((cls)=>cls.toLowerCase().includes(color.toLowerCase()));

        return match || "";
    }

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="colors">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Colors</Heading>

            {/* fields */}
            <div>
                {/* Exterior colors */}
                <div className="mb-6" data-color-type="exterior-colors">
                    <h4 className="mb-6 text-base font-medium">Exterior color</h4>
                    {/*  list of colors */}
                    <ul className="grid gap-4 grid-cols-color-grid-post [&>li>label]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                        {colors.map((data, index) => {
                            const colorClass = getColorClass(data.label);
                            return (
                                <li key={index} className={colorClass}>
                                    <Checkbox
                                        name="colors"
                                        id={`ex-color-${index}`}
                                        className={`bg-${colorClass} border-${colorClass} checked:bg-${colorClass} checked:border-${colorClass}`}
                                    />
                                    <Label htmlFor={`ex-color-${index}`} name={data.label} />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Interior colors */}
                <div className="mb-6" data-color-type="interior-colors">
                    <h4 className="mb-6 text-base font-medium">Interior color</h4>
                    {/*  list of colors */}
                    <ul className="grid gap-4 grid-cols-color-grid-post [&>li>label]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                        {colors.map((data, index) => {
                            const colorClass = getColorClass(data.label);
                            return (
                                <li key={index} className={colorClass}>
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


                {/* Material of cars */}
                <div>
                    <h4 className="mb-6 text-base font-medium">Interior decoration</h4>

                    {/*  Material */}
                    <ul className="grid gap-4 grid-cols-color-grid-post [&>li>label]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                        {
                            materialData.map((data,index)=>(
                                <li key={index}>
                                    <Checkbox
                                        name="colors"
                                        id={`material-${index}`}
                                        className={colorClass}
                                    />
                                    <Label htmlFor={`material-${index}`} name={data.label} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}