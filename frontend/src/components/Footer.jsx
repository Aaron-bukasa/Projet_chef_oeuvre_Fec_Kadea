import { Link } from "react-router-dom";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";
import imgBackTop from "../assets/images/expand_less.svg";

export default function Footer() {
  return (
    <div
      className="grid grid-cols-5 grid-rows-[repeat(6,max-content)] gap-6 p-6 text-lg border-t-4 sm:grid-cols-4 sm:grid-rows-[repeat(4,max-content)] lg:align-content lg:grid-cols-3 lg:grid-rows-[repeat(3,max-content)] 2xl:grid-cols-5 2xl:grid-rows-[repeat(2,max-content)] 2xl:px-44"
    >
      <div
        className="col-start-1 col-end-6 row-start-1 row-end-2 sm:col-end-3 lg:col-end-2"
      >
        <img src={imgLogo} alt="Logo de la fédération" className="w-42" />
      </div>
      <div
        className="col-start-1 col-end-6 row-start-2 row-end-3 sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-2 lg:col-start-2 lg:col-end-3"
      >
        <h2 className="font-bold text-xl mb-4 lg:text-2xl">
          Fédération des entreprises du Congo
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
      <ul
        className="col-start-1 col-end-6 row-start-3 row-end-4 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
      >
        <h2 className="font-bold text-2xl mb-3">Menu</h2>
        <li>
          <Link to="/" className="text-black hover:text-[#4885ff]">
            Accueil
          </Link>
        </li>
        <li>
          <a href="/#avantages" className="text-black hover:text-[#4885ff]">
            Avantages
          </a>
        </li>
        <li>
          <Link to="formulaireDmd" className="text-black hover:text-[#4885ff]">
            Adhésion
          </Link>
        </li>
        <li>
          <Link to="/faq" className="text-black hover:text-[#4885ff]">
            Faq
          </Link>
        </li>
        <li>
          <a href="/#contact" className="text-black hover:text-[#4885ff]">
            Contact
          </a>
        </li>
        <li>
          <Link to="login" className="text-black hover:text-[#4885ff]">
            Se connecter
          </Link>
        </li>
        <li>
          <Link to="signup" className="text-black hover:text-[#4885ff]">
            S'inscrire
          </Link>
        </li>
      </ul>
      <div
        className="col-start-1 col-end-6 row-start-4 row-end-5 sm:col-start-3 sm:col-end-5 sm:row-start-2 sm:row-end-3 lg:col-start-1 lg:col-end-3 2xl:col-start-4 2xl:col-end-5 2xl:row-start-1 2xl:row-end-2"
      >
        <div className="newsletter">
          <h2 className="font-bold text-2xl mb-4 xl:mb-7">
            Inscrivez-vous à notre newsletter
          </h2>
          <form className="flex flex-col gap-y-3">
            <input
              type="text"
              id="names"
              placeholder="Prénom et nom"
              className="w-[70%] h-10 px-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300"
            />
            <input
              type="text"
              id="entreprise"
              placeholder="Entreprise"
              className="w-[70%] h-10 px-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-[70%] h-10 px-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300"
            />
            <button
              type="submit"
              className="shrink-0 w-max p-3 bg-gray-700 text-white font-semibold rounded-md hover:opacity-80"
            >
              S'inscrire à notre newsletter
            </button>
          </form>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl mt-6">Suivez-nous</h2>
          <div className="flex items-center gap-x-4 my-6">
            <Link to="#" className="hover:opacity-80">
              <img src={imgFacebook} alt="facebook" className="w-8" />
            </Link>
            <Link to="#" className="hover:opacity-80">
              <img src={imgInstagram} alt="instagramme" className="w-8" />
            </Link>
            <Link to="#" className="hover:opacity-80">
              <img src={imgTwitter} alt="twitter" className="w-8" />
            </Link>
            <Link to="#" className="hover:opacity-80">
              <img src={imgLinkedin} alt="twitter" className="w-8" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="col-start-1 col-end-6 row-start-5 row-end-5 sm:row-start-3 sm:row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 2xl:col-start-5 2xl:col-end-6 2xl:row-start-1 2xl:row-end-2"
      >
        <h2 className="font-bold text-2xl mb-5">Actions</h2>
        <div className="flex flex-col gap-y-4">
          <Link
            to="formulaireDmd"
            className="text-xl font-semibold text-white font-bold bg-red-600 p-4 rounded-xl hover:opacity-80 w-max"
          >
            Adhérer maintenant
          </Link>
          <Link
            to="suiviDmd"
            className="text-primary-blue font-bold text-primary-blue border-2 border-primary-blue p-4 bg-white rounded-xl hover:bg-gray-100 text-xl w-max"
          >
            Suivi de la demande
          </Link>
          <a href="#root" className="w-14 h-14 rounded-full flex items-center justify-center p-1 border-4 border-black">
            <img src={imgBackTop} alt="bouton de retour" className="w-full" />
          </a>
        </div>
      </div>
      <div
        className="col-start-1 col-end-6 row-start-6 row-end-7 sm:row-start-4 sm:row-end-5 sm:col-end-5 lg:col-end-4 lg:row-start-3 lg:row-end-4 2xl:col-end-6 2xl:row-start-2 2xl:row-end-3"
      >
        <div className="border-t-2 pt-5">
          &copy; 2024 - Fédération des Entreprises du Congo. Tous droits
          réservés
        </div>
      </div>
    </div>
  );
}
