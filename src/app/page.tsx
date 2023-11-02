import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" pt-9">
      <Navbar />
      <form
        action="#"
        className=" mx-auto flex flex-col justify-between min-h-[87vh] pt-10"
      >
        <h1 className="text-4xl font-bold text-center">
          Access Working Capital In 48 Hours
        </h1>
        <div className=" space-y-10">
          <div>
            <label className=" ml-4">What is your monthly Turn Over?</label>
            <input
              type="number"
              name="turnover"
              placeholder="100000"
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

        <Link href="/congrats">
          <div className=" w-full bg-black p-5 text-white rounded-full flex items-center justify-center">
            Apply Now
          </div>
        </Link>
      </form>
    </main>
  );
}
