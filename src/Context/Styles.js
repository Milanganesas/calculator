import { createContext, useContext, useState } from "react";
import { useCalculate } from "./Operations";

const styleContext = createContext();

export function useColor () {
    return useContext(styleContext);
};

const lightTheme = {
    main: "#ffffff",
    secondary: "#25b4fe",
    operators: "#1F7A8C",
    clear: "#F26430",
    number: "#000000",
    calculate: "#3D3D3D",
    result: "#ffffff",
    link: "#0b2742",
};

const darkTheme = {
    main: "#0c263b",
    secondary: "#0b2742",
    operators: "#4da0d3",
    clear: "#F26430",
    number: "#ffffff",
    calculate: "#C6C6C6",
    result: "#ffffff",
    link: "#25b4fe",
};

export function StylesProvider ({children}) {

    const [color, setColor] = useState(lightTheme);

    const {calculate} = useCalculate();

    const textSize = () => {
       return   calculate.length > 25 ? "text-sm" :
                calculate.length > 20 ? "text-base" :
                calculate.length > 15 ? "text-lg" :
                calculate.length > 10 ? "text-xl" : "text-2xl"
    }

    const numberCSS = "m-5 text-2xl text-center";
    const operatorsCSS = "mx-5 mb-5 text-2xl text-center";
    const opClearCSS = "mx-5 text-2xl text-center";
    const resultCSS = "mr-2 text-2xl";
    const calculateCSS = `mr-4 ${textSize()}`;

    const changeColor = () => {
        color.main === lightTheme.main ? setColor(darkTheme) : setColor(lightTheme);
    }

    return (
        <styleContext.Provider value={{color, changeColor, numberCSS, operatorsCSS, opClearCSS, resultCSS, calculateCSS}}>
            {children}
        </styleContext.Provider>
    )
};