import Link from "next/link";

export default function AvdertiseCar() {
    return (
        <section className="py-14 bg-right bg-no-repeat lg:bg-[url('/images/sell-car.png')] bg-[#EBF2FF] lg:min-h-[350px]">
            <div className="wrapper">

                {/* <!-- content --> */}
                <div className="w-full text-center lg:max-w-[721px] lg:text-left">
                    <h2 className="mb-6 text-2xl font-semibold sm:mb-10 lg:text-4xl lg:leading-[60px]">Fast-track your car-selling journey – Experience a quick and seamless sale for your vehicle</h2>
                    <Link
                        href="/sell-car"
                        className="inline-block primary-btn h-12 leading-12">
                        Sell my car
                    </Link>
                </div>
            </div>
        </section>
    )
}