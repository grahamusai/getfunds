import { useGlobalState } from "../libs/global_state";

const FundingInput = () => {
  const { neededAmount, setNeededAmount } = useGlobalState();
  return (
    <div>
      <label className=" ml-4">Enter Amount</label>
      <input
        type="number"
        name="turnover"
        placeholder="30000"
        defaultValue={neededAmount}
        onChange={(e) => {
          setNeededAmount(parseInt(e.target.value));
        }}
        className="w-full border-2 border-black px-5 py-3 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
      />
    </div>
  );
};

export default FundingInput;
