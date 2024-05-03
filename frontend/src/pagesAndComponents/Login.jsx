import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Response from "./components/Response";
import { useNavigate } from "react-router-dom";
import logoFec from "../assets/images/logoFec.svg";
import bg_002 from "../assets/images/bg_002.jpg";

export default function Login({ setIsLogin }) {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisplayPassword, setIsDisplayPassword] = useState(false);
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
        "http://localhost:3000/users/member/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        setIsResponse(false);
        setIsError(false);

        localStorage.setItem("isLogin", true);
        setIsLogin(true);
        navigate("/");
      } else {
        setIsError(true);
        return setIsData("Authentication failed");
      }
    } catch (error) {
      setIsError(true);
      return setIsData("Erreur lors de la connexion au serveur");
    }
  };

  const handleChange = () => {
    isDisplayPassword
      ? setIsDisplayPassword(false)
      : setIsDisplayPassword(true);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-999]">
        <img src={bg_002} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-8 p-6 min-h-screen roboto-regular sm:p-6 sm:gap-y-12 md:w-11/12 md:mx-auto lg:mx-auto lg:w-9/12 2xl:w-7/12 2xl:max-w-4xl">
        <div>
          <img src={logoFec} alt="logo de la fec" className="w-36 sm:w-48" />
        </div>
        <div className="linear-bg w-full rounded-lg px-4 py-6 sm:p-6 lg:py-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <h1 className="font-bold text-center text-xl text-secondary-blue py-1 sm:text-2xl sm:p-3 md:text-3xl lg:mb-6 lg:text-center lg:text-4xl xl:text-4xl">
              Se connecter
            </h1>
            <div className="pb-3">
              <div className="flex flex-col gap-y-1 mb-3">
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
                <label htmlFor="displayPassword" className="text-primary-blue">
                  Afficher le mot de passe
                </label>
              </div>
              <Link
                to="/EDNICMPSSR/signup"
                className="text-sm underline md:text-lg block text-secondary-blue text-right mr-3 sm:text-base"
              >
                Dévenez membre de la FEC
              </Link>
            </div>
            <input
              type="submit"
              value="Se connecter"
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
    </div>
  );
}
