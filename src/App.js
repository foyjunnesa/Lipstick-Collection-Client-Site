import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import BuyNow from './Pages/BuyNow/BuyNow';
// import AuthProvider from './context/AuthProvider'

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="exploremore" element={<ExploreMore />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/service/:serviceId" element={<BuyNow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

      {/* </AuthProvider> */}

    </div >
  );
}

export default App;
