import CustomSelect from "@/components/ui/CustomSelect";
import Label from "@/components/ui/Label";

export default function DealerVehicleFilter() {

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

    const registrationData = [
        { label: 2025, value: "1" },
        { label: 2024, value: "2" },
        { label: 2023, value: "3" },
    ];

    const priceData = [
        { label: "10000", value: "1" },
        { label: "20000", value: "2" },
        { label: "30000", value: "3" },
    ];

    const mileageData = [
        { label: "10000", value: "1" },
        { label: "20000", value: "2" },
        { label: "30000", value: "3" },
    ];

    return (
        <div className="fixed inset-0 hidden w-full h-full overflow-y-auto rounded-md lg:top-0 lg:inset-auto lg:sticky bg-white shadow-box-shadow z-1000 lg:max-w-[335px] no-scroll lg:h-max lg:block">
            <div className="flex items-center justify-between p-4 text-lg font-semibold border-b border-gray-100">
                <h3>Filter</h3>
                <button className="lg:hidden">
                    <img
                        src="assets/images/close-btn.svg"
                        alt="Close"
                        className="w-5"
                    />
                </button>
            </div>
            {/*  form for search */}
            <form className="p-6 space-y-4">

                {/* Brand */}
                <div>
                    <Label
                        htmlFor="brand"
                        name="Brand"
                        className="mb-1"
                    />
                    <CustomSelect
                        data={brandData}
                        name="brand"
                        placeholder="Choose"
                    />
                </div>

                {/* Model */}
                <div>
                    <Label
                        htmlFor="model"
                        name="Model"
                        className="mb-1"
                    />
                    <CustomSelect
                        data={modelData}
                        name="model"
                        placeholder="Choose"
                    />
                </div>

                {/* Registration */}
                <div>
                    <Label
                        htmlFor="registration"
                        name="Registration"
                        className="mb-1"
                    />

                    <div className="flex gap-2">
                        {/* from */}
                        <CustomSelect
                            data={registrationData}
                            name="registration"
                            placeholder="Choose"
                        />

                        {/* to */}
                        <CustomSelect
                            data={registrationData}
                            name="registration"
                            placeholder="Choose"
                        />
                    </div>
                </div>

                {/* Price */}
                <div>
                    <Label
                        htmlFor="price-form"
                        name="Price"
                        className="mb-1"
                    />

                    <div className="flex gap-2">
                        {/* from */}
                        <CustomSelect
                            data={priceData}
                            name="price"
                            placeholder="Choose"
                        />

                        {/* to */}
                        <CustomSelect
                            data={priceData}
                            name="price"
                            placeholder="Choose"
                        />
                    </div>
                </div>

                {/* Mileage */}
                <div>
                    <Label
                        htmlFor="mileage"
                        name="Mileage"
                        className="mb-1"
                    />

                    <CustomSelect
                        data={mileageData}
                        name="mileage"
                        placeholder="Choose"
                    />
                </div>
            </form>
        </div>
    )
}