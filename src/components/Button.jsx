import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} properties
 * @returns
 */
const Button = function ({ color, text, onClick }) {
  return (
    <button type="button" className="btn" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
  );
};

// Default properties
Button.defaultProps = {
  color: 'steelblue',
};

// Property types
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
