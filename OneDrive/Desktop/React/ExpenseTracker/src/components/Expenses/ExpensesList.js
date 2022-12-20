import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          month={expense.date.toLocaleString("default", { month: "long" })}
          day={expense.date.toLocaleString("default", { day: "2-digit" })}
          year={expense.date.getFullYear()}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
