// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./style/App.css";
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
import Loader from "./components/Loader";

function App() {
  const [openWidget, setOpenWidget] = useState(false);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header openWidget={setOpenWidget} />
      <Routes>
        <Route path="/" element={<Home openWidget={setOpenWidget} />} />
        <Route path="/timings" element={<Timings />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<Story />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Reservation isOpen={openWidget} setOpen={setOpenWidget} />
      <Footer />
    </>
  );
}

export default App;
