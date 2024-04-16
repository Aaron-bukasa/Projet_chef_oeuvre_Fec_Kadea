import imgAvantage01 from "../assets/images/assistance.jpg";
import imgAvantage02 from "../assets/images/avantage02.jpg";
import imgAvantage03 from "../assets/images/representation.jpg";
import imgAvantage04 from "../assets/images/appui.jpg";
import imgAvantage05 from "../assets/images/avantage05.jpg";
import bg_banner from "../assets/images/bg_banner.jpg";
import imgService001 from "../assets/images/service002.jpg";
import imgService002 from "../assets/images/service002.jpg";
import imgService003 from "../assets/images/service003.jpg";
import imgService004 from "../assets/images/service004.jpg";
import imgService005 from "../assets/images/service005.jpg";
import imgService006 from "../assets/images/service006.jpg";

export default function Services() {
  return (
    <div className="relative">
      <div className="absolute w-full top-0 rotate-[180deg] z-[-999]">
        <img src={bg_banner} alt="image background" className="w-full" />
      </div>
      <ServicesBase />
      <ServicesPayants />
      <div className="absolute w-full bottom-0 z-[-999]">
        <img src={bg_banner} alt="image background" className="w-full" />
      </div>
    </div>
  );
}

function ServicesBase() {
  return (
      <div id="avantages" className="mx-6 max-w-[1386px] xl:mx-auto xl:pt-12 ">
        <h2 className="font-bold text-center text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nos services de base
        </h2>
        <div className="grid grid-col-1 grid-row-5 sm:grid-col-2 sm:grid-row-3 lg:grid-col-3 lg:grid-row-2 justify-center gap-6 mb-12">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 max-w-[480px] p-3 rounded-xl shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage01}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                </svg>
                Une Assistance
              </h3>
              <p className="text-lg">
                L’assistance en matière d'interprétation des textes légaux et
                règlementaires.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage02}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z" />
                </svg>
                Une Défense
              </h3>
              <p className="text-lg">
                La défense des intérêts des membres en cas de conflit collectif
                du travail.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage03}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z" />
                </svg>
                Une Réprésentation
              </h3>
              <p className="text-lg">
                La représentation des membres dans les réunions, commissions,
                Organismes nationaux et internationaux.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-4 row-end-5 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-1 lg:col-end-2 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage04}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                </svg>
                Un Appui aux Entreprises
              </h3>
              <p className="text-lg">
                L’appui des entreprises auprès des administrations sur toute
                question à caractère juridique, social et fiscal.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-5 row-end-6 sm:row-start-3 sm:row-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage05}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                </svg>
                Information
              </h3>
              <p className="text-lg">
              L’appui des entreprises auprès des administrations sur toute question à caractère juridique, social et fiscal
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

function ServicesPayants() {
  return(
      <div
        id="avantages"
        className="mx-6 max-w-[1386px] xl:mx-auto xl:pb-24 xl:pt-12 "
      >
        <h2 className="font-bold text-center text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Nos services payants
        </h2>
        <div className="grid grid-col-1 grid-row-6 sm:grid-col-2 sm:grid-row-3 lg:grid-col-3 lg:grid-row-2 justify-center gap-6 mb-12">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 max-w-[480px] p-3 rounded-xl shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgService001}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                </svg>
                Rédaction d’actes juridiques
              </h3>
              <p className="text-lg">
              Contrats, convention de résiliation de contrat de travail de commun accord, statuts sociaux d'une entreprise en création, protocole d'accord, projet de convention collective ou de règlement d'une entreprise, etc.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgService002}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z" />
                </svg>
                Organisation des matinées d’informations et d’échanges
              </h3>
              <p className="text-lg">
              sur les questions d'actualités à caractère juridique, social et fiscal;.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgService003}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z" />
                </svg>
                Service d’accompagnement et de facilitation
              </h3>
              <p className="text-lg">
              pour l'accomplissement des formalités administratives relatives à la création ou à la reprise d'entreprise;
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-4 row-end-5 sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-1 lg:col-end-2 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgService005}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                </svg>
                Accompagnement individualisé
              </h3>
              <p className="text-lg">
              Dans la phase administrative du contentieux fiscal ou des recettes non fiscales,
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-5 row-end-6 sm:row-start-3 sm:row-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgService004}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                </svg>
                Service de facilitation
              </h3>
              <p className="text-lg">
              A l'obtention de la carte de travail pour étranger et de la carte de résidentet d'autres documents officiels,
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-2 row-start-6 row-end-7 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 p-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgService006}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                </svg>
                Organisation des sessions de formation
              </h3>
              <p className="text-lg">
              Des salons et foires, des déjeuners de travail, des missions économiques à l'exterieur.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
