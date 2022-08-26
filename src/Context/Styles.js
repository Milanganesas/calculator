import { createContext, useContext, useState } from "react";

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
    result: "#ffffff"
};

const darkTheme = {
    main: "#0c263b",
    secondary: "#0b2742",
    operators: "#4da0d3",
    clear: "#F26430",
    number: "#ffffff",
    calculate: "#C6C6C6",
    result: "#ffffff"
};

export function StylesProvider ({children}) {

    const [color, setColor] = useState(lightTheme);

    const numberCSS = "m-5 text-2xl text-center";
    const operatorsCSS = "mx-5 mb-5 text-2xl text-center";
    const opClearCSS = "mx-5 text-2xl text-center";
    const resultCSS = "mr-2 text-2xl text-center";

    const changeColor = () => {
        color.main === lightTheme.main ? setColor(darkTheme) : setColor(lightTheme);
    }

    return (
        <styleContext.Provider value={{color, changeColor, numberCSS, operatorsCSS, opClearCSS, resultCSS}}>
            {children}
        </styleContext.Provider>
    )
};