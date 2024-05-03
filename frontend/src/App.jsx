import "./App.css";
import PubliquesPages from "./pagesAndComponents/PubliquePage";
import MemberPage from "./pagesAndComponents/MemberPage";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pagesAndComponents/Login";
import Signup from "./pagesAndComponents/Signup";
import ConfirmUser from "./pagesAndComponents/ConfirmUser";

function App() {

  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("isLogin") || false
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogin(localStorage.getItem("isLogin"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
 
  return(
    <>
      <Routes>
        <Route path="/*" element={isLogin ? <MemberPage setIsLogin={setIsLogin} /> : <PubliquesPages />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup/:requestId" element={<Signup />} />
        <Route path="/confirmUser/:requestId" element={<ConfirmUser setIsLogin={setIsLogin} />} />
      </Routes>
    </>
  )
}

export default App;
