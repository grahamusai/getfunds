"use client";
import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const Generate = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  //check if window is available

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  return (
    <div className=" flex space-y-4 flex-col w-full h-screen text-center items-center justify-center">
      <Image src="/images/logo.png" alt="festive" height={200} width={200} />
      <div className=" pt-8 text-black text-[30px] font-light">
        CREATE YOUR BROKER LINK
      </div>
      <div className=" pt-4 text-black text-[20px] font-light">
        <p>Enter your name</p>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="appearance-none mt-4 block w-full focus:border-green-500 text-gray-700 border-2 border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <p>your broker link is</p>

      <div className="w-2/4 p-2 bg-slate-200 rounded flex items-center justify-between">
        <code className="">{`${url}/?broker=${name}`}</code>
      </div>
    </div>
  );
};

export default Generate;