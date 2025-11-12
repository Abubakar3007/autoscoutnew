import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";
import LoginSocialButton from "../authentication/LoginSocialButton";

export default function LoginPopup({ onClose }) {
    return (

        <div className="popups show" data-popup="login_popup">

            <div className="grid place-items-center h-full w-full">
                {/* when user click login button and if any error in password or username then show div by if condition */}
                <div className="p-4 bg-[#FFD909] flex items-center gap-4 max-w-[448px] w-full hidden">
                    <img
                        src="/icons/warning.png"
                        alt="warning icon"
                    />
                    <p className="text-[#E53835] text-base leading-8">We couldn't find an account matching the username and password you entered. Please check your username and password and try again.</p>
                </div>

                <div className="box max-w-[448px] w-full mx-auto p-6 relative overflow-scroll pt-10 bg-white no-scroll h-[650px]">

                    {/* Close popup button */}
                    <button
                        onClick={onClose}
                        className="right-2 top-2 absolute cursor-pointer"
                    >
                        <img
                            src="/icons/close-btn.svg"
                            alt="close icon"
                            className="w-5"
                        />
                    </button>

                    <div>
                        <div className="mb-6 text-center grid place-items-center bg-[url(/images/small-bg.png)] min-h-[120px]">
                            <Heading as="h2" className="text-[#FAFAFA] border-[#FAFAFA] text-[28px]">Login</Heading>
                        </div>

                        <div>

                            {/* Select user type for login */}
                            <div className="flex mb-6">
                                <button className="p-3 border-b border-blue-500 text-blue-500 text-xl font-semibold flex-1 cursor-pointer">Seller</button>
                                <button className="p-3 border-b border-neutral-400 text-xl font-semibold flex-1 cursor-pointer">Dealer</button>
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <h4 className="text-base font-medium">Welcome back!</h4>
                                <p className="text-sm text-gray-500">Log in and keep track of all your searches.</p>
                            </div>

                            {/* Form */}
                            <form action="#" method="POST" className="space-y-4">

                                {/* email */}
                                <div>
                                    <Label
                                        htmlFor="email"
                                        name="E-mail address"
                                        className="mb-1"
                                    />

                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email address"
                                    />
                                </div>

                                {/* Password */}
                                <div>

                                    <Label
                                        htmlFor="password"
                                        name="Password"
                                        className="mb-1"
                                    />

                                    <div className="relative">
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                        />

                                        {/* password toggle icon */}
                                        <button
                                            type="button"
                                            class="absolute cursor-pointer right-4 top-1/2 translate-y-[-50%] password-toggle-btn"
                                        >
                                            {/* open eye */}
                                            <img src="/icons/open-eye.png" alt="show" />
                                            {/* close eye */}
                                            <img src="/icons/close-eye.png" alt="hide" class="hidden" />
                                        </button>
                                    </div>
                                </div>

                                {/* Forgot password */}
                                <div className="text-right">
                                    <Link
                                        href="/forget-password"
                                        className="text-blue-500 font-semibold text-sm"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Login button */}
                                <Button
                                    text="Login"
                                    className="h-12 mt-6 block w-full"
                                    type="submit"
                                />
                            </form>

                            {/* Divider */}
                            <LoginSocialButton />

                            {/* when user select seller then this one open */}
                            <p className="already active mt-6 text-center text-sm font-medium" data-tab="seller">
                                Don’t have an account? <Link href="/register/" className="text-blue-500 font-semibold">Register as a seller</Link>
                            </p>

                            {/* when user select dealer then open this one */}
                            <p className="mt-6 text-center hidden text-sm font-medium" data-tab="dealer">
                                Don’t have an account? <Link href="/dealer/register/" className="text-blue-500 font-semibold">Register as a dealer</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}