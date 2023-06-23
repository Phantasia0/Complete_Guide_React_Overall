import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { ExpenseDataType, ExpenseFormDataType } from "../../App";
import "./NewExpense.css";

type NewExpenseProps = {
  onAddExpense: (expense: ExpenseDataType) => void;
};

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormDataType) => {
    const expenseDate: ExpenseDataType = {
      ...enteredExpenseData,
      _id: Math.random().toString(),
    };
    onAddExpense(expenseDate);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
