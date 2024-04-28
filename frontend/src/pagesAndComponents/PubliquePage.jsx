import NavbarPublic from "./publiquesPages/NavbarPublic";
import Home from "./publiquesPages/Home";
import Signup from "./publiquesPages/Signup";
import Login from "./publiquesPages/Login";
import FormulaireDmd from "./publiquesPages/FormulaireDmd";
import SuiviDmd from "./publiquesPages/SuiviDmd";
import Footer from "./publiquesPages/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "./publiquesPages/Contact";
import Faq from "./publiquesPages/Faq";
import Services from "./publiquesPages/Services";
import FormDmd from "./publiquesPages/FormDmd";

export default function PubliquesPages() {

    const [user, setUser] = useState(window.localStorage.getItem("isLogin"));
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const handleStorageChange = () => {
        setUser(localStorage.getItem('isLogin'));
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
        window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className="min-h-screen grid grid-rows-[max-content,auto,max-content] relative roboto-regular w-screen">
            <NavbarPublic currentPath={currentPath} />
            <div className="w-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/formulaireDmd" element={<FormulaireDmd />} />
                    <Route path="/suiviDmd" element={<SuiviDmd />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/formDmd" element={<FormDmd />} />
                </Routes>
            </div>
            <Footer currentPath={currentPath} />
        </div>
    )
}