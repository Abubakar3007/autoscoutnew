import Checkbox from "@/components/ui/Checkbox";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";

export default function Features() {

    const featuresData = [
        {id: 1, name: "Section"},
        {id: 2, name: "Distance cruise control"},
        {id: 3, name: "All-wheel drive"},
        {id: 4, name: "Trailer hitch"},
        {id: 5, name: "Electric windows"},
        {id: 6, name: "Air conditioner"},
        {id: 7, name: "Automatic climate control"},
        {id: 8, name: "LED highlights"},
        {id: 9, name: "Multifunctional steering wheel"},
        {id: 10, name: "Navigation system"},
        {id: 11, name: "Heated seats"},
        {id: 12, name: "Cruise control"},
        {id: 13, name: "Xenon headlights"},
        {id: 14, name: "Catalyst"},
        {id: 15, name: "Isofix"},
        {id: 16, name: "Massage seats"},
        {id: 17, name: "MP3"},
        {id: 18, name: "Fog lights"},
    ]

    return (
        <div className="p-5 mb-6 rounded-md sm:mb-10 sm:p-6 bg-white shadow-box-shadow">

            <Heading as="h2" className="mb-6 text-xl">Furnishing</Heading>

            <ul className="grid gap-4 car-grid text-sm">
                {
                    featuresData.map((data,index)=>(
                        <li className="flex items-center gap-3" key={index}>
                            <Checkbox 
                                name="features"
                                id={`features-${data.id}`}
                            />

                            <Label
                                htmlFor={`features-${data.id}`}
                                name={data.name}
                                className="cursor-pointer"
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}