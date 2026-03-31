import { useState } from "react";
import { calculateEMI } from "../utils/emiCalculator";

const EMICalculator = ({ showAllForm, setShowFormModal }) => {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(5);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = calculateEMI(principal, rate, tenure);
    setResult(res);
  };

  return (
    <div className="min-w-md max-w-screen w-full mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4 text-center">EMI Calculator</h2>
      <div className="flex gap-2 items-center mb-2 ">
        <div className="max-w-md w-full">
          <div className="flex flex-col gap-0.5 items-center mb-2 w-full">
            <p className="text-[16px] w-full items-start">Enter Loan Amount</p>
            <input
              type="number"
              placeholder="Loan Amount"
              value={principal}
              onChange={(e) => setPrincipal(+e.target.value)}
              className="w-full p-2 border mb-2"
            />
          </div>
          <div className="flex flex-col gap-0.5 items-center mb-2 w-full">
            <p className="text-[16px] w-full items-start">
              Enter Interest Rate
            </p>
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full p-2 border mb-2"
            />
          </div>
          <div className="flex flex-col gap-0.5 items-center mb-2 w-full">
            <p className="text-[16px] w-full items-start">
              Enter Tenure (Years)
            </p>
            <input
              type="number"
              placeholder="Tenure (Years)"
              value={tenure}
              onChange={(e) => setTenure(+e.target.value)}
              className="w-full p-2 border mb-4"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Calculate EMI
          </button>
        </div>

        {result && (
          <div className="w-[1000px] min-w-md relative">
            {!showAllForm && (
              <div className="absolute z-40  left-0 h-full flex flex-col gap-2 items-center justify-center top-0 text-center w-full">
                <p className="text-red-600 font-semibold text-[12px] sm:text-[20px] md:text-[24px]">
                  ⚠️ Please fill the Lets Talk form above to access the EMI
                  Calculator
                </p>
                <button
                  // onClick={handleEmiClick}
                  onClick={() => setShowFormModal(true)}
                  className="cursor-pointer bg-[#19273A] text-white  px-2 py-2 rounded-[8px]"
                >
                  Click to go on form
                </button>
              </div>
            )}
            <div
              className={` ${
                !showAllForm
                  ? "blur-sm pointer-events-none select-none"
                  : "blur-0"
              }`}
            >
              <p>
                <strong>EMI:</strong> ₹{result.emi}
              </p>
              <p>
                <strong>Total Interest:</strong> ₹{result.totalInterest}
              </p>
              <p>
                <strong>Total Payment:</strong> ₹{result.totalPayment}
              </p>

              <h3 className="mt-4 font-semibold">Yearly Breakdown:</h3>
              <table className="w-full mt-2 text-sm border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-2">Year</th>
                    <th className="border px-2">Interest Paid</th>
                    <th className="border px-2">Principal Paid</th>
                    <th className="border px-2">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.breakdown.map((b) => (
                    <tr key={b.year}>
                      <td className="border px-2 text-center">{b.year}</td>
                      <td className="border px-2">₹{b.interestPaid}</td>
                      <td className="border px-2">₹{b.principalPaid}</td>
                      <td className="border px-2">₹{b.remainingBalance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
