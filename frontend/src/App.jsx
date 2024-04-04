import NavbarPublic from "./components/NavbarPublic";
import NavbarUtilisateur from "./components/NavbarUtilisateur";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FormulaireDmd from "./components/FormulaireDmd";
import SuiviDmd from "./components/SuiviDmd";
import Footer from "./components/Footer";
import Notifications from "./components/Notifications";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [isUser, setIsUser] = useState([]);
  
  return (
    <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] overflow-x-hidden">
      {!isLogin ? <NavbarPublic /> : <NavbarUtilisateur user={isUser}/>}
      <div className="max-w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup login={setIsLogin} userInfo={setIsUser}/>} />
          <Route path="/login" element={<Login login={setIsLogin} userInfo={setIsUser}/>} />
          <Route path="/formulaireDmd" element={<FormulaireDmd />} />
          <Route path="/suiviDmd" element={<SuiviDmd />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
