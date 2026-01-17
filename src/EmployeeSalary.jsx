import React, { useState } from 'react';

function EmployeeSalary() {
  const [name, setName] = useState("");
  const [basicPay, setBasicPay] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [grade, setGrade] = useState("");
  const [bonus, setBonus] = useState(0);

  const calculateSalary = (e) => {
    e.preventDefault();

    const da = basicPay * 0.30;
    const hra = basicPay * 0.10;
    const sa = basicPay * 0.05;

    const total = basicPay + da + hra + sa;
    setTotalSalary(total);

    // reset dependent values
    setGrade("");
    setBonus(0);
  };

  const checkGrade = () => {
    if (totalSalary >= 10000 && totalSalary <= 20000) {
      setGrade("A");
    } else if (totalSalary >= 20001 && totalSalary <= 30000) {
      setGrade("B");
    } else if (totalSalary >= 30001 && totalSalary <= 40000) {
      setGrade("C");
    } else if (totalSalary > 40000) {
      setGrade("EXC");
    } else {
      setGrade("Not Eligible");
    }
  };

  const checkBonus = () => {
    let bonusAmount = 0;

    if (grade === "A") {
      bonusAmount = basicPay * 0.15;
    } else if (grade === "B") {
      bonusAmount = basicPay * 0.12;
    } else if (grade === "C") {
      bonusAmount = basicPay * 0.06;
    } else if (grade === "EXC") {
      bonusAmount = basicPay * 0.05;
    }

    setBonus(bonusAmount);
  };

  const clearForm = () => {
    setName("");
    setBasicPay(0);
    setTotalSalary(0);
    setGrade("");
    setBonus(0);
  };

  return (
    <div className="container">
      <h1>Employee Salary Calculator</h1>

      <form onSubmit={calculateSalary}>
        <label htmlFor="name">NAME:</label><br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <label htmlFor="pay">BASIC PAY:</label><br />
        <input
          type="number"
          value={basicPay}
          onChange={(e) => setBasicPay(Number(e.target.value))}
        /><br /><br />

        <button type="submit">Calculate Total Salary</button>
      </form>

      <p>Total Salary: {totalSalary}</p>

      <button onClick={checkGrade}>Check Grade</button>
      <p>Grade: {grade}</p>

      <button onClick={checkBonus}>Check Bonus</button>
      <p>Bonus Amount: {bonus}</p>

      <button onClick={clearForm}>Clear</button>
    </div>
  );
}

export default EmployeeSalary;
