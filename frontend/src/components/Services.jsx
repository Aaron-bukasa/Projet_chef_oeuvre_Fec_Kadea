import imgAvantage01 from "../assets/images/assistance.jpg";
import imgAvantage02 from "../assets/images/avantage02.jpg";
import imgAvantage03 from "../assets/images/representation.jpg";
import imgAvantage04 from "../assets/images/appui.jpg";
import imgAvantage05 from "../assets/images/avantage05.jpg";
import imgService001 from "../assets/images/service002.jpg";
import imgService002 from "../assets/images/service002.jpg";
import imgService003 from "../assets/images/service003.jpg";
import imgService004 from "../assets/images/service004.jpg";
import imgService005 from "../assets/images/service005.jpg";
import imgService006 from "../assets/images/service006.jpg";
import iconAvantage01 from "../assets/images/help_center.svg";
import iconAvantage02 from "../assets/images/security.svg";
import iconAvantage03 from "../assets/images/co_present.svg";
import iconAvantage04 from "../assets/images/support_agent.svg";
import Service from "./service";

export default function Services() {
  return (
    <div>
      <ServicesBase />
      <ServicesPayants />
    </div>
  );
}

function ServicesBase() {
  return (
      <div id="avantages" className="mx-6 max-w-[1386px] xl:mx-auto xl:pt-6 ">
        <h2 className="font-bold text-center text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nos services de base
        </h2>
        <div className="grid grid-col-1 grid-row-6 sm:grid-col-2 sm:grid-row-3 lg:grid-col-3 lg:grid-row-2 justify-center gap-6 mb-12 lg:gap-12">
          <Service
            imgService={imgAvantage01}
            iconService={iconAvantage01}
            titleService="Une Assistance"
            paramService="L’assistance en matière d'interprétation des textes légaux et règlementaires."
            className="col-start-1 col-end-2 row-start-1 row-end-2 max-w-[480px]"
          />
          <Service
            imgService={imgAvantage02}
            iconService={iconAvantage02}
            titleService=" Une Défense"
            paramService="La défense des intérêts des membres en cas de conflit collectif
                du travail."
            className="max-w-[480px] col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2"
          />
          <Service
            imgService={imgAvantage03}
            iconService={iconAvantage03}
            titleService="Une Réprésentation"
            paramService="La représentation des membres dans les réunions, commissions, Organismes nationaux et internationaux."
            className="max-w-[480px] col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
          />
          <Service
            imgService={imgAvantage04}
            iconService={iconAvantage04}
            titleService="Un Appui aux Entreprise"
            paramService="L’appui des entreprises auprès des administrations sur toute
                  question à caractère juridique, social et fiscal."
            className="max-w-[480px] col-start-1 col-end-2 row-start-4 row-end-5 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-1 lg:col-end-2"
          />
          <Service
            imgService={imgAvantage05}
            iconService={iconAvantage04}
            titleService="Information"
            paramService="L’appui des entreprises auprès des administrations sur toute
                  question à caractère juridique, social et fiscal."
            className="max-w-[480px] col-start-1 col-end-2 row-start-5 row-end-6 sm:row-start-3 sm:row-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"
          />
        </div>
      </div>
  );
}

function ServicesPayants() {
  return(
      <div
        id="avantages"
        className="mx-6 max-w-[1386px] xl:mx-auto xl:p-6"
      >
        <h2 className="font-bold text-center text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nos services payants
        </h2>
         <div className="grid grid-col-1 grid-row-6 sm:grid-col-2 sm:grid-row-3 lg:grid-col-3 lg:grid-row-2 justify-center gap-6 mb-12 lg:gap-12">
          <Service
            imgService={imgService001}
            iconService={iconAvantage01}
            titleService="Rédaction d’actes juridiques"
            paramService="Contrats, convention de résiliation de contrat de travail de commun accord, statuts sociaux d'une entreprise en création, protocole d'accord, projet de convention collective ou de règlement d'une entreprise, etc."
            className="col-start-1 col-end-2 row-start-1 row-end-2 max-w-[480px]"
          />
          <Service
            imgService={imgService002}
            iconService={iconAvantage02}
            titleService="Organisation des matinées d’informations et d’échanges"
            paramService="sur les questions d'actualités à caractère juridique, social et fiscal."
            className="max-w-[480px] col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2"
          />
          <Service
            imgService={imgService003}
            iconService={iconAvantage03}
            titleService="Service d’accompagnement et de facilitation"
            paramService="pour l'accomplissement des formalités administratives relatives à la création ou à la reprise d'entreprise."
            className="max-w-[480px] col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
          />
          <Service
            imgService={imgService004}
            iconService={iconAvantage04}
            titleService="Accompagnement individualisé"
            paramService="Dans la phase administrative du contentieux fiscal ou des recettes non fiscales."
            className="max-w-[480px] col-start-1 col-end-2 row-start-4 row-end-5 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-1 lg:col-end-2"
          />
          <Service
            imgService={imgService005}
            iconService={iconAvantage04}
            titleService="Service de facilitation"
            paramService="A l'obtention de la carte de travail pour étranger et de la carte de résidentet d'autres documents officiels."
            className="max-w-[480px] col-start-1 col-end-2 row-start-5 row-end-6 sm:row-start-3 sm:row-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"
          />
          <Service
            imgService={imgService006}
            iconService={iconAvantage04}
            titleService="Organisation des sessions de formation"
            paramService="Des salons et foires, des déjeuners de travail, des missions économiques à l'exterieur."
            className="max-w-[480px] col-start-1 col-end-2 row-start-6 row-end-7 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3"
          />
        </div>
      </div>
  )
}
