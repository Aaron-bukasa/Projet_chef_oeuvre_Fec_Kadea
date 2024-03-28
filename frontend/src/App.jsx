import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FormulaireDmd from "./components/FormulaireDmd";
import SuiviDmd from "./components/SuiviDmd";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] overflow-x-hidden">
      <Navbar />
      <div className="max-w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulaireDmd" element={<FormulaireDmd />} />
          <Route path="/suiviDmd" element={<SuiviDmd />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
