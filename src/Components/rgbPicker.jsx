import React, { useState, useEffect } from 'react';
import './rgbPicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

function RGBColorGenerator() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const updateColor = () => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    return rgbColor;
  };

  const handleSliderChange = (color, value) => {
    switch (color) {
      case 'red':
        setRed(value);
        break;
      case 'green':
        setGreen(value);
        break;
      case 'blue':
        setBlue(value);
        break;
      default:
        break;
    }
  };
  
  const copyRGBValue = () => {
    const rgbColor = updateColor();
    navigator.clipboard.writeText(rgbColor)
      .then(() => {
        alert(`RGB Color Value copied!`);
      })
      .catch((error) => {
        console.error('Failed to copy', error);
      });
  };

  const rgbColor = updateColor();

  useEffect(() => {
    document.title = 'RGB Color Picker';
  }, []);

  return (
    <div className="container">
     <div className='titleContainer'>
      <p className='title'>RGB Color Generator</p>
      <div className='windowIcons'>
      <FontAwesomeIcon icon={faWindowMinimize} />
      <FontAwesomeIcon icon={faWindowMaximize} />
      <FontAwesomeIcon icon={faSquareXmark} />
      </div>
     </div>
     <div className='bodyContainer'>
      <div
        className="colorBox"
        style={{ backgroundColor: rgbColor, width: '450px', height: '200px' }}
      ></div>
      <div className="sliders">
        <div className="slider">
          <label htmlFor="redSlider">Red: </label>
          <input
            type="range"
            id="redSlider"
            min="0"
            max="255"
            value={red}
            onChange={(e) => handleSliderChange('red', e.target.value)}
          />
          <span>{red}</span>
        </div>
        <div className="slider">
          <label htmlFor="greenSlider">Green: </label>
          <input
            type="range"
            id="greenSlider"
            min="0"
            max="255"
            value={green}
            onChange={(e) => handleSliderChange('green', e.target.value)}
          />
          <span>{green}</span>
        </div>
        <div className="slider">
          <label htmlFor="blueSlider">Blue: </label>
          <input
            type="range"
            id="blueSlider"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => handleSliderChange('blue', e.target.value)}
          />
          <span>{blue}</span>
        </div>
      </div>
      </div>
      <div className="buttonContainer">
        <button onClick={copyRGBValue} className='copyButton'>Copy RGB Value</button>
        <div className="inputTypeValue">RGB: ({red}, {green}, {blue})</div>
      </div>
    </div>
  );
}

export default RGBColorGenerator;
