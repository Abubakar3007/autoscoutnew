"use client";
import CustomSelect from "@/components/ui/CustomSelect";
import Info from "@/components/ui/Info";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function VehicleData({ vehicleData, setVehicleData }) {
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

  const handleChange = (field, value) => {
    setVehicleData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-ad="vehicle">
      <h3 className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Vehicle data</h3>

      <div className="grid grid-cols-2 gap-4">
        {/* Brand */}
        <div>
          <Label htmlFor="brand" name="Brand*" className="mb-1" />
          <CustomSelect
            data={brandData}
            name="brand"
            placeholder="Choose"
            onSelect={handleChange} // ✅ send brand value to parent
          />
        </div>

        {/* Model */}
        <div>
          <Label htmlFor="model" name="Model*" className="mb-1" />
          <CustomSelect
            data={modelData}
            name="model"
            placeholder="Choose"
            onSelect={handleChange} // ✅ send model value to parent
          />
        </div>

        {/* Variant */}
        <div className="col-span-2">
          <div className="flex gap-2 items-center">
            <Label htmlFor="variant" name="Variant*" className="mb-1" />
            <Info />
          </div>
          <Input
            id="variant"
            placeholder="e.g. B. Plus, GTI, 218, etc."
            name="variant"
            value={vehicleData.variant}
            onChange={(e) => handleChange("variant", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
