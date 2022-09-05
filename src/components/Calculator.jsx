import React, { useState } from "react";
import "../styles/Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState();
  const [prevValue, setPrevValue] = useState(0);

  const typeNumber = (e) => {
    var input = e.target.value;
    value === 0 ? setValue(input) : setValue(value + input);
  };

  const clear = () => {
    setValue(0);
    setOperator();
  };

  const handleOperator = (e) => {
    var operatorValue = e.target.value;
    setOperator(operatorValue);
    setPrevValue(value);
    setValue(0);
  };

  const calculate = () => {
    switch (operator) {
      case "/":
        setValue(parseFloat(prevValue) / parseFloat(value));
        break;
      case "X":
        setValue(parseFloat(prevValue) * parseFloat(value));
        break;
      case "-":
        setValue(parseFloat(prevValue) - parseFloat(value));
        break;
      case "+":
        setValue(parseFloat(prevValue) + parseFloat(value));
        break;
      default:
        console.log("default");
    }
  };

  return (
    <>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="container">
          <Box m={10} />
          <p className="display">{value}</p>
          <button className="function" onClick={clear}>
            AC
          </button>
          <button className="function">+/-</button>
          <button className="function">%</button>
          <button className="function" onClick={handleOperator} value={'/'}>/</button>

          <button className="number" onClick={typeNumber} value={7}>
            7
          </button>
          <button className="number" onClick={typeNumber} value={8}>
            8
          </button>
          <button className="number" onClick={typeNumber} value={9}>
            9
          </button>
          <button className="operator" onClick={handleOperator} value={'X'}>
            X
          </button>

          <button className="number" onClick={typeNumber} value={4}>
            4
          </button>
          <button className="number" onClick={typeNumber} value={5}>
            5
          </button>
          <button className="number" onClick={typeNumber} value={6}>
            6
          </button>
          <button className="operator" onClick={handleOperator} value={'-'}>
            -
          </button>

          <button className="number" onClick={typeNumber} value={1}>
            1
          </button>
          <button className="number" onClick={typeNumber} value={2}>
            2
          </button>
          <button className="number" onClick={typeNumber} value={3}>
            3
          </button>
          <button className="operator" onClick={handleOperator} value={'+'}>
            +
          </button>

          <button className="number" onClick={typeNumber} value={0}>
            0
          </button>
          <button className="number" onClick={typeNumber} value={"."}>
            .
          </button>
          <button className="calculate" onClick={calculate} value="=">
            =
          </button>
        </div>
      </Container>
    </>
  );
};

export default Calculator;
