"use client";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { GoDotFill } from "react-icons/go";
import { useGlobalState } from "../libs/global_state";

const Slider = () => {
  const { neededAmount, setNeededAmount, turnOver } = useGlobalState();
  return (
    <div>
      <CircularSlider
        width={120}
        // @ts-ignore
        height={120}
        min={3}
        max={turnOver}
        label=""
        dataIndex={neededAmount}
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
        onChange={(neededAmount: number) => setNeededAmount(neededAmount)}
      />
    </div>
  );
};

export default Slider;
