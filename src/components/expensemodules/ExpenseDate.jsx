import React from "react";

const ExpenseDate = (props) => {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const year = props.Date.getFullYear();
  const day = props.Date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
