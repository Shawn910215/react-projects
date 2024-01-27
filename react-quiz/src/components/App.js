import Main from "../Main";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "../StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  //"loading", "error", "ready", "active", "finished"
  status: "loading",
  index: 0,
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

    case "start": {
      return { ...state, status: "active" };
    }
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
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "error" && <Error />}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}
