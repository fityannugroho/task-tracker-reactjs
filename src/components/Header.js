import PropTypes from 'prop-types'
import Button from './Button'

/**
 *
 * @param {*} properties
 * @returns
 */
const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showForm ? 'Red' : 'Green'} text={showForm ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

// Default properties
Header.defaultProps = {
  title: 'Task Tracker',
}

// Property types
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
