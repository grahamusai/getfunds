"use client";

import CircularSlider from "@fseehawer/react-circular-slider";

import { useGlobalState } from "../libs/global_state";

const Slider = (props: { max: number }) => {
  const { neededAmount, setNeededAmount } = useGlobalState();
  return (
    <div>
      <div className="mb-1">
      {/* <span className="italic text-xs pb-3">Slide-&gt;</span>  */} 
      </div>
      <div className="">
      <CircularSlider
        width={120}
        // @ts-ignore
        height={120}
        min={30000}
        max={props.max}
        // dataIndex={props.max}
        label=" "
        prependToValue="R"
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
        onChange={(value: number) => setNeededAmount(value)}
      />
      </div>
    </div>
  );
};

export default Slider;
