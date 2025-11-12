export default function TabButton({title,dataId,data,onClick, active}) {
    return (
        <div 
            className={`p-4 mb-1 border-l-2 border-transparent rounded-md cursor-pointer tab-btn bg-white shadow-box-shadow ${active ? "border-blue-500" : ""}`}
            onClick={onClick}
            data-btn={dataId}
        >
            <h4 className={`mb-1 text-base font-medium leading-6 ${active ? "text-blue-500" : ""}`}>{title}*</h4>
            {/*  if error exist then add here error class */}
            {/* <p className="error">Please check all mandatory information.</p> */}
            <p 
                className="block text-sm leading-6 text-gray-500 whitespace-nowrap text-ellipsis">
                {data.length > 0 ? data : "Please fill"}
            </p>
        </div>
    )
}