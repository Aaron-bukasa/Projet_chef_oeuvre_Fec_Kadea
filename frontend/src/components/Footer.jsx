import { Link } from "react-router-dom";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.svg";

export default function Footer() {
  return (
    <div className="max-w-screen p-6 border-t-4 grid grid-cols-5 grid-rows-[repeat(6,max-content)] md:grid-cols-2 md:grid-rows-[max-content,max-content,max-xontent] md:text-lg xl:grid-cols-3 xl:grid-rows-[max-content,max-content] 2xl:px-24">
      <div className="col-start-1 col-end-6 row-start-1 row-end-2">
      <img
          src={imgLogo}
          alt="Logo de la fédération"
          className="w-48"
        />
      </div>
      <div className="col-start-1 col-end-6 row-start-2 row-end-3 md:col-end-2 md:mr-2">
        <h2 className="font-bold text-xl mb-4 lg:text-2xl">
          Fédération des entreprises
        </h2>
        <p>
          10 Av des aviateurs, Gombe,
          <br />
          Kinshasa, RDC
        </p>
        <p>Téléphone: +243825505783</p>
        <p>Email: contact@federation-entreprises-congo.fr</p>
        <p>
          Lundi – Vendredi: 8h00 – 16h00,
          <br />
          Samedi - Dimanche: Fermé.
        </p>
      </div>
      <ul className="col-start-1 col-end-6 row-start-3 row-end-4 flex flex-col gap-y-3 mt-6 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mt-0 xl:mr-[10%]">
                    <h2>Menu</h2>
                    <li><Link to="/" className='font-semibold text-black hover:text-[#4885ff]'>Accueil</Link></li>
                    <li><a href="/#avantages" className='font-semibold text-black hover:text-[#4885ff]'>Avantages</a></li>
                    <li><Link to="formulaireDmd" className='font-semibold text-black hover:text-[#4885ff]'>Adhésion</Link></li>
                    <li>
                    <Link to="/faq" className='font-semibold text-black hover:text-[#4885ff]'>Faq</Link>
                </li>
                    <li><a href="/#contact" className='font-semibold text-black hover:text-[#4885ff]'>Contact</a></li>
                    <li><Link to="login" className='font-semibold text-black hover:text-[#4885ff]'>Se connecter</Link></li>
                    <li><Link to="signup" className='font-semibold text-black hover:text-[#4885ff]'>S'inscrire</Link></li>
        </ul>
      <div className="col-start-1 col-end-6 row-start-4 row-end-5">
        <h2>Actions</h2>
        <div><Link to="suiviDmd" className='text-primary-blue font-bold text-primary-blue border-2 border-primary-blue p-4 bg-white rounded-xl hover:bg-gray-100 text-xl'>Suivi de la demande</Link></div>
          <div><Link to="formulaireDmd" className='text-xl font-semibold text-white font-bold bg-red-600 p-4 rounded-xl hover:opacity-80'>Adhérer maintenant</Link></div>
      </div>
      <div className="col-start-1 col-end-6 row-start-5 row-end-6 mt-12 md:col-end-1 md:row-start-2 md:row-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2 xl:mt-0 ">
        <div className="newsletter">
          <h2 className="font-bold text-xl mb-4 lg:text-2xl xl:mb-7">
            Inscrivez-vous à notre newsletter
          </h2>
          <form className="flex gap-x-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="w-full h-10 px-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300"
            />
            <button
              type="submit"
              className="shrink-0 w-24 py-2 bg-sky-blue font-semibold rounded-md hover:opacity-80"
            >
              Envoyer
            </button>
          </form>
        </div>
        <div className="flex items-center gap-x-4 my-6">
          <Link to="#" className="hover:opacity-80">
            <img src={imgFacebook} alt="facebook" className="w-6" />
          </Link>
          <Link to="#" className="hover:opacity-80">
            <img src={imgInstagram} alt="instagramme" className="w-5" />
          </Link>
          <Link to="#" className="hover:opacity-80">
            <img src={imgTwitter} alt="twitter" className="w-5" />
          </Link>
        </div>
      </div>
      <div className="col-start-1 col-end-6 row-start-6 row-end-7 border-t-2 border-gray-400 pt-5 mt-3 md:col-end-3 md:row-start-3 md:row-end-4 xl:col-end-4 xl:mt-8 xl:py-10">
        <img
          src={imgLogo}
          alt="Logo de la fédération"
          className="w-20 -ml-2 mb-2"
        />
        <div className="text-gray-300">
          &copy; 2024 - Fédération des Entreprises du Congo. Tous droits réservés
        </div>
      </div>
    </div>
  );
}
