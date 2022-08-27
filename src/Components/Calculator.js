import { useCalculate, useResult } from "../Context/Operations";

import Operators from "./Operators";
import OpClear from "./OpClear"
import Numbers from "./Numbers";
import { useColor } from "../Context/Styles";

const Calculator = () => {

    const {calculate} = useCalculate();
    const {result} = useResult();
    const {color, resultCSS, calculateCSS} = useColor();

    return (
        <div className="rounded-2xl grid border border-sky-400" style={{background: color.main, height: "70vh", width: "37vh"}}>  
            <div style={{background: color.secondary, height: "20vh"}} className="grid border-b border-b-sky-400 rounded-t-2xl content-center text-right overflow-hidden">
                {calculate ? 
                    <p style={{color: color.calculate}} className={calculateCSS}>{calculate}</p> : 
                    <p style={{color: color.calculate}} className={calculateCSS}>0</p>}
                {result ? 
                    <p style={{color: color.result}} className={resultCSS}>{result}</p> : 
                    <p style={{color: color.result}} className={resultCSS}>({calculate || 0})</p>}
            </div>
            <div className="grid grid-cols-2">
                <div className="grid justify-center">
                    <div className="flex text-2xl justify-around content-center">
                        <OpClear />
                    </div>
                    <div className="grid grid-cols-3 text-2xl">
                        <Numbers />
                    </div>
                </div>
                <div className="grid text-2xl justify-center content-around">
                    <Operators />
                </div>
            </div>
        </div>
    )
};

export default Calculator;