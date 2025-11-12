import Heading from "@/components/ui/Heading";

export default function DealerInformation() {
    return (
        <section className="md:pt-20 pt-14">
            <Heading as="h2" className="pb-2 mb-10 text-2xl font-medium border-b border-blue-500 md:text-xxl w-fit">Dealer information</Heading>
            
            <ul className="[&>li]:flex [&>li]:items-center font-medium space-y-4 [&>li]:gap-4 [&>li>a]:text-blue-500 [&>li>strong]:font-medium [&>li>img]:w-6 [&>li>img]:h-6">
                <li>
                    <img
                        src="/icons/user.svg"
                        alt="User icon"
                    />
                    <strong>Kevin Todling</strong>
                </li>

                <li>
                    <img
                        src="/icons/location.svg"
                        alt="Location icon"
                    />
                    <strong>Industrial Park Mitterbreiten 2, 9812 Pusarnitz</strong>
                </li>
                <li>
                    <img
                        src="/icons/phone.svg"
                        alt="Phone icon"
                    />
                    <a href="">+43 (0)3133 - 37683</a>
                </li>
                <li>
                    <img
                        src="/icons/web-network.svg"
                        alt="network icon"
                    />
                    <a href="">www.kfz-hoedl.at</a>
                </li>
            </ul>
        </section>
    )
}
