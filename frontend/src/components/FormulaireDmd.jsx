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
    <div className="max-w-[1386px] mx-auto">
      <div className="mx-2 md:mx-6 my-12 lg:grid lg:grid-cols-2 lg:grid-rows-[auto] lg:items-center lg:gap-6 xl:gap-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="POST"
        encType="multipart/form-data"
        className="border-2 bg-gray-100 text-black p-6 w-full rounded-xl mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-6 pb-12 shadow-membre-box"
      >
        <h1 className="font-bold text-xl text-center p-6 sm:text-2xl md:text-3xl xl:text-4xl xl:mb-6">
          Formulaire de Demande d'Adhésion
        </h1>
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
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
            className="text-white font-bold bg-red-600 p-3 rounded-xl hover:opacity-80 cursor-pointer"
          />
          <button
            type="submit"
            className="ml-6 bg-red-600 text-white font-bold p-3 rounded-xl hover:opacity-80"
          >
            Annuler
          </button>
        </div>
      </form>
      <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 border-2 border-gray-200 px-6 bg-gray-200 rounded-lg">
        <h2 className="font-bold text-center text-secondary-blue text-xl mb-6 pt-6 lg:text-center lg:text-3xl">Dispositions statuaires relatives aux membres</h2>
        <div className="text-justify">
          <p className="my-2">
            <strong>Article 5 :</strong> Peut devenir membre de la Fédération,
            toute personne physique commerçante ou morale régulièrement
            constituée en entreprise de droit privé ou public ou toute autre
            organisation structurée d’entreprises dûment revêtue de la
            personnalité juridique, qui exploite légalement sur le territoire de
            la République Démocratique du Congo une activité commerciale,
            industrielle, minière, agricole, artisanale, sociale ou libérale.
          </p>
          <p className="my-2">
            <strong>Article 6 :</strong> Le dossier de demande d’affiliation est
            constitué d’une lettre de demande d’affiliation de l’impétrant, du
            bulletin d’adhésion dûment rempli, des preuves de la constitution
            régulière de l’entité (personne morale) ou de qualité de commerçant
            (personne physique) et de la preuve de parrainage d’un membre en
            ordre de cotisation. L’’impétrant peut faire recours auprès du
            Conseil d’Administration en cas de refus de sa demande
            d’affiliation. La qualité de membre se concrétise par le paiement
            d’une cotisation annuelle à la Fédération et la signature du Code
            d’éthique. Toute entreprise, nonobstant l’appartenance à un groupe,
            s’affilie et s’acquitte de sa cotisation individuellement.
          </p>
          <p className="my-2">
            <strong>Article 7 :</strong> Le membre s’engage à observer le Code
            d’éthique et les décisions prises par les organes statutaires de la
            Fédération. Il veille à communiquer à celle-ci toutes les
            informations utiles à la réalisation de son objet social.
          </p>
          <p className="my-2">
            <strong>Article 8 :</strong> Tout membre peut démissionner de la
            Fédération. Il adressera à cet effet à la Fédération un courrier
            recommandé avec accusé de réception auquel la Fédération répondra
            par une prise d’acte. Il reste tenu d’acquitter les cotisations
            échues. Toute cotisation versée reste acquise à la Fédération.
          </p>
          <p className="my-2">
            <strong>Article 9 :</strong> Le Conseil d’Administration peut
            prononcer l’exclusion d’un membre en cas de violation des statuts et
            règlements de la Fédération, du Code éthique ou pour un motif grave
            lié à l’exercice de son activité. De même, le Conseil
            d’Administration peut prononcer la déchéance du mandat, au sein de
            la Fédération, de toute personne, pour les mêmes motifs cités ci
            avant. Le membre exclu reste tenu d’acquitter les cotisations
            échues.
          </p>
          <p className="my-2">
            <strong>Article 74 :</strong> Le régime des cotisations est arrêté
            annuellement par l’Assemblée Générale Ordinaire, sur proposition du
            Conseil d’Administration. Le montant de la cotisation est déterminé
            suivant des critères arrêtés par le Conseil d’Administration, compte
            tenu de la dimension économique du membre. Le membre est tenu de
            communiquer à la Fédération toutes les justifications utiles à la
            vérification de la hauteur de la cotisation à verser. Les
            cotisations sont payables au lieu et dans les délais fixés par le
            Conseil d’Administration.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
