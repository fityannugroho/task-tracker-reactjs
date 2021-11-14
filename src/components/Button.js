import PropTypes from 'prop-types'


/**
 *
 * @param {*} properties
 * @returns
 */
const Button = ({ color, text, onClick }) => {
    return (
        <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    )
}

// Default properties
Button.defaultProps = {
    color: 'steelblue'
}

// Property types
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
