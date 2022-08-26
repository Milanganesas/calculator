import { useCalculate, useResult } from "../Context/Operations";
import { useColor } from "../Context/Styles";

const Numbers = () => {

    const {calculate, setCalculate} = useCalculate();
    const {setResult} = useResult();
    const {color, numberCSS} = useColor();

    const addCaracter = (e) => {
        const value = e.target.innerText;
        
        const operators = ["+", "-", "*", "/"];
        if (
            value === "." && calculate === "" || 
            value === "." && operators.includes(calculate.slice(-1))
        ) {
            return;
        };
        
        setCalculate(calculate + e.target.innerText);
        setResult(eval(calculate + value));
    };

    const equal = () => {
        setCalculate("");
        setResult(eval(calculate));
    }

    const createNumbers = () => {
        const numbers = [];

        for (let i = 0; i < 10; i++) {
           numbers.unshift(
            <button key={i} onClick={addCaracter} style={{color: color.number}} className={numberCSS}>{i}</button>
           );
        };

        return numbers;
    };

    return (
        <>
            { createNumbers() }
            <button style={{color: color.number}} className={numberCSS} onClick={addCaracter}>.</button>
            <button style={{color: color.number}} className={numberCSS} onClick={equal}>=</button>
        </>
    )
};

export default Numbers;