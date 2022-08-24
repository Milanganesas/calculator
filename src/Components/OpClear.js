import { FiDelete } from "react-icons/fi";
import { useCalculate, useResult } from "../Context/Operations";

const OpClear = () => {

    const {calculate, setCalculate} = useCalculate();
    const {setResult} = useResult();

    const clear = () => {
        setCalculate("");
        setResult("");
    };

    const caracterDelete = () => {
        setCalculate(calculate.slice(0, -1));
        setResult(eval(calculate.slice(0, -1)));
    };

    return (
        <div className="flex">
            <button onClick={clear}>C</button>
            <button onClick={caracterDelete}><FiDelete /></button>
        </div>
    )

};

export default OpClear;