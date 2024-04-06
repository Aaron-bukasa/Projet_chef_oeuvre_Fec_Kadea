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
      const response = await axios.post("http://localhost:3000/demandes", data);

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
    <div className="m-6 my-12">
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
              {...register("nom", { required: true })}
              type="text"
              placeholder="Nom complet"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.nom && <p className="text-red-500">Nom requis</p>}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="email">Adresse email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Adresse email"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.email && <p className="text-red-500">Email requis</p>}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input
              {...register("telephone", { required: true })}
              type="tel"
              placeholder="Numéro de téléphone"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.telephone && (
              <p className="text-red-500">Numéro de téléphone requis</p>
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
              {...register("organisation", { required: true })}
              type="text"
              placeholder="Nom de l'organisation"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.organisation && (
              <p className="text-red-500">Nom de l'organisation requis</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="role_org">Votre rôle dans l'organisation</label>
            <input
              {...register("role_ds_entreprise", { required: true })}
              type="text"
              placeholder="Votre rôle dans l'organisation"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.role_ds_entreprise && (
              <p className="text-red-500">Rôle dans l'organisation requis</p>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl mb-4  lg:text-2xl 2xl:text-2xl font-bold">
            Motivations
          </h2>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="motivation">
              Pourquoi souhaitez-vous adhérer à notre organisation?
            </label>
            <input
              {...register("motivation", { required: true })}
              type="text"
              placeholder="Motivation"
              className="border-2 h-10 rounded-lg text-black p-3"
            />
            {errors.motivation && (
              <p className="text-red-500">Motivation requis</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="objectifs">
              Quels sont vos objectifs en tant que membre?
            </label>
            <textarea
              {...register("objectifs", { required: true })}
              rows="4"
              cols="50"
              placeholder="Objectifs en tant que membre"
              className="w-full border-2 rounded-lg text-black p-3"
            />
            {errors.objectifs && (
              <p className="text-red-500">Objectifs requis</p>
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
              {...register("cv" /*{ required: true }*/)}
              type="file"
              accept=".pdf"
              disabled
              // id="cv"
              // name="cv"
              // required
            />
            {errors.cv && <p className="text-red-500">CV requis</p>}
          </div>
          <div className="flex flex-col gap-y-2 mb-3">
            <label htmlFor="lettre_motivation">
              Veuillez joindre une lettre de motivation (format PDF):
            </label>
            <input
              {...register("lettre_motivation" /*{ required: true }*/)}
              type="file"
              accept=".pdf"
              disabled
              // id="lettre_motivation"
              // name="lettre_motivation"
              // required
            />
            {errors.lettre_motivation && (
              <p className="text-red-500">Lettre de motivation requise</p>
            )}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl mb-4 lg:text-2xl 2xl:text-2xl font-bold">
            Déclaration
          </h2>
          <div className="flex gap-x-3 items-center mb-4">
            <input
              type="checkbox"
              id="declaration"
              name="declaration"
              required
            />
            <label htmlFor="declaration">
              Je certifie que les informations fournies sont exactes et
              complètes.
            </label>
          </div>
          <div className="flex gap-x-3 items-center mb-4">
            <input type="checkbox" id="conditions" name="conditions" required />
            <label htmlFor="conditions">
              J'accepte les conditions générales d'adhésion.
            </label>
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
