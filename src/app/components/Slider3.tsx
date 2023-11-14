import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { CircleSlider } from "react-circle-slider";


function Slider3() {
  const [value, changeValue] = useState(20);
  const slider = useRef(null);

  useEffect(() => {
    // slider.current.setAttribute("width", "280px");
    console.log(value);
  }, [value]);

  return (
    <div className="App">
      <div className="textContainer">
        {value}
        <div className="minute">MINUTES</div>
      </div>
      <CircleSlider
        ref={slider}
        value={value}
        stepSize={10}
        // @ts-ignore
        onChange={(value) => changeValue(value)}
        size={250}
        max={120}
        gradientColorFrom="#ec008c"
        gradientColorTo="#fc6767"
        knobRadius={20}
        circleWidth={20}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Slider3 />, rootElement);
export default Slider3
