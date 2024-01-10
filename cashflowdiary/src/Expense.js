import React from "react";
import Button from "./Button";
export default function Expense({ expense, onSelection, selectedExpense }) {
  return (
    <li>
      <h3>{expense.category}</h3>
      <p>{expense.amount}</p>
      <Button onClick={() => onSelection(expense)}>Detail</Button>
    </li>
  );
}
