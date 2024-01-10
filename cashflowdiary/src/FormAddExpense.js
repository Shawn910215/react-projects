import React, { useState } from "react";
import Button from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddExpenseForm({ onAddExpense }) {
  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();

  function handleSubmit(e) {
    //prevent refresh after submit
    e.preventDefault();
    //if no name or expense input, return nothing
    if (!category || !amount) {
      return;
    }
    const id = crypto.randomUUID();
    const newExpense = { id, date, category, amount, description };

    onAddExpense(newExpense);
  }
  return (
    <form className="form-add-expense" onSubmit={handleSubmit}>
      <label htmlFor="datePicker">📆Date</label>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <label for="">🛒Category</label>
      <input
        type="text"
        name=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label for="">💵Amount</label>
      <input
        type="text"
        name=""
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label for="">📝Description</label>
      <input
        type="text"
        name=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
