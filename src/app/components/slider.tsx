"use client";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { GoDotFill } from "react-icons/go";
import { useGlobalState } from "../libs/global_state";

const Slider = (props: { max: number }) => {
  const { neededAmount, setNeededAmount } = useGlobalState();
  return (
    <div>
      <span className="italic text-xs mb-5">Slide</span>
      <CircularSlider
        width={120}
        // @ts-ignore
        height={120}
        min={30000}
        max={props.max}
        label=""
        knobColor="black"
        progressColorFrom="#000"
        progressColorTo="#000"
        progressSize={5}
        trackColor="white"
        trackDraggable={true}
        trackSize={3}
        valueFontSize="20px"
        prependToValue="R"
        labelColor="#000"
        verticalOffset="0px"
        onChange={(value: number) => setNeededAmount(value)}
      />
      <span className="italic text-xs mt-3">Slide</span>
    </div>
  );
};

export default Slider;
