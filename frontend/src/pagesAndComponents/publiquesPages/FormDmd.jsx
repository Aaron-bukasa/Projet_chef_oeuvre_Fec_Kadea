import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Response from "../components/Response";
import bg_002 from "../../assets/images/bg_002.jpg";
import { useNavigate } from "react-router-dom";

export default function FormDmd() {
 
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.nom = data.nom.toLowerCase().trim();
    
    setIsLoading(true);

    try {
      const response = await axios.post("https://projet-chef-oeuvre-fec-kadea.onrender.com/demandes", data);

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 201) {
        setIsError(false);
        setIsResponse(false);
        localStorage.setItem("userDmd", [response.data.nom, response.data.email])
        return navigate(`/signup/${response.data.id}`);
      } else {
        setIsError(true);
        return setIsData("Demande d'adhésion échouée");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData("erreur lors de la soumission de la demande au serveur");
    }
  };

  return (
    <div className="relative py-6 px-[10%] md:py-12 2xl:px-[13%]">
      <div className="absolute top-0 left-0 w-full h-full z-[-999]">
        <img src={bg_002} alt="" className="w-full h-full object-cover" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="POST"
        encType="multipart/form-data"
        className="relative linear-bg border-2 text-white px-3 md:px-6 py-4 w-full rounded-xl max-w-[768px] md:mx-auto flex flex-col gap-y-3 lg:mt-8"
      >
        <h2 className="font-bold text-center text-xl text-secondary-blue mb-3 sm:text-1xl sm:py-3 lg:mb-6 lg:text-center md:text-2xl lg:text-3xl xl:text-4xl">
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
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
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
          placeholder="Adresse email"
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
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
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
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
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
        />
        {errors.organisation && (
          <p className="text-red-500">{errors.organisation.message}</p>
        )}
        <select
          {...register("forme_juridique", {
            required: "Veuillez sélectionner une forme juridique",
          })}
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
        >
          <option value="">Forme juridique</option>
          <option value="ETS">
            L’entreprise individuelle (ou établissement)
          </option>
          <option value="SARL">
            La Société à Responsabilité Limitée (S.A.R.L)
          </option>
          <option value="SA">La Société Anonyme (S.A)</option>
          <option value="SAS">
            La Société par Actions Simplifiées (S.A.S.)
          </option>
          <option value="SNC">La Société en Nom Collectif (S.N.C)</option>
          <option value="SNS">La Société en Commandite Simple (S.C.S)</option>
          <option value="GIE">
            Le Groupement d’Intérêt Economique (G.I.E)
          </option>
        </select>
        {errors.forme_juridique && (
          <p className="text-red-500">{errors.forme_juridique.message}</p>
        )}
        <input
          {...register("secteur_activite", {
            required: "Secteur d'activité requis",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Veuillez saisir le secteur d'activité de l'entreprise",
            },
          })}
          type="text"
          placeholder="Secteur d'activité"
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
        />
        {errors.secteur_activite && (
          <p className="text-red-500">{errors.secteur_activite.message}</p>
        )}
        <select
          {...register("province_activite", {
            required: "Veuillez sélectionner la province d'activité",
          })}
          className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
        >
          <option value="">Province d'activité</option>
          <option value="Bas-Uele">Bas-Uele</option>
          <option value="Équateur">Équateur</option>
          <option value="Haut-Katanga">Haut-Katanga</option>
          <option value="Haut-Lomami">Haut-Lomami</option>
          <option value="Haut-Uele">Haut-Uele</option>
          <option value="Ituri">Ituri</option>
          <option value="Kasaï">Kasaï</option>
          <option value="Kasaï central">Kasaï central</option>
          <option value="Kasaï oriental">Kasaï oriental</option>
          <option value="Kinshasa">Kinshasa</option>
          <option value="Kongo-Central">Kongo-Central</option>
          <option value="Kwango">Kwango</option>
          <option value="Kwilu">Kwilu</option>
          <option value="Lomami">Lomami</option>
          <option value="Lualaba">Lualaba</option>
          <option value="Mai-Ndombe">Mai-Ndombe</option>
          <option value="Maniema">Maniema</option>
          <option value="Mongala">Mongala</option>
          <option value="Nord-Kivu">Nord-Kivu</option>
          <option value="Nord-Ubangi">Nord-Ubangi</option>
          <option value="Sankuru">Sankuru</option>
          <option value="Sud-Kivu">Sud-Kivu</option>
          <option value="Sud-Ubangi">Sud-Ubangi</option>
          <option value="Tanganyika">Tanganyika</option>
          <option value="Tshopo">Tshopo</option>
          <option value="Tshuapa">Tshuapa</option>
        </select>
        {errors.province_activite && (
          <p className="text-red-500">{errors.province_activite.message}</p>
        )}

        <div className="flex flex-col gap-y-2 mt-3 sm:flex-row sm:gap-x-3 md:flex-row xl:my-2">
          <input
            type="submit"
            value="Soumettre la demande"
            className="text-white tracking-wider font-bold bg-btn-color p-3 md:p-4 rounded-xl hover:opacity-80 cursor-pointer lg:text-lg"
          />
          <button
            type="submit"
            className="tracking-wider text-white font-bold bg-red-600 p-3 md:p-4 rounded-xl hover:opacity-80 cursor-pointer lg:text-lg"
          >
            Annuler
          </button>
        </div>
        <Response
          isLoading={isLoading}
          setIsResponse={setIsResponse}
          isResponse={isResponse}
          isError={isError}
          isData={isData}
        />
      </form>
    </div>
  );
}
