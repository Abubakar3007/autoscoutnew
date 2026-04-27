import Heading from "@/components/ui/Heading";

export default function Condition() {
    return (
        <section className="py-20">
            <div className="wrapper max-w-[900px] mx-auto">
                <Heading
                    as="h1"
                    className="text-[28px] font-semibold mb-4 pb-2 border-b border-blue-500 w-fit"
                >
                    Terms & Conditions – Automobile Store
                </Heading>
                <p className="mb-10">Welcome to [Your Store Name]. By accessing or purchasing from our website, you agree to the Terms & Conditions listed below. Please read them carefully.</p>

                <div className="space-y-10 text-gray-800 leading-relaxed">
                        <div>
                            <Heading as="h3" className="text-xl font-medium mb-4">General Conditionss</Heading>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    This website is owned and operated by [Your Store Name].
                                </li>
                                <li>
                                    By using our website, you accept all terms, policies, and notices stated here.
                                </li>
                                <li>
                                    We reserve the right to update or modify these Terms at any time without prior notice.
                                </li>
                            </ul>
                        </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Product Information</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>We sell automobile products such as cars, bikes, scooters, accessories, spare parts, electronics, tools, etc.</li>
                            <li>All product images are for representation purposes only. Actual product may vary in color, design, and features.</li>
                            <li>Prices, specifications, and availability are subject to change without notice.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Pricing & Payment</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All prices listed on our website are inclusive/exclusive of taxes (as applicable).</li>
                            <li>We accept payment through UPI, Credit/Debit Cards, Wallets, Net Banking, or Cash on Delivery (if available).</li>
                            <li>In case of pricing errors, we reserve the right to cancel or modify an order.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Booking & Delivery</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Vehicle or product booking is confirmed only after payment is successfully received.</li>
                            <li>Delivery timelines depend on stock availability, location, and manufacturer.</li>
                            <li>We are not responsible for delays due to unavoidable reasons like transport issues, natural calamities, or government rules.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Warranty Policy</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All vehicles/products come with manufacturer warranty only.</li>
                            <li>Warranty terms vary from brand to brand. Please read the official warranty card for details.</li>
                            <li>Physical damage, misuse, or unauthorized repair voids the warranty.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Return, Replacement & Refund</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Returns or replacements are allowed only if the product is defective, damaged, or incorrect at delivery.</li>
                            <li>Vehicle bookings once confirmed may be non-refundable (depends on manufacturer policy).</li>
                            <li>Refund processing time: 7–14 business days.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Test Drive & Inspection</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Customers are encouraged to take a test drive (for vehicles) or inspect items before final payment.</li>
                            <li>Once purchased, we will not be responsible for any issue caused by misuse or mishandling.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">User Responsibilities</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Not to misuse or manipulate any data on the site.</li>
                            <li>Not to upload harmful content like viruses, spam, or malware.</li>
                            <li>Not to violate any copyright or legal regulations.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Limitation of Liability</Heading>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>We are not responsible for financial losses, data loss, or indirect damages resulting from the use of our website or products.</li>
                            <li>All services are provided “as is” without any guarantees.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
