import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 *
 * @param {*} properties
 * @returns
 */
const Header = function ({ title, onAdd, showForm }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showForm ? 'Red' : 'Green'} text={showForm ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

// Default properties
Header.defaultProps = {
  title: 'Task Tracker',
};

// Property types validation
Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  showForm: PropTypes.func.isRequired,
};

export default Header;
