import Heading from "@/components/ui/Heading";

export default function DataProtection() {
    return (
        <section className="py-20">
            <div className="wrapper max-w-[900px] mx-auto">
                <Heading
                    as="h1"
                    className="text-[28px] font-semibold mb-4 pb-2 border-b border-blue-500 w-fit"
                >
                    Data Protection & Privacy Policy
                </Heading>
                <p className="mb-10">At [Your Store Name], we are committed to protecting your personal data and ensuring complete transparency about how your information is collected, used, and stored. By using our website, you agree to the practices described in this policy.</p>

                <div className="space-y-10 text-gray-800 leading-relaxed">
                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Information We Collect</Heading>
                        <p>We may collect the following types of data:</p>
                        <h4 className="mb-2 font-semibold mt-3">A. Personal Information</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Address</li>
                            <li>Payment information</li>
                        </ul>
                        <h4 className="mb-2 font-semibold mt-3">B. Technical Information</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Cookies and usage data</li>
                        </ul>
                        <h4 className="mb-2 font-semibold mt-3">C. Transaction Information</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Order history</li>
                            <li>Payment history</li>
                            <li>Shipping and billing information</li>
                        </ul>
                        <h4 className="mb-2 font-semibold mt-3">D. Marketing Information</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Marketing preferences</li>
                            <li>Newsletter subscriptions</li>
                            <li>Event and promotion information</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">How We Use Your Information</Heading>
                        <p className="mb-3">We use your data for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Processing orders and bookings</li>
                            <li>Providing service/repair updates</li>
                            <li>Communicating offers or product updates</li>
                            <li>Customer support</li>
                            <li>Improving website performance</li>
                            <li>Preventing fraud or unauthorized access</li>
                            <li>Compliance with legal requirements</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Data Sharing</Heading>
                        <p className="mb-3">Your data may be shared only with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Vehicle manufacturers (for warranty/registration)</li>
                            <li>Payment partners (secure processing only)</li>
                            <li>Delivery/service providers</li>
                            <li>Government authorities (as required by law)</li>
                        </ul>
                        <p>All third parties are required to maintain confidentiality and use data only for authorized purposes.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Data Storage & Security</Heading>
                        <p className="mb-3">We implement strong security measures to protect your data:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encrypted servers</li>
                            <li>Secure payment gateways</li>
                            <li>Regular security audits</li>
                            <li>Access controls and authentication</li>
                            <li>Regular data backups</li>
                            <li>Compliance with data protection regulations</li>
                        </ul>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Your Rights</Heading>
                        <p className="mb-3">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access your personal data</li>
                            <li>Access your personal data</li>
                            <li>Request deletion of your data</li>
                            <li>Withdraw consent anytime</li>
                            <li>Object to data processing</li>
                            <li>Disable cookies through browser settings</li>
                        </ul>
                        <p>To exercise your rights, contact us at [Your Email].</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Cookies Policy</Heading>
                        <p className="mb-3">We use cookies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Improve website performance</li>
                            <li>Save user preferences</li>
                            <li>Personalize content and advertisements</li>
                            <li>Track website usage</li>
                        </ul>
                        <p className="mt-3">You can manage cookies through your browser settings or by using our cookie management tool.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Data Retention</Heading>
                        <p className="mb-3">We retain your personal data only as long as necessary:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Order/booking records (as per legal requirement)</li>
                            <li>Warranty/service records</li>
                            <li>Account information until you delete it</li>
                        </ul>
                        <p className="mt-3">Once data is no longer required, it is securely deleted.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Third-Party Links</Heading>
                        <p>Our website may contain links to third-party websites. <br />
                            We are not responsible for their privacy practices. Please review their policies before sharing any personal information.</p>
                    </div>

                    <div>
                        <Heading as="h3" className="text-xl font-medium mb-4">Children’s Privacy</Heading>
                        <p>We do not knowingly collect personal data from individuals under 18 years of age.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
