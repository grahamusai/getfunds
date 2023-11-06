"use client";
import CircularSlider from "@fseehawer/react-circular-slider";

import { useGlobalState } from "../libs/global_state";

const Slider2 = () => {
  const { duration, setDuration } = useGlobalState();
  return (
    <div>
      <CircularSlider
        width={120}
        // @ts-ignore
        height={120}
        min={0}
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
        verticalOffset="0px"
        onChange={(duration: number) => setDuration(duration)}
      />
    </div>
  );
};

export default Slider2;
