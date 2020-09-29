import React from 'react';
import PropTypes from 'prop-types';

function Button({
  name, color, wide, handleClick,
}) {
  return (
    <button
      type="button"
      style={{
        background: color,
        width: wide ? '50%' : '25%',
      }}
      className="button"
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;
