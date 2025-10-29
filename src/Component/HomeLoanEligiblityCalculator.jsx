import  { useState, useEffect } from 'react';

const HomeLoanEligiblityCalculator = () => {
  const [income, setIncome] = useState(25000);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(7.9);
  const [otherEMI, setOtherEMI] = useState(0);
  const [eligibility, setEligibility] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(10000);

  useEffect(() => {
    calculateEligibility();
  }, [income, tenure, interestRate, otherEMI]);

  const calculateEligibility = () => {
    const eligibleEMI = income * 0.4 - otherEMI;
    const rate = interestRate / (12 * 100);
    const months = tenure * 12;

    const loan =
      (eligibleEMI * (Math.pow(1 + rate, months) - 1)) /
      (rate * Math.pow(1 + rate, months));

    setEligibility(Math.round(loan));
    setMonthlyEMI(Math.round(eligibleEMI));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Calculate Home Loan Eligibility</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Gross Income */}
          <div>
            <label className="block font-semibold">Gross Income (Monthly)</label>
            <input
              type="range"
              min={10000}
              max={1000000}
              step={1000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="border p-2 mt-2 w-full"
            />
          </div>

          {/* Tenure */}
          <div>
            <label className="block font-semibold">Tenure (Years)</label>
            <input
              type="range"
              min={1}
              max={30}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="border p-2 mt-2 w-full"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block font-semibold">Interest Rate (% P.A.)</label>
            <input
              type="range"
              min={0.5}
              max={15}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="border p-2 mt-2 w-full"
            />
          </div>

          {/* Other EMIs */}
          <div>
            <label className="block font-semibold">Other EMIs (Monthly)</label>
            <input
              type="range"
              min={0}
              max={1000000}
              step={100}
              value={otherEMI}
              onChange={(e) => setOtherEMI(Number(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              value={otherEMI}
              onChange={(e) => setOtherEMI(Number(e.target.value))}
              className="border p-2 mt-2 w-full"
            />
          </div>
        </div>

        {/* Result Panel */}
        <div className="bg-gray-100 p-6 rounded-md text-center">
          <h3 className="text-xl font-semibold mb-4">Your Home Loan Eligibility</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">
            ₹{eligibility.toLocaleString()}
          </p>
          <p className="text-lg">Your Home Loan EMI will be</p>
          <p className="text-xl font-semibold mb-4">₹{monthlyEMI.toLocaleString()} /month</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanEligiblityCalculator;
