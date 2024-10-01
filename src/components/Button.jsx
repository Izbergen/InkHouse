import PropTypes from "prop-types";
import {motion} from "framer-motion";

const Button = ({ children, onClick, isActive = false  }) => (
    <motion.button
    className={`${isActive ? 'border border-deep-green bg-deep-green hover:bg-forest-green text-white' : ` btn-border btn-bg btn-text-green`} btn-p basic-text text-xl transition duration-700`}
    onClick={onClick}
    animate={{
        height: "auto"
    }}
    transition={{
            duration: 500
        }}
    >
        {children}
    </motion.button>
)

Button.propTypes = {
    additionalClasses: PropTypes.string,
    isActive: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;