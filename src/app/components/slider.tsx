"use client";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { GoDotFill } from "react-icons/go";

const Slider = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <CircularSlider
        width={130}
        // @ts-ignore
        height={130}
        min={0}
        max={100000}
        label=""
        dataIndex={value}
        knobColor="black"
        progressColorFrom="#000"
        progressColorTo="#000"
        progressSize={5}
        trackColor="#fff"
        trackDraggable={true}
        trackSize={3}
        valueFontSize="20px"
        prependToValue="R"
        labelColor="#000"
        verticalOffset="0px"
        onChange={(value: number) => setValue(value)}
      />
    </div>
  );
};

export default Slider;
