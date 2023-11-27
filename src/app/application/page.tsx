"use client"
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Navbar from "../components/Navbar";
import AlertBox from "../components/alertbox";


const Details = () => {
  const [submit, submitting] = useFormspark({
    formId: "6JJkZDDwF"
    
  });
  const [name,  setName] = useState("");
  

    return (
      <div className="max-w-md mx-auto mt-5 p-6 bg-opacity-30 rounded-md shadow-md text-slate-900">
        <h2 className="text-2xl font-semibold mb-4">Business Details</h2>
        <form onSubmit={async (e) => {
        e.preventDefault();
        
        await submit({ name })
        alert("Your email has been submitted successfully <br> A funding specialist will be in touch with you shortly")
      
        }}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Business Name
            </label>
            <input
              className="w-full border-2 border-black px-5 py-3 mt-2  bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
              id="name"
              name="business"
              type="text"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Owners Name
            </label>
            <input
              className="w-full border-2 border-black px-5 py-3 mt-2  bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
              id="name"
              name="owner"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Phone Number
            </label>
            <input
              className="w-full border-2 border-black px-5 py-3 mt-2  bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
              id="name"
              type="number"
              name="phone"
              placeholder=""
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border-2 border-black px-5 py-3 mt-2  bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Amount Requested
            </label>
            <input
              className="w-full border-2 border-black px-5 py-3 mt-2  bg-transparent placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:shadow-2xl focus:border-transparent duration-100"
              id="email"
              type="number"
              name="amount"
              placeholder="100000"
            />
          </div>
  
         
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              What is most important to you?
            </label>
            <div>
              <label className="inline-flex items-center mr-6">
                <input type="radio" className=" text-indigo-600 bg-transparent" name="gender" value="male" />
                <span className="ml-2">Max Amount</span>
              </label> <br />
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-indigo-600" name="gender" value="female" />
                <span className="ml-2">Cost</span>
              </label> <br />
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-indigo-600" name="gender" value="female" />
                <span className="ml-2">Speed</span>
              </label>
            </div>
          </div>
  
          <div className="flex items-center justify-center">
            <button
              className=" w-full bg-green-500 mt-3 p-5 text-white  flex items-center justify-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Details;
  