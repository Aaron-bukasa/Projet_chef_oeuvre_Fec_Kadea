export default function FormulaireDmd() {
  return (
    <div className="m-6">
      <form
        action="/submit"
        method="POST"
        enctype="multipart/form-data"
        className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 max-w-[768px] md:mx-auto"
      >
        <h1 className="font-bold text-2xl text-center text-secondary-blue p-6 sm:text-3xl md:text-4xl xl:text-5xl">
          Formulaire de Demande d'Adhésion
        </h1>
        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Informations personnelles
        </h2>
        <div className="pb-6">
          <div className="flex flex-col gap-y-1 mb-4">
            <label for="nom_complet">Nom complet</label>
            <input
              type="text"
              id="nom_complet"
              name="nom_complet"
              placeholder="Nom complet"
              required
              className="border-2 h-10 rounded-lg text-black p-3 sm:w-[50%]"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label for="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adresse email"
              required
              className="border-2 h-10 rounded-lg text-black p-3 sm:w-[60%]"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label for="telephone">Numéro de téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Numéro de téléphone"
              required
              className="border-2 h-10 rounded-lg text-black p-3 sm:w-[70%]"
            />
          </div>
        </div>

        <h2 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold">
          Informations sur l'organisation
        </h2>
        <div className="pb-6">
          <div className="flex flex-col gap-y-1 mb-4">
            <label for="nom_org">Nom de l'organisation</label>
            <input
              type="text"
              id="nom_org"
              name="nom_org"
              placeholder="Nom de l'organisation"
              required
              className="border-2 h-10 rounded-lg text-black p-3"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label for="role_org">Votre rôle dans l'organisation</label>
            <input
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
            <label for="motivation">
              Pourquoi souhaitez-vous adhérer à notre organisation?
            </label>
            <textarea
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
            <label for="objectifs">
              Quels sont vos objectifs en tant que membre?
            </label>
            <textarea
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
            <label for="cv">Veuillez joindre votre CV (format PDF):</label>
            <input type="file" id="cv" name="cv" accept=".pdf" required />
          </div>
          <div lassName="flex flex-col gap-y-1 mb-4">
            <label for="lettre_motivation">
              Veuillez joindre une lettre de motivation (format PDF):
            </label>
            <input
              type="file"
              id="lettre_motivation"
              name="lettre_motivation"
              accept=".pdf"
              required
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
            <label for="declaration">
              Je certifie que les informations fournies sont exactes et
              complètes.
            </label>
          </div>
          <div className="flex gap-x-3 items-center mb-4">
            <input type="checkbox" id="conditions" name="conditions" required />
            <label for="conditions">
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
            type="button"
            onclick="window.location.href='/cancel'"
            className="ml-6 bg-[#dc3545] text-white font-bold bg-sky-blue p-3 rounded-xl hover:opacity-80"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
