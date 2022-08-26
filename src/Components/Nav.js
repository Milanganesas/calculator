import { useColor } from "../Context/Styles";

const Nav = () => {

    const {changeColor} = useColor()

    return (
        <header className="absolute top-0">
            <nav>
                <h2>Nav</h2>
                <button onClick={changeColor}>Color</button>
            </nav>
        </header>
    )
};

export default Nav;