import { useState } from "react";
const flashcards = [
  { id: 1, question: "A", answer: "a" },
  { id: 2, question: "B", answer: "b" },
  { id: 3, question: "C", answer: "c" },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const flashHandle = function (id) {
    setSelectedId(id !== selectedId ? id : null);
  };
  return (
    <div>
      {flashcards.map((item) => (
        <p onClick={() => flashHandle(item.id)}>
          {item.id === selectedId ? item.answer : item.question}
        </p>
      ))}
    </div>
  );
}
