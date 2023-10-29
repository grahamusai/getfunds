import Image from "next/image";
import Navbar from "./components/Navbar";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div>
      <main className="h-screen bg-[] ">
        <form action="#" className="space-y-10 text-center">
          <h1 className="text-4xl font-bold mt-9 ">
            Access Working Capital In 48 Hours
          </h1>
          <div>
            <label>Access Working Capital In 48 Hours</label>
            <input
              type="text"
              name="grossProfit"
              placeholder="25%"
              className="w-full border-2 border-black px-7 py-4 mt-2 rounded-full bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
            />
          </div>
          <div>
            <Slider />
          </div>
        </form>
      </main>
    </div>
  );
}
