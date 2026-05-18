export default function ObjectFeatures({ ...props }) {
    return (
        <div className="p-6 bg-white rounded-md shadow-box-shadow">
            <ul className="space-y-4 text-sm font-medium [&>li>span]:text-gray-500 [&>li>span]:bg-no-repeat [&>li>span]:bg-left [&>li>span]:pl-8 [&>li>span]:block [&>li>span]:mt-2">
                <li>
                    <strong>Transmission</strong>
                    <span className="auto bg-[url('/icons/automatic.svg')]">{props.transmission}</span>
                </li>
                <li>
                    <strong>Mileage</strong>
                    <span className="km bg-[url('/icons/km.svg')]">{props.mileage}</span>
                </li>
                <li>
                    <strong>Year</strong>
                    <span className="date bg-[url('/icons/date.svg')]">{props.year}</span>
                </li>
                <li>
                    <strong>Fuel</strong>
                    <span className="oil bg-[url('/icons/fuel-type.svg')]">{props.fuel}</span>
                </li>
                <li>
                    <strong>Power KW (CH)</strong>
                    <span className="hp bg-[url('/icons/kilometer.svg')]">{props.power}</span>
                </li>
                <li>
                    <strong>Seller</strong>
                    <span className="user bg-[url('/icons/user.svg')]">{props.seller}</span>
                </li>
            </ul>
        </div>
    )
}