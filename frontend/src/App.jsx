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

function App() {

  const [token, setToken] = useState(window.localStorage.getItem("token") || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 
  
  return (
    <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] overflow-x-hidden">
      {!token ? <NavbarPublic /> : <NavbarUtilisateur />}
      <div className="max-w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulaireDmd" element={<FormulaireDmd />} />
          <Route path="/suiviDmd" element={<SuiviDmd />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
