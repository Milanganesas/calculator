import { useColor } from "../Context/Styles";
import { BiAdjust } from "react-icons/bi";

const Nav = () => {

    const {color, changeColor} = useColor()

    return (
        <header style={{background: color.secondary}} className="w-full absolute top-0 p-2">
            <nav className="grid grid-cols-2 justify-center content-around text-center">
                <h2 style={{color: color.number}} className="text-2xl">Calculator</h2>
                <div><button style={{color: color.number}} className="text-3xl" onClick={changeColor}>{<BiAdjust />}</button></div>
            </nav>
        </header>
    )
};

export default Nav;