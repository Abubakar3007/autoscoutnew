import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

export default function HeroForm() {

    const brandData = [
        { label: "Abarth", value: "1" },
        { label: "AC", value: "2" },
        { label: "Acura", value: "3" },
        { label: "Aiways", value: "4" },
        { label: "Aixam", value: "5" },
        { label: "Alfa Romeo", value: "6" },
        { label: "ALPINA", value: "7" },
        { label: "Artega", value: "8" },
        { label: "Asia Motors", value: "9" },
        { label: "Aston Martin", value: "10" },
        { label: "Audi", value: "11" },
    ];

    const modelData = [
        { label: "Axioma", value: "1" }
    ];

    const priceData = [
        { label: "10000", value: "1" },
        { label: "20000", value: "2" },
        { label: "30000", value: "3" },
    ];

    const registrationData = [
        { label: 2025, value: "1" },
        { label: 2024, value: "2" },
        { label: 2023, value: "3" },
    ];

    return (
        <div>
            <form>

                {/* data input */}
                <div className="space-y-4">

                    {/*  brand */}
                    <div>
                        <Label
                            htmlFor="brand"
                            name="Brand"
                            className="mb-2"
                        />

                        <CustomSelect
                            data={brandData}
                            name="brand"
                            placeholder="Choose"
                        />
                    </div>

                    {/* model */}
                    <div>
                        <Label
                            htmlFor="model"
                            name="Model"
                            className="mb-2"
                        />
                        <CustomSelect
                            data={modelData}
                            name="model"
                            placeholder="Choose"
                        />

                    </div>

                    {/* Price */}
                    <div>

                        <Label
                            htmlFor="price-from"
                            name="Price"
                            className="mb-2"
                        />
                        <div className="flex gap-2">

                            <CustomSelect
                                data={priceData}
                                name="price"
                                placeholder="From"
                            />

                            <CustomSelect
                                data={priceData}
                                name="price"
                                placeholder="To"
                            />
                        </div>
                    </div>

                    {/* Registration */}
                    <div>
                        <Label
                            htmlFor="registration-from"
                            name="Registration"
                            className="mb-2"
                        />

                        <div className="flex gap-2">
                            <CustomSelect
                                data={registrationData}
                                name="registration"
                                placeholder="From"
                            />

                            <CustomSelect
                                data={registrationData}
                                name="registration"
                                placeholder="To"
                            />
                        </div>
                    </div>

                    {/* city */}
                    <div>
                        <Label
                            htmlFor="city"
                            name="City"
                            className="mb-2"
                        />
                        <div className="relative">
                            <Input
                                id="city"
                                placeholder="Z.B. Wien oder 1010"
                            />

                            {/* dropdown list */}
                            <ul
                                className="select-dropdown hidden text-sm [&>li]:py-3 [&>li]:px-4 [&>li]:cursor-pointer [&>li:hover]:bg-blue-500/10"
                                data-input="filter_input">
                                <li>5081 Anif</li>
                                <li>5090 Lofer</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* search & advance buttons */}
                <div className="flex gap-3 mt-6">
                    <button
                        type="submit"
                        className="w-full primary-btn"
                        onclick="window.location.href='list_page/'"
                    >
                        <span className="align-middle">Search</span>
                        <img
                            src="/icons/search-white.svg"
                            alt="Search icon"
                            className="inline-block ml-1"
                        />
                    </button>

                    {/* Advance search */}
                    <Link
                        href="/advance_search/"
                        className="grid flex-shrink-0 w-12 h-12 border border-blue-500 rounded-md place-items-center bg-neutral-50"
                    >
                        <img
                            src="/icons/advance-search.svg"
                            alt="Advance search"
                        />
                    </Link>
                </div>
            </form>
        </div>
    )
}