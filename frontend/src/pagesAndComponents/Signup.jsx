import axios from "axios";
import { useForm } from "react-hook-form";
import Response from "./components/Response";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoFec from "../assets/images/logoFec.svg";

export default function Signup({ setIsLogin }) {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.email = data.email.trim();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/member/signup",
        {
          nom: `${data.prenom} ${data.nom}`,
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 201) {
        setIsResponse(false);
        setIsError(false);

        localStorage.setItem("isLogin", true);
        setIsLogin(true);
        navigate("/");
      } else {
        setIsError(true);
        return setIsData("Inscription échouée");
      }
    } catch (error) {
      setIsError(true);
      return setIsData("Erreur lors de la connexion au serveur");
    }
  };

  return (
    <div className="relative px-[10%] py-12 md:py-24 bg-slate-200 bg-bg_desktop 2xl:px-[13%] h-screen flex flex-col justify-center gap-y-3">
       <div className="w-full px-3 py-4 rounded-xl sm:mb-3 md:mb-6 max-w-[768px] mx-auto">
        <img src={logoFec} alt="logo de la fec" className="-ml-3" />
        <div className="font-bold text-lg text-secondary-blue">Fédération des entreprises du congo</div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="linear-bg border-2 text-white w-full px-3 py-4 rounded-xl sm:mb-6 md:mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-3 md:pb-12"
        >
          <h1 className="font-bold text-center text-xl text-primary-blue py-1 sm:text-2xl sm:p-3 md:text-3xl lg:mb-6 lg:text-center lg:text-4xl xl:text-4xl">
            Créer votre compte membre
          </h1>
          <div className="pb-3">
            <div className="flex flex-col gap-y-1 mb-3">
              <input
                {...register("nom", { required: true, pattern: /^[a-zA-Z]+$/ })}
                type="text"
                name="nom"
                placeholder="Nom"
                className={`border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1 ${
                  errors.nom ? "border-red-500" : ""
                }`}
              />
              {errors.nom && (
                <span className="text-red-500">
                  Ce champ est requis et doit contenir uniquement des lettres
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-1 mb-4">
              <input
                {...register("prenom", {
                  required: true,
                  pattern: /^[a-zA-Z]+$/,
                })}
                type="text"
                name="prenom"
                placeholder="Prénom"
                className={`border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1 ${
                  errors.prenom ? "border-red-500" : ""
                }`}
              />
              {errors.prenom && (
                <span className="text-red-500">
                  Ce champ est requis et doit contenir uniquement des lettres
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-1 mb-3">
              <input
                {...register("email", {
                  required: "Adresse email requise",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Adresse email invalide",
                  },
                })}
                type="text"
                name="email"
                placeholder="Adresse email"
                className={`border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-y-1 mb-4">
              <input
                {...register("password", { required: "Mot de passe requis" })}
                type="password"
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
          </div>
          <input
            type="submit"
            value="S'inscrire"
            className="text-white font-bold bg-btn-color p-3 md:p-4 rounded-xl hover:opacity-80 cursor-pointer sm:p-3 xl:text-xl"
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
  );
}
