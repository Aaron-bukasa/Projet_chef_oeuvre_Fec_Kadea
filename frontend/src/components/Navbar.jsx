import { Link } from 'react-router-dom'
import logoFec from '../assets/images/logoFec.svg'
import imgFaq from '../assets/images/faq.svg'
import imgMenu from '../assets/images/menu.svg'
import imgClose from '../assets/images/close.svg'
import { useState } from 'react'

export default function Navbar() {

    const [isClick, setIsClick] = useState(false);

    const handleClickMenu = () => {
        isClick ? setIsClick(false) : setIsClick(true);
    }

    const handleClickLink = () => {
        isClick && setIsClick(false)
    }

    return(
        <div className={`${isClick && 'h-screen'} grid auto-rows-max grid-rows-[75px auto 75px]  bg-secondary-blue text-lg sm:text-xl lg:block lg:bg-white`}>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3 p-6 lg:flex lg:items-center lg:justify-between lg:bg-secondary-blue'>
                <div onClick={handleClickLink} className={`${isClick && 'mb-24'} `}>
                    <Link to="/">
                        <img src={logoFec} alt="Logo de la fédération des entreprises" className='w-20' />
                    </Link>
                </div>
                <div className={`${!isClick ? 'hidden' : 'pl-[30%] flex flex-col gap-y-6'} lg:flex lg:gap-x-6`}>
                    <ul className='flex flex-col gap-y-6 lg:flex-row lg:gap-x-6'>
                        <li onClick={handleClickLink}><Link to="/" className='text-white'>Accueil</Link></li>
                        <li onClick={handleClickLink}><Link to="#avantages" className='text-white'>Avantages</Link></li>
                        <li onClick={handleClickLink}><Link to="formulaireDmd" className='text-white'>Adhésion</Link></li>
                        <li onClick={handleClickLink}><Link to="#contact" className='text-white'>Contact</Link></li>
                    </ul>
                    <ul className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:gap-x-6 lg:border-l-4 lg:border-gray-500 lg:pl-5">
                        <li onClick={handleClickLink}><Link to="login" className='text-white'>Se connecter</Link></li>
                        <li onClick={handleClickLink}><Link to="signup" className='text-white'>S'inscrire</Link></li>
                    </ul>
                </div>
            </div>
            <ul className={`${!isClick && 'hidden'} col-start-1 col-end-2 row-start-3 row-end-4 pl-[30%] flex flex-col gap-y-6 p-6 lg:flex lg:flex-row lg:bg-white lg:border-2 lg:border-primary-blue lg:justify-end lg:gap-x-6`}>
                <li onClick={handleClickLink}><Link to="formulaireDmd" className='text-white lg:text-primary-blue'>Adhérer maintenant</Link></li>
                <li onClick={handleClickLink}><Link to="suiviDmd" className='text-white lg:text-primary-blue'>Suivi de la demande</Link></li>
                <li onClick={handleClickLink}>
                    <Link to="#faq" className='flex items-center gap-x-2'>
                        <svg className='stroke-white' width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36 30H12L4 38V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H36C36.5304 4 37.0391 4.21071 37.4142 4.58579C37.7893 4.96086 38 5.46957 38 6V28C38 28.5304 37.7893 29.0391 37.4142 29.4142C37.0391 29.7893 36.5304 30 36 30ZM46 18V46L38 38H16C15.4696 38 14.9609 37.7893 14.5858 37.4142C14.2107 37.0391 14 36.5304 14 36V34H42V16H44C44.5304 16 45.0391 16.2107 45.4142 16.5858C45.7893 16.9609 46 17.4696 46 18ZM16.38 8C14.64 8 13.24 8.4 12.16 9.18C11.12 10 10.6 11.14 10.62 12.72L10.64 12.78H14.5C14.52 12.18 14.7 11.72 15.06 11.4C15.4303 11.0929 15.899 10.9296 16.38 10.94C17 10.94 17.52 11.14 17.88 11.5C18.24 11.88 18.4 12.4 18.4 13C18.4 13.64 18.26 14.18 17.94 14.64C17.66 15.1 17.24 15.5 16.72 15.82C15.7 16.5 15 17.1 14.62 17.64C14.22 18.16 14 19 14 20H18C18 19.38 18.08 18.88 18.26 18.52C18.44 18.16 18.78 17.8 19.28 17.48C20.18 17 20.92 16.42 21.5 15.62C22.08 14.82 22.38 14 22.38 13C22.38 11.48 21.84 10.26 20.76 9.36C19.7 8.46 18.24 8 16.38 8ZM14 22V26H18V22H14ZM26 26H30V22H26V26ZM26 8V20H30V8H26Z" fill="#00194B"/>
                        </svg>
                        <span className='text-white lg:text-primary-blue'>FAQ</span>
                    </Link>
                </li>
            </ul>
            <div onClick={handleClickMenu} className='col-start-2 col-end-3 row-start-1 row-end-2 flex justify-end p-6 lg:hidden'>
                <img src={imgMenu} alt='menu navigation open' className={`${isClick && 'hidden'} `}/>
                <img src={imgClose} alt='menu navigation close' className={`${!isClick && 'hidden'} `} />
            </div>
        </div>
    )
}