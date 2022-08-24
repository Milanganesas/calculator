import { createContext, useContext, useState } from "react";

const calculateContext = createContext();
const resultContext = createContext();

export function useCalculate () {
    return useContext(calculateContext);
};

export function useResult () {
    return useContext(resultContext);
};

export function OperationsProvider ({children}) {

    const [calculate, setCalculate ] = useState("");

    const [result, setResult ] = useState("");

    return (
        <calculateContext.Provider value={{calculate, setCalculate}}>
            <resultContext.Provider value={{result, setResult}}>
                {children}
            </resultContext.Provider>
        </calculateContext.Provider>
    )
};