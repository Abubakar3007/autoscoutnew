import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function SetPasswordForm() {
    return (
        <form action="">

            {/* Password */}
            <div className="mb-4">
                <Label
                    htmlFor="password"
                    name="Password*"
                    className="mb-1"
                />

                <div className="relative password-wrapper">
                    <Input
                        id="password"
                        placeholder="Enter password"
                        type="password"
                    />
                    {/* Password toggle button */}
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
                    htmlFor="confirm-password"
                    name="Confirm password*"
                    className="mb-1"
                />

                <Input
                    id="confirm-password"
                    placeholder="Re-enter password"
                    type="password"
                />
            </div>

            {/* submit button */}
            <Button
                text="Save changes"
                className="h-12 mt-6 w-full"
            />
        </form>
    )
}