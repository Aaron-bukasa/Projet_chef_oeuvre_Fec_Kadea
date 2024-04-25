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
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Services from "./components/Services";
import FormDmd from "./components/FormDmd";

function App() {

  const [user, setUser] = useState(window.localStorage.getItem("isLogin"));
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

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
      {user === 'undefined' || user === null ? <NavbarPublic currentPath={currentPath} /> : <NavbarUtilisateur currentPath={currentPath} />}
      <div className="max-w-screen mt-20">
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
          <Route path="/formDmd" element={<FormDmd />} />
        </Routes>
      </div>
      <Footer currentPath={currentPath} />
    </div>
  );
}

export default App;
