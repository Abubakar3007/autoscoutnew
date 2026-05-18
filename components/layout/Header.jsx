"use client";
import { useEffect, useState } from "react";
import Input from "../ui/Input";
import Link from "next/link";
import Language from "../ui/Language";
import LoginPopup from "../sections/popups/LoginPopup";
import InfoBadge from "../sections/popups/InfoBadge";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { useAuthStore } from "@/store/useAuthStore";

const navItems = [
  {
    title: "Seek",
    dropdown: [
      { label: "Used cars / new cars", href: "#" },
      { label: "Price rating", href: "#" },
      { label: "Motorcycle", href: "#" },
      { label: "Caravan/Mobile", href: "#" },
      { label: "Truck/Commercial vehicle", href: "#" },
      { label: "Dealer", href: "/dealer-list" },
    ],
  },
  {
    title: "Sell",
    dropdown: [
      { label: "Automobile for free", href: "#" },
      { label: "Motorcycle for free", href: "#" },
      { label: "Truck/Commercial Vehicle", href: "#" },
      { label: "Vehicle valuation", href: "#" },
    ],
  },
  {
    title: "Inform",
    dropdown: [
      {
        label: "Buying & selling",
        items: [
          { label: "Car contract", href: "#" },
          { label: "Vehicle valuation", href: "#" },
          { label: "Price rating", href: "#" },
        ],
      },
      {
        label: "Buying advice",
        items: [
          { label: "New hits", href: "#" },
          { label: "Testing", href: "#" },
        ],
      },
      {
        label: "Catalog",
        items: [
          { label: "Car catalog", href: "#" },
          { label: "Motorcycle catalog", href: "#" },
        ],
      },
    ],
  },
];

// Helper function to render navigation items
function renderNavItems(items) {
  return (
    <ul className="flex space-x-3">
      {items.map((item, i) => (
        <li key={i} className="relative inline-block group">

          {/* Button */}
          <div className="h-14 py-2 px-4 flex justify-center items-center gap-3 text-white text-[18px] font-medium border border-transparent rounded-t-[5px] cursor-pointer group-hover:border-[#FAFAFA]">
            <span>{item.title}</span>
            <img src="/icons/chevron-down.svg" alt="Dropdown" className="inline-block" />
          </div>

          {/* Dropdown */}
          {item.dropdown && (
            <div className={`absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] shadow-md border border-[#FAFAFA] bg-white overflow-hidden mt-0 ${item.title === "Inform" ? "w-[500px] flex gap-4" : "w-[250px]"}`}>

              {
                item.dropdown.map((sub, j) => (
                  sub.items ? (
                    <div className="flex-1">
                      <h4 className="px-4 py-3 font-semibold leading-6">{sub.label}</h4>
                      <ul className="[&>li>a]:py-3 [&>li>a]:px-4 [&>li>a]:leading-6 [&>li>a]:block">
                        {sub.items.map((subItem, k) => (
                          <li key={k}>
                            <Link href={subItem.href} className="hover:text-blue-500">{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) :
                    (
                      <ul key={j} className="p-2 [&>li>a]:py-2 [&>li>a]:block [&>li>a]:px-4 w-[250px]">
                        <li>
                          <Link href={sub.href} className="hover:text-blue-500">{sub.label}</Link>
                        </li>
                      </ul>
                    )
                ))
              }
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [loginPopup, setLoginPopup] = useState(false);
  // body scroll disable
  useEffect(() => {
    if (loginPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loginPopup]);

  const cartCars = useCartStore((state) => state.items);

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <header className="bg-blue-950 relative z-[102] lg:min-h-[72px] min-h-14">
      <div className="flex justify-between items-center min-h-[inherit] wrapper">
        {/* Mobile menu button */}
        <button
          id="menu-btn"
          className="lg:hidden flex flex-col justify-center items-center space-y-1 [&>span]:w-6 [&>span]:h-[2.5px] [&>span]:bg-[#FAFAFA] [&>span]:rounded-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <Link
          href="/"
          title="Go to homepage"
          className="text-[#FAFAFA] lg:text-[30px] text-2xl font-medium">
          <img src="/images/logo.png" alt="Logo" className="lg:w-[75px] w-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">{renderNavItems(navItems)}</nav>

        {/* right side wrapper */}
        <div className="flex items-center gap-10">
          {/* notification, profile & favorite */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* notification */}
            <div className="relative hidden group lg:block">
              <Link
                href="/user/notifications"
                title="Notification"
                target="_blank"
                className="relative w-10 h-10 rounded-full leading-[40px] grid place-items-center"
              >
                <Image
                  src="/images/notification-box.svg"
                  alt="Notification-box"
                  width={20}
                  height={20}
                />
                <div className="absolute text-white rounded-full bg-[#E53835] text-[10px] top-[3px] right-[2px] h-4 grid place-items-center w-4 leading-[8px] text-center font-bold">4</div>
              </Link>
              {/* if no notification the class add n-grid */}
              <div className="flex items-center justify-center flex-col gap-4 overflow-hidden absolute w-[300px] p-3 top-[100%] left-[50%] -translate-x-1/2 bg-white min-h-[200px] opacity-0 invisible transition-all rounded-[10px] duration-300 ease shadow-[0px_4px_8px_#0000000d] group-hover:opacity-100 group-hover:visible">
                {/* otherwise show this div */}
                <div>
                  <Image
                    src="/images/no-notification.svg"
                    alt="No notification"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <h4 className="text-[#666666] text-lg font-semibold mt-4">No Notifications</h4>
                </div>
              </div>
            </div>

            {/* favorite button */}
            <Link
              href="/user/favorites" title="Favorite list" target="_blank" className="relative w-10 h-10 rounded-full leading-[40px] grid place-items-center">
              <Image
                src="/icons/heart-logo.svg"
                alt="Heart icon"
                width={20}
                height={20}
                className="mx-auto"
              />
              <div className="absolute bg-white rounded-full text-[10px] top-[3px] right-[2px] h-4 grid place-items-center w-4 leading-[8px] text-center font-bold">{cartCars.length}</div>
            </Link>

            {/* login popup button */}
            {
              !token ? (
                <div>
                  <button
                    onClick={() => setLoginPopup(true)}
                    aria-label="Login"
                    title="Login to your account"
                    className="grid w-10 h-10 cursor-pointer border border-transparent rounded-full place-items-center hover:border-[#FAFAFA] transition-all ease duration-300"
                  >
                    <Image
                      src="/icons/user-icon.svg"
                      alt="User logo"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              ) : (
                <Link href="/user/my-profile" title="Profile" className="hidden lg:grid w-10 h-10 cursor-pointer border border-transparent rounded-full place-items-center hover:border-[#FAFAFA] transition-all ease duration-300">
                  <Image
                    src="/icons/user-icon.svg"
                    alt="User logo"
                    width={20}
                    height={20}
                  />
                </Link>
              )
            }
          </div>
          {/* <!-- post ad button --> */}
          <Link
            href="/sell-car"
            title="Post an ad"
            className="leading-[48px] lg:block hidden h-12 rounded-[5px] bg-[#347DFF] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.15)] text-[#FAFAFA] px-6 text-base font-medium transition-all ease duration-300 hover:bg-[#1F4D9D] hover:rounded-[25px]"
          >
            Post and ad
          </Link>

          {/* <!-- Select language dropdown --> */}
          <Language />
        </div>
      </div>

      <InfoBadge />

      {
        loginPopup && <LoginPopup onClose={() => setLoginPopup(false)} />
      }
    </header>
  );
}
