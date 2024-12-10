import React from 'react';

const DepositHistory = () => {
  // Sample data for the deposit history
  const depositHistory = [
    { id: 1, amount: 1000, method: 'Bkash', date: '2024-12-01', status: 'Completed' },
    { id: 2, amount: 5000, method: 'Nagad', date: '2024-12-05', status: 'Pending' },
    { id: 3, amount: 2500, method: 'Bkash', date: '2024-12-07', status: 'Completed' },
    // Add more records as needed
  ];

  return (
    <div className="bg-gray-800 py-10 px-4 text-white">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Deposit History</h1>
        <p className="text-lg text-gray-600 mt-2">View your deposit transactions below</p>
      </div>

      {/* Deposit History Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-700 rounded-lg shadow-md">
          <thead className=" ">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Method</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {depositHistory.map((deposit) => (
              <tr key={deposit.id} className="border-t">
                <td className="py-3 px-4 ">{deposit.id}</td>
                <td className="py-3 px-4 ">{deposit.amount} TK</td>
                <td className="py-3 px-4 ">{deposit.method}</td>
                <td className="py-3 px-4 ">{deposit.date}</td>
                <td className="py-3 px-4 ">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      deposit.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    {deposit.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button className="btn btn-neutral" onClick={() => window.history.back()}>
          Back to Deposit Page
        </button>
      </div>
    </div>
  );
};

export default DepositHistory;
