"use client";
import Link from "next/link";
import Slider from "../components/slider";
import Slider2 from "../components/slider2";
import { useGlobalState } from "../libs/global_state";
import { useState } from "react";
import { round } from "../libs/helpers"; 
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
      0, 0, 0, 12, 16, 18, 21, 23, 25, 28, 30, 27.5, 3.0,
    ];

    if (duration >= 3 && duration <= 10) {
      const interestRate = interestRates[duration];
      return neededAmount + (neededAmount * interestRate / 100);
    }
  };

  const calculateRepayAmount = () => {
    const totalDays = [0, 0, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
    const totalWeeks = [0, 0, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];

    const totalPayOver = calculateTotalPay() || 0;

    if (frequency === "daily") {
      return totalPayOver / totalDays[duration -1];
    }

    if (frequency === "weekly") {
      return totalPayOver / totalWeeks[duration -1];
    }
    
    return neededAmount;
  };

  return (
    <div className="space-y-5 text-center max-w-md mx-auto mt-10 p-8 bg-opacity-10 rounded-md shadow-md">
      <h1 className="text-4xl font-bold mt-9 ">Congradulations</h1>
      <p className="text-2xl">
        You Qualify for up to <span>R{maxAmount} in funding</span>
      </p>
      
      <div className=" flex justify-between items-center gap-10">
        <Slider max={maxAmount}  />
        <p className=" font-black text-xl text-start">
          How much funding do you need?
        </p>
      </div>
      <div className=" flex justify-between items-center gap-10">
        <Slider2 min={0} />
        <p className=" font-black text-xl text-left">
          Over what term?
        </p>
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
              Repayments <br /> Amount
            </h3>
          </div>
        </div>
        <div className=" flex items-center">
          <div className="w-1/2 h-16 flex items-center justify-center">
            <h3 className=" underline">
              R{`${round(calculateTotalPay() || 0)}`}
            </h3>
          </div>
          <div className="w-1/2 h-16 flex items-center justify-center">
            <h3 className=" underline">
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
      <span className="italic text-sm mb-4 p-5">All qoutes are subject to due deligence</span>
        
    </div>
  );
};

export default Congrats;
