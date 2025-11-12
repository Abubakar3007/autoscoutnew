import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function ForgotForm() {
    return (
        <div>
            {/* form */}
            <form action="#" method="POST" className="mt-6">
                {/* error show here  */}
                <p className="mb-2 text-red-600">Please enter valid value</p>

                {/* filed */}
                {/* email */}
                <div>
                    <Label
                        htmlFor="email"
                        name="E-mail address"
                        className="mb-1"
                    />

                    <Input
                        id="email"
                        placeholder="Enter email address"
                    />
                </div>

                {/* submit button */}
                <Button
                    text="Send link"
                    className="h-12 w-full block mt-6"
                />
            </form>
        </div>
    )
}
