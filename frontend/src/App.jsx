import NavbarPublic from "./components/NavbarPublic";
import NavbarUtilisateur from "./components/NavbarUtilisateur";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FormulaireDmd from "./components/FormulaireDmd";
import SuiviDmd from "./components/SuiviDmd";
import Footer from "./components/Footer";
import Notifications from "./components/Notifications";
import Profil from "./components/Profil";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Services from "./components/Services";

function App() {

  const [user, setUser] = useState(window.localStorage.getItem("isLogin"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem('isLogin'));
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 
  
  return (
    <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] overflow-x-hidden relative roboto-regular">
      {user === 'undefined' || user === null ? <NavbarPublic /> : <NavbarUtilisateur />}
      <div className="max-w-screen mt-[101px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulaireDmd" element={<FormulaireDmd />} />
          <Route path="/suiviDmd" element={<SuiviDmd />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
