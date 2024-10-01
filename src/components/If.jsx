import PropTypes from "prop-types";

const If = function ({ condition , children }) {
    return condition ? (children) : (<></>);
}

If.propTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.node,
}

export default If;