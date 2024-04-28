import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Response from "../components/Response";

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
    data.nom = data.nom.toLowerCase();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/suivi_demande/EDNICMPSSR`,
        {
          id: data.number,
          nom: data.nom,
        }
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        setIsError(false);
        setIsResponse(false);
        return setIsNotifications(response.data);
      } else {
        setIsError(true);
        return setIsData("Erreur lors de la soumission des données");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData("Erreur lors de la recupération des données au serveur");
    }

    reset();
  };

  return (
    <div className="px-[10%] py-12 md:py-24 bg-bg_desktop 2xl:px-[13%]">
      <div className="relative">
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="linear-bg border-2 text-white px-2 py-4 w-full rounded-xl pb-6 max-w-[768px] md:mx-auto flex flex-col gap-y-1 lg:pb-6"
      >
        <h1 className="font-bold text-secondary-blue text-xl text-center p-4 sm:text-2xl md:text-3xl xl:text-4xl">
        Suivi de la demande
        </h1>
          <div className="flex flex-col gap-y-1 mb-2">
          <input
                {...register("nom", {
                  required: true,
                  pattern: /^[a-zA-Z]+ [a-zA-Z]+$/,
                })}
                type="text"
                id="nom"
                name="nom"
                placeholder="Prénom et Nom"
                className={`border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base xl:my-1 ${
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
                className={`border-2 rounded-lg text-black p-1 sm:p-3 sm:text-base xl:my-1 ${
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
        <input
                type="submit"
                value="Suivre"
                className="text-white font-bold bg-btn-color p-3 md:p-4 rounded-xl hover:opacity-80 cursor-pointer sm:p-3"
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
      <div className="font-bold italic p-6 w-full rounded-lg mt-6 w-full bg-gray-50 border-2 border-dashed sm:text-lg md:mx-auto  md:max-w-[768px]">
        <ul>
          {isNotifications &&
            isNotifications.map((notification) => (
              <li
                key={notification.id}
                className="flex gap-x-6 p-3 border-bottom-2"
              >
                <p>
                  {new Date(notification.date).toUTCString()}
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
