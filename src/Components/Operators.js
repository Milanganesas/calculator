import { useCalculate, useResult } from "../Context/Operations";
import { useColor } from "../Context/Styles";

const Operators = () => {

    const {calculate, setCalculate} = useCalculate();
    const {setResult} = useResult();
    const {color, operatorsCSS} = useColor();

    const operators = ["+", "-", "*", "/", "."];

    const addOperators = (e) => {
        const value = e.target.innerText;

        if (
            operators.includes(value) && calculate === "" || 
            operators.includes(value) && operators.includes(calculate.slice(-1)) ||
            calculate.slice(-1) === "(" ||
            calculate.length >= 40 
        ) {
            return;
        };
        
        setCalculate(calculate + value);
        setResult(eval(calculate));
    };

    const addParentheses = (e) => {
        const value = e.target.innerText;

        if (
            value === ")" && calculate === "" ||
            value === ")" && calculate.slice(-1) === "(" ||
            value === ")" && operators.includes(calculate.slice(-1))
        ) {
            return;
        };
        
        setCalculate(calculate + value);
        setResult(eval(calculate));
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