import React from "react";
export default function ExpenseDetail({ selectedExpense }) {
  return (
    <form>
      <h2>Expense Details</h2>
      {/* <input type="text" value={selectedExpense.date} /> */}
      <input type="text" name="" value={selectedExpense.category} />
      {/* <input type="text" name="" value={selectedExpense.category} /> */}
    </form>
  );
}
