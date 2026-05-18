"use client"
import { useState } from "react";
import Input from "./Input";

export default function TogglePassword({ inputId, name, value, onChange }) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <Input
                id={inputId}
                name={name}
                value={value}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={onChange}
            />
            {/* Toggle password */}
            <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute cursor-pointer right-4 top-1/2 translate-y-[-50%] password-toggle-btn"
            >
                {
                    showPassword ? (
                        <img src="/icons/open-eye.png" alt="show" />
                    ) : (
                        <img src="/icons/close-eye.png" alt="hide" />
                    )
                }
            </button>
        </div>
    );
}