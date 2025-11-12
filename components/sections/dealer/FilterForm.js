import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function FilterForm() {

    const cityData = [
        { label: "Solovania", value: "solovania" },
        { label: "Solovania", value: "solovania" },
        { label: "Solovania", value: "solovania" },
        { label: "Solovania", value: "solovania" },
        { label: "Solovania", value: "solovania" },
    ]

    return (
        <div className="sticky top-0 hidden w-full rounded-md bg-white shadow-box-shadow max-w-[335px] lg:block">
            <h3 className="p-4 text-lg font-semibold border-b border-gray-100">Filter</h3>

            {/* form for search  */}
            <form className="p-6 space-y-4">
                {/* dealer name */}
                <div>
                    <Label htmlFor="dealer-name" name="Dealer name" className="mb-1" />
                    <Input
                        id="dealer-name"
                        placeholder="dealer name"
                    />
                </div>

                {/* city */}
                <div>
                    <Label htmlFor="city" name="City" className="mb-1" />
                    <CustomSelect data={cityData} name="city" placeholder="Choose" />
                </div>

                {/* Zip code */}
                <div>
                    <Label htmlFor="zip-code" name="City/zip code" className="mb-1"/>
                    <Input id="zip-code" placeholder="zip code" />
                </div>
            </form>
        </div>
    )
}