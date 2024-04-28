import "./App.css";
import PubliquesPages from "./pagesAndComponents/PubliquePage";
import MemberPage from "./pagesAndComponents/MemberPage";
import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("isLogin")
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

  return <>{!isLogin ? <PubliquesPages /> : <MemberPage />}</>;
}

export default App;
