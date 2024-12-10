import React,{useState} from 'react'

const Withdraw = () => {
  const [paymentMethod, setPaymentMethod] = useState("");






  return (
    <div className='rounded-xl border-4 border-teal-500 p-4 text-white text-center'>
      <div>
        <div className='p-4'>
          <p>Minimun Withdraw 500 BDT</p>
        </div>
        <div className='p-4 mt-4'>
          <p>Your Current Balance : </p>
        </div>

        {/* Payment Method  */}
        <div className="p-4 mt-4 border-4 rounded-lg bg-gray-900">
          <p className="text-lg font-semibold mb-4">Select Payment Method</p>
          <div className="flex justify-around items-center gap-4">
            <div
              className={`flex flex-col items-center justify-center w-32 h-32 border-2 rounded-lg cursor-pointer ${paymentMethod === "Bkash" ? "border-indigo-600 bg-orange-500" : "border-gray-300"
                }`}
              onClick={() => setPaymentMethod("Bkash")}
            >
              <img
                src="bkash.png"
                alt="Bkash"
                className=""
              />
              <span className="text-sm font-medium">Bkash</span>
            </div>

            <div
              className={`flex flex-col items-center justify-center w-32 h-32 border-2 rounded-lg cursor-pointer ${paymentMethod === "Nagad" ? "border-indigo-600 bg-orange-500" : "border-gray-300"
                }`}
              onClick={() => setPaymentMethod("Nagad")}
            >
              <img
                src="nagad.png"
                alt="Nagad"
                className="w-20 h-20 mb-2"
              />
              <span className="text-sm font-medium">Nagad</span>
            </div>
          </div>

          {paymentMethod && (
            <p className=" mt-4">Selected: {paymentMethod}</p>
          )}
        </div>

        <div className="p-6 mt-6 border-4 rounded-lg shadow-md bg-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Number Input */}
            <div className="flex flex-col">
              <label htmlFor="number" className="text-lg font-medium text-gray-800 mb-2">
               Your {paymentMethod} Number
              </label>
              <input
                id="number"
                type="number"
                placeholder="Enter your number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Amount Input */}
            <div className="flex flex-col">
              <label htmlFor="amount" className="text-lg font-medium text-gray-800 mb-2">
                Amount
              </label>
              <input
                id="amount"
                type="text"
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className='pt-4'>

          <button className="btn btn-wide">Withdraw Now</button>
        </div>

      </div>
    </div>
  )
}

export default Withdraw
