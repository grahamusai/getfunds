import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";

export default function Home() {
  return (
    <main className="h-screen bg-[] ">
      <form action="#" className="space-y-10 text-center ">
        <h1 className="text-4xl font-bold mt-9 ">
          Access Working Capital In 48 Hours
        </h1>
        <div>
          <label>Access Working Capital In 48 Hours</label>
          <input
            type="text"
            name="grossProfit"
            placeholder="25%"
            className="w-full border-2 border-black px-5 py-3 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
          />
        </div>
        <div className="text-sm leading-6">
          <label htmlFor="comments" className="font-medium text-gray-900">
            Comments
          </label>
          <p className="text-gray-500">
            Get notified when someones posts a comment on a posting.
          </p>
        </div>

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
            <p className=" text-sm">Daily</p>{" "}
            <p className=" text-xs">Mon-Sat</p>
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
        <button className=" w-full bg-black p-5 text-white rounded-full">
          Apply Now
        </button>
      </form>
    </main>
  );
}
