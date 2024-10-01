import {motion} from "framer-motion";
import PropTypes from "prop-types";


const MotionNavBar = function ({menuIsClicked, setMenuIsClicked, menuRender}) {
    return (
        <motion.div
            className={'fixed z-50 top-0 left-0 w-full h-full bg-pale-grey'}
            initial={{
                display: 'none',
                transform: 'translateX(-100%)',
            }}
            animate={{
                display: menuIsClicked ? 'block' : 'none',
                transform: menuIsClicked ? 'translateX(0)' : 'translateX(-100%)',
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className={'container'}>
                <nav className={'py-4'}>
                    <div className={'mb-8'}>
                        <svg
                            className={'item-hover text-primary-black'}
                            onClick={() => {
                                setMenuIsClicked(false);
                            }}
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z"
                                  fill="currentColor"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M23.25 6.75C23.4489 6.94891 23.5607 7.2187 23.5607 7.5C23.5607 7.7813 23.4489 8.05109 23.25 8.25L8.25001 23.25C8.0511 23.4489 7.78132 23.5606 7.50001 23.5606C7.21871 23.5606 6.94893 23.4489 6.75002 23.25C6.55111 23.0511 6.43936 22.7813 6.43936 22.5C6.43936 22.2187 6.5511 21.9489 6.75002 21.75L21.75 6.75C21.9489 6.55109 22.2187 6.43934 22.5 6.43934C22.7813 6.43934 23.0511 6.55109 23.25 6.75Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                    <div className={'flex flex-col justify-items-start gap-12'}>
                        {menuRender()}
                    </div>
                </nav>

            </div>
        </motion.div>
    )
}

MotionNavBar.propTypes = {
    setMenuIsClicked: PropTypes.func.isRequired,
    menuRender: PropTypes.func.isRequired,
    menuIsClicked: PropTypes.bool.isRequired,
}

export default MotionNavBar;