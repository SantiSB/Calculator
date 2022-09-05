import React, {useState} from 'react'
import "../styles/Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {

    const [value, setValue] = useState(0)

    const typeNumber = (e) => {
        var input = e.target.value
        value === 0 ? setValue(input) : setValue(value + input)
    }

  return (
    <>
        <Box m={5} />
        <Container maxWidth="xs">
            <div className="container">
                <Box m={10}/>
                <p className='display'>{value}</p>
                <button className='function'>AC</button>
                <button className='function'>+/-</button>
                <button className='function'>%</button>
                <button className='function'>/</button>

                <button className='number' onClick={typeNumber} value={7}>7</button>
                <button className='number' onClick={typeNumber} value={8}>8</button>
                <button className='number' onClick={typeNumber} value={9}>9</button>
                <button className='operator'>X</button>

                <button className='number' onClick={typeNumber} value={4}>4</button>
                <button className='number' onClick={typeNumber} value={5}>5</button>
                <button className='number' onClick={typeNumber} value={6}>6</button>
                <button className='operator'>-</button>

                <button className='number' onClick={typeNumber} value={7}>1</button>
                <button className='number' onClick={typeNumber} value={8}>2</button>
                <button className='number' onClick={typeNumber} value={9}>3</button>
                <button className='operator'>+</button>

                <button className='number' onClick={typeNumber} value={0}>0</button>
                <button className='number' onClick={typeNumber} value={'.'}>.</button>
                <button className='operator'>=</button>
            </div>
        </Container>
    </>
  )
}

export default Calculator