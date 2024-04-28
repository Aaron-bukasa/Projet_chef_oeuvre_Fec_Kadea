import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationMember from "./membersPages/NavigationMember";
import FooterMember from './membersPages/FooterMember';
import Notifications from "./membersPages/Notifications"
import Profil from "./membersPages/Profil";

export default function Contenu() {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] relative roboto-regular w-screen">
            <NavigationMember currentPath={currentPath} />
            <div className="w-screen">
                <Routes>
                    <Route path="/" element={<Contenu />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/profil" element={<Profil />} />
                </Routes>
            </div>
            <FooterMember currentPath={currentPath} />
        </div>
    )
}