import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationMember from "./membersPages/NavigationMember";
import FooterMember from "./membersPages/FooterMember";
import Notifications from "./membersPages/Notifications";
import Profil from "./membersPages/ProfilUser";
import AccueilMembre from "./membersPages/AccueilMembre";
import ActuAnnonces from "./membersPages/ActuAnnonces";
import Opportunites from "./membersPages/Opportunites";
import Ressources from "./membersPages/Ressources";
import Support from "./membersPages/Support";
import Commentaire from "./membersPages/Commentaire";
import MessageMembre from "./components/MessageMembre";
import SuiviDmd from "./membersPages/SuiviDmd";

export default function MemberPage({ setIsLogin }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const [isRole, setIsRole] = useState(false);

  // const [isLogin, setIsLogin] = useState(
  //   window.localStorage.getItem("isLogin") || false
  // );

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setIsLogin(localStorage.getItem("isLogin"));
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);
 

  return (
    <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] relative roboto-regular w-screen">
      <NavigationMember currentPath={currentPath} setIsLogin={setIsLogin} />
      <div className="w-screen">
        <Routes>
          <Route path="/" element={isRole ? <AccueilMembre /> : <MessageMembre />} />
          <Route path="/actuAnnonces" element={isRole ? <ActuAnnonces /> : <MessageMembre />} />
          <Route path="/opportunites" element={isRole ? <Opportunites /> : <MessageMembre />} />
          <Route path="/ressources" element={isRole ? <Ressources /> : <MessageMembre />} />
          <Route path="/support" element={isRole ? <Support /> : <MessageMembre />} />
          <Route path="/commentaire" element={isRole ? <Commentaire /> : <MessageMembre />} />
          <Route path="/notifications" element={isRole ? <Notifications /> : <MessageMembre />} />
          <Route path="/profil" element={isRole ? <Profil /> : <MessageMembre />} />
          <Route path="/suiviDmd" element={<SuiviDmd />} />
        </Routes>
      </div>
      <FooterMember currentPath={currentPath} />
    </div>
  );
}
