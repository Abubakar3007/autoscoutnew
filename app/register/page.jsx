"use client";
import LoginSocialButton from "@/components/sections/authentication/LoginSocialButton";
import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import TogglePassword from "@/components/ui/TogglePassword";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { fetchCountries } from "@/data/data";

export default function Register() {

    const register = useAuthStore((state) => state.register);
    const [errorPassword, setErrorPassword] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        zip: "",
        address: "",
        username: "",
        password: "",
        cPassword: "",
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
            zip: "",
            address: "",
            username: "",
            password: "",
            cPassword: "",
        });
    }

    // find country data
    const [country, setCountry] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCountries();
            setCountry(data);
            const formattedData = data.map((item) => ({
                label: item.country,
                value: item.country
            }))
            setCountryData(formattedData);
        }
        fetchData();
    }, []);

    const handleSelect = (name, item) => {
        setFormData({ ...formData, [name]: item });
        if (name === "country") {

            setFormData((prev) => (
                { ...prev, city: "", country: item }
            ))

            const selectedCountry = country.find((c) => c.country === item);

            if (selectedCountry) {
                setCityData(selectedCountry.cities.map((city) => ({
                    label: city,
                    value: city
                })));
            } else {
                setCityData([]);
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: item
            }));
        }
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
                                    value={formData.country}
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
                                    value={formData.city}
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
                                    htmlFor="Password"
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