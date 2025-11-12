import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function SendOtpPopup() {
    return (
        <div className="popups" id="sent-otp">
            <div className="grid w-full h-full place-items-center">
                <div className="relative w-full p-6 pt-10 rounded-md bg-gray-50 box shadow-box-shadow max-w-[448px]">

                    {/* Close btn */}
                    <button id="close-send-otp-btn" className="absolute top-2 right-2 cursor-pointer">
                        <img
                            src="/icons/close-btn.svg"
                            alt="Close btn"
                            className="w-5"
                        />
                    </button>

                    <h3 className="text-xl font-semibold leading-8">Enter OTP</h3>

                    {/* Success box */}
                    <div className="flex items-center gap-4 p-4 my-6 forget_success bg-low-green">
                        <img
                            src="/icons/forget-success-icon.png"
                            alt="forget success"
                            className="h-max"
                        />
                        <p>For security reasons we need to verify your identity. We sent an OTP to pro@gmail.com.</p>
                    </div>

                    {/* form */}
                    <form action="">
                        {/* Otp input */}
                        <div>
                            <Label
                                htmlFor="email"
                                name="OTP"
                                className="mb-1"
                            />
                            <Input
                                id="email"
                                placeholder="OTP"
                            />
                        </div>

                        {/* resend otp button */}
                        <div className="flex items-center justify-between mt-1 text-sm">
                            <span>60 sec</span>
                            <a href="" className="font-semibold text-blue-500">Resend OTP</a>
                        </div>

                        <div className="mt-6 text-center">
                            <Button
                                text="Save changes"
                                className="w-full mb-4 h-12"
                            />
                            <a href="!#" className="cursor-pointer">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}