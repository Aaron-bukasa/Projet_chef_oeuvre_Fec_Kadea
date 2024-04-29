import "./App.css";
import PubliquesPages from "./pagesAndComponents/PubliquePage";
import MemberPage from "./pagesAndComponents/MemberPage";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pagesAndComponents/Login";
import Signup from "./pagesAndComponents/Signup";

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
console.log(isLogin);
  return(
    <>
      <Routes>
        <Route path="/*" element={isLogin ? <MemberPage setIsLogin={setIsLogin} /> : <PubliquesPages />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/EDNICMPSSR/signup" element={<Signup setIsLogin={setIsLogin} />} />
      </Routes>
    </>
  )
}

export default App;
