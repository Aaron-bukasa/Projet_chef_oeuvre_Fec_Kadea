import axios from "axios";
import { useForm } from "react-hook-form";
import ConfirmationDmd from "./ConfirmationDmd";
import { useState } from "react";
import Response from "./Response"

export default function FormDmd() {

  const [isSend, setIsSend] = useState(false);
  const [numero, setNumero] = useState(null);

  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/demandes", data);

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {

        setNumero(response.data.numero);
        setIsSend(true);
        setIsError(false);
        return setIsData(response.data);

      } else {
        setIsError(true);
        return setIsData("Inscription échouée");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData(
        "erreur lors de la soumission de la demande au serveur"
      );
    }
  };

  if (isSend) {
    return <ConfirmationDmd numero={numero} />;
  }

    return(
        <div className="py-12 md:px-6 bg-bg_desktop">
            <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="POST"
        encType="multipart/form-data"
        className="relative linear-bg border-2 text-white p-6 w-full rounded-xl mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-6 pb-12 shadow-membre-box lg:mt-8"
      >
        <h2 className="font-bold  text-secondary-blue text-lg text-center p-6 sm:text-xl md:text-2xl xl:text-3xl">
          Formulaire de demande d'adhésion
        </h2>
        <input
          {...register("nom", {
            required: "Nom complet requis",
            pattern: {
              value: /^[a-zA-Z]+ [a-zA-Z]+$/,
              message: "Veuillez saisir un nom valide",
            },
          })}
          type="text"
          placeholder="Nom complet"
          className="border-2 h-10 rounded-lg text-black p-3 outline-none"
        />
        {errors.nom && <p className="text-red-500">{errors.nom.message}</p>}
        <input
          {...register("email", {
            required: "Adresse email requise",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Veuillez saisir une adresse email valide",
            },
          })}
          type="text"
          placeholder="Email"
          className="border-2 h-10 rounded-lg text-black p-3 outline-none"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <input
          {...register("telephone", {
            required: "Numéro de téléphone requis",
            pattern: {
              value: /^(084|085|080|089|081|082|099|097|090)[0-9]{7}$/,
              message: "Veuillez saisir un numéro de téléphone valide",
            },
          })}
          type="tel"
          placeholder="Numéro de téléphone"
          className="border-2 h-10 rounded-lg text-black p-3 outline-none"
        />
        {errors.telephone && (
          <p className="text-red-500">{errors.telephone.message}</p>
        )}

        <input
          {...register("nom_organisation", {
            required: "Nom de l'organisation requis",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Veuillez saisir un nom d'organisation valide",
            },
          })}
          type="text"
          placeholder="Nom de l'organisation"
          className="border-2 h-10 rounded-lg text-black p-3 outline-none"
        />
        {errors.organisation && (
          <p className="text-red-500">{errors.organisation.message}</p>
        )}
        <input
          {...register("forme_juridique", {
            required: "Forme juridique requis",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Veuillez saisir la forme juridique valide",
            },
          })}
          type="text"
          placeholder="Forme juridique de l'organisation"
          className="border-2 h-10 rounded-lg text-black p-3 outline-none"
        />
        {errors.role_ds_entreprise && (
          <p className="text-red-500">{errors.role_ds_entreprise.message}</p>
        )}

        <div>
          <input
            type="submit"
            value="Soumettre la demande"
            className="text-white font-bold bg-btn-color p-3 rounded-xl hover:opacity-80 cursor-pointer"
          />
          <button
            type="submit"
            className="ml-6 bg-red-500 text-white font-bold p-3 rounded-xl hover:opacity-80"
          >
            Annuler
          </button>
        </div>
        <Response isLoading={isLoading} setIsResponse={setIsResponse} isResponse={isResponse} isError={isError} isData={isData} />
      </form>
        </div>
    )
}