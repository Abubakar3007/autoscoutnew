import CustomSelect from "@/components/ui/CustomSelect";
import Label from "@/components/ui/Label";

export default function ListHeader() {
    const sortData = [
        { label: "Price ascending", value: "price-ascending" },
        { label: "Price descending", value: "price-descending" },
        { label: "Newest offers first", value: "age-descending" },
        { label: "Mileage increasing", value: "mileage-ascending" },
        { label: "Mileage in descending order", value: "mileage-descending" },
        { label: "Performance increasing", value: "power-ascending" },
        { label: "Performance descending", value: "power-descending" },
        { label: "First registration ascending", value: "year-ascending" },
        { label: "First registration descending", value: "year-descending" },
    ];
    return (
        <div className="flex items-center justify-between p-4 rounded-md sm:p-6 box bg-white shadow-box-shadow">

            <h1 className="text-xl font-semibold leading-9 sm:text-[28px]">2,610 Offers for Porsche</h1>

            {/* In this filter when user select any then page reload according to select value */}
            <div className="hidden w-full max-w-[257px] lg:block">
                <Label
                    htmlFor="sort"
                    name="Sort by"
                    className="mb-1"
                />

                <CustomSelect
                    data={sortData}
                    name="sort"
                    placeholder="Choose"
                />
            </div>
        </div>
    )
}