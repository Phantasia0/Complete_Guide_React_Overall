import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

export interface ExpenseDataType extends ExpenseFormDataType {
  _id: string;
}

export interface ExpenseFormDataType {
  title: string;
  amount: number;
  date: Date;
}

const DUMMY_EXPENSES: ExpenseDataType[] = [
  {
    _id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { _id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    _id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    _id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [appExpenses, setAppExpenses] =
    useState<ExpenseDataType[]>(DUMMY_EXPENSES);
  const addExpenseHandler = (expense: ExpenseDataType) => {
    setAppExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={appExpenses} />
    </div>
  );
}

export default App;
