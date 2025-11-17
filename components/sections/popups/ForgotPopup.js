import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

export default function ForgotPopup() {
    return (
        <div className="popup login" data-popup="forget_popup">
            <div className="grid place-items-center h-full w-full">
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
                            {/* Message */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-500">Enter the email address you used to create an account.&nbsp;This way we can send you a link to reset.</p>
                            </div>

                            {/* form */}
                            <form action="#" method="POST">

                                {/* email address */}
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

                                {/* Submit button */}
                                <Button
                                    text="Send link"
                                    className="h-12 block w-full"
                                    type="Submit"
                                />
                            </form>

                            {/* Already have an account */}
                            <p className="text-center text-gray-500">Already have an account? <Link href="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}