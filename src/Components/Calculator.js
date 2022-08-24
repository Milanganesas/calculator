import { useCalculate, useResult } from "../Context/Operations";

import Operators from "./Operators";
import OpClear from "./OpClear"
import Numbers from "./Numbers";

const Calculator = () => {

    const {calculate} = useCalculate();
    const {result} = useResult();

    return (
        <>  
            <div>
                {calculate ? <div>{calculate}</div> : <div>0</div>}
                {result ? <div>{result}</div> : <div>({calculate || 0})</div>}
            </div>
            <div>
                    <OpClear />
                <div className="grid grid-cols-2">
                    <Numbers />
                    <Operators />
                </div>
            </div>
        </>
    )
};

export default Calculator;