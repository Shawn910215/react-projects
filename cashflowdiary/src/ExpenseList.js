import React from "react";
import Expense from "./Expense";
export default function ExpenseList({
  expenses,
  onSelection,
  selectedExpense,
}) {
  return (
    <ul>
      {expenses.map((expense) => (
        <Expense
          expense={expense}
          onSelection={onSelection}
          selectedExpense={selectedExpense}
          key={expense.id}
        />
      ))}
    </ul>
  );
}
