import { useColor } from "../Context/Styles";

const Footer = () => {

    const {color} = useColor();

    return (
        <footer style={{background: color.secondary}} className="w-full absolute bottom-0 p-1 justify-center text-center">
            <nav>
                <p style={{color: color.number}} className="text-xl">
                    Calculator App <a style={{color: color.link}} className="text-1xl" href="https://www.linkedin.com/in/julian-leyes-grosso-76262418a/" rel="noreferrer">Milanga</a> @ 2022
                </p>
            </nav>
        </footer>
    )
};

export default Footer;