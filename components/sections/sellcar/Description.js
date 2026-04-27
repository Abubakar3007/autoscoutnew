"use client";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";
import { useState } from "react";

export default function DescriptionTestNative() {
    const [description, setDescription] = useState("");
    const maxChars = 1000;

    return (
        <div className="p-6 mb-10 rounded-md box shadow-box-shadow bg-white">
            <h3 className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">
                Vehicle description
            </h3>


            <Label
                htmlFor="description"
                name="Description"
                className="mb-1"
            />
            <Textarea
                id="description"
                placeholder="Write car description"
                className="min-h-[222px] block w-full p-2 border rounded"
                value={description}
                onChange={(e) => {
                    const v = e.target.value;
                    if (v.length <= maxChars) setDescription(v);
                }}
            />

            <div className="mt-1 text-xs text-gray-500 text-right">
                <span className={description.length > maxChars * 0.9 ? "text-red-500" : ""}>
                    {maxChars - description.length} characters left
                </span>
            </div>
        </div>
    );
}
