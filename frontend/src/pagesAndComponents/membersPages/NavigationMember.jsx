import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoFec from "../../assets/images/logoFec.svg";
import imgMenu from "../../assets/images/menu.svg";
import imgClose from "../../assets/images/close.svg";
import { useNavigate } from "react-router-dom";
import Profil from "../components/Profil";

export default function NavigationMember({currentPath, setIsUser}) {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const handleClickMenu = () => {
    isClick ? setIsClick(false) : setIsClick(true);
  };

  const handleClickLink = () => {
    isClick && setIsClick(false);
  };

  if (isClick) {
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflowY = "visible";
  }

  return (
    <div
    className={`${isClick ? 'h-screen fixed top-0 w-screen bg-white' : 'h-[66px]'} sticky top-0 z-50 w-screen transition-all duration-700 ease-in-out md:grid md:grid-cols-[max-content,1fr,max-content] md:grid-rows-1 md:items-center md:bg-[#f8f9fa] md:py-12 md:p-[5%] md:border-b-2 xl:px-[7%] xl:gap-x-10`}
    >
      <div
        onClick={handleClickLink}
        className="flex items-center justify-between py-5 px-[5%] border-b-2 bg-[#f8f9fa] z-50 lg:bg-transparent lg:col-start-1 lg:col-end-2 lg:row-start-1 lg;row-end-2 lg:border-0 lg:p-0"
      >
        <Link to="/">
          <img
            src={logoFec}
            alt="Logo de la fédération des entreprises"
            className="w-14 sm:w-20 xl:w-28"
          />
        </Link>
        <div onClick={handleClickMenu} className={"lg:hidden"}>
          <img
            src={imgMenu}
            alt="menu navigation open"
            className={`${isClick && "hidden"} w-6 sm:w-8`}
          />
          <img
            src={imgClose}
            alt="menu navigation close"
            className={`${!isClick && "hidden"} w-6 sm:w-8`}
          />
        </div>
      </div>
      <ul
        className={`${
          isClick
            ? "opacity-100 pt-8 pb-3 px-[10%] gap-y-2"
            : "opacity-0 gap-y-0 -translate-x-44 -translate-y-28"
        } opacity-0 flex flex-col transition-all duration-700 ease-in-out lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:flex-row lg:justify-center lg:items-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg;row-end-2 lg:gap-x-3 lg:p-0 lg:m-0 xl:justify-center xl:gap-x-[3%]`}
      >
        <li onClick={handleClickLink}>
          <Link
            to="/"
            className={`${
              currentPath === "/"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Accueil
          </Link>
        </li>
        <li onClick={handleClickLink} className="relative hoverLinkChildren">
          <div className="flex items-center xl:gap-x-1">
            <Link
              to="/actuAnnonces"
              className={`${
                currentPath === "/actuAnnonces"
                  ? "text-focus-color"
                  : "text-primary-blue"
              } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl text-nowrap`}
            >
              Actualités <span className="sm:hidden 3xl:inline">et annonces</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={isClick ? "hidden" : currentPath === "/actuAnnonces" ? "fill-focus-color w-8 h-8 transition duration-500 ease-out hover:ease-in" : "w-8 h-8 transition duration-500 ease-out hover:ease-in"}
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <ul className="absolute invisible opacity-0 ml-6 py-1 px-2 transition duration-700 ease-in bg-secondary-color">
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Dernière annonce
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Prochain événement
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Nouvelle ressource disponible
              </Link>
            </li>
          </ul>
        </li>
        <li onClick={handleClickLink} className="relative hoverLinkChildren">
          <div className="flex items-center xl:gap-x-1">
            <Link
              to="/opportunites"
              className={`${
                currentPath === "/opportunites"
                  ? "text-focus-color"
                  : "text-primary-blue"
              } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
            >
              Opportunités
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={isClick ? "hidden" : currentPath === "/opportunites" ? "fill-focus-color w-8 h-8 transition duration-500 ease-out hover:ease-in" : "w-8 h-8 transition duration-500 ease-out hover:ease-in"}
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <ul className="absolute invisible opacity-0 ml-6 py-1 px-2 transition duration-700 ease-in bg-secondary-color">
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Prochain webinaire
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Offres
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Poste de mentorat
              </Link>
            </li>
          </ul>
        </li>
        <li onClick={handleClickLink} className="relative hoverLinkChildren">
          <div className="flex items-center xl:gap-x-1">
            <Link
              to="/ressources"
              className={`${
                currentPath === "/ressources"
                  ? "text-focus-color"
                  : "text-primary-blue"
              } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
            >
              Ressources
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={isClick ? "hidden" : currentPath === "/ressources" ? "fill-focus-color w-8 h-8 transition duration-500 ease-out hover:ease-in" : "w-8 h-8 transition duration-500 ease-out hover:ease-in"}
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <ul className="absolute invisible opacity-0 ml-6 py-1 px-2 transition duration-700 ease-in bg-secondary-color">
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Modèles et guides pour les entreprises
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Webinaires et formations en ligne
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Répertoire des membres
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Offres et réductions auprès des partenaires de la fédération
              </Link>
            </li>
          </ul>
        </li>
        <li onClick={handleClickLink} className="relative hoverLinkChildren">
          <div className="flex items-center xl:gap-x-1">
            <Link
              to="/support"
              className={`${
                currentPath === "/support"
                  ? "text-focus-color"
                  : "text-primary-blue"
              } 
                font-semibold text-nowrap hover:text-focus-color sm:text-lg lg:text-xl`}
            >
              Support <span className="sm:hidden 3xl:inline">et défense des intérêts</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={isClick ? "hidden" : currentPath === "/support" ? "fill-focus-color w-8 h-8 transition duration-500 ease-out hover:ease-in" : "w-8 h-8 transition duration-500 ease-out hover:ease-in"}
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <ul className="absolute invisible opacity-0 ml-6 py-1 px-2 transition duration-700 ease-in bg-secondary-color">
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Dernières nouvelles sur les politiques affectant les entreprises
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Ressources pour la conformité réglementaire
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Activités de plaidoyer de la fédération
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/annonce"
                className="font-semibold hover:text-focus-color text-nowrap text-gray-600"
              >
                Comment s'impliquer dans les efforts de défense des intérêts de
                la fédération
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/commentaire"
            className={`${
              currentPath === "/commentaire"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold text-nowrap hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            <span className="sm:hidden 3xl:inline">Vos</span> commentaires
          </Link>
        </li>
      </ul>
      <div
        onClick={handleClickLink}
        className={`${
          isClick
            ? "opacity-100 px-[10%] "
            : "opacity-0 -translate-x-44 -translate-y-28"
        } relative opacity-0 transition-all duration-700 ease-in-out lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg;row-end-2 lg:p-0 lg:m-0 before:content-[''] before:h-1 before:bg-secondary-blue before:block before:my-3 lg:flex lg:gap-x-6 lg:before:hidden xl:gap-x-6 2xl:gap-x-12`}
      >
        <Profil setIsUser={setIsUser} isClick={isClick} />
      </div>
    </div>
  );
}


