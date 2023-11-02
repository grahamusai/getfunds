import Link from "next/link";
import Slider from "../components/slider";
import Slider2 from "../components/slider2";

const Congrats = () => {
  return (
    <form action="#" className="space-y-5 text-center ">
      <h1 className="text-4xl font-bold mt-9 ">Congratulation</h1>
      <p className="text-2xl">You Qualify for a Merchant Cash Advance</p>
      <div className=" flex justify-between items-center gap-10">
        <Slider />
        <p className=" font-black text-xl text-start">
          How much money do you need?
        </p>
      </div>
      <div className=" flex justify-between items-center gap-10">
        <Slider2 />
        <p className=" font-black text-xl text-start">
          How long do you want to pay it for?
        </p>
      </div>
      <div>
        <button className=" font-bold py-2 w-40 bg-white rounded-l-full">
          <p className=" text-sm">Daily</p> <p className=" text-xs">Mon-Sat</p>
        </button>
        <button className=" font-bold py-2 w-40 bg-black text-white rounded-r-full">
          <p className=" text-sm">Weekly</p>
          <p className=" text-xs">4 times PM</p>
        </button>
      </div>
      <div className=" w-full border-[3px] border-black rounded-2xl overflow-hidden">
        <div className="flex items-center bg-black text-white">
          <div className="w-1/2 h-full py-2 border-r-2 border-white">
            <h3 className=" text sm">Total Pay Over</h3>
          </div>
          <div className="w-1/2 h-full py-2">
            <h3 className=" text sm">
              Repayment <br /> Amounts
            </h3>
          </div>
        </div>
        <div className=" flex items-center">
          <div className="w-1/2 h-16 flex items-center justify-center">
            <h3 className=" underline">R200,000</h3>
          </div>
          <div className="w-1/2 h-16 flex items-center justify-center">
            <h3 className=" underline">R10,000</h3>
          </div>
        </div>
      </div>
      <Link href="/congrats">
        <div className=" w-full mt-5 bg-black p-5 text-white rounded-full">
          Apply Now
        </div>
      </Link>
    </form>
  );
};

export default Congrats;
