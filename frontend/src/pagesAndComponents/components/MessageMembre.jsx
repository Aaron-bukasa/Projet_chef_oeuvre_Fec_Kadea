import { Link } from "react-router-dom";

export default function MessageMembre() {
  return (
    <div className="bg-bg_icon-gray bg-cover h-full w-full">
      <div className="px-[10%] md:text-lg py-6 lg:px-[5%] xl:mx-auto xl:pt-6 2xl:px-[13%] leading-normal">
        <h2>Bienvenue [Nom du membre],</h2>
        <p className="my-1">
          Nous sommes ravis de vous compter parmi les membres de la Fédération
          des entreprises du Congo, FEC en sigle !
        </p>
        <p className="my-1">
          Pour profiter pleinement de l'exclusivité de nos services et contenus,
          veuillez finaliser votre inscription. <br /> 
          Pour suivre l'évolution de votre demande, veuillez cliquer sur le lien suivant <Link to="suiviDmd" className="text-sky-blue font-semibold underline">Suivi de la demande</Link>.
        </p>
        <p className="my-1">
          En finalisant votre inscription, vous aurez accès à un large éventail
          de ressources et d'opportunités exclusives.
        </p>
      </div>
    </div>
  );
}
