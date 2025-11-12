"use client";
import Characteristics from "@/components/sections/sellcar/Characteristics";
import Colors from "@/components/sections/sellcar/Colors";
import Contact from "@/components/sections/sellcar/Contact";
import Condition from "@/components/sections/sellcar/Condition";
import Description from "@/components/sections/sellcar/Description";
import Drive from "@/components/sections/sellcar/Drive";
import Environment from "@/components/sections/sellcar/Environment";
import Furnishing from "@/components/sections/sellcar/Furnishing";
import Pictures from "@/components/sections/sellcar/Pictures";
import Price from "@/components/sections/sellcar/Price";
import VehicleData from "@/components/sections/sellcar/VehicleData";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import TabButton from "@/components/ui/TabButton";
import { useState } from "react";

export default function SellCar() {

    const tabData = [
        { title: "Vehicle data", dataId: "vehicle-data", data: [] },
        { title: "Characteristics", dataId: "features", data: [] },
        { title: "Colors", dataId: "colors", data: [] },
        { title: "Condition", dataId: "condition", data: [] },
        { title: "Furnishing", dataId: "furnishing", data: [] },
        { title: "Drive", dataId: "drive", data: [] },
        { title: "Environment", dataId: "environment", data: [] },
        { title: "Pictures", dataId: "pictures", data: [] },
        { title: "Description", dataId: "description", data: [] },
        { title: "Price", dataId: "price", data: [] },
        { title: "Contact", dataId: "contact", data: [] },
    ];

    const [activeTab, setActiveTab] = useState(tabData[0].dataId);

    const handleTabs = (dataId) => {
        setActiveTab(dataId);

        // scroll
        const element = document.getElementById(dataId);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-20">
            <div className="wrapper">
                {/* heading */}
                <div className="p-4 mb-10 rounded-md box bg-white">
                    <Heading className="font-semibold leading-9 text-[28px]">Ad title</Heading>
                </div>

                {/* sell car wrapper */}
                <div className="flex gap-10">
                    {/* sell car left side */}
                    <div className="max-w-[335px] w-full h-max sticky top-0">
                        {/* tab button */}
                        {
                            tabData.map((item, index) => (
                                <TabButton
                                    key={index}
                                    title={item.title}
                                    dataId={item.dataId}
                                    data={item.data}
                                    onClick={() => handleTabs(item.dataId)}
                                    active={activeTab === item.dataId}
                                />
                            ))
                        }
                    </div>
                    {/* sell car right side */}
                    <div className="w-full">
                        <section id="vehicle-data"><VehicleData /></section>
                        <section id="features"><Characteristics /></section>
                        <section id="colors"><Colors /></section>
                        <section id="condition"><Condition /></section>
                        <section id="furnishing"><Furnishing /></section>
                        <section id="drive"><Drive /></section>
                        <section id="environment"><Environment /></section>
                        <section id="pictures"><Pictures /></section>
                        <section id="description"><Description /></section>
                        <section id="price"><Price /></section>
                        <section id="contact"><Contact /></section>

                        {/* submit buttton */}
                        <div className="bottom-0 sticky z-50 flex items-center justify-between p-3 bg-white rounded-t-md">
                            <p className="text-sm font-semibold text-gray-500">Please check all information before publication.</p>
                            <Button text="Preview" className="h-12 max-w-[250px] w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}