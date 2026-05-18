export default function ResponsiveSearchHeader() {
    return (
        <div className="hidden filter_head">
            <div className="gap-16 d_flex">
                <button className="filter_hide"
                // onclick="closePopup('filter_popup')"
                >
                    <img src="/assets/images/close_icon.svg" alt="close icon" />
                </button>
                <h3>Search your car</h3>
            </div>
            <button>
                <img src="/assets/images/trash_icon.svg" alt="" />
            </button>
        </div>
    )
}   