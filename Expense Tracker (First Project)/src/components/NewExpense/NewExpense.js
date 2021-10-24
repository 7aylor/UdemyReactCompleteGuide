import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpenseFormHandler(false);
  };

  const [showExpenseForm, setShowExpenseForm] =  useState(false);

  const setExpenseFormHandler = (show) => {
      return setShowExpenseForm(show);
  }

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showExpenseForm={setExpenseFormHandler}
        />
      ) : (
        <button onClick={() => setExpenseFormHandler(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;