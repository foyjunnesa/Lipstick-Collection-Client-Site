import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Reg from "./pages/login/Reg";
import Login from "./pages/login/Login";
import BuyNow from "./pages/BuyNow/BuyNow";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Reg />} />
                    <Route path="/product/:productId" element={<BuyNow />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
