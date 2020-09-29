/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ handleClick }) {
  return (
    <div className="panel">
      <div className="group group-one">
        <Button handleClick={handleClick} color="lightgray" name="AC" />
        <Button handleClick={handleClick} color="lightgray" name="+/-" />
        <Button handleClick={handleClick} color="lightgray" name="%" />
        <Button handleClick={handleClick} name="÷" />
      </div>
      <div className="group group-two">
        <Button handleClick={handleClick} color="lightgray" name="7" />
        <Button handleClick={handleClick} color="lightgray" name="8" />
        <Button handleClick={handleClick} color="lightgray" name="9" />
        <Button handleClick={handleClick} name="X" />
      </div>
      <div className="group group-three">
        <Button handleClick={handleClick} color="lightgray" name="4" />
        <Button handleClick={handleClick} color="lightgray" name="5" />
        <Button handleClick={handleClick} color="lightgray" name="6" />
        <Button handleClick={handleClick} name="-" />
      </div>
      <div className="group group-four">
        <Button handleClick={handleClick} color="lightgray" name="1" />
        <Button handleClick={handleClick} color="lightgray" name="2" />
        <Button handleClick={handleClick} color="lightgray" name="3" />
        <Button handleClick={handleClick} name="+" />
      </div>
      <div className="group group-five">
        <Button handleClick={handleClick} color="lightgray" wide name="0" />
        <Button handleClick={handleClick} color="lightgray" name="." />
        <Button handleClick={handleClick} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
