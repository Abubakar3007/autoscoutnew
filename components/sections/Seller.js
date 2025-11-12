import Heading from "../ui/Heading";

export default function Seller() {
    return (
        <div className="p-4 rounded-md h-max box bg-white shadow-box-shadow">
            <Heading as="h3" className="text-xl w-fit pb-2 border-b border-blue-500 mb-6 font-semibold">Seller</Heading>

            {/* info list */}
            <div className="user_contact">
                {/* sales profile picture */}
                <div className="mb-4 overflow-hidden rounded-md w-[100px] h-[100px]">
                    <img
                        src="/images/sales-profile.png"
                        alt="user profile"
                    />
                </div>

                {/* info data */}
                <ul className="[&>li]:flex [&>li]:gap-4 text-base font-medium [&>li]:leading-6 space-y-4 [&>li]:items-start">
                    <li>
                        <img
                            src="/icons/user.svg"
                            alt="User icon"
                        />
                        <span>Isabelle G</span>
                    </li>
                    <li>
                        <img
                            src="/icons/phone.svg"
                            alt="Phone icon"
                        />
                        <a
                            href="+33 (0)3 - 57800299"
                            className="text-blue-500 underline"
                        >+33 (0)3 - 57800299</a>
                    </li>
                    <li>
                        <img
                            src="/icons/location.svg"
                            alt="Location icon"
                            className="w-6"
                        />
                        <address className="not-italic">74 RUE DU FRANCLOS <br/> 54710 LUDRES, FR</address>
                    </li>
                </ul>
            </div>
        </div>
    )
}