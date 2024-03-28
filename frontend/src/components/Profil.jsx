export default function Profil() {
  return (
    <div className="m-6">
      <div className="max-w-[1024px] mx-auto">
        <h2 className="font-medium text-center text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-3xl font-bold">
          Mon profil
        </h2>
        <form action="#">
          <div className="relative">
            <div className="bg-primary-blue h-[220px]">
              <img src="connexion.jpg" alt="Photo de profil" />
            </div>
            <div className="flex justify-between items-end -translate-y-[40%]">
              <div className="bg-primary-blue rounded-full ml-6">
                <img
                  src="connexion.jpg"
                  alt="Photo de profil"
                  className="size-52 border-2 rounded-full"
                />
              </div>
              <div className="bg-sky-blue p-3 rounded-lg text-white font-semibold -translate-y-4">
                <input type="file" id="photo-profil" name="photo-profil" className="hidden"/>
                <label htmlFor="photo-profil">Modifier la photo</label>
              </div>
            </div>
          </div>
          <div className="-mt-10">
            <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold text-secondary-blue">Informations personnelles</h3>
            <div className="my-3">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" value="Dupont" className="border-2 border-primary-blue rounded-lg h-10 block p-3 mt-1 outline-none w-[70%]"/>
            </div>
            <div className="my-3">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" value="Jean" className="border-2 border-primary-blue rounded-lg h-10 block p-3 mt-1 outline-none w-[70%]" />
            </div>
            <div> className="my-3"
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value="jean.dupont@email.com"
                className="border-2 border-primary-blue rounded-lg h-10 block p-3 mt-1 outline-none w-[70%]"
              />
            </div>
            <div className="my-3">
              <label htmlFor="telephone">Téléphone</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value="01 23 45 67 89"
                className="border-2 border-primary-blue rounded-lg h-10 block p-3 mt-1 outline-none w-[70%]"
              />
            </div>
            <div className="my-3">
              <label htmlFor="adresse">Adresse</label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value="1 rue de la Paix, 75000 Paris"
                className="border-2 border-primary-blue rounded-lg h-10 block p-3 mt-1 outline-none w-[70%]"
              />
            </div>
            <div className="my-3">
              <label htmlFor="ville">Ville</label>
              <input type="text" id="ville" name="ville" value="Paris" className="border-2 border-primary-blue rounded-lg h-10 block p-3 mt-1 outline-none w-[70%]" />
            </div>
            <button type="submit" className="bg-sky-blue p-3 rounded-lg text-white font-semibold">Modifier mon profil</button>
          </div>
          <div className="my-6">
            <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold text-secondary-blue">Informations sur l'adhésion</h3>
            <p>Date d'adhésion : <span className="italic font-semibold">En attente...</span></p>
            <p>Date d'expiration : <span className="italic font-semibold">En attente...</span></p>
            <p>Status de l'adhésion : <span className="italic font-semibold">Actif</span></p>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-bold text-secondary-blue">Informations de paiement</h3>
            <ul>
                <li>Date du paiement: <span className="italic font-semibold">En attente...</span> | Montant: <span className="italic font-semibold">En attente...</span> | Méthode: <span className="italic font-semibold">En attente...</span></li>
                <li>Date du paiement: <span className="italic font-semibold">En attente...</span> | Montant: <span className="italic font-semibold">En attente...</span> | <span className="italic font-semibold">En attente...</span></li>
                <button className="bg-sky-blue p-3 my-4 rounded-lg text-white font-semibold">Télecharger mon recu</button>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
