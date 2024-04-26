import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Response from "./Response";

export default function Login() {

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
    data.email = data.email.trim();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/client/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        localStorage.setItem("isLogin", [
          response.data.id,
          response.data.nom?.match(/^[a-zA-Z]+/),
          response.data.email,
        ]);

        setIsError(false);
        window.location.href = "/";
        return;

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
    <div className="relative px-6 py-12 md:py-24 bg-bg_desktop">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="linear-bg border-2 text-white p-6 w-full rounded-xl max-w-[768px] md:mx-auto flex flex-col gap-y-6 lg:pb-6"
      >
        <h1 className="font-bold text-center text-2xl text-primary-blue lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl">
          Se connecter
        </h1>
        <div className="pb-3">
          <div className="flex flex-col gap-y-1 mb-4">
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
              className={`border-2 h-10 rounded-lg text-black p-3 ${
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
              className={`border-2 h-10 rounded-lg text-black p-3 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Link
            to="/signup"
            className=" text-sm md:text-lg block text-secondary-blue text-right mr-3 tracking-wider"
          >
            Dévenez membre de la FEC
          </Link>
        </div>
        <button
          type="submit"
          className="md:mx-6 bg-btn-color text-white font-bold text-xl py-3 px-4 rounded-xl hover:opacity-80"
        >
          Se connecter
        </button>
      </form>
      <Response isLoading={isLoading} setIsResponse={setIsResponse} isResponse={isResponse} isError={isError} isData={isData} />
    </div>
  );
}
