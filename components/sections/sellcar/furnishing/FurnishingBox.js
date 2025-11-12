import Checkbox from "@/components/ui/Checkbox";
import Label from "@/components/ui/Label";

export default function FurnishingBox({ title, data = [], name }) {
    let isLastBox = true;
    isLastBox = name.toLowerCase().includes("central") ? true : false;
    return (
        <div className={`${isLastBox ? '':'pb-6 mb-6 border-b border-neutral-400'}`}>
            <h4 className="mb-6 text-base font-medium leading-6">{title}</h4>
            <ul className="grid gap-4 sm:grid-cols-featured-grid [&>li>label]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-3 text-sm">
                {
                    data.map((data,index)=>(
                        <li key={index}>
                            <Checkbox id={`${name}-${data.value}`} name={name} />
                            <Label htmlFor={`${name}-${data.value}`} name={data.label} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}