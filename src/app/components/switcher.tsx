import { useState } from "react";
import { useGlobalState } from "../libs/global_state";
const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  const { setFrequency } = useGlobalState();

  return (
    <div className="flex flex-row items-center justify-center">
      <span className="text-center mt-5">&nbsp;</span>
      <button
        onClick={() => {
          setToggle(!toggle);
          setFrequency("weekly");
        }}
        className={` font-bold py-1 w-40 ${
          toggle
            ? "bg-black text-white"
            : "bg-slate-400 bg-opacity-40 text-black "
        } rounded-l-full`}
      >
        <p className=" text-sm">Daily</p> <p className=" text-xs">Mon-Sat</p>
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
          setFrequency("daily");
        }}
        className={` font-bold py-1 w-40 ${
          toggle
            ? "bg-slate-400 bg-opacity-40 text-black "
            : "bg-black text-white"
        } rounded-r-full`}
      >
        <p className=" text-sm">Weekly</p>
        <p className=" text-xs">4 Times Monthly</p>
      </button>
    </div>
  );
};

export default Switcher;
