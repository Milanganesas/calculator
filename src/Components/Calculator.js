import { useCalculate, useResult } from "../Context/Operations";

import Operators from "./Operators";
import OpClear from "./OpClear"
import Numbers from "./Numbers";
import { useColor } from "../Context/Styles";

const Calculator = () => {

    const {calculate} = useCalculate();
    const {result} = useResult();
    const {color, resultCSS} = useColor();

    return (
        <div className="h-96 w-52 rounded-lg" style={{background: color.main, height: "70vh", width: "35vh"}}>  
            <div style={{background: color.secondary, height: "20vh"}} className="grid justify-end border-b border-b-sky-500 rounded-t-lg content-center">
                {calculate ? 
                    <div style={{color: color.calculate}} className={resultCSS}>{calculate}</div> : 
                    <div style={{color: color.calculate}} className={resultCSS}>0</div>}
                {result ? 
                    <div style={{color: color.result}} className={resultCSS}>{result}</div> : 
                    <div style={{color: color.result}} className={resultCSS}>({calculate || 0})</div>}
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <OpClear />
                    <Numbers />
                </div>
                <Operators />
            </div>
        </div>
    )
};

export default Calculator;