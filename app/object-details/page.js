import DetailsBox from "@/components/sections/DetailsBox";
import Furnishing from "@/components/sections/Furnishing";
import Gallery from "@/components/sections/Gallery";
import ObjectDescription from "@/components/sections/ObjectDescription";
import ObjectFeatures from "@/components/sections/ObjectFeatures";
import ObjectHeading from "@/components/sections/ObjectHeading";
import SalesContactForm from "@/components/sections/SalesContactForm";
import Seller from "@/components/sections/Seller";
import SimilarCars from "@/components/sections/SimilarCars";
import Button from "@/components/ui/Button";

export default function ObjectDetails() {

    // basic data
    const basicData = [
        { title: "Body shape", value: "Coupe" },
        { title: "Seats", value: "2" },
        { title: "Doors", value: "2" },
        { title: "Drive type", value: "All-wheel drive" },
        { title: "Country version", value: "Austria" },
    ];

    // vehicle history
    const vehicleHistoryData = [
        { title: "Mileage", value: "159,084 km" },
        { title: "Initial registration", value: "12/2021" },
        { title: "Final inspection", value: "04/2022" },
        { title: "Service history maintained", value: "Yes" },
        { title: "Non-smoking vehicle", value: "Yes" },
        { title: "Vehicle owner", value: "1" },
    ];

    // technical data
    const technicalData = [
        { title: "Performance", value: "400 kW (544 hp)" },
        { title: "Transmission", value: "Automatic box" },
        { title: "Displacement", value: "3,800 cm³" },
        { title: "Gears", value: "7" },
        { title: "Cylinder", value: "6" },
    ];

    // power consumption data
    const fuelData = [
        { title: "Fuel", value: "Electric" },
        { 
          title: "Fuel consumption2.8", 
          value: "10.3 l/100 km (combined), 14.9 l/100 km (urban)" 
        },
        { title: "CO₂ emissions 2", value: "0 g/km (combined)" },
    ];
    
    // furnishing
    const furnishingData = [
        "Rear parking sensors",
        "Front parking sensors",
        "Air conditioner",
        "Automatic air conditioning",
        "Light detector",
        "Reversing radar",
        "Speed ​​regulator",
        "Leather upholstery",
        "Automatic parking assistance system",
        "Rear parking sensors",
        "Front parking sensors",
        "Air conditioner",
        "Automatic air conditioning",
        "Light detector",
        "Reversing radar",
        "Speed ​​regulator",
        "Leather upholstery",
        "Automatic parking assistance system",
        "Rear parking sensors"
    ];

    const colorData = [
        { title: "Exterior color", value: "Gray" },
        { title: "Color according to manufacturer", value: "M brooklyn gray" },
        { title: "Painting", value: "Metallic" },
        { title: "Interior color", value: "Black" },
        { title: "Interior decoration", value: "Full leather" },
    ];

    const descriptionText = `The 2024 BMW M4 Competition Coupe combines exceptional performance with modern design and advanced technology. Powered by a 3.0-liter twin-turbocharged inline-six engine, it delivers 503 horsepower and precise all-wheel drive handling.

The car features a sporty yet luxurious interior, wrapped in full black leather with aluminum trims and ambient lighting. Equipped with state-of-the-art driver assistance systems, adaptive suspension, and an intuitive infotainment system, the M4 offers an unparalleled driving experience both on track and on road.

With its striking “Brooklyn Gray Metallic” finish, aerodynamic lines, and signature M accents, the BMW M4 stands out as a true statement of power, style, and innovation.`;


    return (
        <section className="py-20">
            <div className="wrapper">
                <ObjectHeading />
                {/* all content object */}
                <div className="flex gap-10">
                    {/* left wrapper */}
                    <div className="w-full">
                        <Gallery />
                        <div className="space-y-10">
                            {/* Basic data */}
                            <DetailsBox heading="Basic information" dataId="basic-information" items={basicData} />
                            {/* Vehicle history */}
                            <DetailsBox heading="Vehicle history" dataId="vehicle-history" items={vehicleHistoryData} />
                            {/* Technical data */}
                            <DetailsBox heading="Technical data" dataId="technical-data" items={technicalData} />
                            {/* Power consumption */}
                            <DetailsBox heading="Power consumption" dataId="power-consumption" items={fuelData} />
                            {/* Furnishing */}
                            <Furnishing heading="Furnishing" dataId="furnishing" items={furnishingData}/>
                            {/* Colors */}
                            <DetailsBox heading="Color and interior design" dataId="colors" items={colorData} />
                            {/* Description */}
                            <ObjectDescription heading="Description" dataId="description" text={descriptionText}/>
                            {/* Seller */}
                            <div className="grid grid-cols-2 gap-6 mt-10" data-box="contact">
                                {/* Seller profile info */}
                                <Seller/>
                                {/* Seller contact form */}
                                <SalesContactForm/>
                            </div>
                        </div>
                    </div>
                    {/* right wrapper */}
                    <div className="max-w-[300px] w-full">
                        <ObjectFeatures />
                        {/* dealer contact */}
                        <div className="p-6 mt-10 rounded-md shadow-box-shadow bg-white">
                            <a href="" className="block w-full text-center secondary-btn">
                                <span>+33 (0)3- 12345678</span>
                                <span className="sm:hidden">Call</span>
                            </a>
                            <Button text="Contact" className="block mt-6 w-full h-12"/>
                        </div>
                    </div>
                </div>
                {/* Similar cars */}
                <SimilarCars/>
            </div>
        </section>
    )
}