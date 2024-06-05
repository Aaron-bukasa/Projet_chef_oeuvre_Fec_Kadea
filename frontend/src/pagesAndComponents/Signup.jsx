import axios from "axios";
import { useForm } from "react-hook-form";
import Response from "./components/Response";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoFec from "../assets/images/logoFec.svg";
import bg_002 from "../assets/images/bg_002.jpg"
import { Link } from "react-router-dom";

export default function Signup({ usernameEmail }) {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisplayPassword, setIsDisplayPassword] = useState(false);

  const navigate = useNavigate();
  const user = localStorage.getItem('userDmd').split(',')
  const url = window.location.href;
  const requestId = url.match(/(?<=.+\/signup\/).+/)[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://projet-chef-oeuvre-fec-kadea.onrender.com/users/member/signup",
        {
          password: data.password,
          requestId: requestId,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 201) {
        setIsResponse(false);
        setIsError(false);
        const requestIdUser = response.data.id;
        localStorage.removeItem('userDmd');
        return navigate(`/confirmUser/${requestIdUser}`);

      } else {
        setIsError(true);
        return setIsData("Inscription échouée");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData("Erreur lors de l'envoi des données au serveur");
    }
  };

  const handleChange = () => {
    isDisplayPassword ? setIsDisplayPassword(false) : setIsDisplayPassword(true)
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-999]">
        <img src={bg_002} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-8 p-6 min-h-screen roboto-regular sm:p-6 sm:gap-y-12 md:w-11/12 md:mx-auto lg:mx-auto lg:w-9/12 2xl:w-7/12 2xl:max-w-4xl">
        <div>
          <Link to="/">
            <img src={logoFec} alt="logo de la fec" className="w-36 sm:w-48" />
          </Link>
        </div>
        <div className="linear-bg rounded-lg px-4 py-6 sm:p-6 lg:py-8">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <h1 className="text-lg text-center font-semibold my-2 sm:text-2xl sm:my-6 lg:my-6 lg:text-3xl xl:text-4xl">
              Votre inscription est confirmée !
              </h1>
              <p className="sm:text-lg mb-2">
              Créez votre mot de passe de connexion pour finaliser votre inscription. Votre mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule, un chiffre et un symbole spécial.
              </p>
              <div>
                <div className="flex flex-col gap-y-2 mb-2 sm:my-3">
                  <input
                    type="text"
                    name="nom"
                    readOnly="readonly"
                    value={user[0]}
                    className={`border-2 rounded-lg capitalize bg-slate-200 text-gray-500 text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1}`}
                  />
                </div>
                <div className="flex flex-col gap-y-2 mb-2 sm:my-3">
                  <input
                    type="text"
                    name="email"
                    value={user[1]}
                    readOnly="readonly"
                    className={`border-2 rounded-lg text-black p-1 bg-slate-200 text-gray-500 sm:p-3 text-sm sm:text-base outline-none xl:my-1}`}
                  />
                </div>
                <div className="flex flex-col gap-y-1 mb-2 sm:my-3">
                  <input
                    {...register("password", {
                      required: "Mot de passe requis",
                    })}
                    type={isDisplayPassword ? "text" : "password"}
                    name="password"
                    placeholder="Mot de passe"
                    className={`border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="flex items-center gap-x-3 my-4 sm:my-6">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    id="displayPassword"
                    className="border-2 w-5 h-5"
                  />
                  <label
                    htmlFor="displayPassword"
                    className="text-primary-blue"
                  >
                    Afficher le mot de passe
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="S'inscrire"
                className="text-white tracking-wider font-bold bg-btn-color p-3 sm:px-6 md:p-4 rounded-lg hover:opacity-80 cursor-pointer sm:p-3 xl:text-xl"
              />
            </form>
            <Response
              isLoading={isLoading}
              setIsResponse={setIsResponse}
              isResponse={isResponse}
              isError={isError}
              isData={isData}
            />
          </div>
      </div>
    </div>
  );
}
