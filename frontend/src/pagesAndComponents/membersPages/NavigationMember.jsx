import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoFec from "../../assets/images/logoFec.svg";
import imgMenu from "../../assets/images/menu.svg";
import imgClose from "../../assets/images/close.svg";
import { useNavigate } from 'react-router-dom';

export default function NavigationMember(props) {
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

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/member/logout');
      console.log(response);
      if (response.status === 200) {
        localStorage.removeItem("isLogin");
        props.setIsLogin(false)
        navigate('/');
      } else {
        console.error("Erreur de la déconnection");
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }

  return (
    <div
      className={`${
        isClick ? "h-screen fixed top-0 w-screen bg-white" : "h-[66px]"
      } sticky top-0 z-50 w-screen transition-all duration-700 ease-in-out lg:h-max lg:grid lg:grid-cols-[max-content,1fr,max-content] lg:grid-rows-1 lg:items-center lg:bg-[#f8f9fa] lg:py-12 lg:p-[5%] lg:border-b-2 xl:px-[7%] xl:gap-x-10`}
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
        } opacity-0 flex flex-col transition-all duration-700 ease-in-out lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:flex-row lg:justify-evenly lg:col-start-2 lg:col-end-3 lg:row-start-1 lg;row-end-2 lg:p-0 lg:m-0 xl:justify-center xl:gap-x-[7%]`}
      >
        <li onClick={handleClickLink}>
          <Link
            to="/"
            className={`${
              props.currentPath === "/"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Accueil
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/tutoriels"
            className={`${
              props.currentPath === "/tutoriels"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Tutoriels
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/blog"
            className={`${
              props.currentPath === "/blog"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Blog
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/evenement"
            className={`${
              props.currentPath === "/evenement"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Evénements
          </Link>
        </li>
        <li onClick={handleClickLink}>
          <Link
            to="/communaute"
            className={`${
              props.currentPath === "/communaute"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold text-nowrap hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            Communauté
          </Link>
        </li>
      </ul>
      <ul
        onClick={handleClickLink}
        className={`${
          isClick
            ? "opacity-100 px-[10%] "
            : "opacity-0 -translate-x-44 -translate-y-28"
        } opacity-0 transition-all duration-700 ease-in-out lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg;row-end-2 lg:p-0 lg:m-0 before:content-[''] before:h-1 before:bg-red-600 before:block before:mb-3 lg:flex lg:gap-x-6 lg:before:hidden xl:gap-x-6 2xl:gap-x-12`}
      >
        <li>
          <Link
            to="/notifications"
            className={`${
              props.currentPath === "/notifications"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden lg:block xl:h-8 xl:w-8 fill-primary-blue hover:fill-focus-color' height="28" viewBox="0 -960 960 960" width="28">
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
            <span className="lg:hidden">Notifications</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profil"
            className={`${
              props.currentPath === "/profil"
                ? "text-focus-color"
                : "text-primary-blue"
            } 
                font-semibold hover:text-focus-color sm:text-lg lg:text-xl flex gap-x-1`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden lg:block xl:h-8 xl:w-8 fill-primary-blue hover:fill-focus-color' height="28" viewBox="0 -960 960 960" width="28">
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <span className="">name</span>
          </Link>
        </li>
        <li onClick={handleLogout} className='hover:cursor-pointer'>
          <div className="text-primary-blue font-semibold hover:text-focus-color sm:text-lg lg:text-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className='hidden lg:block xl:h-8 xl:w-8 fill-primary-blue hover:fill-focus-color' height="28" viewBox="0 -960 960 960" width="28">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
          </svg>
          <span className="lg:hidden">Se deconnecter</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
