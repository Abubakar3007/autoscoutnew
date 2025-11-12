import StarWrapper from "@/components/ui/StarWrapper";

export default function ReviewCard() {
    return (
        <div className="p-4 rounded-md sm:p-6 box bg-white shadow-box-shadow">
            {/* stars */}
            <StarWrapper/>
            
            <h4 className="my-2 font-medium leading-6">John Kumar</h4>
            <p className="mb-6 text-sm text-gray-500 sm:leading-6 sm:text-base">Lorem ipsum dolor sit amet consectetur. Dui ut massa elementum dictum velit egestas turpis sed ipsum. Sed ut consectetur amet viverra ligula odio. Amet ultrices mauris nisl nullam ut sem adipiscing tristique. Ut leo pellentesque a vel nunc nunc netus erat lacus. Lorem mattis et.</p>
            <span>02/20/2024</span>
        </div>
    )
}