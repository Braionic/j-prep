import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ff0000");
  const [colorType, setColorType] = useState("hex");

  const randomNumbers = (rand) => {
    const randNum = Math.floor(Math.random() * rand);
    return randNum;
  };
  const handleHexSwitch = () => {
    setColorType("hex");
  };
  const handleRGBSwitch = () => {
    setColorType("rgb");
  };
  const generateColor = () => {
    if (colorType === "hex") {
      handleHexPicker();
    }else{
        handleRGBPicker()
    }
  };

  const handleRGBPicker = ()=>{
    const r = randomNumbers(256)
    const g = randomNumbers(256)
    const b = randomNumbers(256)
    setColor(`rgb(${r},${g},${b})`)
    console.log(r)
  }

  const handleHexPicker = () => {
    let hex = "#";

    const hexValues = "01234567890abcdef";

    for (let i = 0; i < 6; i++) {
      let randomVal = Math.floor(Math.random() * hexValues.length);
      hex = hex + hexValues[randomVal];
    }
    setColor(hex);
  };
  return (
    <div className="main-wrapper" style={{ backgroundColor: color }}>
      <div className="color-picker-button">
        <button className="btn" onClick={generateColor}>
          Generate Color
        </button>
        <button className="btn" onClick={handleHexSwitch}>Create Hex</button>
        <button className="btn" onClick={handleRGBSwitch}>
          RGB Picker
        </button>
      </div>
      <h1>{colorType}</h1>
      <h2 style={{ color: "white" }}>{color}</h2>
    </div>
  );
}
