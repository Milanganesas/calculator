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
        <div className="h-96 w-52 rounded-2xl grid" style={{background: color.main, height: "70vh", width: "37vh"}}>  
            <div style={{background: color.secondary, height: "20vh"}} className="grid justify-end border-b border-b-sky-500 rounded-t-2xl content-center overflow-clip">
                {calculate ? 
                    <div style={{color: color.calculate}} className={resultCSS}>{calculate}</div> : 
                    <div style={{color: color.calculate}} className={resultCSS}>0</div>}
                {result ? 
                    <div style={{color: color.result}} className={resultCSS}>{result}</div> : 
                    <div style={{color: color.result}} className={resultCSS}>({calculate || 0})</div>}
            </div>
            <div className="grid grid-cols-2">
                <div className="grid justify-center">
                    <div className="flex text-xl justify-around content-center">
                        <OpClear />
                    </div>
                    <div className="grid grid-cols-3 text-xl">
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