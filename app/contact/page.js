"use client";
import { useState } from "react";
import ContactHero from "@/components/sections/ContactHero";
import PrivateContact from "@/components/sections/PrivateContact";
import DealerContact from "@/components/sections/DealerContact";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("private");

  return (
    <>
      <ContactHero activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="md:py-20 py-12">
        {activeTab === "private" && <PrivateContact />}
        {activeTab === "dealer" && <DealerContact />}
      </section>
    </>
  );
}
