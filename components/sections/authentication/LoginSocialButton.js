export default function LoginSocialButton() {

    const socialMedia = [
        {
            name: "Google",
            icon: "/icons/google.svg",
            link: ""
        },
        {
            name: "Facebook",
            icon: "/icons/facebook-blue.svg",
            link: ""
        },
        {
            name: "Apple",
            icon: "/icons/apple.svg",
            link: ""
        }
    ]

    return (
        <div>
            {/* <!-- Divider --> */}
            <div className="flex items-center gap-2 mt-6 mb-6 text-gray-500">
                <span className="w-full h-[1px] bg-neutral-400"></span>
                <span className="flex-shrink-0">or register in with</span>
                <span className="w-full h-[1px] bg-neutral-400"></span>
            </div>


            {/* Social media link */}
            <div className="flex gap-4 [&>a]:flex-1 [&>a]:text-base [&>a]:rounded-md [&>a]:border [&>a]:border-neutral-400 [&>a]:block [&>a]:h-12 [&>a]:items-center [&>a]:flex [&>a]:justify-center [&>a]:gap-2 [&>a]:px-3 [&>a]:leading-44 [&>a]:bg-gray-50 [&>a]:text-center [&>a>span]:align-middle">
                {
                    socialMedia.map((item, index) => (
                        <a href={item.link} key={index} title={`Register by ${item.name}`}>
                            <img
                                src={item.icon}
                                alt={item.name} className="inline-block"
                            />
                            <span className="hidden sm:inline-block">{item.name}</span>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}