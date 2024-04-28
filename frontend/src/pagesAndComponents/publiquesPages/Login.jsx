import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Response from "../components/Response";
import { useNavigate } from 'react-router-dom';

export default function Login() {

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

        localStorage.setItem("isLogin", [
          response.data.id,
          response.data.nom?.match(/^[a-zA-Z]+/),
          response.data.email,
        ]);

        navigate('/');

      } else {
        setIsError(true);
        return setIsData("Authentication failed");
      }
    } catch (error) {
      setIsError(true);
      return setIsData("Erreur lors de la connexion au serveur");
    }
  };

  return (
    <div className="relative px-[10%] py-12 md:py-24 bg-bg_desktop 2xl:px-[13%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="linear-bg border-2 text-white w-full px-3 py-4 rounded-xl sm:mb-6 md:mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-3 md:pb-12"
      >
        <h1 className="font-bold text-center text-xl text-primary-blue py-1 sm:text-2xl sm:p-3 md:text-3xl lg:mb-6 lg:text-center lg:text-4xl xl:text-4xl">
          Se connecter
        </h1>
        <div className="pb-3">
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
          <Link
            to="/signup"
            className="text-sm md:text-lg block text-secondary-blue text-right mr-3 sm:text-base"
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
      <Response isLoading={isLoading} setIsResponse={setIsResponse} isResponse={isResponse} isError={isError} isData={isData} />
    </div>
  );
}
