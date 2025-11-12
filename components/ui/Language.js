export default function Language() {

    const languageData = [
        {
            name: "Austria",
            flag: "/flag/austria-flag.svg"
        },
        {
            name: "Germany",
            flag: "/flag/germany-flag.svg"
        },
        {
            name: "France",
            flag: "/flag/france-flag.svg"
        },
        {
            name: "Belgium",
            flag: "/flag/belgium-flag.svg"
        },
        {
            name: "Spain",
            flag: "/flag/spain-flag.svg"
        },
        {
            name: "Netherland",
            flag: "/flag/netherland-flag.svg"
        },
        {
            name: "Luxembourg",
            flag: "/flag/lexumberg-flag.svg"
        }
    ]

    return (
        <div className="relative hidden language group lg:block">
            {/* <!-- select language button --> */}
            <button className="grid cursor-pointer w-12 h-12 p-1 border border-transparent place-items-center rounded-t-[5px] group-hover:border-[#FAFAFA] transition-all ease duration-300">
                <img
                    src="/flag/austria-flag.svg"
                    alt="Flag logo"
                    className="w-[25px] h-[18px] rounded-[5px]"
                />
            </button>

            {/* <!-- Select language dropdown --> */}
            <div className="right-0 min-w-[250px] absolute z-[100] shadow-[0px_4px_8px_#0000000d] bg-white invisible opacity-0 transition-all ease duration-300 overflow-hidden border border-[#FAFAFA] group-hover:opacity-100 group-hover:visible">
                <ul className="text-base [&>li>a]:block [&>li>a]:leading-6 [&>li>a]:py-3 [&>li>a]:px-4 [&>li>a>img]:w-[25px] [&>li>a>img]:h-[18px] [&>li>a>img]:rounded-[5px] [&>li>a>img]:inline-block [&>li>a>img]:mr-2 [&>li>a>span]:align-middle">
                    {
                        languageData.map((data,index)=>(
                            <li key={index}>
                                <a href="">
                                    <img
                                        src={data.flag}
                                        alt={data.name}
                                    />
                                    <span>{data.name}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}