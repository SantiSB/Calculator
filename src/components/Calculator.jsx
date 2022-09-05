import React, {useState} from 'react'
import "../styles/Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {

    const [value, setValue] = useState(0)
    const [operator, setOperator] = useState();
    const [prevValue, setPrevValue] = useState(0);

    const typeNumber = (e) => {
        var input = e.target.value
        value === 0 ? setValue(input) : setValue(value + input)
    }

    const clear = () => {
        setValue(0);
    }

    const handleOperator = (e) => {
        var operatorValue = e.target.value;
        setOperator(operatorValue);
        setPrevValue(value);
        setValue(0);
    }

  return (
    <>
        <Box m={5} />
        <Container maxWidth="xs">
            <div className="container">
                <Box m={10}/>
                <p className='display'>{value}</p>
                <button className='function' onClick={clear}>AC</button>
                <button className='function'>+/-</button>
                <button className='function'>%</button>
                <button className='function'>/</button>

                <button className='number' onClick={typeNumber} value={7}>7</button>
                <button className='number' onClick={typeNumber} value={8}>8</button>
                <button className='number' onClick={typeNumber} value={9}>9</button>
                <button className='operator' onClick={handleOperator}>X</button>

                <button className='number' onClick={typeNumber} value={4}>4</button>
                <button className='number' onClick={typeNumber} value={5}>5</button>
                <button className='number' onClick={typeNumber} value={6}>6</button>
                <button className='operator' onClick={handleOperator}>-</button>

                <button className='number' onClick={typeNumber} value={7}>1</button>
                <button className='number' onClick={typeNumber} value={8}>2</button>
                <button className='number' onClick={typeNumber} value={9}>3</button>
                <button className='operator' onClick={handleOperator}>+</button>

                <button className='number' onClick={typeNumber} value={0}>0</button>
                <button className='number' onClick={typeNumber} value={'.'}>.</button>
                <button className='calculate' >=</button>
            </div>
        </Container>
    </>
  )
}

export default Calculator