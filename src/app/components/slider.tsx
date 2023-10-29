"use client";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { GoDotFill } from "react-icons/go";

const Slider = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <CircularSlider
        width={200}
        // @ts-ignore
        height={200}
        min={0}
        max={20}
        label=""
        dataIndex={value}
        onChange={(value: number) => setValue(value)}
      >
        <GoDotFill width={50} height={50} />
      </CircularSlider>
    </div>
  );
};

export default Slider;
