import React from 'react';
import './colorRadioButton.css';

function ColorRadioButton({ options, onChange, selected }) {
  // let selectedColor;
  console.log(selected, 'selected')
  return (
    <div className="color-selector">
      <p>Select a background</p>
      {options.map((color) => {
        const outerBorderColor = {
          border: `1px solid ${selected === color.value ? selected : '#c5c5c5'}`,
        }
        const innerColor = {
          border: `1px solid ${color.value}`,
          background: `${color.value}`
        }
        return (
          <div className="radio-color">
            <label htmlFor="noteColor">
              <div style={outerBorderColor} className="outer-circle">
                <div style={innerColor} className="inner-circle">
                </div>
              </div>
            </label>
            <input
              key={color.value}
              type="radio"
              name="noteColor"
              value={color.value}
              checked={selected === color.value}
              onChange={onChange}
            />
          </div>
        )
      })}
    </div>
  );
}

export default ColorRadioButton;