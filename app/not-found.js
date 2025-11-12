import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center py-14 md:py-20">
            <div className="wrapper">
                <h1 className="font-semibold text-blue-500 text-xxl sm:text-4xl">Oops! page not found</h1>
                <img
                    src="/images/error-404-illustration.png"
                    alt="Error illustration"
                    loading="lazy"
                    className="mx-auto my-10" />
                <div>
                    <p className="mb-6 font-medium sm:text-xl">Our servers couldn't locate the page you requested. Let’s try another route</p>
                    <Link
                        href="/"
                        title="Go to homepage"
                        className="inline-block h-12 primary-btn leading-12">Back to home page</Link>
                </div>
            </div>
        </div>
    )
}