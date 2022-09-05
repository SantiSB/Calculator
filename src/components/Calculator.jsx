import React from 'react'
import "../styles/Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {
  return (
    <>
        <Box m={5} />
        <Container maxWidth="xs">
            <div className="container">
                <Box m={10}/>
                <p className='display'>1552</p>
                <button className='function'>AC</button>
                <button className='function'>+/-</button>
                <button className='function'>%</button>
                <button className='function'>/</button>

                <button className='number'>7</button>
                <button className='number'>8</button>
                <button className='number'>9</button>
                <button className='operator'>X</button>

                <button className='number'>4</button>
                <button className='number'>5</button>
                <button className='number'>6</button>
                <button className='operator'>-</button>

                <button className='number'>1</button>
                <button className='number'>2</button>
                <button className='number'>3</button>
                <button className='operator'>+</button>

                <button className='number'>0</button>
                <button className='number'>.</button>
                <button className='operator'>=</button>
            </div>
        </Container>
    </>
  )
}

export default Calculator