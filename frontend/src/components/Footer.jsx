import { Link } from "react-router-dom";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";
import imgBackTop from "../assets/images/expand_less.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Footer(props) {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:3000/newsletters/abonnement",
        {
          email: data.email,
        }
      );

      setIsLoading(false)
      setIsResponse(true)

      if (response.status === 201) {
        setIsError(false)
        return setIsData(response.data)
      } else {
        setIsError(true)
        return setIsData("Erreur lors de la soumission de la demande");
      }
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
      setIsResponse(true)
      return setIsData("erreur lors de la soumission de votre demande au serveur")
    }
  };

  return (
    <div className="lg:py-6 bg-zinc-100 border-t-2 text-primary-blue">
      <div className="grid gap-6 grid-cols-1 grid-rows-[repeat(4,max-content)] gap-6 p-6 text-lg sm:grid-cols-3 sm:grid-rows-[repeat(2,max-content)] 2xl:px-44 max-w-[1586px] mx-auto justify-between">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <img
            src={imgLogo}
            alt="Logo de la fédération"
            className="w-[180px]"
          />
          <div>
            <h2 className="font-semibold text-xl my-4">
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
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 tracking-wider flex sm:justify-center">
          <ul className="flex flex-col gap-y-1">
            <h2 className="font-semibold text-2xl mb-3 w-max">Menu</h2>
            <li>
              <Link
                to="/"
                className={
                  props.currentPath === "/"
                    ? "text-focus-color hover:text-focus-color"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={
                  props.currentPath === "/services"
                    ? "text-focus-color hover:text-focus-color lg:text-xl"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Avantages
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={
                  props.currentPath === "/faq"
                    ? "text-focus-color hover:text-focus-color lg:text-xl"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Faq
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  props.currentPath === "/contact"
                    ? "text-focus-color hover:text-focus-color lg:text-xl"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="formulaireDmd"
                className={
                  props.currentPath === "/formulaireDmd"
                    ? "text-focus-color hover:text-focus-color lg:text-xl"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Adhésion
              </Link>
            </li>
            <li>
              <Link
                to="suiviDmd"
                className={
                  props.currentPath === "/suiviDmd"
                    ? "text-focus-color hover:text-focus-color lg:text-xl"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Suivi de la demande
              </Link>
            </li>
            <li>
              <Link
                to="login"
                className={
                  props.currentPath === "/login"
                    ? "text-focus-color hover:text-focus-color lg:text-xl"
                    : "text-primary-blue hover:text-focus-color lg:text-xl"
                }
              >
                Se connecter
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2">
          <div>
            <div className="newsletter relative">
              <h2 className="font-semibold text-2xl mb-4 xl:mb-7">
                Inscrivez-vous à notre newsletter
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-y-3">
                  <input
                    {...register("email", {
                      required: "Adresse email requise",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                        message: "Adresse email invalide",
                      },
                    })}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`className="w-[200px] p-3 rounded-l-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300" ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="submit"
                    className="shrink-0 w-max p-3 bg-[#003366] text-white font-semibold rounded-r-lg hover:opacity-80"
                  >
                    Soumettre
                  </button>
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </form>
              <div onClick={() => setIsResponse(false)}>
                {isLoading && (<div className="absolute bg-loading rounded-lg top-2/4 left-2/4 px-6 py-5 shadow-xl -translate-x-1/2 -translate-y-1/2 flex justify-center items-center font-semibold">
                  loading...
                </div>)}
                {isResponse && (<div className={`${isError ? 'bg-erreur' : 'bg-succefull'} absolute rounded-lg top-2/4 left-2/4 px-6 py-5 shadow-xl -translate-x-1/2 -translate-y-1/2 flex font-semibold w-max`}>
                  <p className="mt-4">{isData}</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      className="w-12"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                </div>)}
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold text-2xl mt-6 w-max after:content-[''] after:block after:bg-secondary-blue after:w-full after:mt-1">
                Suivez-nous
              </h2>
              <div className="flex items-center gap-x-4 my-6">
                <Link to="#" className="hover:opacity-60">
                  <img src={imgFacebook} alt="facebook" className="w-8" />
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <img src={imgInstagram} alt="instagramme" className="w-8" />
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <img src={imgTwitter} alt="twitter" className="w-8" />
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <img src={imgLinkedin} alt="twitter" className="w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-5 sm:col-end-4 sm:row-start-2 sm:row-end-3">
          <div className="border-t-2 pt-5">
            &copy; 2024 - Fédération des Entreprises du Congo. Tous droits
            réservés
          </div>
        </div>
      </div>
    </div>
  );
}
