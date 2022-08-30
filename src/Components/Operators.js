import { useCalculate, useResult } from "../Context/Operations";
import { useColor } from "../Context/Styles";

const Operators = () => {

    const {calculate, setCalculate} = useCalculate();
    const {result} = useResult();
    const {color, operatorsCSS} = useColor();

    const operators = ["+", "-", "*", "/", "."];

    const addOperators = (e) => {
        const value = e.target.innerText;

        if (
            operators.includes(value) && calculate === "" && result < 1|| 
            operators.includes(value) && operators.includes(calculate.slice(-1)) ||
            calculate.slice(-1) === "(" ||
            calculate.length >= 40 
        ) {
            return;
        };

        const addResult = result !== 0 ? result : 0

        addResult > 0 ? 
        setCalculate(addResult + e.target.innerText + calculate) :
        setCalculate(calculate + value);
    };

    const addParentheses = (e) => {
        const value = e.target.innerText;

        if (
            value === ")" && calculate === "" ||
            value === ")" && calculate.slice(-1) === "(" ||
            value === ")" && calculate.slice(-1) === ")" ||
            value === ")" && operators.includes(calculate.slice(-1))
        ) {
            return;
        };
        
        setCalculate(calculate + value);
    };

    return (
        <>
            <div className="flex justify-center justify-between content-center gap-5">
                <button style={{color: color.operators}} className={operatorsCSS} onClick={addParentheses}>(</button>
                <button style={{color: color.operators}} className={operatorsCSS} onClick={addParentheses}>)</button>
            </div>
            {operators.map ( (op, idx) => {
                if(op !== ".") {
                    return (<button key={idx} style={{color: color.operators}} className={operatorsCSS} onClick={addOperators}>{op}</button>)
                };
            }
            )}
        </>
    )
};

export default Operators;