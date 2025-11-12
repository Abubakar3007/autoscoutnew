import LoginSocialButton from "@/components/sections/authentication/LoginSocialButton";
import Button from "@/components/ui/Button";
import CustomSelect from "@/components/ui/CustomSelect";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

export default function Register() {

    const countryData = [
        {
            label: "Bangladesh",
            value: "Bangladesh"
        },
        {
            label: "India",
            value: "India"
        },
        {
            label: "Pakistan",
            value: "Pakistan"
        }
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

    return (
        <div className="md:py-20 py-14">
            <div className="wrapper">

                <Heading as="h1" className="pb-2 mx-auto mb-10 font-semibold border-b border-blue-500 text-[28px] w-fit">Register as a seller</Heading>

                {/* register form container */}
                <div className="w-full p-4 mx-auto rounded-md sm:p-6 box max-w-[665px] shadow-box-shadow bg-white">

                    <form method="POST" action="#" id="register">

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
                                    placeholder="Enter full name"
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
                                    placeholder="Enter your email"
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
                                    placeholder="Enter phone number"
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
                                    placeholder="Enter address"
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
                                    placeholder="Enter zip code"
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
                                    placeholder="Enter username"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <Label
                                    htmlFor="password"
                                    name="Password*"
                                    className="mb-1"
                                />
                                <div className="relative ">
                                    <Input
                                        id="password"
                                        placeholder="Enter password"
                                        type="password"
                                    />

                                    {/* Toggle password */}
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 translate-y-[-50%] password-toggle-btn"
                                    >
                                        <img src="/icons/open-eye.png" alt="show" />
                                        <img src="/icons/close-eye.png" alt="hide" className="hidden" />
                                    </button>
                                </div>
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
                                    placeholder="Re-enter password"
                                    type="password"
                                />
                            </div>
                        </div>

                        {/* form submit button*/}
                        <Button
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