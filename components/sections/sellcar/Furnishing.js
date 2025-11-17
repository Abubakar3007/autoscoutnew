import Heading from "@/components/ui/Heading";
import FurnishingBox from "./furnishing/FurnishingBox";

export default function Furnishing() {
    const airbags = [
        { label: "Rear airbag", value: "1" },
        { label: "Head airbag", value: "2" },
        { label: "Passenger airbag", value: "3" },
        { label: "Side airbag", value: "4" },
        { label: "Driver airbag", value: "5" },
    ];

    const assistanceSystemsData = [
        { label: "Distance warning", value: "1" },
        { label: "Emergency brake assistant", value: "2" },
        { label: "Hill start assistant", value: "3" },
        { label: "Lane keeping assistant", value: "4" },
        { label: "High beam assistant", value: "5" },
        { label: "Blind Spot Assist", value: "6" },
        { label: "Speed limit system", value: "7" },
        { label: "Traffic sign recognition", value: "8" },
        { label: "Night vision assistant", value: "9" },
    ];

    const parkingAssistanceData = [
        { label: "360° camera", value: "1" },
        { label: "Parking aid sensors at the front", value: "2" },
        { label: "Parking aid camera", value: "3" },
        { label: "Parking assistance self-steering system", value: "4" },
        { label: "Rear parking sensors", value: "5" },
    ];

    const extrasData = [
        { label: "All-weather tires", value: "1" },
        { label: "Breakdown kit", value: "2" },
        { label: "Aluminum rims", value: "3" },
        { label: "Smoking package", value: "4" },
        { label: "Ambient lighting", value: "5" },
        { label: "Right-hand drive", value: "6" },
        { label: "Trailer hitch", value: "7" },
        { label: "Range extender", value: "8" },
        { label: "Accessible to disabled people", value: "9" },
        { label: "Spare wheel", value: "10" },
        { label: "Biodiesel conversion", value: "11" },
        { label: "Headlight cleaning", value: "12" },
        { label: "Roof rails", value: "13" },
        { label: "Ski bag", value: "14" },
        { label: "E10 suitable", value: "15" },
        { label: "Summer tires", value: "16" },
        { label: "Electric seat adjustment, rear", value: "17" },
        { label: "Spoiler", value: "18" },
        { label: "Electronic parking brake", value: "19" },
        { label: "Sports suspension", value: "20" },
        { label: "Luggage compartment partition", value: "21" },
        { label: "Sports package", value: "22" },
        { label: "Tinted windows", value: "23" },
        { label: "Steel rims", value: "24" },
        { label: "Automatically dimming interior mirror", value: "25" },
        { label: "Tuning", value: "26" },
        { label: "Catalyst", value: "27" },
        { label: "Wind deflector (for convertible)", value: "28" },
        { label: "Awning", value: "29" },
        { label: "Winter package", value: "30" },
        { label: "Winter tires", value: "32" },
    ];

    const airConditioningData = [
        { label: "2-zone automatic climate control", value: "1" },
        { label: "Air conditioner", value: "2" },
        { label: "3-zone automatic climate control", value: "3" },
        { label: "Automatic climate control", value: "4" },
        { label: "4-zone automatic climate control", value: "5" },
    ];

    const comfortData = [
        { label: "Armrest", value: "1" },
        { label: "Panoramic roof", value: "2" },
        { label: "Heated windshield", value: "3" },
        { label: "Rain sensor", value: "4" },
        { label: "Heated steering wheel", value: "5" },
        { label: "Shift paddles", value: "6" },
        { label: "Electric windows", value: "7" },
        { label: "Sunroof", value: "8" },
        { label: "Electric tailgate", value: "9" },
        { label: "Sliding door", value: "10" },
        { label: "Electric side mirrors", value: "11" },
        { label: "Head-Up Display", value: "12" },
        { label: "Leather steering wheel", value: "13" },
        { label: "Power steering", value: "14" },
        { label: "Auxiliary heater", value: "16" },
        { label: "Air suspension", value: "17" },
        { label: "Automatic start/stop", value: "18" },
    ];

    const lightData = [
        { label: "Bi-Xenon headlights", value: "1" },
        { label: "Light sensor", value: "2" },
        { label: "Glare-free high beam", value: "3" },
        { label: "Fog lights", value: "4" },
        { label: "Cornering light", value: "5" },
        { label: "Daytime running lights", value: "6" },
        { label: "LED headlights", value: "7" },
        { label: "Full LED headlights", value: "8" },
        { label: "LED daytime running lights", value: "9" },
        { label: "Xenon headlights", value: "10" },
        { label: "Laser light", value: "11" },
    ];

    const securityData = [
        { label: "SECTION", value: "1" },
        { label: "Emergency call system", value: "2" },
        { label: "Alarm system", value: "3" },
        { label: "Tire pressure monitoring system", value: "4" },
        { label: "ESP", value: "5" },
        { label: "Traction control", value: "6" },
        { label: "Isofix", value: "7" },
        { label: "Immobilizer", value: "8" },
        { label: "Fatigue warning system", value: "9" },
    ];

    const seatsData = [
        { label: "Electric seats", value: "1" },
        { label: "Heated seats", value: "2" },
        { label: "Lumbar support", value: "3" },
        { label: "Sports seats", value: "4" },
        { label: "Massage seats", value: "5" },
        { label: "Foldable passenger seat", value: "6" },
        { label: "Seat ventilation", value: "7" },
        { label: "part B. Back seat", value: "8" },
    ];

    const cruiseControlData = [
        { label: "Distance cruise control", value: "1" },
        { label: "Cruise control", value: "2" },
    ];

    const entertainmentData = [
        { label: "Android Auto", value: "1" },
        { label: "voice control", value: "2" },
        { label: "Apple CarPlay", value: "3" },
        { label: "TV", value: "4" },
        { label: "DAB radio", value: "5" },
        { label: "Touch screen", value: "6" },
        { label: "Induction charging for smartphones", value: "7" },
        { label: "USB", value: "8" },
        { label: "Music streaming integrated", value: "9" },
        { label: "Fully digital instrument cluster", value: "10" },
        { label: "Sound system", value: "11" },
        { label: "WiFi / WiFi hotspot", value: "12" },
    ];

    const mediaData = [
        { label: "Bluetooth", value: "1" },
        { label: "MP3", value: "2" },
        { label: "On-board computer", value: "3" },
        { label: "Multifunctional steering wheel", value: "4" },
        { label: "CD", value: "5" },
        { label: "Navigation system", value: "6" },
        { label: "Handsfree", value: "7" },
        { label: "Radio", value: "8" },
    ];

    const centralLockingSystemData = [
        { label: "Keyless central locking", value: "1" },
        { label: "Central locking with radio remote control", value: "2" },
        { label: "Central locking system", value: "3" },
    ];

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white" data-box="furnishing">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Furnishing</Heading>
            {/* airbags */}
            <FurnishingBox title="Airbags" data={airbags} name="airbags" />
            {/* Assistance systems */}
            <FurnishingBox title="Assistance systems" data={assistanceSystemsData} name="assistance-systems" />
            {/* Parking assistance */}
            <FurnishingBox title="Parking assistance" data={parkingAssistanceData} name="parking-assistance" />
            {/* Extras */}
            <FurnishingBox title="Extras" data={extrasData} name="extras" />
            {/* Air conditioning */}
            <FurnishingBox title="Air conditioning" data={airConditioningData} name="air-conditioning" />
            {/* Comfort */}
            <FurnishingBox title="Comfort" data={comfortData} name="comfort" />
            {/* Light */}
            <FurnishingBox title="Light" data={lightData} name="light" />
            {/* Security */}
            <FurnishingBox title="Security" data={securityData} name="security" />
            {/* Seats */}
            <FurnishingBox title="Seats" data={seatsData} name="seats" />
            {/* Cruise control */}
            <FurnishingBox title="Cruise control" data={cruiseControlData} name="cruise-control" />
            {/* Entertainment */}
            <FurnishingBox title="Entertainment" data={entertainmentData} name="entertainment" />
            {/* Entertainment/Media */}
            <FurnishingBox title="Entertainment/Media" data={mediaData} name="entertainment-media" />
            {/* Central locking system */}
            <FurnishingBox title="Central locking system" data={centralLockingSystemData} name="central-locking-system" />
        </div>
    )
}