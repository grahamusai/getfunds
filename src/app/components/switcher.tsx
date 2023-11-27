import { useState } from "react";
import { useGlobalState } from "../libs/global_state";
const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  const { setFrequency } = useGlobalState();

  return (
    <div className="flex flex-row items-center justify-center pt-2">
      <span className="text-center mt-5">&nbsp;</span>
      <button
        onClick={() => {
          setToggle(!toggle);
          setFrequency("weekly");
        }}
        className={` font-bold py-1 w-40 ${
          toggle
            ? "bg-green-500 text-white"
            : "bg-white bg-opacity-40 text-black "
        } border border-slate-900 border-1`}
      >
        <p className=" text-sm">Weekly</p> <p className=" text-xs">4 Times Monthly</p>
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
          setFrequency("daily");
        }}
        className={` font-bold py-1 w-40 ${
          toggle
            ? "bg-white bg-opacity-40 text-black "
            : "bg-green-500 text-white"
        } border border-slate-900 border-1`}
      >
        <p className=" text-sm">Daily</p>
        <p className=" text-xs">Mon - Sat</p>
      </button>
    </div>
  );
};

export default Switcher;