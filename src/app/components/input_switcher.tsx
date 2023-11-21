import { useGlobalState } from "../libs/global_state";

const InputSwitcher = () => {
  const { useSlider, setUseSlider } = useGlobalState();
  return useSlider ? (
    <button className=" text-xs italic underline" onClick={() => setUseSlider(false)}>
      Use Custom Amounts
    </button>
  ) : (
    <button className=" text-sm italic underline" onClick={() => setUseSlider(true)}>
      use slider
    </button>
  );
};

export default InputSwitcher;
