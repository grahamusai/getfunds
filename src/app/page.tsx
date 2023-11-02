import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";


export default function Home() {
  return (
    <div>
      <main className="h-screen bg-[] ">
        <form action="#" className="space-y-10 text-center ">
          <h1 className="text-4xl font-bold mt-9 ">
            Working Capital As fast as <span className="font-bold underline">Lightning</span> 
          </h1>
          <div>
            <label>What is you monthly Turn Over?</label>
            <input
              type="text"
              name="turnOver"
              placeholder="100,000"
              id="turnOver"
              className="w-full border-2 border-black px-7 py-4 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
            />
          </div>
          <div>
            <label>What is you monthly Gross Profit?</label>
            <input
              type="text"
              name="grossProfit"
              placeholder="25%"
              className="w-full border-2 border-black px-7 py-4 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Comments
            </label>
            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
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
              <p>Daily</p> <p className=" text-sm">Mon-Sat</p>
            </button>
            <button className=" font-bold py-2 w-40 bg-black text-white rounded-r-full">
              <p>Weekly</p> <p className=" text-sm">4 times PM</p>
            </button>
          </div>
          <div className=" w-full border-[3px] border-black rounded-2xl overflow-hidden">
            <div className="flex items-center bg-black text-white">
              <div className="w-1/2 h-full py-2 border-r-2 border-white">
                <h3>Total Pay Over</h3>
              </div>
              <div className="w-1/2 h-full py-2">
                <h3>
                  Repayment <br /> Amounts
                </h3>
              </div>
            </div>
            <div className=" flex items-center">
              <div className="w-1/2 h-20 flex items-center justify-center">
                <h3 className=" underline">R200,000</h3>
              </div>
              <div className="w-1/2 h-20 flex items-center justify-center">
                <h3 className=" underline">R10,000</h3>
              </div>
            </div>
          </div>
          <button className=" w-full bg-black p-5 text-white rounded-full">
            Apply Now
          </button>
        </form>
      </main>
    </div>
  );
}
