"use client";
import Link from "next/link";
import Slider from "../components/slider";
import Slider2 from "../components/slider2";
import { useGlobalState } from "../libs/global_state";
import { round } from "../libs/helpers";
import Switcher from "../components/switcher";
import InputSwitcher from "../components/input_switcher";
import FundingInput from "../components/funding_input";
import Image from "next/image";

const Congrats = () => {
  const {
    grossProfit,
    turnOver,
    neededAmount,
    duration,
    frequency,
    useSlider,
  } = useGlobalState();

  const repaymentAmount = (grossProfit: number, duration: number) => {
    return grossProfit * duration;
  };
  const maxAmount = turnOver * 0.7;
  const interest = 0.075;

  const calculateTotalPay = () => {
    const interestRates = [0, 0, 0, 12, 16, 18, 21, 23, 25, 28, 30, 27.5, 3.0];

    if (duration >= 3 && duration <= 10) {
      const interestRate = interestRates[duration];
      return neededAmount + (neededAmount * interestRate) / 100;
    }
  };

  const calculateRepayAmount = () => {
    const totalDays = [0, 0, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
    const totalWeeks = [0, 0, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];

    const totalPayOver = calculateTotalPay() || 0;

    if (frequency === "daily") {
      return totalPayOver / totalDays[duration - 1];
    }

    if (frequency === "weekly") {
      return totalPayOver / totalWeeks[duration - 1];
    }

    return neededAmount;
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="space-y-5 text-center max-w-md mx-auto bg-opacity-10">
        <h1 className="text-4xl font-bold pt-4">Congratulations</h1>
        <p className="text-2xl">
          You Qualify for up to{" "}
          <span className="text-white font-bold">R{maxAmount} </span>in funding
        </p>

        <div className="flex flex-row items-center gap-5">
          <div>
            <div className=" w-32 h-32">
              {useSlider ? <Slider max={maxAmount} /> : <FundingInput />}
            </div>
            <div className="m-3">
              <InputSwitcher />
            </div>
          </div>
          <p className=" font-black text-xl text-left mt-[-3rem]">
            Slide For Amount
          </p>
        </div>
        <div className=" flex flex-row items-center gap-10">
          <Slider2 min={3} />
          <p className=" font-black text-xl text-left">Slide For Term</p>
        </div>
        <span className="text-center mt-5">Choose</span>
        <Switcher />
        <div className=" w-full border-[3px] border-black rounded-2xl overflow-hidden">
          <div className="flex items-center bg-black text-white">
            <div className="w-1/2 h-full py-2 border-r-2 border-white">
              <h3 className=" text sm">Total Pay Over</h3>
            </div>
            <div className="w-1/2 h-full py-2">
              <h3 className=" text sm">
                Repayments <br />
              </h3>
            </div>
          </div>
          <div className=" flex items-center">
            <div className="w-1/2 h-12 flex items-center justify-center">
              <h3 className=" underline font-bold text-sm">
                R{`${round(calculateTotalPay() || 0)}`}
              </h3>
            </div>
            <div className="w-1/2 h-12 flex items-center justify-center">
              <h3 className=" underline font-bold text">
                R{round(calculateRepayAmount() || 0)}
              </h3>
            </div>
          </div>
        </div>

        <Link href="/application">
          <button className=" w-full bg-black mt-3 p-5 text-white rounded-full flex items-center justify-center">
            Apply Now
          </button>
        </Link>
        <span className="italic text-sm mb-4 p-5">
          All quotes are subject to due diligence
        </span>
      </div>
    </div>
  );
};

export default Congrats;
