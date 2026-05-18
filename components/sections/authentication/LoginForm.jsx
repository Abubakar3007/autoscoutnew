"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import TogglePassword from "@/components/ui/TogglePassword";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData.email, formData.password);

        setFormData({
            email: "",
            password: "",
        });

        console.log(formData);

        router.push("/");
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6" id="login">

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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* <!-- password --> */}
                <div>
                    <Label
                        htmlFor="password"
                        name="Password"
                        className="mb-1"
                    />

                    <TogglePassword
                        inputId="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
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
                type="submit"
                className="block w-full h-12 mt-6"
            />
        </form>
    )
}