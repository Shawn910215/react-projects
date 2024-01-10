import "./App.css";
import expense from "./Data";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./FormAddExpense";
import ExpenseDetail from "./ExpenseDetail";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [showAddExpense, setShowAddExpense] = useState(true);
  const [expenses, setExpenses] = useState(expense);
  const [selectedExpense, setSelectedExpense] = useState(null);

  //handle show the add expense component
  function handleShowAddExpense() {
    setShowAddExpense((show) => !show);
  }
  function handleAddExpense(expense) {
    setExpenses((expenses) => [...expenses, expense]);
    // setShowAddExpense(false);
  }

  function handleSelectedExpense(expense) {
    setSelectedExpense((cur) => (cur?.id === expense.id ? null : expense));
  }
  return (
    <div className="app">
      <div className="sidebar">
        <ExpenseList
          expenses={expenses}
          onSelection={handleSelectedExpense}
          selectedExpense={selectedExpense}
        />
        {showAddExpense && (
          <AddExpenseForm onAddExpense={handleAddExpense} expenses={expenses} />
        )}

        <Button onClick={handleShowAddExpense}>
          {showAddExpense ? "Close" : "Add friend"}
        </Button>
      </div>
      <ExpenseDetail selectedExpense={selectedExpense} />
    </div>
  );
}

export default App;
