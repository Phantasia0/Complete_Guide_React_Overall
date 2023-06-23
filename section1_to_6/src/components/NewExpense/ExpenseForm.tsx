import React, { useState } from "react";
import { ExpenseFormDataType } from "../../App";
import "./ExpenseForm.css";

type ExpenseFormProps = {
  onSaveExpenseData: (expenseData: ExpenseFormDataType) => void;
  onCancel: () => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  onSaveExpenseData,
  onCancel,
}) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const inputChangeHandler = (identifier: string, value: string) => {
    if (identifier === "title") {
      setUserInput((prevState) => ({ ...prevState, title: value }));
    } else if (identifier === "amount") {
      setUserInput((prevState) => ({ ...prevState, amount: Number(value) }));
    } else {
      setUserInput((prevState) => ({ ...prevState, date: value }));
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };
    onSaveExpenseData(expenseData);

    setUserInput({
      title: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("title", event.target.value)
            }
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("amount", event.target.value)
            }
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputChangeHandler("date", event.target.value)
            }
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
