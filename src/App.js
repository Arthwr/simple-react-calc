import { useReducer, useRef } from "react";
import "./App.css";

function App() {
  const initialState = { result: 0 };
  const inputRef = useRef(null);

  const calcReducer = (state, calcAction) => {
    switch (calcAction.type) {
      case "+":
        return { ...state, result: state.result + calcAction.payload };
      case "-":
        return { ...state, result: state.result - calcAction.payload };
      case "*":
        return { ...state, result: state.result * calcAction.payload };
      case "/":
        return { ...state, result: state.result / calcAction.payload };
      case "RESETinput":
        inputRef.current.value = 0;
        return { ...state };
      case "RESETresult":
        return { ...state, result: state.result * 0 };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(calcReducer, initialState);
  const handleCalculation = (actionType) => {
    const inputValue = Number(inputRef.current.value);
    dispatch({ type: actionType, payload: inputValue });
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p>{state.result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button type="button" onClick={() => handleCalculation("+")}>
          Add
        </button>
        <button type="button" onClick={() => handleCalculation("-")}>
          Substract
        </button>
        <button type="button" onClick={() => handleCalculation("*")}>
          Multiply
        </button>
        <button type="button" onClick={() => handleCalculation("/")}>
          Divide
        </button>
        <button type="button" onClick={() => handleCalculation("RESETinput")}>
          Reset input
        </button>
        <button type="button" onClick={() => handleCalculation("RESETresult")}>
          Reset result
        </button>
      </form>
    </div>
  );
}

export default App;
