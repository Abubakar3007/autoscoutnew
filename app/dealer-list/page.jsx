import DealerCard from "@/components/sections/dealer/DealerCard";
import FilterForm from "@/components/sections/dealer/FilterForm";
import Heading from "@/components/ui/Heading";
import Pagination from "@/components/ui/Pagination";

export default function DealerList() {
    return (
        <section className="py-14 md:py-20">
            <div className="wrapper">
                <Heading as="h1" className="text-[28px] border-b border-blue-500 w-fit pb-2 mb-10">Find car dealers near you</Heading>

                {/* wrapper */}
                <div className="flex items-start gap-10">
                    {/* left wrapper */}
                    <FilterForm />
                    {/* right wrapper */}
                    <div className="w-full">
                        {/* total cars */}
                        <div className="p-6 mb-6 rounded-md shadow-box-shadow bg-white">
                            <h2 className="text-xl font-semibold">2000 dealers</h2>
                        </div>

                        {/* dealer cards */}
                        <div className="space-y-6">
                            <DealerCard />
                            <DealerCard />
                            <DealerCard />
                        </div>

                        {/* pagination */}
                        <Pagination className="mt-10" />

                        {/* Dealer by list and dealer by state */}
                        <div className="pt-10 mt-10 space-y-10 border-t border-neutral-400">
                            {/* dealer by list */}
                            <div>
                                <h4 className="mb-6 font-semibold">Dealer by list</h4>
                                {/* list */}
                                <div className="flex gap-6 text-blue-800 [&>.divider]:h-14 [&>.divider]:w-[1px] [&>.divider]:sm:block [&>.divider]:hidden [&>.divider]:bg-neutral-400 sm:items-center [&>ul]:flex-1 flex-wrap">
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Vienna</a></li>
                                        <li><a href="">Innsbruck</a></li>
                                        <li><a href="">St. Polten</a></li>
                                        <li><a href="">Feldkrich</a></li>
                                        <li><a href="">Klosterenburg</a></li>
                                        <li><a href="">Other cities</a></li>
                                    </ul>
                                    {/* divider */}
                                    <div className="divider"></div>
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Graz</a></li>
                                        <li><a href="">klagenfurt</a></li>
                                        <li><a href="">Dornbrin</a></li>
                                        <li><a href="">Bregentz</a></li>
                                        <li><a href="">leoben</a></li>
                                    </ul>
                                    {/* divider */}
                                    <div className="divider"></div>
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Linz</a></li>
                                        <li><a href="">Vllach</a></li>
                                        <li><a href="">Steyr</a></li>
                                        <li><a href="">Wolfsberg</a></li>
                                        <li><a href="">Traun</a></li>
                                    </ul>
                                    {/* divider */}
                                    <div className="divider"></div>
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Salzburg</a></li>
                                        <li><a href="">Catfish</a></li>
                                        <li><a href="">Bathe</a></li>
                                        <li><a href="">Wienner neustadt</a></li>
                                        <li><a href="">krems at the donau</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* dealer by state */}
                            <div>
                                <h4 className="mb-6 font-semibold">Dealers by the state</h4>
                                {/* list */}
                                <div className="flex gap-6 text-blue-800 [&>.divider]:h-14 [&>.divider]:w-[1px] [&>.divider]:bg-neutral-400 [&>.divider]:sm:block [&>.divider]:hidden flex-wrap sm:items-center [&>ul]:flex-1">
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">burgenland</a></li>
                                        <li><a href="">Salzburg</a></li>
                                        <li><a href="">Vienna</a></li>
                                    </ul>
                                    {/* divider */}
                                    <div className="divider"></div>
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Carinthina</a></li>
                                        <li><a href="">Styria</a></li>
                                    </ul>
                                    {/* divider */}
                                    <div className="divider"></div>
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Lower austria</a></li>
                                        <li><a href="">Tyrol</a></li>
                                    </ul>
                                    {/* divider */}
                                    <div className="divider"></div>
                                    <ul className="space-y-2 [&>li>a]:leading-6">
                                        <li><a href="">Upper austria</a></li>
                                        <li><a href="">Vorarlberg</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}