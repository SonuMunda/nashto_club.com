import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import "./style/App.css";
import openWidget from "./assets/api/openWidget";
import Header from "./components/Header";
import Home from "./pages/Home";
import Timings from "./pages/Timings";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Reservation from "./pages/Reservations";

function App() {
  return (
    <>
      <Header openWidget = {openWidget}/>
      <Routes>
        <Route path="/" element={<Home openWidget = {openWidget}/>} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<Story />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Reservation/>
      <Footer />
    </>
  );
}

export default App;
