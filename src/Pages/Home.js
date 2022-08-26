import Nav from "../Components/Nav"
import Calculator from "../Components/Calculator";
import Footer from "../Components/Footer"

const Home = () => {

    return (
        <div className="grid justify-center content-center min-h-screen bg-slate-200 relative">
            <div>
                <Nav />
            </div>
            <div>
                <Calculator />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Home;