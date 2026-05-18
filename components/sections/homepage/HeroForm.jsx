"use client";
import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroForm() {

    const router = useRouter();
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        priceFrom: "",
        priceTo: "",
        registrationFrom: "",
        registrationTo: "",
    });

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

    const handleSelect = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value, }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = new URLSearchParams(formData).toString();
        router.push(`/listing/?${query}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

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
                            onSelect={handleSelect}
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
                            onSelect={handleSelect}
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
                                name="priceFrom"
                                placeholder="From"
                                onSelect={handleSelect}
                            />

                            <CustomSelect
                                data={priceData}
                                name="priceTo"
                                placeholder="To"
                                onSelect={handleSelect}
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
                                name="registrationFrom"
                                placeholder="From"
                                onSelect={handleSelect}
                            />

                            <CustomSelect
                                data={registrationData}
                                name="registrationTo"
                                placeholder="To"
                                onSelect={handleSelect}
                            />
                        </div>
                    </div>
                </div>

                {/* search & advance buttons */}
                <div className="flex gap-3 mt-6">
                    <button
                        type="submit"
                        className="w-full primary-btn"
                    // onClick={() => router.push("/listing")}
                    >
                        <span className="align-middle">Search</span>
                        <img
                            src="/icons/search-white.svg"
                            alt="Search icon"
                            className="inline-block ml-2"
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