"use client"


const Details = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Business Details</h2>
        <form action="https://formsubmit.co/your@email.com" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Business Name
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="business"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Owners Name
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <input type="radio" className="form-radio text-indigo-600" name="gender" value="male" />
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
              className=" w-full bg-black mt-3 p-5 text-white rounded-full flex items-center justify-center"
              type="button"
            >
              Submit
            </button>
          </div>
          <span className="italic text-center text-sm mb-4 p-5">All qoutes are subject to due deligence</span>
        </form>
      </div>
    );
  };
  
  export default Details;
  