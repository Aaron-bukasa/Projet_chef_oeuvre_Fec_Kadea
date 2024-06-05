import "./App.css";
import PubliquesPages from "./pagesAndComponents/PubliquePage";
import MemberPage from "./pagesAndComponents/MemberPage";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pagesAndComponents/Login";
import Signup from "./pagesAndComponents/Signup";
import ConfirmUser from "./pagesAndComponents/ConfirmUser";
import axios from "axios";

function App() {
  const [isUser, setIsUser] = useState(false);
  const user = localStorage.getItem('userId');

  useEffect(() => {
    if (user !== null) {
      const verifiedRole = async () => {
        const response = await axios.post(
          "https://projet-chef-oeuvre-fec-kadea.onrender.com/users/member/role",
          { requestId: user }
        );

        if (response.status === 200) {
          setIsUser(true);
        }
      };

      verifiedRole();
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={isUser ? <MemberPage setIsUser={setIsUser} /> : <PubliquesPages />}
        />
        <Route path="/login" element={<Login setIsUser={setIsUser} />} />
        <Route path="/signup/:requestId" element={<Signup />} />
        <Route path="/confirmUser/:requestId" element={<ConfirmUser setIsUser={setIsUser} />} />
      </Routes>
    </>
  );
}

export default App;
