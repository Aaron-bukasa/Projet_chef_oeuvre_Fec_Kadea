import { Link } from 'react-router-dom'
import logoFec from '../assets/images/logoFec.svg'
import imgMenu from '../assets/images/menu.svg'
import imgClose from '../assets/images/close.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function NavbarUtilisateur() {

    const [isClick, setIsClick] = useState(false);
    const [ancienNotifications, setAncienNotifications] = useState([]);
    const [nouveauNotifications, setNouveauNotifications] = useState([]);
    const [nombreNouvNotif, setNombreNouvNotif] = useState();

    const [user, setUser] = useState(window.localStorage.getItem("isLogin"));

    useEffect(() => {
      const handleStorageChange = () => {
        setUser(localStorage.getItem('isLogin'));
      };
    
      window.addEventListener('storage', handleStorageChange);
    
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`http://localhost:3000/suivi_user/${user.split(',')[0]}`, {
                email: user.split(',')[2]
            });

            if(response.status === 200) {
                setNouveauNotifications(response.data);
            }
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        if (ancienNotifications.length < nouveauNotifications.length) {
          setNombreNouvNotif(nouveauNotifications.length - ancienNotifications.length)
        }
    
        setAncienNotifications(nouveauNotifications);
      }, [nouveauNotifications]);

    const logout = async() => {
        try {
            const response = await axios.post('http://localhost:3000/users/client/logout');
            if(response.status === 200) {
                localStorage.removeItem("isLogin");
                window.location.href = "/login";
            } else {
                console.error("Erreur de la déconnection");
            }
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    }

    const sliceNotif = nouveauNotifications.slice(0, 4)
  
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
          className={`${!isClick ? 'hidden' : 'col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col gap-y-6 ml-24 py-[12%]'} tracking-wider justify-between lg:flex lg:gap-x-6 2xl:w-[60%] max-w-[786px] lg:gap-x-4 xl:gap-x-6 2xl:gap-x-4`}
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
          </ul>
          <ul className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:gap-x-6 lg:pl-5 xl:justify-between xl:pl-12 xl:ml-6 2xl:w-[20%] 2xl:pl-20 2xl:ml-12">
                <Link to='notifications' className='notifications relative text-black'>
                        <div className='relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='fill-black hover:fill-[#4885ff]' height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>
                            </svg>
                            <span className='absolute -top-2 -right-2 bg-red-500 rounded-full text-[12px] w-[18px] h-[18px] flex justify-center items-center text-white'>{nombreNouvNotif}</span>
                        </div>
                        <ul className='absolute text-gray-400 bg-primary-blue py-3 z-[999] -left-[120px] text-[12px] w-[320px]'>
                            {sliceNotif && sliceNotif.map((notification) => (
                                <li key={notification.id} className='flex flex-nowrap hover:bg-gray-400 hover:text-secondary-blue px-3 hover:cursor-pointer'>
                                    <p>{new Date(notification.date).toLocaleString('en-GB', { timeZone: 'UTC' })}</p>
                                    <p>{notification.notifications}</p>
                                </li>
                            ))}
                        </ul>
                </Link>
                <li onClick={handleClickLink}>
                    <Link to="profil" className='text-gray-400 flex items-center gax-x-6 login text-black avatar'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-black' height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                        </svg>
                        <div className='text-black font-bold'>{user.split(',')[1]}</div>
                    </Link>
                </li>
                <li onClick={logout} className='hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-black hover:fill-[#4885ff]' height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                    </svg>
                </li>
            </ul>
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