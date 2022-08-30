import Nav from "../Components/Nav"
import Calculator from "../Components/Calculator";
import Footer from "../Components/Footer"
import { useColor } from "../Context/Styles";

const Home = () => {

    const {color} = useColor();

    return (
        <div style={{background: color.background}} className="grid justify-center content-center min-h-screen relative">
                <Nav />
            <div className={`shadow-xl ${color.shadow} rounded-2xl`}>
                <Calculator />
            </div>
                <Footer />
        </div>
    )
};

export default Home;