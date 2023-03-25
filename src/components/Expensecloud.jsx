import React from "react";
import ExpenseModule from "./expensemodules/ExpenseModule";

const Expensecloud = () => {
  let expense = [
    {
      id: 1,
      item: "Home Loan",
      amount: "₹20000",
      Date: new Date(2023, 3, 23),
    },
    {
      id: 2,
      item: "bike insurance",
      amount: "₹2000",
      Date: new Date(2023, 3, 23),
    },
    {
      id: 3,
      item: "books",
      amount: "₹200",
      Date: new Date(2023, 3, 23),
    },
    {
      id: 4,
      item: "Mobile Recharge",
      amount: "₹399",
      Date: new Date(2023, 3, 23),
    },
    {
      id: 5,
      item: "WiFi Recharge",
      amount: "₹599",
      Date: new Date(2023, 3, 23),
    },
  ];
  return (
    <div>
      <ExpenseModule
        item={expense[0].item}
        amount={expense[0].amount}
        Date={expense[0].Date}
      />
      <ExpenseModule
        item={expense[1].item}
        amount={expense[1].amount}
        Date={expense[1].Date}
      />
      <ExpenseModule
        item={expense[2].item}
        amount={expense[2].amount}
        Date={expense[2].Date}
      />
      <ExpenseModule
        item={expense[3].item}
        amount={expense[3].amount}
        Date={expense[3].Date}
      />
      <ExpenseModule
        item={expense[4].item}
        amount={expense[4].amount}
        Date={expense[4].Date}
      />
    </div>
  );
};

export default Expensecloud;
