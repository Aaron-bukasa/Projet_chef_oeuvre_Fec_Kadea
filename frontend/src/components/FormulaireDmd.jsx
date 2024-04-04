import axios from "axios";
import { useRef, useState } from "react";
import ConfirmationDmd from "./ConfirmationDmd";

export default function FormulaireDmd() {

  const [isSend, setIsSend] = useState(false);
  const [numero, setNumero] = useState(null)

  const nomRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const organisationRef = useRef();
  const role_ds_entrepriseRef = useRef();
  const motivationRef = useRef();
  const objectifsRef = useRef();
  const cvRef = useRef();
  const lettre_motivationRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const response = await axios.post('http://localhost:3000/demandes', {
        nom: nomRef.current.value,
        email: emailRef.current.value,
        telephone: telephoneRef.current.value,
        organisation: organisationRef.current.value,
        role_ds_entreprise: role_ds_entrepriseRef.current.value,
        motivation: motivationRef.current.value,
        objectifs: objectifsRef.current.value,
        // cv: cv.current.value,
        // lettre_motivationRef: lettre_motivationRef.current.value
        
      });

      if (response.status === 200) {
        setNumero(response.data.numero);
        setIsSend(true);
      } else {
        console.error('Inscription échouée');
      }
    } catch (error) {
      console.error('Erreur Axios:', error);
    }
  };

  if(isSend) {
    return <ConfirmationDmd numero={numero}/>
  }

  return (
    <div className="m-6">
      <form
        onSubmit={handleSubmit}
        action=""
        method="POST"
        encType="multipart/form-data"
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-xl text-center p-6 sm:text-2xl md:text-3xl xl:text-4xl xl:mb-6">
          Formulaire de Demande d'Adhésion
        </h1>
        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Informations personnelles
        </h2>
        <div className="pb-6">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="nom_complet">Nom complet</label>
            <input
              ref={nomRef}
              type="text"
              id="nom_complet"
              name="nom_complet"
              placeholder="Nom complet"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="email">Adresse email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              placeholder="Adresse email"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input
              ref={telephoneRef}
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Numéro de téléphone"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
        </div>

        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Informations sur l'organisation
        </h2>
        <div className="pb-6">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="nom_org">Nom de l'organisation</label>
            <input
              ref={organisationRef}
              type="text"
              id="nom_org"
              name="nom_org"
              placeholder="Nom de l'organisation"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="role_org">Votre rôle dans l'organisation</label>
            <input
              ref={role_ds_entrepriseRef}
              type="text"
              id="role_org"
              name="role_org"
              placeholder="Votre rôle dans l'organisation"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
        </div>

        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Motivation
        </h2>
        <div className="pb-6">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="motivation">
              Pourquoi souhaitez-vous adhérer à notre organisation?
            </label>
            <textarea
              ref={motivationRef}
              id="motivation"
              name="motivation"
              rows="4"
              cols="50"
              placeholder="Pourquoi souhaitez-vous adhérer à notre organisation?"
              required
              className="w-full border-2 rounded-lg text-black p-3"
            ></textarea>
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="objectifs">
              Quels sont vos objectifs en tant que membre?
            </label>
            <textarea
              ref={objectifsRef}
              id="objectifs"
              name="objectifs"
              rows="4"
              cols="50"
              placeholder=" Quels sont vos objectifs en tant que membre?"
              required
              className="w-full border-2 rounded-lg text-black p-3"
            ></textarea>
          </div>
        </div>
        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Fichiers joints
        </h2>
        <div className="pb-6">
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="cv">Veuillez joindre votre CV (format PDF):</label>
            <input ref={cvRef} type="file" id="cv" name="cv" accept=".pdf" /*required*/ />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="lettre_motivation">
              Veuillez joindre une lettre de motivation (format PDF):
            </label>
            <input
              ref={lettre_motivationRef}
              type="file"
              id="lettre_motivation"
              name="lettre_motivation"
              accept=".pdf"
              // required
            />
          </div>
        </div>
        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Déclaration
        </h2>
        <div className="pb-6">
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
