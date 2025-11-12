import Button from "@/components/ui/Button";

export default function LogoutPopup() {
    return (
        <div className="popups" data-popup="logout">
            <div className="grid w-full h-full place-items-center">

                <div className="w-full p-6 mx-auto rounded-md bg-gray-50 shadow-box-shadow box max-w-[290px]">
                    <h3 className="mb-2 text-xl font-semibold leading-8 text-center">Logout confirmation</h3>
                    <p className="text-base leading-6 text-center">Are you sure you want to log out?</p>

                    {/* buttons */}
                    <div className="flex gap-4 mt-6">
                        <Button
                            text="No"
                            className="flex-1 secondary-btn-sm"
                        />

                        <Button
                            text="Yes"
                            className="flex-1 primary-btn-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}