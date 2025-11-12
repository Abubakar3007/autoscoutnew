import DealerInfoCard from "@/components/sections/dealer/DealerInfoCard";
import DealerSort from "@/components/sections/dealer/DealerSort";
import DealerTab from "@/components/sections/dealer/DealerTab";
import DealerVehicleFilter from "@/components/sections/dealer/DealerVehicleFilter";
import Pagination from "@/components/ui/Pagination";
import VerticalCard from "@/components/ui/VerticalCard";

export default function Vehicles(){
    return(
        <section className="md:py-20 py-14">
            <div className="wrapper">
                <DealerInfoCard/>

                <div className="pt-20">
                    
                    {/* tabs */}
                    <DealerTab url="/dealer/vehicles"/>

                    {/* Dealer sort */}
                    <DealerSort/>

                    {/* Dealer wrapper */}
                    <div className="flex justify-between gap-10 md:py-20 py-14">
                        <DealerVehicleFilter/>
                        

                        {/* right side wrapper */}
                        <div className="w-full">
                            {/* vehicle cards*/}
                            <div className="space-y-6">
                                <VerticalCard/>
                                <VerticalCard />
                            </div>

                            {/* pagination */}
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}