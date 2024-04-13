import { Link } from "react-router-dom";
import logoFec from "../assets/images/logoFec.svg";
import imgMenu from "../assets/images/menu.svg";
import imgClose from "../assets/images/close.svg";
import { useState } from "react";

export default function NavbarPublic() {
  const [isClick, setIsClick] = useState(false);

  const handleClickMenu = () => {
    isClick ? setIsClick(false) : setIsClick(true);
  };

  const handleClickLink = () => {
    isClick && setIsClick(false);
  };

  return (
      <div className={`${isClick ? 'h-screen grid grid-cols-2 grid-rows-[max-content,max-content,max-content]' : 'h-auto'} text-xl flex justify-between items-center p-6 mb-2 shadow-lg shadow-opacity-75 shadow-color-gray-300 lg:text-lg lg:items-center lg:justify-between xl:text-xl 2xl:px-44`}>
        <div onClick={handleClickLink} className={`${isClick && 'col-start-1 col-end-2 row-start-1 row-end-2'}`}>
          <Link to="/">
            <img
              src={logoFec}
              alt="Logo de la fédération des entreprises"
              className="w-24"
            />
          </Link>
        </div>
        <ul
        className={`${!isClick ? 'hidden' : 'col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col gap-y-6 ml-24 py-[12%]'} tracking-wider justify-between lg:flex lg:gap-x-6 2xl:w-[60%] max-w-[900px] lg:gap-x-4 xl:gap-x-6 2xl:gap-x-4`}
        >
          <li onClick={handleClickLink}>
            <Link
              to="/"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              Accueil
            </Link>
          </li>
          <li onClick={handleClickLink}>
            <a
              href="/#avantages"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              Avantages
            </a>
          </li>
          <li onClick={handleClickLink}>
            <Link
              to="formulaireDmd"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              Adhésion
            </Link>
          </li>
          <li onClick={handleClickLink}>
            <Link
              to="/faq"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              Faq
            </Link>
          </li>
          <li onClick={handleClickLink}>
            <a
              href="/#contact"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              Contact
            </a>
          </li>
          <li onClick={handleClickLink}>
            <Link
              to="login"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              Se connecter
            </Link>
          </li>
          <li onClick={handleClickLink}>
            <Link
              to="signup"
              className="font-semibold text-black hover:text-[#4885ff]"
            >
              S'inscrire
            </Link>
          </li>
        </ul>
        <div onClick={handleClickLink} className={`${isClick ? 'block ml-20' : "hidden"} lg:block`}>
          <Link
            to="formulaireDmd"
            className="text-white font-bold bg-red-600 p-3 rounded-xl hover:opacity-80 lg:block"
          >
            Adhérer maintenant
          </Link>
        </div>
        <div
          onClick={handleClickMenu}
          className={`${isClick && 'col-start-2 col-end-3 row-start-1 row-end-2 flex justify-end'} lg:hidden`}
        >
          <img
            src={imgMenu}
            alt="menu navigation open"
            className={`${isClick && "hidden"} w-8`}
          />
          <img
            src={imgClose}
            alt="menu navigation close"
            className={`${!isClick && "hidden"} w-8`}
          />
        </div>
      </div>
  );
}
