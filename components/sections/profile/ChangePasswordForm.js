import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function ChangePasswordForm() {
    return (
        <div className="max-w-[448px] w-full mx-auto bg-white p-6 rounded-md">
            <form action="" className="space-y-4">
                <div>
                    <Label
                        htmlFor="current-password"
                        name="Current Password"
                        className="mb-1"
                    />
                    <Input
                        id="current-password"
                        placeholder="Enter current password"
                    />
                </div>

                {/* new password */}
                <div>
                    <Label
                        htmlFor="new-password"
                        name="New Password"
                        className="mb-1"
                    />
                    <Input
                        id="new-password"
                        placeholder="Enter new password"
                    />
                </div>

                {/* Confirm password */}
                <div>
                    <Label
                        htmlFor="confirm"
                        name="Confirm Password"
                        className="mb-1"
                    />
                    <Input
                        id="confirm-password"
                        placeholder="Enter confirm password"
                    />
                </div>

                {/* Submit button */}
                <Button
                    text="Change password"
                    className="w-full h-12 block mt-6"
                />
            </form>
        </div>
    )
}