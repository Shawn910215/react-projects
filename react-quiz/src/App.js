import Main from "./Main";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
  //"loading", "error", "ready", "active", "finished"
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unkown action");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;
  const numQuestion = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen numQuestion={numQuestion} />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}
