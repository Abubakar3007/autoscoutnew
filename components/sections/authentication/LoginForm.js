import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
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

                    <div className="relative">
                        <Input
                            id="password"
                            placeholder="Enter password"
                        />

                        {/* password toggle button */}
                        <button
                            type="button"
                            class="absolute right-4 top-1/2 translate-y-[-50%] password-toggle-btn"
                        >
                            {/* open eye */}
                            <img src="/icons/open-eye.png" alt="show" />
                            {/* close eye */}
                            <img src="/icons/close-eye.png" alt="hide" class="hidden" />
                        </button>

                    </div>
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