import Label from "@/components/ui/Label";
import ListSearchBox from "./ListSearchBox";
import ResponsiveSearchHeader from "./ResponsiveSearchHeader";
import CustomSelect from "@/components/ui/CustomSelect";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Colors from "../sellcar/Colors";
import Furnishing from "../sellcar/Furnishing";
import Features from "../search/Features";
import Environment from "../search/Environment";

export default function ListingFilter() {

    const brandOptions = [
        { value: "1", label: "Abarth" },
        { value: "2", label: "AC" },
        { value: "3", label: "Acura" },
        { value: "4", label: "Aiways" },
        { value: "5", label: "Aixam" },
        { value: "6", label: "Alfa Romeo" },
        { value: "7", label: "ALPINA" },
        { value: "8", label: "Artega" },
        { value: "9", label: "Asia Motors" },
        { value: "10", label: "Aston Martin" },
        { value: "11", label: "Audi" },
    ];

    const modelData = [
        { value: "1", label: "Abarth" },
        { value: "2", label: "AC" },
        { value: "3", label: "Acura" },
        { value: "4", label: "Aiways" },
        { value: "5", label: "Aixam" },
        { value: "6", label: "Alfa Romeo" },
        { value: "7", label: "ALPINA" },
        { value: "8", label: "Artega" },
        { value: "9", label: "Asia Motors" },
        { value: "10", label: "Aston Martin" },
        { value: "11", label: "Audi" },
    ];

    const bodyTypeData = [
        { value: "1", label: "Convertible" },
        { value: "2", label: "Coupe" },
        { value: "3", label: "Small car" },
        { value: "4", label: "Combi" },
        { value: "5", label: "Limousine" },
        { value: "6", label: "SUV" },
    ];

    const fuelData = [
        { value: "1", label: "Petrol" },
        { value: "2", label: "Diesel" },
        { value: "3", label: "Hybrid" },
        { value: "4", label: "Electric" },
    ];

    const registerData = [
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
        { value: "2018", label: "2018" },
        { value: "2017", label: "2017" },
        { value: "2016", label: "2016" },
    ]

    const priceData = [
        { value: "1000", label: "1000" },
        { value: "2000", label: "2000" },
        { value: "3000", label: "3000" },
        { value: "4000", label: "4000" },
        { value: "5000", label: "5000" },
        { value: "6000", label: "6000" },
    ]

    const countryData = [
        { value: "1", label: "Austria" },
        { value: "2", label: "Germany" },
        { value: "3", label: "Switzerland" },
        { value: "4", label: "Italy" },
        { value: "5", label: "France" },
        { value: "6", label: "Spain" },
    ]

    const radiusData = [
        { value: "1", label: "10 km" },
        { value: "2", label: "20 km" },
        { value: "3", label: "50 km" },
        { value: "4", label: "100 km" },
        { value: "5", label: "150 km" },
        { value: "6", label: "200 km" },
        { value: "7", label: "250 km" },
        { value: "8", label: "300 km" },
        { value: "9", label: "350 km" },
        { value: "10", label: "400 km" },
    ]

    const mileageData = [
        { value: "500", label: "500" },
        { value: "1000", label: "1000" },
        { value: "1500", label: "1500" },
        { value: "2000", label: "2000" },
        { value: "2500", label: "2500" },
        { value: "3000", label: "3000" },
        { value: "3500", label: "3500" },
        { value: "4000", label: "4000" },
        { value: "4500", label: "4500" },
        { value: "5000", label: "5000" },
    ]

    const transmissionData = [
        { value: "1", label: "Automatic" },
        { value: "2", label: "Manual" },
    ]

    const seatingData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
    ]

    const salesPersonData = [
        { value: "1", label: "All" },
        { value: "2", label: "Dealer" },
        { value: "3", label: "Private" },
    ]

    const carAboutData = [
        { value: "1", label: "New" },
        { value: "2", label: "Used" },
        { value: "3", label: "Needed" },
        { value: "4", label: "Annual car" },
        { value: "5", label: "Antique car" },
        { value: "6", label: "Lease" },
        { value: "7", label: "Demonstration car" },
        { value: "8", label: "Daily admission" },
    ]

    const otherDetailsData = [
        { value: "1", label: "Details 1" },
        { value: "2", label: "Details 2" },
        { value: "3", label: "Details 3" },
        { value: "4", label: "Details 4" },
        { value: "5", label: "Details 5" },
    ]

    return (
        <div
            className="sticky top-0 z-50 w-full lg:max-w-[335px] h-max lg:static"
            data-scroll="scroll_filter"
        >

            {/* save search button */}
            <button className="hidden w-full mb-4 primary-btn lg:block">
                <img
                    src="/icons/save-search.svg"
                    alt="Save search"
                    className="inline-block mr-1"
                />
                <span className="align-middle">Save search</span>
            </button>

            {/* my search box */}
            <ListSearchBox />

            {/* Filter wrapper */}
            <div
                className="hidden res_filter lg:block"
                data-popup="filter_popup"
            >

                {/* reponsive search header */}
                <ResponsiveSearchHeader />

                <div className="space-y-2">

                    {/* basic data & location */}
                    <div>
                        {/* dropdown button */}
                        <button
                            className="relative block w-full p-6 text-sm font-medium text-left filter-tab-btn active bg-white shadow-box-shadow cursor-pointer"
                            data-button="filter_btn"
                        >
                            <span>Basic data & location</span>
                            <img
                                src="/icons/dropdown-arrow.svg"
                                alt="Chevron down"
                                className="absolute w-4 -translate-y-1/2 right-6 top-1/2"
                            />
                        </button>

                        {/* dropdown content */}
                        <div
                            className="hidden p-6 space-y-4 border-t filter-tab-content active bg-white shadow-box-shadow border-neutral-400 rounded-b-xl"
                            data-filter="inner_filter"
                        >
                            {/* brand */}
                            <div>
                                <Label
                                    htmlFor="brand"
                                    name="Brand"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={brandOptions}
                                    name="brand"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* model */}
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

                            {/* variant */}
                            <div>
                                <Label
                                    htmlFor="variant"
                                    name="Variant"
                                    className="mb-1"
                                />

                                <Input
                                    id="city"
                                    placeholder="e.g.  B. Plus, GTI, 218, etc."
                                />
                            </div>

                            {/* body type */}
                            <div>
                                <Label
                                    htmlFor="body-type"
                                    name="Body type"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={bodyTypeData}
                                    name="body-type"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* fuel */}
                            <div>
                                <Label
                                    htmlFor="fuel-type"
                                    name="Fuel type"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={fuelData}
                                    name="fuel-type"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* Registration */}
                            <div>
                                <Label
                                    htmlFor="registration-from"
                                    name="Initial registration"
                                    className="mb-1"
                                />

                                <div className="flex gap-2">
                                    {/* from */}
                                    <CustomSelect
                                        data={registerData}
                                        name="registration-from"
                                        placeholder="From"
                                    />

                                    {/* To */}
                                    <CustomSelect
                                        data={registerData}
                                        name="registration-to"
                                        placeholder="To"
                                    />
                                </div>
                            </div>

                            {/* Price */}
                            <div>
                                <Label
                                    htmlFor="price-from"
                                    name="Price"
                                    className="mb-1"
                                />
                                <div className="flex gap-2">
                                    {/* price from */}
                                    <CustomSelect
                                        data={priceData}
                                        name="price-from"
                                        placeholder="From"
                                    />
                                    {/* price to */}
                                    <CustomSelect
                                        data={priceData}
                                        name="price-to"
                                        placeholder="To"
                                    />
                                </div>
                            </div>

                            {/* country */}
                            <div>
                                <Label
                                    htmlFor="country"
                                    name="Country"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={countryData}
                                    name="country"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* city */}
                            <div>
                                <Label
                                    htmlFor="zip-code"
                                    name="Zip code"
                                    className="mb-1"
                                />

                                <div className="relative">
                                    <Input
                                        id="zip-code"
                                        name="zip-code"
                                        placeholder="Z.B. Wien oder 1010"
                                    />
                                    {/* <!-- dropdown list --> */}
                                    <ul
                                        className="select-dropdown text-sm [&>li]:py-3 [&>li]:px-4 [&>li]:cursor-pointer [&>li:hover]:bg-blue-500/10"
                                        data-input="filter_input"
                                    >
                                        <li>5081 Anif</li>
                                    </ul>
                                </div>
                            </div>

                            {/* radius */}
                            <div>
                                <Label
                                    htmlFor="radius"
                                    name="Radius"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={radiusData}
                                    name="radius"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* <mileage */}
                            <div>
                                <Label
                                    htmlFor="mileage"
                                    name="Mileage"
                                    className="mb-1"
                                />

                                {/* performance */}
                                <div className="flex gap-2">

                                    {/* performance select */}
                                    <CustomSelect
                                        data={mileageData}
                                        name="mileage"
                                        placeholder="Choose"
                                    />

                                    {/* performance from to */}
                                    <div className="flex gap-2">

                                        <div className="flex-1">
                                            <Label
                                                htmlFor="performance-from"
                                                name="From"
                                                className="mb-1"
                                            />

                                            <Input
                                                id="performance-from"
                                                placeholder="From"
                                                name="performance"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <Label
                                                htmlFor="performance-to"
                                                placeholder="To"
                                                name="Performance"
                                            />

                                            <Input
                                                id="performance-to"
                                                placeholder="To"
                                                name="performance"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* transmission */}
                            <div>
                                <Label
                                    htmlFor="transmission"
                                    name="Transmission"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={transmissionData}
                                    name="transmission"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* seating */}
                            <div>
                                <Label
                                    htmlFor="seating"
                                    name="Seating"
                                    className="mb-1"
                                />

                                <div className="flex gap-2">
                                    {/* from */}
                                    <CustomSelect
                                        data={seatingData}
                                        name="seating"
                                        placeholder="Choose"
                                    />

                                    {/* to */}
                                    <CustomSelect
                                        data={seatingData}
                                        name="seating"
                                        placeholder="Choose"
                                    />
                                </div>
                            </div>

                            {/* sales person */}
                            <div>
                                <Label
                                    htmlFor="sales-person"
                                    name="Sales person"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={salesPersonData}
                                    name="sales-person"
                                    placeholder="Choose"
                                />
                            </div>

                            {/* vehicle condition */}
                            <div>
                                <h5 className="mb-4 text-sm font-semibold">Vehicle condition</h5>

                                {/* vehicle about list */}
                                <ul className="grid gap-4 sm:grid-cols-card-grid [&>li>label]:cursor-pointer mt-4 [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                                    {
                                        carAboutData.map((item, index) => (
                                            <li key={index}>
                                                <Checkbox
                                                    name="about-car"
                                                    id={item.value}
                                                />
                                                <label htmlFor={item.value}>{item.label}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Exterior colors */}
                    <div>
                        {/* dropdown button */}
                        <button
                            className="relative block w-full p-6 text-sm cursor-pointer font-medium text-left filter-tab-btn active bg-white shadow-box-shadow"
                            data-button="filter_btn"
                        >
                            <span>Exterior color</span>
                            <img
                                src="/icons/dropdown-arrow.svg"
                                alt="Chevron down"
                                className="absolute w-4 -translate-y-1/2 right-6 top-1/2"
                            />
                        </button>

                        {/* dropdown content */}
                        <div
                            className="hidden p-6 border-t filter-tab-content active bg-gray-50 shadow-box-shadow border-neutral-400 rounded-b-xl"
                            data-filter="inner_filter">
                            <Colors />
                        </div>
                    </div>

                    {/* Interior colors */}
                    <div>
                        {/* dropdown button */}
                        <button
                            className="relative block w-full p-6 text-sm font-medium text-left filter-tab-btn active bg-white cursor-pointer shadow-box-shadow"
                            data-button="filter_btn"
                        >
                            <span>Exterior color</span>
                            <img
                                src="/icons/dropdown-arrow.svg"
                                alt="Chevron down"
                                className="absolute w-4 -translate-y-1/2 right-6 top-1/2"
                            />
                        </button>

                        {/* dropdown content */}
                        <div
                            className="hidden p-6 border-t filter-tab-content active bg-gray-50 shadow-box-shadow border-neutral-400 rounded-b-xl"
                            data-filter="inner_filter">
                            <Colors />
                        </div>
                    </div>

                    {/* Furnishing */}
                    <div>
                        {/* dropdown button */}
                        <button
                            className="relative block w-full p-6 text-sm font-medium text-left filter-tab-btn active bg-white cursor-pointer shadow-box-shadow"
                            data-button="filter_btn"
                        >
                            <span>Furnishing</span>
                            <img
                                src="/icons/dropdown-arrow.svg"
                                alt="Chevron down"
                                className="absolute w-4 -translate-y-1/2 right-6 top-1/2"
                            />
                        </button>

                        {/* <!-- dropdown content --> */}
                        <div
                            className="hidden p-6 space-y-4 border-t filter-tab-content active bg-gray-50 shadow-box-shadow border-neutral-400 rounded-b-xl"
                            data-filter="inner_filter">
                            <Features />
                        </div>
                    </div>

                    {/* Environment */}
                    <div>
                        {/* dropdown button */}
                        <button
                            className="relative block w-full p-6 text-sm font-medium text-left filter-tab-btn active bg-gray-50 shadow-box-shadow"
                            data-button="filter_btn"
                        >
                            <span>Environment</span>
                            <img
                                src="assets/images/dropdown-arrow.svg"
                                alt="Chevron down"
                                className="absolute w-4 -translate-y-1/2 right-6 top-1/2"
                            />
                        </button>

                        {/* <!-- dropdown content --> */}
                        <div
                            className="hidden p-6 space-y-4 border-t filter-tab-content active bg-gray-50 shadow-box-shadow border-neutral-400 rounded-b-xl"
                            data-filter="inner_filter">
                            <Environment />
                        </div>
                    </div>

                    {/* Other details */}
                    <div>
                        {/* dropdown button */}
                        <button
                            className="relative block w-full p-6 text-sm font-medium text-left filter-tab-btn active bg-gray-50 shadow-box-shadow"
                            data-button="filter_btn"
                        >
                            <span>Offer details</span>
                            <img
                                src="assets/images/dropdown-arrow.svg"
                                alt="Chevron down"
                                className="absolute w-4 -translate-y-1/2 right-6 top-1/2"
                            />
                        </button>

                        {/* dropdown content */}
                        <div
                            className="hidden p-6 space-y-4 border-t filter-tab-content active bg-gray-50 shadow-box-shadow border-neutral-400 rounded-b-xl"
                            data-filter="inner_filter">
                            <div>
                                <Label
                                    htmlFor="other-details"
                                    name="Other details"
                                    className="mb-1"
                                />

                                <CustomSelect
                                    data={otherDetailsData}
                                    name="other-details"
                                    id="other-details"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search button */}
                <div className="hidden filter_hit">
                    <button className="medium_btn btn_bg">Search (10)</button>
                </div>
            </div>
        </div>
    )
}