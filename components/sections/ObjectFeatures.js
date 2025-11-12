export default function ObjectFeatures() {
    return (
        <div className="p-6 rounded-md shadow-box-shadow bg-white">
            <ul className="space-y-4 text-sm font-medium [&>li>span]:text-gray-500 [&>li>span]:bg-no-repeat [&>li>span]:bg-left [&>li>span]:pl-8 [&>li>span]:block [&>li>span]:mt-2">
                <li>
                    <strong>Transmission</strong>
                    <span className="auto bg-[url('/icons/automatic.svg')]">Automatic box</span>
                </li>
                <li>
                    <strong>Mileage</strong>
                    <span className="km bg-[url('/icons/km.svg')]">159,089 km</span>
                </li>
                <li>
                    <strong>Year</strong>
                    <span className="date bg-[url('/icons/date.svg')]">01/2008</span>
                </li>
                <li>
                    <strong>Fuel</strong>
                    <span className="oil bg-[url('/icons/fuel-type.svg')]">Petrol</span>
                </li>
                <li>
                    <strong>Power KW (CH)</strong>
                    <span className="hp bg-[url('/icons/kilometer.svg')]">180 KW(245 HP)</span>
                </li>
                <li>
                    <strong>Seller</strong>
                    <span className="user bg-[url('/icons/user.svg')]">Private</span>
                </li>
            </ul>
        </div>
    )
}