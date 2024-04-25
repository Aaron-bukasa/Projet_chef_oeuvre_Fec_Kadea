import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Response from "./Response";

function SuiviDmd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isNotifications, setIsNotifications] = useState([]);

  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/suivi_demande/${data.number}`,
        {
          nom: data.nom,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        setIsError(false);
        return setIsNotifications(response.data);
      } else {
        setIsError(true);
        return setIsData("Erreur lors de la soumission des données");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData("erreur lors de la recupération des données au serveur");
    }

    reset();
  };

  return (
    <div className="px-6 py-12 md:py-24 bg-bg_desktop">
      <div className="relative">
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="linear-bg border-2 text-white p-6 w-full rounded-xl mb-6 max-w-[768px] md:mx-auto flex flex-col gap-y-1 lg:pb-6"
      >
        <h1 className="font-bold text-secondary-blue text-2xl text-center p-6 sm:text-3xl md:text-4xl xl:text-5xl">
        Suivi de la demande
        </h1>
          <div className="flex flex-col gap-y-1 mb-4">
          <input
                {...register("nom", {
                  required: true,
                  pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
                })}
                type="text"
                id="nom"
                name="nom"
                placeholder="Prénom et Nom"
                className={`border-2 h-10 rounded-lg text-black px-3 ${
                  errors.nom ? "border-red-500" : ""
                }`}
              />
              {errors.nom && (
                <p className="text-red-500">
                  Prénom et Nom requis et ne doit contenir que des lettres.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1 mb-4">
              <input
                {...register("number", { required: true, pattern: /^[0-9]+$/ })}
                type="text"
                id="number"
                name="number"
                placeholder="Numéro de la demande"
                className={`border-2 h-10 rounded-lg text-black px-3 ${
                  errors.number ? "border-red-500" : ""
                }`}
              />
              {errors.number && (
                <p className="text-red-500">
                  Numéro de la demande requis et ne doit contenir que des
                  chiffres.
                </p>
              )}
        </div>
        <button
          type="submit"
          className="bg-btn-color text-white font-bold text-xl py-3 px-4 rounded-xl hover:opacity-80"
        >
          Suivre
        </button>
      </form>
        <Response
              isLoading={isLoading}
              setIsResponse={setIsResponse}
              isResponse={isResponse}
              isError={isError}
              isData={isData}
            />
      </div>
      <div className="font-bold text-lg italic p-6 w-full rounded-lg mt-6 w-full md:max-w-[768px] md:mx-auto border-2 border-dashed">
        <ul>
          {isNotifications &&
            isNotifications.map((notification) => (
              <li
                key={notification.id}
                className="flex gap-x-6 p-3 border-bottom-2"
              >
                <p>
                  {new Date(notification.date).toLocaleString("en-GB", {
                    timeZone: "UTC",
                  })}
                </p>
                <p>{notification.evenement}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SuiviDmd;
