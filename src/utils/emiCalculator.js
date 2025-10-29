export function calculateEMI(principal, annualRate, tenureYears) {
  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  // Breakdown by year
  const breakdown = [];
  let balance = principal;

  for (let year = 1; year <= tenureYears; year++) {
    let interestPaid = 0;
    let principalPaid = 0;

    for (let i = 1; i <= 12; i++) {
      const interest = balance * monthlyRate;
      const principalComp = emi - interest;

      interestPaid += interest;
      principalPaid += principalComp;
      balance -= principalComp;
    }

    breakdown.push({
      year,
      interestPaid: parseFloat(interestPaid.toFixed(2)),
      principalPaid: parseFloat(principalPaid.toFixed(2)),
      remainingBalance: parseFloat(balance.toFixed(2)),
    });
  }

  return {
    emi: parseFloat(emi.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
    totalPayment: parseFloat(totalPayment.toFixed(2)),
    breakdown,
  };
}
