"use client";
import Link from "next/link";
import React from "react";
import { useGlobalState } from "./libs/global_state";
import { useState, useEffect } from "react";
import { formatCurrency, round } from "./libs/helpers";
import Switcher from "./components/switcher";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Modal from "./components/modal";
import TermsModal from "./components/termsModal";

const Congrats = () => {
  // @ts-ignore
  const handleKeyDown = (event) => {
    event.preventDefault();
    if (turnOver === 0) {
      setIsModalOpen(true);
      setModalErrorMessage("Please enter your monthly turnover.");
    }
    return false;
  };

  const handleFocus = () => {
    // Handle focus event

    if (turnOver === 0) {
      setIsModalOpen(true);
      setModalErrorMessage("Please enter your monthly turnover.");
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Handle blur event
    if (turnOver <= 30000) {
      setIsModalOpen(true);
      setModalErrorMessage("Monthly turnover must be above R30 thousand.");
    } else if (turnOver > 15000000) {
      setIsModalOpen(true);
      setModalErrorMessage("You cannot enter an amount above R15M");
    }
  };

  const {
    setTurnOver,
    setNeededAmount,
    setDuration,
    setGrossProfit,
    turnOver,
    grossProfit,
    setIsModalOpen,
    modalErrorMessage,
    isModalOpen,
    setModalErrorMessage,
    termsModalIsOpen,
    setTermsModalIsOpen,
  } = useGlobalState();
  const { neededAmount, duration, frequency, useSlider } = useGlobalState();

  const repaymentAmount = (grossProfit: number, duration: number) => {
    return grossProfit * duration;
  };
  const maxAmount: number = turnOver * 0.7;

  const calculateTotalPay = () => {
    const interestRates = [0, 0, 0, 12, 16, 18, 21, 23, 25, 28, 30, 27.5, 3.0];

    if (duration >= 3 && duration <= 10) {
      const interestRate = interestRates[duration];
      return neededAmount + (neededAmount * interestRate) / 100;
    }
  };

  const formattedMaxAmount: string = maxAmount.toLocaleString("en-US");


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
    <div>
      {isModalOpen && <Modal />}
      {termsModalIsOpen && <TermsModal />}
      <div className="flex justify-center items-center text-slate-900">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 text-slate-900">
          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="festive"
              height={200}
              width={200}
            />
          </div>
          <h1 className="text-center font-extrabold text-4xl mt-3">
            Cash Advance Calculator
          </h1>
          <div className="mx-auto bg-white mt-8 border-2 border-slate-900">
            <div className="flex flex-col sm:flex-row ">
              {/* First Column */}

              <div className="w-full sm:w-1/2 bg-white mx-auto flex justify-center  p-5">
                <div>
                  <div className="mb-12">
                    <h1 className="text-sm">
                      What is your monthly turnover?
                      <span className="text-rose-500">*</span>
                    </h1>
                    <input
                      type="number"
                      id="activeInput"
                      name="turnover"
                      max={15000000}
                      min={50000}
                      placeholder="example R100,000"
                      className=" border-2 w-full text-center border-slate-900 px-5 py-2 mt-2 bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
                      onChange={(e) => {
                        setTurnOver(parseInt(e.target.value));
                        setNeededAmount(maxAmount ) + '0';
                      }}
                      onBlur={handleBlur}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          // @ts-ignore
                          e.target.blur(); // Blur the input to hide the keyboard
                        }
                      }}
                    />
                  </div>

                  <div className="mb-12">
                    <h1 className="text-sm">
                      Funding required <span className="text-rose-500">*</span>
                    </h1>
                    <input
                      type="range"
                      min={30000}
                      max={maxAmount}
                      step="10000"
                      // value={maxAmount}
                      defaultValue={maxAmount}
                      onKeyDown={handleKeyDown}
                      disabled={isModalOpen}
                      onFocus={handleFocus}
                      onTouchStart={handleFocus}
                      onChange={(e) => {
                        setNeededAmount(parseInt(e.target.value) / 10);
                      }}
                      className="bg-green-500 z-0"
                    />
                    <p className="text-center text-green-600 font-bold text-lg">
                      R 
                      {formatCurrency(
                        neededAmount === 0 ? maxAmount  :  neededAmount * 10
                      )}
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="text-sm">
                      Repayment Term<span className="text-rose-500">*</span>
                    </h1>
                    <div className="flex flex-row">
                      <h2 className="mr-2">3</h2>
                      <input
                        type="range"
                        min="3"
                        max="10"
                        step="1"
                        defaultValue={3}
                        disabled={isModalOpen}
                        onKeyDown={handleKeyDown}
                        onTouchStart={handleFocus}
                        onFocus={handleFocus}
                        onChange={(e) => {
                          setDuration(parseInt(e.target.value));
                        }}
                        className="bg-green-500 z-0"
                      />
                      <h2 className="ml-2">10</h2>
                    </div>

                    <p className="text-center text-green-600 font-bold text-lg">
                      {duration} months
                    </p>
                  </div>

                  <div className="">
                    <h1 className="text-sm">
                      Select Repayment Method
                      <span className="text-rose-500">*</span>
                    </h1>
                    <Switcher />
                  </div>
                </div>
              </div>
              {/* Second Column */}
              <div className="w-full sm:w-1/2 hidden sm:block border bg-green-500 px-5 py-3">
                <div className="border-slate-900 border-b-2 p-5 flex flex-col sm:flex-row">
                  <div className=" w-full sm:w-1/2">
                    <h1 className="text-sm">Pre-approved for:</h1>
                    <h1 className="text-4xl  font-bold">
                      R{`${formattedMaxAmount}`}
                    </h1>
                  </div>
                  <div className=" w-full sm:w-1/2">
                    <h1 className="text-sm text-center">Selected Amount</h1>
                    <h1 className="text-4xl font-bold text-center">
                      R{formatCurrency(
                        neededAmount === 0 ? maxAmount : neededAmount * 10
                      )}
                    </h1>
                  </div>

                </div>
                <div className="flex flex-col sm:flex-row p-3 border-b-2 border-slate-900">
                  <div className=" mt-3 w-full sm:w-1/2 bg-transparent mx-auto p-3">
                    <h1 className="text-lg font-bold ">Total Payover</h1>
                    <h2 className="text-2xl font-bold">
                      R{`${formatCurrency(round(calculateTotalPay() || 0) * 10)}`}
                    </h2>
                  </div>
                  <div className="border-slate-900 border-l-2 lg:text-center mt-3 w-full sm:w-1/2 bg-transparent mx-auto p-3">
                    <h1 className="text-lg font-bold ">Repayments</h1>
                    <h2 className="text-2xl font-bold">
                      R{formatCurrency(round(calculateRepayAmount() || 0) * 10)}
                    </h2>
                  </div>
                </div>
                <div className="p-5 mt-3">
                  <h1 className="font-bold p-2 bg-green-500">How it works</h1>
                  <p className="text-sm">
                    Get Funds is a Specialist Consulting firm, partnered with
                    best in class funders. Offering the correct funder match
                    first time round for your working capital needs. Speak to us
                    about your requirements and we will have the right funder
                    fund you in 1-3 days. Apply so we can reach out and take you
                    one step closer to your goals. These Quotes are estimates.
                    We use our economies of scale to get you the best deals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:hidden bg-green-500 border border-slate-900 p-6 mx-2 rounded mt-2">
            <div className="flex flex-row sm:flex-row ">
              <div className="w-full ">
                <div>
                  <h1 className="text-sm">Pre-approved for:</h1>
                  <h1 className="text-2xl  font-bold">
                    R{`${formattedMaxAmount}`}
                  </h1>
                </div>
                <div className="mt-2">
                  <h1 className="text-sm">Selected Amount</h1>
                  <h1 className="text-2xl font-bold">
                  R{formatCurrency(
                        neededAmount === 0 ? maxAmount : neededAmount * 10
                      )}
                  </h1>
                </div>
              </div>
              <div className="w-full border-l-2 border-slate-900 pl-10">
                <div>
                  <h1 className="text-sm">Total Payover</h1>
                  <h2 className="text-lg font-bold">
                  R{`${formatCurrency(round(calculateTotalPay() || 0) * 10)}`}
                  </h2>
                </div>
                <div className="mt-2">
                  <h1 className="text-sm">Repayments</h1>
                  <h2 className="text-lg font-bold">
                  R{formatCurrency(round(calculateRepayAmount() || 0) * 10)}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 text-slate-900">
            <div className="flex flex-col sm:flex-row text-center sm:text-left">
              {/* first Column */}
              <div className="w-full sm:w-1/2 flex gap-5 justify-center py-3">
                <Link href="/application">
                  <button
                    className="border border-slate-900 border-1 bg-green-500 mt-0 md:mt-3 px-10 py-2 text-slate-900 flex items-center justify-center"
                    type="button"
                  >
                    APPLY NOW
                  </button>
                </Link>
                <button
                  onClick={() => setTermsModalIsOpen(true)}
                  className="lg:hidden uppercase underline"
                >
                  How it works?
                </button>
              </div>
              {/* first Column */}
              <div className="flex w-full sm:w-1/2 justify-center py-7 text-xl">
                <div className="px-2 py-1">
                  <Link
                    target="_blank"
                    href="https://za.linkedin.com/company/get-funds"
                  >
                    <h1>
                      <FaLinkedinIn />
                    </h1>
                  </Link>
                </div>
                <div className="px-2 py-1">
                  <Link href="mailto:info@getfunds.co.za">
                    <h1>
                      <BiMailSend />
                    </h1>
                  </Link>
                </div>
                <div className="px-2 ">
                  <Link href="https://getfunds.co.za" target="_blank">
                    <h2 className="underline">getfunds.co.za</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center "></div>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
