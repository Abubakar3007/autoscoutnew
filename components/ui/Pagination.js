export default function Pagination({ className = "" }) {
    return (
        <div className={className}>
            <div className="flex items-center justify-center gap-10 mt-10 pagination">
                {/* previous page link */}
                <a
                    href="listing.html"
                    title="Go to previous page">
                    <img
                        src="/icons/prev-link.svg"
                        alt="Prev link"
                    />
                </a>

                {/* pagination numbers */}
                <ul className="px-5 py-2 rounded-3xl bg-neutral-100 [&>li]:inline-block [&>li>a]:w-10 [&>li>a]:h-10 [&>li>a]:grid [&>li>a]:place-items-center [&>li>a]:rounded-lg">
                    <li><a href="" className="bg-blue-500 text-white">1</a></li>
                    <li><a href="" className="text-gray-500">2</a></li>
                </ul>

                {/* next page link */}
                <a
                    href="listing.html"
                    title="Go to next page"
                >
                    <img
                        src="/icons/next-link.svg"
                        alt="Next link"
                    />
                </a>
            </div>
        </div>
    )
}