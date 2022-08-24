import { createContext, useContext, useState } from "react";

const styleContext = createContext();

export function useColor () {
    return useContext(styleContext);
};

const lightTheme = {
    main: "#25b4fe",
    secondary: "#ffffff",
    operators: "#63a0be"
};

const darkTheme = {
    main: "#0c263b",
    secondary: "#0b2742",
    operators: "#4da0d3"
};

export function StylesProvider ({children}) {

    const [color, setColor] = useState("");

    const numberCSS = "";
    const operatorsCSS = "";
    const opClearCSS = "";

    const changeColor = () => {
        color.main === lightTheme.main ? setColor(darkTheme) : setColor(lightTheme);
    }

    return (
        <styleContext.Provider value={{color, setColor, changeColor, numberCSS, operatorsCSS, opClearCSS}}>
            {children}
        </styleContext.Provider>
    )
};