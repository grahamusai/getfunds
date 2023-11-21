"use client";
import Navbar from "./components/Navbar";

import Link from "next/link";
import { useGlobalState } from "./libs/global_state";

export default function Home() {
  const { setTurnOver, setGrossProfit, turnOver, grossProfit } =
    useGlobalState();
  return (
    <main>
      <div className="w-screen h-screen flex items-center justify-center">
        <div>
          <Navbar />
          <div className="text-center max-w-md mx-auto mt-3 p-8 bg-opacity-10">
            <h1 className="text-4xl mb-6 font-bold text-center">
              Access Working Capital In 48 Hours
            </h1>
            <div className=" space-y-10">
              <div>
                <label className=" ml-4 mt-4">
                  What is your monthly Turn Over?
                </label>
                <input
                  type="number"
                  name="turnover"
                  placeholder="100000"
                  onChange={(e) => {
                    setTurnOver(parseInt(e.target.value));
                  }}
                  className="w-full border-2 border-black px-5 py-3 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                />
              </div>
              <div>
                <label className=" ml-4">
                  What is your monthly Gross Profit percentage?
                </label>
                <input
                  type="number"
                  name="grossProfit"
                  placeholder="20%"
                  onChange={(e) => {
                    setGrossProfit(parseInt(e.target.value));
                  }}
                  className="w-full border-2 border-black px-5 py-3 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                />
              </div>

              <div className=" flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="trading"
                  id="trading"
                  className="border-2 border-black accent-black "
                />
                <label htmlFor="">
                  I Have been trading for more that 12 months
                </label>
              </div>
            </div>

            {/* <button
          onClick={() => {
            console.log(turnOver, grossProfit);
          }}
          className=" w-full bg-black p-5 text-white rounded-full flex items-center justify-center"
        >
          Apply Now
        </button> */}
          </div>
          <Link href="/congrats">
            <button className="max-w-md mx-auto mt-8 w-full bg-black p-5 text-white rounded-full flex items-center justify-center">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
