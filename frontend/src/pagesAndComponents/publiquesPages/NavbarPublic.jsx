import { Link } from "react-router-dom";
import logoFec from "../../assets/images/logoFec.svg";
import imgMenu from "../../assets/images/menu.svg";
import imgClose from "../../assets/images/close.svg";
import { useState } from "react";

export default function NavbarPublic(props) {
  const [isClick, setIsClick] = useState(false);

  const handleClickMenu = () => {
    isClick ? setIsClick(false) : setIsClick(true);
  };

  const handleClickLink = () => {
    isClick && setIsClick(false);
  };
  
  if(isClick) {
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'visible';
  }

  return (
    <div className={`${isClick ? 'h-screen fixed top-0 w-screen bg-white' : 'h-[66px]'} sticky top-0 z-50 w-screen transition-all duration-700 ease-in-out md:grid md:grid-cols-[max-content,1fr,max-content] md:grid-rows-1 md:items-center md:bg-[#f8f9fa] md:py-12 md:p-[5%] md:border-b-2 xl:px-[7%] xl:gap-x-10`}>
      <div onClick={handleClickLink} className="flex items-center justify-between py-5 px-[5%] border-b-2 bg-[#f8f9fa] z-50 md:bg-transparent md:col-start-1 md:col-end-2 lg:row-start-1 md;row-end-2 md:border-0 md:p-0">
        <Link to="/">
          <img
            src={logoFec}
            alt="Logo de la fédération des entreprises"
            className="w-14 sm:w-20 md:w-24 xl:w-28"
          />
        </Link>
        <div onClick={handleClickMenu} className={"md:hidden"}>
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
      <ul className={`${isClick ? 'opacity-100 py-8 px-[10%] gap-y-2' : 'opacity-0 gap-y-0 -translate-x-44 -translate-y-28'} opacity-0 flex flex-col transition-all duration-700 ease-in-out md:opacity-100 md:tracking-wider md:translate-x-0 md:translate-y-0 md:flex-row md:justify-evenly md:col-start-2 md:col-end-3 md:row-start-1 md;row-end-2 md:p-0 md:m-0 xl:justify-center xl:gap-x-[7%]`}>
        <li onClick={handleClickLink}>
          <Link
            to="/"
            className={`${
              props.currentPath === "/" ? "text-focus-color" : "text-primary-blue"} 
                font-semibold hover:text-focus-color sm:text-lg md:text-xl`}
          >
            Accueil
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/services"
            className={`${
              props.currentPath === "/services" ? "text-focus-color" : "text-primary-blue"} 
                font-semibold hover:text-focus-color sm:text-lg md:text-xl`}
          >
            Avantages
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/faq"
            className={`${
              props.currentPath === "/faq" ? "text-focus-color" : "text-primary-blue"} 
                font-semibold hover:text-focus-color sm:text-lg md:text-xl`}
          >
            Faq
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/contact"
            className={`${
              props.currentPath === "/contact" ? "text-focus-color" : "text-primary-blue"} 
                font-semibold hover:text-focus-color sm:text-lg md:text-xl`}
          >
            Contact
          </Link>
        </li>
        {/* <li onClick={handleClickLink}>
          <Link
            to="/suiviDmd"
            className={`${
              props.currentPath === "/suiviDmd" ? "text-focus-color" : "text-primary-blue"} 
                font-semibold text-nowrap hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Suivi de la demande
          </Link>
        </li> */}
        <li onClick={handleClickLink}>
          <Link
            to="/formulaireDmd"
            className={`${
              (props.currentPath === '/formulaireDmd' || props.currentPath === '/formDmd') ? "text-focus-color" : "text-primary-blue"} 
                font-semibold hover:text-focus-color sm:text-lg md:text-xl`}
          >
            Adhérer
          </Link>
        </li>
      </ul>
      <div onClick={handleClickLink} className={`${isClick ? 'opacity-100 px-[10%] ' : 'opacity-0 -translate-x-44 -translate-y-28'} opacity-0 transition-all duration-700 ease-in-out md:opacity-100 md:translate-x-0 md:translate-y-0 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:p-0 md:m-0`}>
        <Link
          to="/login"
          className="tracking-wider text-white font-bold bg-btn-color p-3 rounded-xl hover:opacity-80 sm:text-lg lg:block lg:p-4 lg:text-lg xl:px-6"
        >
          Se connecter
        </Link>
      </div>
    </div>
  );
}
