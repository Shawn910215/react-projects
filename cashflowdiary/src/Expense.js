import React from "react";
import Button from "./Button";
export default function Expense({ expense }) {
  return (
    <li>
      <h3>{expense.category}</h3>
      <p>{expense.amount}</p>
      <Button>Detail</Button>
    </li>
  );
}
