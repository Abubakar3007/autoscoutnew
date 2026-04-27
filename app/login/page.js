import LoginForm from "@/components/sections/authentication/LoginForm";
import LoginSocialButton from "@/components/sections/authentication/LoginSocialButton";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function Login() {
    return (
        <section className="py-16 bg-no-repeat min-h-dvh bg-[url(/images/login-banner.jpg)] bg-cover grid place-items-center">
            <div className="flex flex-col items-center justify-between gap-8 sm:gap-16 wrapper lg:flex-row">

                {/* left side wrapper */}
                <div className="flex-1 hidden text-white lg:block">
                    <h1 className="mb-6 text-2xl font-semibold sm:text-4xl">Begin your journey towards automotive excellence</h1>
                    <p className="font-semibold sm:leading-8 sm:text-xl">Explore a world of automotive excellence at your fingertips. Discover the perfect vehicle that speaks to your style and needs. With our intuitive platform, your dream car is just a click away. Begin your journey towards automotive bliss today.</p>
                </div>

                {/* Login box */}
                <div className="flex-1 w-full sm:rounded-md sm:p-6 sm:bg-white/10 sm:backdrop-blur-md max-w-538">

                    <Heading as="h2" className="pb-2 mx-auto mb-6 font-semibold border-b text-[28px] border-gray-50 w-fit text-gray-50">Login</Heading>

                    {/* <box */}
                    <div className="p-4 rounded-md sm:p-6 bg-gray-50 shadow-box-shadow">

                        {/* Seller and dealer tab button */}
                        <div className="flex mb-6 border-b border-neutral-400">
                            <button className="flex-1 p-3 text-xl font-semibold border-b-2 active border-blue-500 login-tab-btn cursor-pointer">
                                Seller
                            </button>
                            <button className="flex-1 p-3 text-xl font-semibold border-b-2 border-transparent login-tab-btn cursor-pointer">Dealer</button>
                        </div>

                        {/* <!-- heading --> */}
                        <h4>Welcome back!</h4>
                        <p className="text-sm leading-6 text-gray-500">Log in and keep track of all your searches.</p>


                        {/* form */}
                        <LoginForm />

                        <LoginSocialButton />

                        <p className="mt-6 text-sm text-center">
                            Don't have an account? <Link
                                href="/register"
                                className="font-semibold text-blue-500"
                            >
                                Register as a seller
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}