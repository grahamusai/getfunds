'use client'
import { useState } from 'react';

const LoanCalculator = () => {
  const [grossProfit, setGrossProfit] = useState(0); 
  const [loanAmount, setLoanAmount] = useState(0);

  const calculateLoan = () => {
    const maxAmount = grossProfit * 0.7;
    const cost = grossProfit * 0.21;
    const total = maxAmount + cost;
    setLoanAmount(maxAmount);
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <label htmlFor="grossProfit">Monthly Gross Profit:</label>
      <input
        type="number"
        id="grossProfit"
        value={grossProfit}
        onChange={(e) => setGrossProfit(Number(e.target.value))}
      />
      <button onClick={calculateLoan}>Calculate Loan</button>
      <p>Loan Amount: {loanAmount}</p>
    </div>
  );
};

export default LoanCalculator;
