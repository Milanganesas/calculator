import Nav from "../Components/Nav"
import Calculator from "../Components/Calculator";
import Footer from "../Components/Footer"

const Home = () => {

    return (
        <div className="grid justify-center min-h-screen bg-slate-200">
            <Nav />
            <Calculator />
            <Footer />
        </div>
    )
};

export default Home;