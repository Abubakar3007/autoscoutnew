import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import TogglePassword from "@/components/ui/TogglePassword";
import Link from "next/link";

export default function LoginForm() {
    return (
        <form action="#" method="POST" class="mt-6">

            {/* error show here */}
            <p class="mb-2 text-red-600">Please enter valid value</p>

            {/* filed */}
            <div class="space-y-4">

                {/* <!-- email --> */}
                <div>
                    <Label
                        htmlFor="email"
                        name="E-mail address"
                        className="mb-1"
                    />
                    <Input
                        id="email"
                        placeholder="email address"
                    />
                </div>

                {/* <!-- password --> */}
                <div>
                    <Label
                        htmlFor="password"
                        name="Password"
                        className="mb-1"
                    />

                    <TogglePassword inputId="password"/>
                </div>

                {/* forgot link */}
                <div class="text-sm font-semibold text-right text-blue-500">
                    <Link
                        href="forget-password"
                        title="Forgot password">
                        Forget password?
                    </Link>
                </div>
            </div>

            {/* <!-- submit button --> */}
            <Button
                text="Login"
                className="h-12 mt-6 block w-full"
            />
        </form>
    )
}