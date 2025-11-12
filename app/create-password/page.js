import SetPasswordForm from "@/components/sections/authentication/SetPasswordForm";
import Heading from "@/components/ui/Heading";

export default function CreatePassword() {
    return (
        <section className="md:py-20 py-14">
            <div className="wrapper">
                <Heading className="pb-2 mx-auto mb-10 font-semibold border-b border-blue-500 text-2xl sm:text-xxl w-fit">Set your new password</Heading>
                {/* box */}
                <div className="w-full p-6 mx-auto rounded-md max-w-[448px] bg-white shadow-box-shadow">
                    <SetPasswordForm />
                </div>
            </div>
        </section>
    )
}