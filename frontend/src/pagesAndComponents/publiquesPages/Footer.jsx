import { Link } from "react-router-dom";
import imgFacebook from "../../assets/images/facebook.svg";
import imgInstagram from "../../assets/images/instagram.svg";
import imgTwitter from "../../assets/images/twitter.png";
import imgLinkedin from "../../assets/images/linkedin.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Response from "../components/Response";
import FecLocalisation from "../components/FecLocalisation"
import Copyright from "../components/Copyright"

export default function Footer(props) {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/newsletters/abonnement",
        {
          email: data.email,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 201) {
        setIsError(false);
        return setIsData(response.data);
      } else {
        setIsError(true);
        return setIsData("Erreur lors de la soumission de la demande");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData(
        "erreur lors de la soumission de votre demande au serveur"
      );
    }
  };

  return (
    <div className="lg:py-6 bg-zinc-100 border-t-2 text-primary-blue">
      <div className="grid gap-6 grid-cols-1 grid-rows-[repeat(4,max-content)] gap-6 py-6 px-[5%] sm:text-lg sm:grid-cols-3 sm:grid-rows-[repeat(2,max-content)] mx-auto justify-between xl:px-[7%] xl:tracking-wider">
        <FecLocalisation className="col-start-1 col-end-2 row-start-1 row-end-2" />
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 tracking-wider flex sm:justify-center">
          <ul className="flex flex-col gap-y-1">
            <h2 className="font-semibold text-lg md:text-xl mb-1 sm:mb-4 lg:text-2xl xl:mb-7">
              Menu
            </h2>
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
                  props.currentPath === "/formulaireDmd" ||
                  props.currentPath === "/formDmd"
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
              <h2 className="font-semibold text-lg md:text-xl mb-2 sm:mb-4 lg:text-2xl xl:mb-7">
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
                    className={`className="p-1 w-4/5 max-w-48 sm:p-3 rounded-l-md bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300 xl:max-w-none xl:w-full" ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="submit"
                    className="w-max p-1 sm:p-3 bg-btn-color text-white font-semibold rounded-r-md hover:opacity-80 sm:bg-gray-300 lg:bg-btn-color xl:w-[40%]"
                  >
                    <svg
                      className="hidden sm:block fill:btn-color lg:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                    </svg>
                    <span className="sm:hidden lg:block">Soumettre</span>
                  </button>
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </form>
              <Response
                isLoading={isLoading}
                setIsResponse={setIsResponse}
                isResponse={isResponse}
                isError={isError}
                isData={isData}
              />
            </div>
            <div className="">
              <h2 className="font-semibold text-lg md:text-xl mt-4 xl:mb-7">
                Suivez-nous
              </h2>
              <div className="flex items-center gap-x-4 my-2 mb:my-6">
                <Link to="#" className="hover:opacity-60">
                  <img
                    src={imgFacebook}
                    alt="facebook"
                    className="w-6 sm:w-8"
                  />
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <img
                    src={imgInstagram}
                    alt="instagramme"
                    className="w-6 sm:w-8"
                  />
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <img src={imgTwitter} alt="twitter" className="w-6 sm:w-8" />
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <img src={imgLinkedin} alt="twitter" className="w-6 sm:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Copyright className="col-start-1 col-end-2 row-start-4 row-end-5 sm:col-end-4 sm:row-start-2 sm:row-end-3" />
      </div>
    </div>
  );
}

