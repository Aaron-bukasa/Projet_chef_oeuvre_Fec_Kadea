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
import axios from "axios";

export default function MemberPage({ setIsUser }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [isRole, setIsRole] = useState();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);


  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const verifiedRole = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token non trouvé dans le localStorage');
          return;
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await axios.post(
          "http://localhost:3000/users/member/role",
          {
            requestId: userId
          }
        );

        if (response.status === 200) {
          setIsRole(response.data);
        } else {
          console.error(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la connexion au serveur :", error);
      }
    };

    verifiedRole();
  }, [userId]);
 
  return (
    <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] relative roboto-regular w-screen">
      <NavigationMember currentPath={currentPath} setIsUser={setIsUser} />
      <div className="w-screen">
        <Routes>
          <Route path="/" element={isRole === 'administrateur' || isRole === 'member' ? <AccueilMembre /> : <MessageMembre />} />
          <Route path="/actuAnnonces" element={isRole === 'administrateur' || isRole === 'member' ? <ActuAnnonces /> : <MessageMembre />} />
          <Route path="/opportunites" element={isRole === 'administrateur' || isRole === 'member' ? <Opportunites /> : <MessageMembre />} />
          <Route path="/ressources" element={isRole === 'administrateur' || isRole === 'member' ? <Ressources /> : <MessageMembre />} />
          <Route path="/support" element={isRole === 'administrateur' || isRole === 'member' ? <Support /> : <MessageMembre />} />
          <Route path="/commentaire" element={isRole === 'administrateur' || isRole === 'member' ? <Commentaire /> : <MessageMembre />} />
          <Route path="/notifications" element={isRole === 'administrateur' || isRole === 'member' ? <Notifications /> : <MessageMembre />} />
          <Route path="/profil" element={isRole === 'administrateur' || isRole === 'member' ? <Profil /> : <MessageMembre />} />
          <Route path="/suiviDmd" element={<SuiviDmd />} />
        </Routes>
      </div>
      <FooterMember currentPath={currentPath} />
    </div>
  );
}
