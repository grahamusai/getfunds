import { useGlobalState } from "../libs/global_state";

const InputSwitcher = () => {
  const { useSlider, setUseSlider } = useGlobalState();
  return useSlider ? (
    <button className=" text-sm italic underline" onClick={() => setUseSlider(false)}>
      use custom amount
    </button>
  ) : (
    <button className=" text-sm italic underline" onClick={() => setUseSlider(true)}>
      use slider
    </button>
  );
};

export default InputSwitcher;
