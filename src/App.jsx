import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import "./style/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Timings from "./pages/Timings";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Order from "./pages/Order";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<Story />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
