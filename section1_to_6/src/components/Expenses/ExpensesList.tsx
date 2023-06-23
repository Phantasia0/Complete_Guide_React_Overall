import React from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseDataType } from "../../App";
import "./ExpensesList.css";

type ExpensesListProps = {
  items: ExpenseDataType[];
};

const ExpensesList: React.FC<ExpensesListProps> = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense._id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
