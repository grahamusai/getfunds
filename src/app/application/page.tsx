"use client"


const Details = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Business Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Business Name
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John Doe"
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
              placeholder="john.doe@example.com"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              When did you start operations
            </label>
            <input
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div>
              <label className="inline-flex items-center mr-6">
                <input type="radio" className="form-radio text-indigo-600" name="gender" value="male" />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-indigo-600" name="gender" value="female" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
  
          <div className="flex items-center justify-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Details;
  