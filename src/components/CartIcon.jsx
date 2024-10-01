import PropTypes from "prop-types";
import If from "./If.jsx";

const CartIcon = function ({ cartElems = 0 }) {
    return (
        <svg className={'text-primary-black item-hover relative'}
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_26_1379)">
                <path
                    d="M9.24967 21.1667C9.75593 21.1667 10.1663 20.7563 10.1663 20.25C10.1663 19.7438 9.75593 19.3334 9.24967 19.3334C8.74341 19.3334 8.33301 19.7438 8.33301 20.25C8.33301 20.7563 8.74341 21.1667 9.24967 21.1667Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M19.3337 21.1667C19.8399 21.1667 20.2503 20.7563 20.2503 20.25C20.2503 19.7438 19.8399 19.3334 19.3337 19.3334C18.8274 19.3334 18.417 19.7438 18.417 20.25C18.417 20.7563 18.8274 21.1667 19.3337 21.1667Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M1.91699 1.91663H5.58366L8.04033 14.1908C8.12415 14.6128 8.35374 14.9919 8.68891 15.2617C9.02408 15.5315 9.44346 15.6749 9.87366 15.6666H18.7837C19.2139 15.6749 19.6332 15.5315 19.9684 15.2617C20.3036 14.9919 20.5332 14.6128 20.617 14.1908L22.0837 6.49996H6.50033"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <If condition={cartElems > 0}>
                    <path
                        d="M8.5 15C12.0899 15 15 12.0899 15 8.5C15 4.91015 12.0899 2 8.5 2C4.91015 2 2 4.91015 2 8.5C2 12.0899 4.91015 15 8.5 15Z"
                        fill="#598D66"/>
                    <text
                        fill="white"
                        fontSize="10"
                        x={cartElems >= 10 ? 3 : 6}
                        y={12}
                        fontWeight="bold"
                        fontFamily="Raleway , sans-serif"
                    >
                        {cartElems}
                    </text>
                </If>


            </g>
            <defs>
                <clipPath id="clip0_26_1379">
                    <rect width="22" height="22" fill="white" transform="translate(1 1)"/>
                </clipPath>
            </defs>


        </svg>
    )
}

CartIcon.propTypes = {
    cartElems: PropTypes.number,
}

export default CartIcon;