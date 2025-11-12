"use client"
import CustomSelect from '@/components/ui/CustomSelect';
import CustomSelectCheckbox from '@/components/ui/CustomSelectCheckbox';
import Heading from '@/components/ui/Heading';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { useState } from 'react';
export default function BasicInfo() {

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

    const bodyTypeData = [
        { label: "Sedan", value: "1" },
        { label: "Hatchback", value: "2" },
        { label: "Coupe", value: "3" },
        { label: "Convertible", value: "4" },
        { label: "SUV", value: "5" },
        { label: "Wagon", value: "6" },
        { label: "MPV", value: "7" },
        { label: "Crossover", value: "8" },
        { label: "Pickup", value: "9" },
        { label: "Offroad", value: "10" },
    ]

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

    const fuelTypeData = [
        { label: "Petrol", value: "1" },
        { label: "Diesel", value: "2" },
        { label: "Hybrid", value: "3" },
        { label: "Electric", value: "4" },
    ]

    const radiusData = [
        { label: "10 km", value: "1" },
        { label: "20 km", value: "2" },
        { label: "50 km", value: "3" },
        { label: "100 km", value: "4" },
        { label: "150 km", value: "5" },
        { label: "200 km", value: "6" },
        { label: "250 km", value: "7" },
        { label: "300 km", value: "8" },
        { label: "350 km", value: "9" },
        { label: "400 km", value: "10" },
    ]

    const mileageData = [
        { label: "500", value: "1" },
        { label: "1000", value: "2" },
        { label: "1500", value: "3" },
        { label: "2000", value: "4" },
        { label: "2500", value: "5" },
        { label: "3000", value: "6" },
        { label: "3500", value: "7" },
        { label: "4000", value: "8" },
        { label: "4500", value: "9" },
        { label: "5000", value: "10" },
    ]

    const performanceData = [
        { label: "PS", value: "ps" },
        { label: "KW", value: "kw" },
    ]

    const doorsData = [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ]

    const countryData = [
        { label: "All", value: "all" },
        { label: "USA", value: "usa" },
        { label: "Canada", value: "canada" },
        { label: "UK", value: "uk" },
        { label: "Germany", value: "germany" },
        { label: "France", value: "france" },
        { label: "Spain", value: "spain" },
        { label: "Italy", value: "italy" },
        { label: "Japan", value: "japan" },
        { label: "China", value: "china" },
    ]

    const transmissionData = [
        { label: "Automatic", value: "automatic" },
        { label: "Manual", value: "manual" },
    ]

    const seatsData = [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ]

    const salesPersonData = [
        { label: "All", value: "all" },
        { label: "Dealer", value: "dealer" },
        { label: "Private", value: "private" },
    ]

    const cityDataList = ["Anif", "Burgas", "Varna", "Sofia", "Plovdiv", "Ruse"];

    const [cityData, setCityData] = useState('');

    const [filteredCities, setFilteredCities] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const handleCityChange = (e) => {
        const value = e.target.value;
        setCityData(value);

        // if value not match 
        if (value.trim() === "") {
            setFilteredCities([]);
            setIsOpen(false);
            return;
        }

        const filtered = cityDataList.filter((city) => city.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

        setFilteredCities(filtered);

        setIsOpen(filtered.length > 0);
    };


    // When user select
    // Handle city selection
    const handleSelectCity = (city) => {
        setCityData(city);
        setFilteredCities([]);
        setIsOpen(false);
    };

    return (
        <div className="p-5 mb-6 rounded-md sm:mb-10 sm:p-6 bg-white shadow-box-shadow">

            <Heading as='h2' className='text-xl mb-6 leading-8'>Basic data & location</Heading>

            <div className="grid gap-4 car-grid">

                {/* Brand */}
                <div>
                    <Label
                        htmlFor="brand"
                        name="Brand"
                        className='mb-1'
                    />

                    <CustomSelect
                        data={brandData}
                        name="brand"
                        placeholder='Choose'
                    />
                </div>

                {/* model */}
                <div>
                    <Label
                        htmlFor="model"
                        name="Model"
                        className='mb-1'
                    />

                    <CustomSelect
                        data={modelData}
                        name="model"
                        placeholder='Choose'
                    />
                </div>

                {/* variant */}
                <div>
                    <Label
                        htmlFor="variant"
                        name="Variant"
                        className='mb-1'
                    />

                    <Input
                        id="variant"
                        placeholder="e.g.  B. Plus, GTI, 218, etc."
                    />
                </div>

                {/* body type */}
                <div>
                    <Label
                        htmlFor="body-type"
                        name="Body type"
                        className='mb-1'
                    />

                    <CustomSelectCheckbox
                        data={bodyTypeData}
                        name="body-type"
                        placeholder='Choose'
                    />
                </div>

                {/* fuel */}
                <div>
                    <Label
                        htmlFor="fuel-type"
                        name="Fuel type"
                        className='mb-1'
                    />
                    <CustomSelectCheckbox
                        data={fuelTypeData}
                        name="fuel-type"
                        placeholder='Choose'
                    />
                </div>

                {/*  Registration */}
                <div>
                    <Label
                        htmlFor="registration"
                        name="Registration"
                        className='mb-1'
                    />

                    <div className="flex gap-2">
                        {/* from */}
                        <CustomSelect
                            data={registrationData}
                            name="registration"
                            placeholder='From'
                        />

                        {/* to */}
                        <CustomSelect
                            data={registrationData}
                            name="registration"
                            placeholder='To'
                        />
                    </div>
                </div>

                {/* Price */}
                <div>
                    <Label
                        htmlFor="price-from"
                        name="Price"
                        className='mb-1'
                    />

                    <div className="flex gap-2">
                        {/* from */}
                        <CustomSelect
                            data={priceData}
                            name="price-from"
                            placeholder='From'
                        />

                        {/* to */}
                        <CustomSelect
                            data={priceData}
                            name="price-to"
                            placeholder='To'
                        />
                    </div>
                </div>

                {/* country */}
                <div>
                    <Label
                        htmlFor="country"
                        name="Country"
                        className='mb-1'
                    />

                    <CustomSelect
                        data={countryData}
                        name="country"
                        placeholder='Choose'
                    />
                </div>

                {/* city */}
                <div>
                    <Label
                        htmlFor="city"
                        name="City"
                        className='mb-1'
                    />
                    <div className="relative">
                        <Input
                            id="city"
                            placeholder="Enter city"
                            value={cityData}
                            onChange={handleCityChange}
                            onFocus={() => {
                                // show all cities when focused and input is empty
                                if (cityData.trim() === "") {
                                    setFilteredCities(cityDataList);
                                    setIsOpen(true);
                                }
                            }}
                        />
                        {/* dropdown list */}
                        {
                            isOpen && (
                                <ul
                                    className="select-dropdown text-sm"
                                    role="listbox"
                                    data-input="filter_input"
                                >
                                    {filteredCities.length > 0 ? (
                                        filteredCities.map((city, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelectCity(city)}
                                                className="py-3 px-4 cursor-pointer hover:bg-blue-500/10"
                                            >
                                                {city}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="py-3 px-4 text-neutral-500">No results found</li>
                                    )}
                                </ul>
                            )
                        }
                    </div>
                </div>

                {/* radius */}
                <div>
                    <Label
                        htmlFor="radius"
                        name="Radius"
                        className='mb-1'
                    />

                    <CustomSelect
                        data={radiusData}
                        name="radius"
                        placeholder='Choose'
                    />
                </div>

                {/* mileage */}
                <div>
                    <Label
                        htmlFor="mileage"
                        name="Mileage"
                        className='mb-1'
                    />
                    <CustomSelect
                        data={mileageData}
                        name="mileage"
                        placeholder='Choose'
                    />
                </div>

                {/* performance */}
                <div className="flex gap-2">

                    {/* performance select */}
                    <div className='w-[100px] flex-shrink-0'>
                        <Label
                            htmlFor="performance"
                            name="Performance"
                            className='mb-1'
                        />
                        <CustomSelect
                            data={performanceData}
                            name="performance"
                            placeholder='Choose'
                        />
                    </div>

                    {/* performance from to */}
                    <div className="flex gap-2">

                        <div className="flex-1">
                            <Label
                                htmlFor="performance-form"
                                name="From"
                                className='mb-1'
                            />

                            <Input
                                id="performance-from"
                                placeholder="From"
                            />
                        </div>

                        <div className="flex-1">
                            <Label
                                htmlFor="performance-to"
                                name="To"
                                className='mb-1'
                            />

                            <Input
                                id="performance-to"
                                placeholder='To'
                            />
                        </div>
                    </div>
                </div>

                {/* transmission */}
                <div>
                    <Label
                        htmlFor="transmission"
                        name="Transmission"
                        className='mb-1'
                    />
                    <CustomSelect
                        data={transmissionData}
                        name="transmission"
                        placeholder='Choose'
                    />
                </div>

                {/* doors */}
                <div>
                    <Label
                        htmlFor="doors"
                        name="Number of doors"
                        className='mb-1'
                    />

                    <CustomSelect
                        data={doorsData}
                        name="doors"
                        placeholder='Choose'
                    />
                </div>

                {/* seating */}
                <div>
                    <Label
                        htmlFor="seating"
                        name="Seating"
                        className='mb-1'
                    />

                    <div className="flex gap-2">
                        <CustomSelect
                            data={seatsData}
                            name="seating"
                            placeholder='From'
                        />

                        <CustomSelect
                            data={seatsData}
                            name="seating"
                            placeholder='To'
                        />
                    </div>
                </div>

                {/* sales person */}
                <div>
                    <Label
                        htmlFor="sales-person"
                        name="Sales person"
                        className='mb-1'
                    />
                    <CustomSelect
                        data={salesPersonData}
                        name="sales-person"
                        placeholder='Choose'
                    />
                </div>
            </div>
        </div>
    )
}