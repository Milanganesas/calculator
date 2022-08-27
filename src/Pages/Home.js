import Nav from "../Components/Nav"
import Calculator from "../Components/Calculator";
import Footer from "../Components/Footer"

const Home = () => {

    return (
        <div className="grid justify-center content-center min-h-screen bg-slate-200 relative">
                <Nav />
            <div className="shadow-xl shadow-gray-400 rounded-2xl">
                <Calculator />
            </div>
                <Footer />
        </div>
    )
};

export default Home;