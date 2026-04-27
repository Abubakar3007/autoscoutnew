import ListHeader from "@/components/sections/listing/ListHeader";
import ListingFilter from "@/components/sections/listing/ListingFilter";
import VerticalCard from "@/components/ui/VerticalCard";

export default function Listing(){
    return(
        <section className="py-20">
            <div className="wrapper">
                <ListHeader/>

                {/* wrapper of list */}
                <div className="flex flex-col items-start gap-8 pt-2 sm:gap-10 lg:pt-20 lg:flex-row">
                    
                    {/* left wrapper */}
                    <ListingFilter />

                    {/* right wrapper */}
                    <div className="w-full">
                        
                        {/* cards */}
                        <div className="space-y-6 cards">
                            
                            {/* card */}
                            <VerticalCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}