import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  return (
    <button
      type="button"
      style={{
        background: color,
        width: wide ? '50%' : '25%',
      }}
      className="button"
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;
