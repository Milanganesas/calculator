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
            value === "." && operators.includes(calculate.slice(-1)) ||
            value === "0" && operators.includes(calculate.slice(-1)) ||
            calculate.length >= 40 
        ) {
            return;
        };
        
        setCalculate(calculate + e.target.innerText)
    };

    const equal = () => {
        setCalculate("");
        setResult(eval(calculate));
    };

    return (
        <>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>7</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>8</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>9</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>4</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>5</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>6</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>1</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>2</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>3</button>
            <button onClick={addCaracter} style={{color: color.number}} className={numberCSS}>0</button>
            <button style={{color: color.number}} className={numberCSS} onClick={addCaracter}>.</button>
            <button style={{color: color.number}} className={numberCSS} onClick={equal}>=</button>
        </>
    )
};

export default Numbers;