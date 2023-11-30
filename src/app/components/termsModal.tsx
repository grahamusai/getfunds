import { useGlobalState } from "../libs/global_state";
const TermsModal = () => {
  const { termsModalIsOpen, setTermsModalIsOpen } = useGlobalState();
  return (
    <div className="w-screen h-screen absolute flex items-center justify-center p-4 shadow-md">
      <div className="bg-green-500 flex flex-col items-center justify-center border-2 border-black p-2 text-center">
        <p className="text-sm">
          Get Funds is a Specialist Consulting firm, partnered with best in
          class funders. Offering the correct funder match first time round for
          your working capital needs. Speak to us about your requirements and we
          will have the right funder fund you in 1-3 days. Apply so we can reach
          out and take you one step closer to your goals. These Quotes are
          estimates. We use our economies of scale to get you the best deals.
        </p>
        <button
          onClick={() => setTermsModalIsOpen(false)}
          className=" bg-white border-2 border-black px-4 py-1 mt-3"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
