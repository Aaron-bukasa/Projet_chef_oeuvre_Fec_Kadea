import axios from "axios";
import { useForm } from "react-hook-form";
import ConfirmationDmd from "./ConfirmationDmd";
import { useState } from "react";

export default function FormulaireDmd() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSend, setIsSend] = useState(false);
  const [numero, setNumero] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://projet-chef-oeuvre-fec-kadea-2.onrender.com/demandes", data);

      if (response.status === 200) {
        setNumero(response.data.numero);
        setIsSend(true);
      } else {
        console.error("Inscription échouée");
      }
    } catch (error) {
      console.error("Erreur Axios:", error);
    }
  };

  if (isSend) {
    return <ConfirmationDmd numero={numero} />;
  }

  return (
    <div className="mx-2 md:mx-6 my-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="POST"
        encType="multipart/form-data"
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-6 pb-12"
      >
        <h1 className="font-bold text-xl text-center p-6 sm:text-2xl md:text-3xl xl:text-4xl xl:mb-6">
          Formulaire de Demande d'Adhésion
        </h1>
        <div>
          <h2 className="font-medium text-xl mb-4  lg:text-2xl 2xl:text-2xl font-bold">
            Informations personnelles
          </h2>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="nom_complet">Nom complet</label>
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
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.nom && (
              <p className="text-red-500">{errors.nom.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="email">Adresse email</label>
            <input
              {...register("email", {
                required: "Adresse email requise",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Veuillez saisir une adresse email valide",
                },
              })}
              type="text"
              placeholder="Adresse email"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="telephone">Numéro de téléphone</label>
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
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.telephone && (
              <p className="text-red-500">{errors.telephone.message}</p>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl mb-4 lg:text-2xl 2xl:text-2xl font-bold">
            Informations sur l'organisation
          </h2>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="nom_org">Nom de l'organisation</label>
            <input
              {...register("organisation", {
                required: "Nom de l'organisation requis",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Veuillez saisir un nom d'organisation valide",
                },
              })}
              type="text"
              placeholder="Nom de l'organisation"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.organisation && (
              <p className="text-red-500">{errors.organisation.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="role_org">Votre rôle dans l'organisation</label>
            <input
              {...register("role_ds_entreprise", {
                required: "Rôle dans l'organisation requis",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Veuillez saisir un rôle dans l'organisation valide",
                },
              })}
              type="text"
              placeholder="Votre rôle dans l'organisation"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.role_ds_entreprise && (
              <p className="text-red-500">{errors.role_ds_entreprise.message}</p>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl mb-4 lg:text-2xl 2xl:text-2xl font-bold">
            Motivations
          </h2>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="motivation">
              Pourquoi souhaitez-vous adhérer à notre organisation?
            </label>
            <input
              {...register("motivation", {
                required: "Motivation requise",
              })}
              type="text"
              placeholder="Motivation"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.motivation && (
              <p className="text-red-500">{errors.motivation.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="objectifs">
              Quels sont vos objectifs en tant que membre?
            </label>
            <textarea
              {...register("objectifs", {
                required: "Objectifs requis",
              })}
              rows="4"
              cols="50"
              placeholder="Objectifs en tant que membre"
              className="w-full border-2 rounded-lg text-black p-3"
            />
            {errors.objectifs && (
              <p className="text-red-500">{errors.objectifs.message}</p>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl mb-4 lg:text-2xl 2xl:text-2xl font-bold">
            Fichiers joints
          </h2>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="cv">Veuillez joindre votre CV (format PDF):</label>
            <input
              {...register("cv")}
              type="file"
              accept=".pdf"
              disabled
            />
            {errors.cv && (
              <p className="text-red-500">{errors.cv.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="lettre_motivation">
              Veuillez joindre une lettre de motivation (format PDF):
            </label>
            <input
              {...register("lettre_motivation")}
              type="file"
              accept=".pdf"
              disabled
            />
            {errors.lettre_motivation && (
              <p className="text-red-500">{errors.lettre_motivation.message}</p>
            )}
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Soumettre la demande"
            className="text-white font-bold bg-sky-blue p-3 rounded-xl hover:opacity-80 cursor-pointer"
          />
          <button
            type="submit"
            className="ml-6 bg-[#dc3545] text-white font-bold bg-sky-blue p-3 rounded-xl hover:opacity-80"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
