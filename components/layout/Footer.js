"use client"; // for scroll-to-top button functionality
import Select from '../ui/Select.js';
import { useState, useEffect } from "react";
export default function Footer(){

    const countryOptions = [
    { value: "de", label: "Germany" },
    { value: "be", label: "Belgium" },
    { value: "es", label: "Spain" },
    { value: "fr", label: "France" },
    { value: "it", label: "Italy" },
    { value: "nl", label: "Netherlands" },
    { value: "at", label: "Austria" },
    { value: "ru", label: "Russia" },
    { value: "com", label: "English" },
    ];

    const [showScroll,setShowScroll] = useState(false);

      // Scroll-to-top handler
    const handleScroll = () => {
        if (window.scrollY > 300) setShowScroll(true);
        else setShowScroll(false);
    };

    const scrollTop = () =>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <footer className="py-14 bg-blue-950 md:py-20">
            <div className="wrapper">
                <div className="flex flex-col justify-between gap-6 pb-6 mb-6 border-b mid:gap-12 border-neutral-50 flex-row">
                    <div className="w-full max-w-[120px]">
                        <a href="index.html" title="Go to homepage" className="text-[#FAFAFA] lg:text-[30px] text-2xl font-medium">
                            <img src='/images/logo.png' alt="Logo" className="lg:w-[75px] w-20"/>
                        </a>
                    </div>
                    <div className="sm:flex grid grid-cols-2 justify-between sm:gap-x-0 sm:gap-y-0 gap-x-4 gap-y-8 w-full text-gray-50 [&>div>h4]:text-lg [&>div>h4]:leading-7 [&>div>h4]:font-medium [&>div>h4]:border-b-2 [&>div>h4]:border-gray-50 [&>div>h4]:mb-6 [&>div>h4]:w-fit [&>div>h4]:pb-2">
                        <div>
                            <h4>Pursue</h4>
                            <ul className="space-y-2 text-base [&>li>a]:border-b [&>li>a]:border-transparent [&>li>a:hover]:border-gray-50">
                                <li>
                                    <a href="/about_us/">About us</a>
                                </li>
                                <li>
                                    <a href="/your_advt/">Advertising</a>
                                </li>
                                <li>
                                    <a href="/terms/">Conditions</a>
                                </li>
                                <li>
                                    <a href="/data_protection/">Data protection</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Service</h4>
                            <ul className="space-y-2 text-base [&>li>a]:border-b [&>li>a]:border-transparent [&>li>a:hover]:border-gray-50">
                                <li>
                                    <a href="">Help</a>
                                </li>
                                <li>
                                    <a href="/contact/">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Dealer</h4>
                            <ul className="space-y-2 text-base [&>li>a]:border-b [&>li>a]:border-transparent [&>li>a:hover]:border-gray-50">
                                <li>
                                    <a href="/register/">Register</a>
                                </li>
                                <li>
                                    <a href="">Advantages</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Stay in contact</h4>
                            <div>
                                <a href="" title="Visit facebook channel">
                                    <img src="/icons/facebook.svg" alt="facebook"/>
                                </a>
                                <Select 
                                    options = {countryOptions}
                                    className="mt-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-xs text-center copyright text-gray-50 mid:text-left">
                    <p>© Copyright 2023 AutoScout24 GmbH. All rights reserved. </p>
                </div>
            </div>
            {
                showScroll && (
                    <button 
                    onClick={scrollTop}
                    className="fixed z-50 grid visible hidden w-12 h-12 rounded-full scroll-top-btn mid:h-14 mid:w-14 bottom-8 right-6 mid:bottom-10 mid:right-10 place-items-center bg-blue-50 shadow-box-shadow"
                    aria-label="Scroll to top"
                    >
                        <img src="/icons/scroll-blue.svg" alt="Scroll top" className="w-5 mid:w-auto"/>
                    </button>
                )
            }

        </footer>
    )
}