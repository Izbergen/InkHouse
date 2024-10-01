import PropTypes from "prop-types";

const Tabs =  function ( { tabs ,handleTabClick } ){

    function renderTabs(tabs , handleTabClick) {
        return tabs.map((currentTab) => (
            <li
                key={currentTab.id}
                onClick={() => handleTabClick(currentTab)}
            >
                <div
                    className={`py-[10px] px-5 rounded-3xl text-lg basic-text duration-300 transition ${
                        currentTab.active
                            ? 'bg-deep-green text-off-white'
                            : 'bg-soft-mint text-primary-black hover:bg-green-700 hover:text-off-white'
                    }`}
                >
                    {currentTab.content}
                </div>
            </li>
        ));
    }

    return (
        <ul className={'flex gap-5 overflow-scroll scroll-p-2'}>
            {renderTabs(tabs , handleTabClick)}
        </ul>
    )
}
Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    handleTabClick: PropTypes.func.isRequired,
}

export default Tabs;