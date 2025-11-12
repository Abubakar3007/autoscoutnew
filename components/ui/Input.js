export default function Input({id,placeholder="Enter",type="text"}){
    return (
        <input 
            type={type}
            id={id}
            placeholder = {`${placeholder}`}
            // value={}
            className="w-full px-4 h-12 py-3 text-sm border border-neutral-400 rounded-md h-h-50 bg-neutral-50 outline-none transition-all ease-in-out duration-200 focus:border-blue-500"
        />
    )
}