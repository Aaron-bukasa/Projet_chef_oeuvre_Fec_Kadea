import { Link } from "react-router-dom";
import logoFec from "../assets/images/logoFec.svg";
import imgMenu from "../assets/images/menu.svg";
import imgClose from "../assets/images/close.svg";
import { useState } from "react";

export default function NavbarPublic(props) {
  const [isClick, setIsClick] = useState(false);

  const handleClickMenu = () => {
    isClick ? setIsClick(false) : setIsClick(true);
  };

  const handleClickLink = () => {
    isClick && setIsClick(false);
  };

  return (
    <div className="text-xl fixed top-0 z-[999] w-full bg-[#f8f9fa] md:w-full md:h-20 md:flex lg:h-24 lg:text-lg lg:items-center lg:justify-between xl:text-xl 2xl:px-44 border-b-2">
      <div
        onClick={handleClickLink}
        className={"w-full flex items-center justify-between p-6 md:w-[25%]"}
      >
        <Link to="/">
          <img
            src={logoFec}
            alt="Logo de la fédération des entreprises"
            className="w-24"
          />
        </Link>
        <div onClick={handleClickMenu} className={"md:hidden"}>
          <img
            src={imgMenu}
            alt="menu navigation open"
            className={`${isClick && "hidden"} w-6`}
          />
          <img
            src={imgClose}
            alt="menu navigation close"
            className={`${!isClick && "hidden"} w-6`}
          />
        </div>
      </div>
      <div
        className={`${
          !isClick
            ? "h-0 opacity-0 flex flex-col gap-y-0 py-0"
            : "h-screen opacity-100 bg-white flex flex-col justify-start gap-y-6 px-6 py-[12%]"
        } tracking-wider md:opacity-100 md:h-auto md:w-[75%] md:flex-row md:justify-between md:items-center md:text-lg md:pr-6 md:gap-x-4 lg:w-full lg:flex lg:gap-x-6 2xl:gap-x-4 transition-all duration-700 ease-in-out`}
      >
        <ul className="md:flex md:gap-x-4 md:justify-between md:w-[70%] max-w-[900px]">
        <li onClick={handleClickLink}>
          <Link
            to="/"
            className={props.currentPath === '/' ? 'text-focus-color font-semibold hover:text-focus-color lg:text-xl' : 'font-semibold text-primary-blue hover:text-focus-color lg:text-xl'}
          >
            Accueil
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/services"
            className={props.currentPath === '/services' ? 'text-focus-color font-semibold hover:text-focus-color lg:text-xl' : 'font-semibold text-primary-blue hover:text-focus-color lg:text-xl'}
          >
            Avantages
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/faq"
            className={props.currentPath === '/faq' ? 'text-focus-color font-semibold hover:text-focus-color lg:text-xl' : 'font-semibold text-primary-blue hover:text-focus-color lg:text-xl'}
          >
            Faq
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <a
            href="/contact"
            className={props.currentPath === '/contact' ? 'text-focus-color font-semibold hover:text-focus-color lg:text-xl' : 'font-semibold text-primary-blue hover:text-focus-color lg:text-xl'}
          >
            Contact
          </a>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="formulaireDmd"
            className={(props.currentPath === '/formulaireDmd' || props.currentPath === '/formDmd') ? 'text-focus-color font-semibold hover:text-focus-color lg:text-xl' : 'font-semibold text-primary-blue hover:text-focus-color lg:text-xl'}
          >
            Adhérer
          </Link>
        </li>
        </ul>
        <div onClick={handleClickLink} className="mt-6 md:mt-0 max-w">
          <a
            href="login"
            className="text-white font-bold bg-btn-color p-3 rounded-xl hover:opacity-80 lg:block lg:p-4"
          >
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
}
