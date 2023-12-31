import logo from "./logo.svg";
import "./App.css";
import expense from "./Data";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./FormAddExpense";
import ExpenseDetail from "./ExpenseDetail";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState(expense);
  return (
    <div className="app">
      <div className="sidebar">
        <ExpenseList expenses={expenses} />
        <AddExpenseForm />
        <Button></Button>
      </div>
      <ExpenseDetail />
    </div>
  );
}

export default App;
