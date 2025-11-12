export default function Textarea({id,placeholder,value="",className=""}){
    return(
        <textarea 
            id={id}
            placeholder={`${placeholder}`}
            value={value}
            className={`w-full px-4 py-3 text-sm border resize-none border-neutral-400 rounded-md h-h-50 bg-neutral-50 outline-none transition-all ease-in-out duration-200 focus:border-blue-500 ${className}`}
        ></textarea>
    )
}