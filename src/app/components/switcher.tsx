import { useState } from "react";
import { useGlobalState } from "../libs/global_state";
const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  const { setFrequency } = useGlobalState();

  return (
    <div className="flex flex-row">
      <span className="text-center mt-5">&nbsp;</span>
      <button
        onClick={() => {
          setToggle(!toggle);
          setFrequency("daily");
        }}
        className={` font-bold py-2 w-40 ${
          toggle ? "bg-black text-white" : "bg-white text-black"
        } rounded-l-full`}
      >
        <p className=" text-sm">Daily</p> <p className=" text-xs">Mon-Sat</p>
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
          setFrequency("weekly");
        }}
        className={` font-bold py-2 w-40 ${
          toggle ? "bg-white text-black" : "bg-black text-white"
        } rounded-r-full`}
      >
        <p className=" text-sm">Weekly</p>
        <p className=" text-xs">4 Times Monthly</p>
      </button>
    </div>
  );
};

export default Switcher;
