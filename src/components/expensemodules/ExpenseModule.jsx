import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseModule = (props) => {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate Date={props.Date} />
        <div className="expense-item_description">
          <h2>{props.item}</h2>
          <div className="expense-item_price">{props.amount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseModule;
