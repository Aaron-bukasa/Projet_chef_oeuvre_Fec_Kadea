export default function Faq() {
    return (
      <div
        id="faq"
        className="p-6 md:text-lg 2xl:text-xl flex flex-col bg-bg_blog xl:pb-12"
      >
        <div className="xl:max-w-[1536px] mx-auto">
          <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Foire aux questions
          </h2>
          <ul>
            <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
              <h3 className="font-bold text-xl mb-3">
                Qu'est-ce que la fédération des entreprises ?
              </h3>
              <p>
                La fédération des entreprises est une organisation qui rassemble
                et représente les entreprises de tous les secteurs d'activité.
              </p>
            </li>
            <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
              <h3 className="font-bold text-xl mb-3">
                Quels sont les avantages de l'adhésion ?
              </h3>
              <p>
                En adhérant à la fédération, vous bénéficierez de nombreux
                avantages, tels que :
              </p>
              <ul className="list-disc ml-6">
                <li>Une assistance</li>
                <li>Une Défense</li>
                <li>Une Réprésentation</li>
                <li>
                Un Appui aux Entreprises
                </li>
              </ul>
            </li>
            <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
              <h3 className="font-bold text-xl mb-3">
                Comment puis-je adhérer à la fédération ?
              </h3>
              <p>
                Pour adhérer à la fédération, veuillez remplir le formulaire de
                demande d'adhésion disponible sur notre site web.
              </p>
            </li>
            <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
              <h3 className="font-bold text-xl mb-3">
                Combien coûte l'adhésion ?
              </h3>
              <p>
                Le coût de l'adhésion dépend de la taille de votre entreprise.
                Veuillez consulter notre site web pour plus d'informations.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  