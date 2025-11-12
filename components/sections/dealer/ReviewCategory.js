import StarWrapper from "@/components/ui/StarWrapper";

export default function ReviewCategory({item}) {
    return (
        <div className="flex items-center gap-2">

            {/* stars */}
            <StarWrapper/>
            <span>{item.title}</span>
        </div>
    )
}