"use client";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { GoDotFill } from "react-icons/go";
import { useGlobalState } from "../libs/global_state";

const Slider2 = (props: { min: number }) => {
  const { duration, setDuration } = useGlobalState();
  return (
    <div className="flex flex-col">
      <span className="italic text-xs text-center mb-5">Slide</span>
      <CircularSlider
        width={120}
        // @ts-ignore
        height={120}
        min={props.min}
        max={12}
        label="months"
        labelBottom={true}
        dataIndex={duration}
        knobColor="black"
        progressColorFrom="#000"
        progressColorTo="#000"
        progressSize={5}
        trackColor="#fff"
        trackDraggable={true}
        trackSize={3}
        valueFontSize="20px"
        labelColor="#000"
        verticalOffset="20px"
        onChange={(duration: number) => setDuration(duration)}
      />
      
    </div>
  );
};

export default Slider2;
