import CustomSelect from "@/components/ui/CustomSelect";
import Label from "@/components/ui/Label";

export default function DealerSort() {

    const sortData = [
        {label:"Price ascending",value:"1"},
        {label:"Price descending",value:"2"},
        {label:"Newest offers first",value:"3"},
        {label:"Mileage increasing",value:"4"},
        {label:"Mileage in descending order",value:"5"},
        {label:"Performance increasing",value:"6"},
        {label:"Performance descending",value:"7"},
        {label:"First registration ascending",value:"8"},
        {label:"First registration descending",value:"9"},
    ]

    return (
        <div>
            <div className="flex items-center justify-between p-4 mt-10 rounded-md sm:p-6 bg-white shadow-box-shadow">

                <h1 className="text-2xl font-semibold md:text-[28px]">2,610 Offers for Porsche</h1>

                {/* sort dropdown */}
                <div className="flex-shrink-0 md:w-full md:max-w-[257px]">
                    <Label
                        htmlFor="sort"
                        name="Sort"
                        className="mb-1 sm:block hidden"
                    />

                    {/* Custom select */}
                    <CustomSelect
                        data={sortData}
                        name="sort"
                        placeholder="Choose"
                    />
                </div>
            </div>

            {/*  responsive filter button */}
            <button className="mt-6 primary-btn-sm lg:hidden">
                <img
                    src="assets/images/filter-icon.svg"
                    alt="Filter icon"
                    className="inline-block w-4 mr-1"
                />
                <span className="align-middle">Filter</span>
            </button>
        </div>
    )
}