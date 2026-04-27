import Heading from "@/components/ui/Heading";

export default function Help() {
    return (
        <section className="py-20">
            <div className="wrapper max-w-[900px] mx-auto">
                <Heading
                    as="h1"
                    className="text-[28px] font-semibold mb-4 pb-2 border-b border-blue-500 w-fit"
                >
                    Help center
                </Heading>
                <p className="mb-10">Welcome to the <strong>Automobile</strong> Help Center. <br />
                    We’re here to assist you with all your automobile-related questions—whether it’s about products, booking, service, warranty, or payments.</p>

                <div className="space-y-10 text-gray-800 leading-relaxed">
                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Frequently Asked Questions (FAQ)</Heading>
                        <h4 className="mb-2 font-semibold">Q1. How can I book a vehicle or product?</h4>
                        <p className="mb-4">You can book directly through our website by clicking the “Book Now” or “Buy Now” button on the product page.</p>

                        <h4 className="mb-2 font-semibold">Q2. Can I schedule a test drive?</h4>
                        <p className="mb-4">Yes, select “Test Drive” on the product page or call us at [Your Number] to schedule.</p>

                        <h4 className="mb-2 font-semibold">Q3. What payment methods do you accept?</h4>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>UPI</li>
                            <li>Debit/Credit Cards</li>
                            <li>Net Banking</li>
                            <li>Wallets</li>
                            <li>Cash on Delivery (if available)</li>
                        </ul>

                        <h4 className="mb-2 font-semibold">Q4. How do I track my order or delivery?</h4>
                        <p className="mb-4">We send updates via SMS/Email. You can also check My Orders in your account.</p>

                        <h4 className="mb-2 font-semibold">Q5. What is your return policy?</h4>
                        <p>Returns are only allowed for defective or incorrect items—not for vehicle purchases unless allowed by the manufacturer.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">2. Vehicle & Product Support</Heading>
                        <h4 className="mb-2 font-semibold">Product Details</h4>
                        <p className="mb-4">Click any product to view features, specifications, price, warranty, and available offers.</p>

                        <h4 className="mb-2 font-semibold">Service & Maintenance</h4>
                        <p className="mb-4">Need service? <br />Book using the Service Request Form or call [Your Number].</p>

                        <h4 className="mb-2 font-semibold">Warranty Support</h4>
                        <p>All products come with manufacturer warranty. <br />Keep the invoice and warranty card safe.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Payments & Billing</Heading>
                        <p>If your payment fails or is deducted but order not confirmed:</p>
                        <p className="mb-3">Your data may be shared only with:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-3">
                            <li>Wait 10–20 minutes</li>
                            <li>Check SMS/Email for confirmation</li>
                            <li>Contact us with your transaction ID</li>
                        </ul>
                        <p>For invoice copy or GST bill, email us at [Your Email].</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Shipping & Delivery</Heading>
                        <p className="mb-3">Delivery time depends on:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-3">
                            <li>Stock availability</li>
                            <li>Your location</li>
                            <li>Manufacturer dispatch</li>
                        </ul>
                        <p>If your delivery is delayed, contact our team with your order number.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Contact Support</Heading>
                        <p className="mb-3">Need quick help? We’re here for you.</p>
                        <ul className="list-disc pl-6 space-y-2 mb-3">
                            <li><strong>Phone:</strong> [Your Number]</li>
                            <li><strong>Email:</strong> [Your Email]</li>
                            <li><strong>Address:</strong> [Your Address]</li>
                            <li><strong>Website:</strong> [Your Website URL]</li>
                        </ul>
                        <p>Working Hours: <br />
                            Monday–Saturday: 10:00 AM – 7:00 PM <br />
                            Sunday: Closed
                        </p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Raise a Support Ticket</Heading>
                        <p className="mb-3">If you face any issue with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>✔ Order</li>
                            <li>✔ Booking</li>
                            <li>✔ Service</li>
                            <li>✔ Payment</li>
                            <li>✔ Technical problems</li>
                        </ul>
                        <p className="mt-3">Fill out our support form: <br />
                            [Support Form Link / Contact Page]
                        </p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Technical Issues</Heading>
                        <p className="mb-3">If the website is not working or you face errors:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Clear browser cache</li>
                            <li>Try a different browser</li>
                            <li>Try again after a few minutes</li>
                            <li>Contact technical support at [Your Email]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
