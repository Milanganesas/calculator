import { FiDelete } from "react-icons/fi";
import { useCalculate, useResult } from "../Context/Operations";
import { useColor } from "../Context/Styles";

const OpClear = () => {

    const {calculate, setCalculate} = useCalculate();
    const {setResult} = useResult();
    const {color} = useColor();

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
            <button style={{color: color.clear}} onClick={clear}>C</button>
            <button style={{color: color.clear}} onClick={caracterDelete}><FiDelete /></button>
        </div>
    )

};

export default OpClear;