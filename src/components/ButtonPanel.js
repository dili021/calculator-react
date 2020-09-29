import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="panel">
      <div className="group group-one">
        <Button color="lightgray" name="AC" />
        <Button color="lightgray" name="+/-" />
        <Button color="lightgray" name="%" />
        <Button name="÷" />
      </div>
      <div className="group group-two">
        <Button color="lightgray" name="7" />
        <Button color="lightgray" name="8" />
        <Button color="lightgray" name="9" />
        <Button name="X" />
      </div>
      <div className="group group-three">
        <Button color="lightgray" name="4" />
        <Button color="lightgray" name="5" />
        <Button color="lightgray" name="6" />
        <Button name="-" />
      </div>
      <div className="group group-four">
        <Button color="lightgray" name="1" />
        <Button color="lightgray" name="2" />
        <Button color="lightgray" name="3" />
        <Button name="+" />
      </div>
      <div className="group group-five">
        <Button color="lightgray" wide name="0" />
        <Button color="lightgray" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
