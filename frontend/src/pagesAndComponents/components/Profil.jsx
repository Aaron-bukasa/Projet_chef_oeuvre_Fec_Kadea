import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profil(props) {
    const [isProfilOpen, setIsProfilOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
      isProfilOpen ? setIsProfilOpen(false) : setIsProfilOpen(true);
    };
  
    const handleLogout = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/member/logout"
        );
        if (response.status === 200) {
          localStorage.removeItem("userId");
          props.setIsUser(false);
          return navigate("/");
        } else {
          console.error("Erreur de la déconnection");
        }
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
      }
    };
  
    return (
      <div>
        <button
          onClick={handleClick}
          type="button"
          className={props.isClick ? 'hidden' : "font-bold md:text-lg lg:text-xl"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="border-2 border-black w-10 h-10 rounded-full"
            height="28"
            viewBox="0 -960 960 960"
            width="28"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </svg>
        </button>
        <ul
          className={isProfilOpen ? "block absolute -right-24 bg-secondary-color p-6 flex flex-col gap-y-3" : props.isClick ? 'flex flex-col gap-y-3 mt-6' : 'hidden'
          }
        >
          <li className="profilHoverChidren text-nowrap">
            <Link to="GestionCompte" className="flex gap-x-2 font-semibold">
              <svg
              className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
              <span>Gérer votre compte</span>
            </Link>
          </li>
          <li className="profilHoverChidren text-nowrap">
            <Link
              to="notificationsMessages"
              className="flex items-center gap-x-2 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                height="28"
                viewBox="0 -960 960 960"
                width="28"
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
              </svg>
              <span>Notifications et Messages</span>
            </Link>
          </li>
          <li onClick={handleLogout} className="profilHoverChidren text-nowrap">
            <Link to="/logout" className="flex items-center gap-x-2 font-semibold">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 -960 960 960"
                width="28"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
              <span className="">Se deconnecter</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  