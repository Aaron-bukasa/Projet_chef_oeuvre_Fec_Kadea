import iconMore from "../assets/images/expand_more.svg";
import iconLess from "../assets/images/expand_less.svg";
import { useState } from "react";

export default function Faq() {
  const [questions, setQuestions] = useState({
    question1: true,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  });

  const handleClick = (questionName) => {
    setQuestions((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((key) => [key, key === questionName])
      ),
    }));
  };

  return (
    <div
      id="faq"
      className="p-6 md:text-lg 2xl:text-xl flex flex-col bg-bg_blog xl:pb-12"
    >
      <div></div>
      <div className="max-w-[1386px] w-[80%]  mx-auto">
        <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Foire aux questions
        </h2>
        <ul>
          <li className="border-[2px] border-gray-400 rounded-xl my-4 overflow-hidden">
            <h3
              onClick={() => handleClick("question1")}
              className="font-bold text-xl cursor-pointer bg-gray-100 px-3 py-2 flex justify-between items-center shadow-bottom"
            >
              <span>Comment devenir membre à la fédération ?</span>
              <span>
                <img
                  src={iconMore}
                  alt="icon expand more"
                  className={`${
                    questions.question1
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
                <img
                  src={iconLess}
                  alt="icon expand less"
                  className={`${
                    !questions.question1
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10`}
                />
              </span>
            </h3>
            <div
              className={
                questions.question1
                  ? "block p-4 text-justify leading-normal"
                  : "hidden"
              }
            >
              <p className="my-2">
                <strong>Article 5 :</strong> Peut devenir membre de la Fédération, toute personne
                physique commerçante ou morale régulièrement constituée en
                entreprise de droit privé ou public ou toute autre organisation
                structurée d’entreprises dûment revêtue de la personnalité
                juridique, qui exploite légalement sur le territoire de la
                République Démocratique du Congo une activité commerciale,
                industrielle, minière, agricole, artisanale, sociale ou
                libérale.
              </p>
              <p className="my-2">
              <strong>Article 6 :</strong> Le dossier de demande d’affiliation est constitué
                d’une lettre de demande d’affiliation de l’impétrant, du
                bulletin d’adhésion dûment rempli, des preuves de la
                constitution régulière de l’entité (personne morale) ou de
                qualité de commerçant (personne physique) et de la preuve de
                parrainage d’un membre en ordre de cotisation. L’’impétrant peut
                faire recours auprès du Conseil d’Administration en cas de refus
                de sa demande d’affiliation. La qualité de membre se concrétise
                par le paiement d’une cotisation annuelle à la Fédération et la
                signature du Code d’éthique. Toute entreprise, nonobstant
                l’appartenance à un groupe, s’affilie et s’acquitte de sa
                cotisation individuellement.
              </p>
              <p className="my-2">
              <strong>Article 7 :</strong> Le membre s’engage à observer le Code d’éthique et
                les décisions prises par les organes statutaires de la
                Fédération. Il veille à communiquer à celle-ci toutes les
                informations utiles à la réalisation de son objet social.
              </p>
              <p className="my-2">
                <strong>Article 8 :</strong> Tout membre peut démissionner de la Fédération. Il
                adressera à cet effet à la Fédération un courrier recommandé
                avec accusé de réception auquel la Fédération répondra par une
                prise d’acte. Il reste tenu d’acquitter les cotisations échues.
                Toute cotisation versée reste acquise à la Fédération.
              </p>
              <p className="my-2">
                <strong>Article 9 :</strong> Le Conseil d’Administration peut prononcer
                l’exclusion d’un membre en cas de violation des statuts et
                règlements de la Fédération, du Code éthique ou pour un motif
                grave lié à l’exercice de son activité. De même, le Conseil
                d’Administration peut prononcer la déchéance du mandat, au sein
                de la Fédération, de toute personne, pour les mêmes motifs cités
                ci avant. Le membre exclu reste tenu d’acquitter les cotisations
                échues.
              </p>
              <p className="my-2">
                <strong>Article 74 :</strong> Le régime des cotisations est arrêté annuellement
                par l’Assemblée Générale Ordinaire, sur proposition du Conseil
                d’Administration. Le montant de la cotisation est déterminé
                suivant des critères arrêtés par le Conseil d’Administration,
                compte tenu de la dimension économique du membre. Le membre est
                tenu de communiquer à la Fédération toutes les justifications
                utiles à la vérification de la hauteur de la cotisation à
                verser. Les cotisations sont payables au lieu et dans les délais
                fixés par le Conseil d’Administration.
              </p>
            </div>
          </li>
          <li className="border-[2px] border-gray-400 rounded-xl my-4 overflow-hidden">
            <h3
              onClick={() => handleClick("question2")}
              className="font-bold text-xl cursor-pointer bg-gray-100 px-3 py-2 flex justify-between items-center shadow-bottom"
            >
              <span>Qu'est-ce que la fédération des entreprises ?</span>
              <span>
                <img
                  src={iconMore}
                  alt="icon expand more"
                  className={`${
                    questions.question2
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
                <img
                  src={iconLess}
                  alt="icon expand less"
                  className={`${
                    !questions.question2
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
              </span>
            </h3>
            <div
              className={
                questions.question2
                  ? "block p-4 text-justify leading-normal"
                  : "hidden p-3"
              }
            >
              La fédération des entreprises est une organisation qui rassemble
              et représente les entreprises de tous les secteurs d'activité.
            </div>
          </li>
          <li className="border-[2px] border-gray-400 rounded-xl my-4 overflow-hidden">
            <h3
              onClick={() => handleClick("question3")}
              className="font-bold text-xl cursor-pointer bg-gray-100 px-3 py-2 flex justify-between items-center shadow-bottom"
            >
              <span>Quels sont les avantages de l'adhésion ?</span>
              <span>
                <img
                  src={iconMore}
                  alt="icon expand more"
                  className={`${
                    questions.question3
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
                <img
                  src={iconLess}
                  alt="icon expand less"
                  className={`${
                    !questions.question3
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
              </span>
            </h3>
            <div
              className={
                questions.question3
                  ? "block p-4 text-justify leading-normal"
                  : "hidden p-3"
              }
            >
              <div>
                En adhérant à la fédération, vous bénéficierez de nombreux
                avantages, tels que :
              </div>
              <ul className="list-disc ml-6">
                <li>Une assistance</li>
                <li>Une Défense</li>
                <li>Une Réprésentation</li>
                <li>Un Appui aux Entreprises</li>
              </ul>
            </div>
          </li>
          <li className="border-[2px] border-gray-400 rounded-xl my-4 overflow-hidden">
            <h3
              onClick={() => handleClick("question4")}
              className="font-bold text-xl cursor-pointer bg-gray-100 px-3 py-2 flex justify-between items-center shadow-bottom"
            >
              <span>Comment puis-je adhérer à la fédération ?</span>
              <span>
                <img
                  src={iconMore}
                  alt="icon expand more"
                  className={`${
                    questions.question4
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
                <img
                  src={iconLess}
                  alt="icon expand less"
                  className={`${
                    !questions.question4
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
              </span>
            </h3>
            <div
              className={
                questions.question4
                  ? "block p-4 text-justify leading-normal"
                  : "hidden p-3"
              }
            >
              Pour adhérer à la fédération, veuillez remplir le formulaire de
              demande d'adhésion disponible sur notre site web.
            </div>
          </li>
          <li className="border-[2px] border-gray-400 rounded-xl my-4 overflow-hidden">
            <h3
              onClick={() => handleClick("question5")}
              className="font-bold text-xl cursor-pointer bg-gray-100 px-3 py-2 flex justify-between items-center shadow-bottom"
            >
              <span>Combien coûte l'adhésion ?</span>
              <span>
                <img
                  src={iconMore}
                  alt="icon expand more"
                  className={`${
                    questions.question5
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
                <img
                  src={iconLess}
                  alt="icon expand less"
                  className={`${
                    !questions.question5
                      ? "block text-justify leading-normal"
                      : "hidden"
                  } w-10 `}
                />
              </span>
            </h3>
            <div
              className={
                questions.question5
                  ? "block p-4 text-justify leading-normal"
                  : "hidden"
              }
            >
              Le coût de l'adhésion dépend de la taille de votre entreprise.
              Veuillez consulter notre site web pour plus d'informations.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
