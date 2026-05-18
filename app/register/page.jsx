"use client";
import LoginSocialButton from "@/components/sections/authentication/LoginSocialButton";
import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import TogglePassword from "@/components/ui/TogglePassword";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Register() {

    const register = useAuthStore((state) => state.register);
    const [errorPassword, setErrorPassword] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        state: "",
        zip: "",
        address: "",
        username: "",
        password: "",
        cPassword: "",
    })

    const countryData = [
        { value: "af", label: "Afghanistan" },
        { value: "ax", label: "Åland Islands" },
        { value: "al", label: "Albania" },
        { value: "dz", label: "Algeria" },
        { value: "as", label: "American Samoa" },
        { value: "ad", label: "Andorra" },
        { value: "ao", label: "Angola" },
        { value: "ai", label: "Anguilla" },
        { value: "aq", label: "Antarctica" },
        { value: "ag", label: "Antigua and Barbuda" },
        { value: "ar", label: "Argentina" },
        { value: "am", label: "Armenia" },
        { value: "aw", label: "Aruba" },
        { value: "au", label: "Australia" },
        { value: "at", label: "Austria" },
        { value: "az", label: "Azerbaijan" },
        { value: "bs", label: "Bahamas" },
        { value: "bh", label: "Bahrain" },
        { value: "bd", label: "Bangladesh" },
        { value: "bb", label: "Barbados" },
        { value: "by", label: "Belarus" },
        { value: "be", label: "Belgium" },
        { value: "bz", label: "Belize" },
        { value: "bj", label: "Benin" },
        { value: "bm", label: "Bermuda" },
        { value: "bt", label: "Bhutan" },
        { value: "bo", label: "Bolivia" },
        { value: "bq", label: "Bonaire" },
        { value: "ba", label: "Bosnia and Herzegovina" },
        { value: "bw", label: "Botswana" },
        { value: "bv", label: "Bouvet Island" },
        { value: "br", label: "Brazil" },
        { value: "io", label: "British Indian Ocean Territory" },
        { value: "bn", label: "Brunei Darussalam" },
        { value: "bg", label: "Bulgaria" },
        { value: "bf", label: "Burkina Faso" },
        { value: "bi", label: "Burundi" },
        { value: "kh", label: "Cambodia" },
        { value: "cm", label: "Cameroon" },
        { value: "ca", label: "Canada" },
        { value: "cv", label: "Cabo Verde" },
        { value: "ky", label: "Cayman Islands" },
        { value: "cf", label: "Central African Republic" },
        { value: "td", label: "Chad" },
        { value: "cl", label: "Chile" },
        { value: "cn", label: "China" },
        { value: "cx", label: "Christmas Island" },
        { value: "cc", label: "Cocos Islands" },
        { value: "co", label: "Colombia" },
        { value: "km", label: "Comoros" },
        { value: "cg", label: "Congo" },
        { value: "cd", label: "Congo, Democratic Republic" },
        { value: "ck", label: "Cook Islands" },
        { value: "cr", label: "Costa Rica" },
        { value: "ci", label: "Côte d'Ivoire" },
        { value: "hr", label: "Croatia" },
        { value: "cu", label: "Cuba" },
        { value: "cw", label: "Curaçao" },
        { value: "cy", label: "Cyprus" },
        { value: "cz", label: "Czech Republic" },
        { value: "dk", label: "Denmark" },
        { value: "dj", label: "Djibouti" },
        { value: "dm", label: "Dominica" },
        { value: "do", label: "Dominican Republic" },
        { value: "ec", label: "Ecuador" },
        { value: "eg", label: "Egypt" },
        { value: "sv", label: "El Salvador" },
        { value: "gq", label: "Equatorial Guinea" },
        { value: "er", label: "Eritrea" },
        { value: "ee", label: "Estonia" },
        { value: "sz", label: "Eswatini" },
        { value: "et", label: "Ethiopia" },
        { value: "fk", label: "Falkland Islands" },
        { value: "fo", label: "Faroe Islands" },
        { value: "fj", label: "Fiji" },
        { value: "fi", label: "Finland" },
        { value: "fr", label: "France" },
        { value: "gf", label: "French Guiana" },
        { value: "pf", label: "French Polynesia" },
        { value: "tf", label: "French Southern Territories" },
        { value: "ga", label: "Gabon" },
        { value: "gm", label: "Gambia" },
        { value: "ge", label: "Georgia" },
        { value: "de", label: "Germany" },
        { value: "gh", label: "Ghana" },
        { value: "gi", label: "Gibraltar" },
        { value: "gr", label: "Greece" },
        { value: "gl", label: "Greenland" },
        { value: "gd", label: "Grenada" },
        { value: "gp", label: "Guadeloupe" },
        { value: "gu", label: "Guam" },
        { value: "gt", label: "Guatemala" },
        { value: "gg", label: "Guernsey" },
        { value: "gn", label: "Guinea" },
        { value: "gw", label: "Guinea-Bissau" },
        { value: "gy", label: "Guyana" },
        { value: "ht", label: "Haiti" },
        { value: "hm", label: "Heard Island & McDonald Islands" },
        { value: "va", label: "Holy See" },
        { value: "hn", label: "Honduras" },
        { value: "hk", label: "Hong Kong" },
        { value: "hu", label: "Hungary" },
        { value: "is", label: "Iceland" },
        { value: "in", label: "India" },
        { value: "id", label: "Indonesia" },
        { value: "ir", label: "Iran" },
        { value: "iq", label: "Iraq" },
        { value: "ie", label: "Ireland" },
        { value: "im", label: "Isle of Man" },
        { value: "il", label: "Israel" },
        { value: "it", label: "Italy" },
        { value: "jm", label: "Jamaica" },
        { value: "jp", label: "Japan" },
        { value: "je", label: "Jersey" },
        { value: "jo", label: "Jordan" },
        { value: "kz", label: "Kazakhstan" },
        { value: "ke", label: "Kenya" },
        { value: "ki", label: "Kiribati" },
        { value: "kp", label: "North Korea" },
        { value: "kr", label: "South Korea" },
        { value: "kw", label: "Kuwait" },
        { value: "kg", label: "Kyrgyzstan" },
        { value: "la", label: "Laos" },
        { value: "lv", label: "Latvia" },
        { value: "lb", label: "Lebanon" },
        { value: "ls", label: "Lesotho" },
        { value: "lr", label: "Liberia" },
        { value: "ly", label: "Libya" },
        { value: "li", label: "Liechtenstein" },
        { value: "lt", label: "Lithuania" },
        { value: "lu", label: "Luxembourg" },
        { value: "mo", label: "Macao" },
        { value: "mg", label: "Madagascar" },
        { value: "mw", label: "Malawi" },
        { value: "my", label: "Malaysia" },
        { value: "mv", label: "Maldives" },
        { value: "ml", label: "Mali" },
        { value: "mt", label: "Malta" },
        { value: "mh", label: "Marshall Islands" },
        { value: "mq", label: "Martinique" },
        { value: "mr", label: "Mauritania" },
        { value: "mu", label: "Mauritius" },
        { value: "yt", label: "Mayotte" },
        { value: "mx", label: "Mexico" },
        { value: "fm", label: "Micronesia" },
        { value: "md", label: "Moldova" },
        { value: "mc", label: "Monaco" },
        { value: "mn", label: "Mongolia" },
        { value: "me", label: "Montenegro" },
        { value: "ms", label: "Montserrat" },
        { value: "ma", label: "Morocco" },
        { value: "mz", label: "Mozambique" },
        { value: "mm", label: "Myanmar" },
        { value: "na", label: "Namibia" },
        { value: "nr", label: "Nauru" },
        { value: "np", label: "Nepal" },
        { value: "nl", label: "Netherlands" },
        { value: "nc", label: "New Caledonia" },
        { value: "nz", label: "New Zealand" },
        { value: "ni", label: "Nicaragua" },
        { value: "ne", label: "Niger" },
        { value: "ng", label: "Nigeria" },
        { value: "nu", label: "Niue" },
        { value: "nf", label: "Norfolk Island" },
        { value: "mk", label: "North Macedonia" },
        { value: "mp", label: "Northern Mariana Islands" },
        { value: "no", label: "Norway" },
        { value: "om", label: "Oman" },
        { value: "pk", label: "Pakistan" },
        { value: "pw", label: "Palau" },
        { value: "ps", label: "Palestine" },
        { value: "pa", label: "Panama" },
        { value: "pg", label: "Papua New Guinea" },
        { value: "py", label: "Paraguay" },
        { value: "pe", label: "Peru" },
        { value: "ph", label: "Philippines" },
        { value: "pn", label: "Pitcairn" },
        { value: "pl", label: "Poland" },
        { value: "pt", label: "Portugal" },
        { value: "pr", label: "Puerto Rico" },
        { value: "qa", label: "Qatar" },
        { value: "re", label: "Réunion" },
        { value: "ro", label: "Romania" },
        { value: "ru", label: "Russia" },
        { value: "rw", label: "Rwanda" },
        { value: "bl", label: "Saint Barthélemy" },
        { value: "sh", label: "Saint Helena" },
        { value: "kn", label: "Saint Kitts and Nevis" },
        { value: "lc", label: "Saint Lucia" },
        { value: "mf", label: "Saint Martin" },
        { value: "pm", label: "Saint Pierre and Miquelon" },
        { value: "vc", label: "Saint Vincent and the Grenadines" },
        { value: "ws", label: "Samoa" },
        { value: "sm", label: "San Marino" },
        { value: "st", label: "Sao Tome and Principe" },
        { value: "sa", label: "Saudi Arabia" },
        { value: "sn", label: "Senegal" },
        { value: "rs", label: "Serbia" },
        { value: "sc", label: "Seychelles" },
        { value: "sl", label: "Sierra Leone" },
        { value: "sg", label: "Singapore" },
        { value: "sx", label: "Sint Maarten" },
        { value: "sk", label: "Slovakia" },
        { value: "si", label: "Slovenia" },
        { value: "sb", label: "Solomon Islands" },
        { value: "so", label: "Somalia" },
        { value: "za", label: "South Africa" },
        { value: "gs", label: "South Georgia" },
        { value: "ss", label: "South Sudan" },
        { value: "es", label: "Spain" },
        { value: "lk", label: "Sri Lanka" },
        { value: "sd", label: "Sudan" },
        { value: "sr", label: "Suriname" },
        { value: "sj", label: "Svalbard and Jan Mayen" },
        { value: "se", label: "Sweden" },
        { value: "ch", label: "Switzerland" },
        { value: "sy", label: "Syria" },
        { value: "tw", label: "Taiwan" },
        { value: "tj", label: "Tajikistan" },
        { value: "tz", label: "Tanzania" },
        { value: "th", label: "Thailand" },
        { value: "tl", label: "Timor-Leste" },
        { value: "tg", label: "Togo" },
        { value: "tk", label: "Tokelau" },
        { value: "to", label: "Tonga" },
        { value: "tt", label: "Trinidad and Tobago" },
        { value: "tn", label: "Tunisia" },
        { value: "tr", label: "Turkey" },
        { value: "tm", label: "Turkmenistan" },
        { value: "tc", label: "Turks and Caicos Islands" },
        { value: "tv", label: "Tuvalu" },
        { value: "ug", label: "Uganda" },
        { value: "ua", label: "Ukraine" },
        { value: "ae", label: "United Arab Emirates" },
        { value: "gb", label: "United Kingdom" },
        { value: "us", label: "United States" },
        { value: "um", label: "US Outlying Islands" },
        { value: "uy", label: "Uruguay" },
        { value: "uz", label: "Uzbekistan" },
        { value: "vu", label: "Vanuatu" },
        { value: "ve", label: "Venezuela" },
        { value: "vn", label: "Vietnam" },
        { value: "vg", label: "Virgin Islands, British" },
        { value: "vi", label: "Virgin Islands, U.S." },
        { value: "wf", label: "Wallis and Futuna" },
        { value: "eh", label: "Western Sahara" },
        { value: "ye", label: "Yemen" },
        { value: "zm", label: "Zambia" },
        { value: "zw", label: "Zimbabwe" },
    ];

    const cityData = [
        {
            label: "Dhaka",
            value: "Dhaka"
        },
        {
            label: "Chittagong",
            value: "Chittagong"
        },
        {
            label: "Khulna",
            value: "Khulna"
        }
    ];

    const stateData = [
        {
            label: "Dhaka",
            value: "Dhaka"
        },
        {
            label: "Chittagong",
            value: "Chittagong"
        },
        {
            label: "Khulna",
            value: "Khulna"
        }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (name, item) => {
        setFormData({
            ...formData,
            [name]: item
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.cPassword) {
            return setError("Password does not match");
        }

        await register(
            formData.name,
            formData.email,
            formData.phone,
            formData.country,
            formData.city,
            formData.state,
            formData.zip,
            formData.address,
            formData.username,
            formData.password
        )

        alert("Registered Successful");

        setFormData({
                    name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        state: "",
        zip: "",
        address: "",
        username: "",
        password: "",
        cPassword: "",
        });
    }

    return (
        <div className="md:py-20 py-14">
            <div className="wrapper">

                <Heading as="h1" className="pb-2 mx-auto mb-10 font-semibold border-b border-blue-500 text-[28px] w-fit">Register as a seller</Heading>

                {/* register form container */}
                <div className="w-full p-4 mx-auto rounded-md sm:p-6 box max-w-[665px] shadow-box-shadow bg-white">

                    <form
                        onSubmit={handleSubmit}
                        id="register"
                    >
                        {/* form filed */}
                        <div className="grid gap-4 mb-6 sm:grid-cols-2">

                            {/* full name */}
                            <div>
                                <Label
                                    htmlFor="full-name"
                                    name="Full name*"
                                    className="mb-1"
                                />
                                <Input
                                    id="full-name"
                                    name="name"
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* email */}
                            <div>
                                <Label
                                    htmlFor="email"
                                    name="Email address*"
                                    className="mb-1"
                                />
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* phone number */}
                            <div>
                                <Label
                                    htmlFor="phone-number"
                                    name="Phone number*"
                                    className="mb-1"
                                />
                                <Input
                                    id="phone-number"
                                    name="phone"
                                    placeholder="Enter phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <Label
                                    htmlFor="country"
                                    name="Country*"
                                    className="mb-1"
                                />
                                <CustomSelect
                                    data={countryData}
                                    name="country"
                                    placeholder="Choose"
                                    onSelect={handleSelect}
                                />
                            </div>

                            {/* City */}
                            <div>
                                <Label
                                    htmlFor="city"
                                    name="City"
                                    className="mb-1"
                                />
                                <CustomSelect
                                    data={cityData}
                                    name="city"
                                    placeholder="Choose"
                                    onSelect={handleSelect}
                                />
                            </div>

                            {/* State */}
                            <div>
                                <Label
                                    htmlFor="state"
                                    name="State/Province*"
                                    className="mb-1"
                                />
                                <CustomSelect
                                    data={stateData}
                                    name="state"
                                    placeholder="Choose"
                                    onSelect={handleSelect}
                                />
                            </div>

                            {/* Zip code */}
                            <div>
                                <Label
                                    htmlFor="zip-code"
                                    name="ZIP/Postal Code*"
                                    className="mb-1"
                                />
                                <Input
                                    id="zip-code"
                                    name="zip"
                                    placeholder="Enter zip code"
                                    value={formData.zip}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <Label
                                    htmlFor="address"
                                    name="Address*"
                                    className="mb-1"
                                />

                                <Input
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Username */}
                            <div>
                                <Label
                                    htmlFor="username"
                                    name="Username*"
                                    className="mb-1"
                                />
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Enter username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <Label
                                    htmlFor="password"
                                    name="password"
                                    className="mb-1"
                                />
                                <TogglePassword
                                    inputId="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Confirm password */}
                            <div>
                                <Label
                                    htmlFor="c-password"
                                    name="Confirm password*"
                                    className="mb-1"
                                />
                                <Input
                                    id="c-password"
                                    name="cPassword"
                                    placeholder="Re-enter password"
                                    type="password"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* form submit button*/}
                        <Button
                            type="submit"
                            text="Register"
                            className="max-w-[400px] w-full h-12 block mx-auto"
                        />
                    </form>

                    {/* Divider */}
                    <LoginSocialButton />

                    {/* Already have an account */}
                    <p className="mt-6 text-sm text-center">
                        Already have an account? <Link href="/login" className="font-semibold text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}