"use client";
import Link from "next/link";
import Slider from "../components/slider";
import Slider2 from "../components/slider2";
import { useGlobalState } from "../libs/global_state";
import { useState } from "react";
import { twoDecimals } from "../libs/helpers";
import Switcher from "../components/switcher";

const Congrats = () => {
  const { grossProfit, turnOver, neededAmount, duration, frequency } =
    useGlobalState();
  const repaymentAmount = (grossProfit: number, duration: number) => {
    return grossProfit * duration;
  };
  const maxAmount = turnOver * 0.7;
  const interest = 0.075;

  const calculateTotalPay = () => {
    const interestRates = [
      0, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225, 0.25, 0.275, 0.3,
    ];

    if (duration >= 3 && duration <= 12) {
      const interestRate = interestRates[duration];
      return neededAmount + neededAmount * interestRate;
    }
  };

  const calculateRepayAmount = () => {
    const totalDays = [75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
    const totalWeeks = [12, 16, 20, 24, 28, 32, 36, 40, 44, 48];

    const totalPayOver = calculateTotalPay() || 0;

    if (frequency === "daily") {
      return totalPayOver / totalDays[duration];
    }

    if (frequency === "weekly") {
      return totalPayOver / totalWeeks[duration];
    }

    return neededAmount;
  };

  return (
    <div className="space-y-5 text-center ">
      <h1 className="text-4xl font-bold mt-9 ">Congratulation</h1>
      <p className="text-2xl">
        You Qualify for up to <span>{maxAmount} in finding</span>
      </p>
      <div className=" flex justify-between items-center gap-10">
        <Slider max={maxAmount} />
        <p className=" font-black text-xl text-start">
          How much money do you need?
        </p>
      </div>
      <div className=" flex justify-between items-center gap-10">
        <Slider2 min={0} />
        <p className=" font-black text-xl text-start">
          How long do you want to pay it for?
        </p>
      </div>
      <Switcher />
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
            <h3 className=" underline">
              R{`${twoDecimals(calculateTotalPay() || 0)}`}
            </h3>
          </div>
          <div className="w-1/2 h-16 flex items-center justify-center">
            <h3 className=" underline">
              R{twoDecimals(calculateRepayAmount() || 0)}
            </h3>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          console.log(grossProfit, turnOver, neededAmount, duration);
        }}
        className=" w-full mt-5 bg-black p-5 text-white rounded-full"
      >
        Apply Now
      </button>
    </div>
  );
};

export default Congrats;
