import { Link } from "react-router-dom";
import imgFacebook from "../../assets/images/facebook.svg";
import imgInstagram from "../../assets/images/instagram.svg";
import imgTwitter from "../../assets/images/twitter.png";
import imgLinkedin from "../../assets/images/linkedin.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Response from "../components/Response";
import FecLocalisation from "../components/FecLocalisation";
import Copyright from "../components/Copyright";

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
    <div className="lg:py-6 bg-primary-blue border-t-2 text-white">
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                    : "text-white hover:text-focus-color lg:text-xl"
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
                  <svg
                    className="w-6 sm:w-8 fill-white stroke-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                    />
                  </svg>
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <svg
                    className="w-6 sm:w-8 fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.6361 7H17.6477"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <svg
                    className="w-6"
                   
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5 1.875H37.635L24.235 17.23L40 38.125H27.6575L17.99 25.45L6.9275 38.125H0.79L15.1225 21.7L0 1.875H12.6575L21.395 13.4575L31.5 1.875ZM29.35 34.445H32.75L10.8075 5.3625H7.1625L29.35 34.445Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link to="#" className="hover:opacity-60">
                  <svg
                    className="w-4 sm:w-6 fill-white"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                      fill-rule="evenodd"
                    />
                  </svg>
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
