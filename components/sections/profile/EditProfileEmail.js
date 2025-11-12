import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function EditProfileEmail() {
    return (
        <div class="popups" id="edit-email">
            <div class="grid w-full h-full place-items-center">
                <div class="relative w-full p-6 rounded-md bg-gray-50 box shadow-box-shadow max-w-[448px]">

                    {/* Close btn */}
                    <button id="edit-email-close-btn" class="absolute right-2 top-2">
                        <img
                            src="/icons/close-btn.svg"
                            alt="Close button"
                            class="w-5"
                        />
                    </button>

                    <h3 class="mb-6 text-xl font-semibold leading-8">Change email</h3>

                    <form action="">
                        {/* Current email*/}
                        <div class="mb-4">
                            <Label
                                htmlFor="email"
                                name="Current email address"
                                className="mb-1"
                            />
                            <Input
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>

                        {/* New email */}
                        <div>
                            <Label
                                htmlFor="new-email"
                                name="New email address"
                                className="mb-1"
                            />
                            <Input
                                id="new-email"
                                placeholder="Enter new email"
                            />
                        </div>

                        {/* Submit button */}
                        <Button
                            text="Send OTP"
                            className="mt-6 w-full h-12"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}