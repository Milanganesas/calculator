import { useCalculate, useResult } from "../Context/Operations";

const Numbers = () => {

    const {calculate, setCalculate} = useCalculate();
    const {setResult} = useResult();

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
            <button key={i} onClick={addCaracter}>{i}</button>
           );
        };

        return numbers;
    };

    return (
        <div className="grid grid-cols-3">
            { createNumbers() }
            <button onClick={addCaracter}>.</button>
            <button onClick={equal}>=</button>
        </div>
    )
};

export default Numbers;