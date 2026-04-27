import ForgotForm from "@/components/sections/authentication/ForgotForm";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function ForgetPassword() {
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

                    <Heading as="h2" className="text-[28px] mx-auto border-gray-50 mb-6 text-gray-50 text-center">Forgot password</Heading>

                    {/* box */}
                    <div className="p-4 rounded-md sm:p-6 bg-gray-50 shadow-box-shadow">
                        <p>Enter the email address you used to create an account. This way we can send you a link to reset.</p>
                        <ForgotForm/>

                        <p className="mt-6 text-sm text-center">Already have an account?  <Link href="/login" className="font-semibold text-blue-500">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}