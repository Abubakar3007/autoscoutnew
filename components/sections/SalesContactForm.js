import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Textarea from "../ui/Textarea";

export default function SalesContactForm() {
    return (
        <div className="p-4 bg-white rounded-md h-max box shadow-box-shadow">
            <Heading as="h3" className="pb-2 mb-6 text-xl font-semibold border-b border-blue-500 w-fit">Contact</Heading>

            {/* contact form */}
            <form action="" className="space-y-4">
                <div>
                    <Label htmlFor="name" className="mb-1" name="Name*" />
                    <Input id="name" placeholder="name" />
                </div>
                <div>
                    <Label htmlFor="email" className="mb-1" name="Email*" />
                    <Input id="email" placeholder="email" />
                </div>
                <div>
                    <Label htmlFor="mobile" className="mb-1" name="Mobile number*" />
                    <Input id="mobile" placeholder="phone number" />
                </div>
                <div>
                    <Label htmlFor="message" className="mb-1" name="Your message*" />
                    {/* <Textarea id="message" placeholder="Write your query" className="h-[200px]"/> */}
                </div>

                {/* submit button */}
                <Button text="Send message" className="block w-full h-12 my-6" />
                <p className="text-xs leading-5">We will use your email address in accordance with our <a href="">privacy policy</a>, for example for vehicle recommendations.&nbsp;You can object to this at any time by clicking <a href="">here</a>.</p>
            </form>
        </div>
    )
}