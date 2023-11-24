"use client";
import Link from "next/link";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";
import { useGlobalState } from "./libs/global_state";
import { useState } from "react";
import { round } from "./libs/helpers";
import Switcher from "./components/switcher";
import InputSwitcher from "./components/input_switcher";
import FundingInput from "./components/funding_input";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";




const Congrats = () => {

  const { setTurnOver, setGrossProfit, turnOver, grossProfit } =
    useGlobalState();
  const {
  
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

  const [rangeValue, setRangeValue] = useState(50000);
// @ts-ignore
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const [rangeValue2, setRangeValue2] = useState(5);
// @ts-ignore
  const handleRangeChange2 = (e) => {
    setRangeValue2(e.target.value);
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
    <div className="flex justify-center items-center">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 text-slate-900">
      <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="festive"
              height={200}
              width={200}
            />
          </div>
      <h1 className="text-center font-extrabold text-4xl mt-3">Cash Advance Calculator</h1>
      <div className="mx-auto bg-white mt-8 border border-2 border-slate-900">
        <div className="flex flex-col sm:flex-row ">
        {/* First Column */}
        <div className="w-full sm:w-1/2 bg-white mx-auto flex justify-center  p-5">
          <div>
            <div className="mb-12">
            <h1 className="text-sm">What is your monthly turnover? <span className="text-red">*</span></h1>
            <input 
            type="number"
            name="turnover"
            placeholder="R100,000"
            className=" border-2 border-slate-900 px-5 py-2 mt-2 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
            />
            </div>
          
            <div className="mb-12">
              <h1 className="text-sm">Funding required</h1>
              <input
              type="range"
              min="0"
              max="100000"
              step="10000"
              value={rangeValue}
              onChange={handleRangeChange}
              className="bg-green-500"
            />
            <p>Selected value: {rangeValue}</p>
            </div>

            <div className="mb-12">
              <h1 className="text-sm">Repayment Term</h1>
              <input
              type="range"
              min="3"
              max="10"
              step="1"
              value={rangeValue2}
              onChange={handleRangeChange2}
              className="bg-green-500"
            />
             <p>Selected value: {rangeValue2}</p>
            </div>

            <div className="">
              <h1 className="text-sm">Select Repayment Method</h1>
              <Switcher />
            </div>
          </div>
          
          
        </div>

        {/* Second Column */}
          <div className="w-full sm:w-1/2 border bg-green-500 px-5 py-3">
            <div className="border-slate-900 border-b-2 p-5">
              <h1 className="text-sm">Pre-approved for:</h1>
              <h1 className="text-4xl  font-bold">R700,000</h1>
            </div>
            <div className="flex flex-col sm:flex-row p-3 border-b-2 border-slate-900">
              <div className=" mt-3 w-full sm:w-1/2 bg-transparent mx-auto p-3">
                <h1 className="text-lg font-bold">Total Payover</h1>
                <h2 className="text-2xl font-bold">R786,000</h2>
              </div>
              <div className="border-slate-900 border-l-2 text-center mt-3 w-full sm:w-1/2 bg-transparent mx-auto p-3">
                <h1 className="text-lg font-bold ">Repayments</h1>
                <h2 className="text-2xl font-bold">R1,280</h2>
              </div>
            </div>
            <div className="p-5 mt-3">
              <h1 className="font-bold p-2">How it works</h1>
              <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maxime dicta repudiandae veniam molestias inventore assumenda adipisci! Aspernatur officiis tempora ipsa sit nostrum voluptatum? Reprehenderit, molestias tempore. Iure, pariatur eveniet?</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 text-slate-900">
        <div className="flex flex-col sm:flex-row ">
          {/* first Column */}
          <div className="flex w-full sm:w-1/2  py-7 text-xl">
            <div className="px-2 py-1">
              <FaLinkedinIn />
            </div>
            <div  className="px-2 py-1">
              <BiMailSend />
            </div>
             
            <div  className="px-2 ">
              <h2>getfunds.co.za</h2>
            </div>
          </div>
          {/* first Column */}
          <div className="w-full sm:w-1/2 flex justify-center py-3">
          <button
              className="border border-slate-900 border-1 bg-green-500 mt-5 px-10 py-2 text-slate-900 flex items-center justify-center"
              type="button"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-center ">
            
          </div>
    </div>
    </div>
    
  );
};

export default Congrats;
