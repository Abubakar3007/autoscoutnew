import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";

export default function DealerContact() {
    return (
        <section className="md:pt-20 pt-14">
            <div className="flex flex-col gap-10 md:flex-row" id="contact">

                {/*  map */}
                <div className="flex-1">
                    <iframe
                        className="w-full md:h-full h-222"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                        frameBorder="0"
                        allowFullScreen=""></iframe>
                </div>

                {/* contact form */}
                <div className="flex-1">
                    <Heading as="h2" className="pb-2 mb-6 text-2xl font-medium border-b border-blue-500 sm:mb-10 md:text-xxl w-fit">Contact</Heading>

                    {/* contact form */}
                    <form action="">
                        <div className="mb-6 space-y-4">
                            {/* full name */}
                            <div>
                                <Label htmlFor="name" name="Your name*" className="mb-1" />
                                <Input 
                                    id="name"
                                    placeholder="name"
                                />
                            </div>

                            {/* mail */}
                            <div>
                                <Label
                                    htmlFor="email"
                                    name="Your email*"
                                    className="mb-1"
                                />
                                <Input
                                    id="email"
                                    placeholder="email"
                                />
                            </div>

                            {/* number */}
                            <div>
                                <Label
                                    htmlFor="number"
                                    name="Mobile number*"
                                    className="mb-1"
                                />
                                <Input
                                    id="number"
                                    placeholder="number"
                                />
                            </div>

                            {/* message */}
                            <div>
                                <Label
                                    htmlFor="message"
                                    name="Your message*"
                                    className="mb-1"
                                />
                                <Textarea
                                    id="message"
                                    placeholder="message"
                                    className="resize-none h-[222px]"
                                />
                            </div>
                            <p className="text-xs text-gray-500">We will use your email address in accordance with our&nbsp;<a href="">privacy policy</a>&nbsp;, for example for vehicle recommendations.&nbsp;You can object to this at any time by clicking&nbsp;<a href="">here</a>&nbsp;.</p>
                        </div>

                        {/* Submit button */}
                        <Button  text="Send message" className="h-12 w-full"/>
                    </form>
                </div>
            </div>
        </section>
    )
}