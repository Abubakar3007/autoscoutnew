"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactHero({ activeTab, setActiveTab }) {
  return (
    <div className="w-full min-h-[396px] grid place-items-center bg-[url('/images/contact-banner.png')] bg-cover bg-center">
      <div className="mx-auto text-center w-full max-w-[567px]">
        <h1 className="pb-2 text-3xl font-semibold text-white border-b border-blue-500 mb-10 w-fit mx-auto">
          Contact
        </h1>
        <div className="tab-btn w-full flex [&>button]:flex-1 p-4 bg-gray-50 rounded-lg">
        <Button
            onClick={() => setActiveTab("private")}
            text="Private contact"
            className={`h-12 ${
            activeTab === "private"
                ? "bg-blue-500 text-white"
                : "!bg-transparent !text-gray-500"
            }`}
        />
        <Button
            onClick={() => setActiveTab("dealer")}
            text="Dealer contact"
            className={`h-12 ${
            activeTab === "dealer"
                ? "bg-blue-500 text-white"
                : "!bg-transparent !text-gray-500"
            }`}
        />
        </div>
      </div>
    </div>
  );
}
