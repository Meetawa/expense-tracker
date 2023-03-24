import React from "react";

const ExpenseModule = () => {
  let title = "Home loan";
  return (
    <>
      <div className="expense-item">
        <div>March 2023,23</div>
        <div className="expense-item_description">
          <h2>{title}</h2>
          <div className="expense-item_price">RS.15000</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseModule;
