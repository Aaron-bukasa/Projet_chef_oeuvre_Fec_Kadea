import imgLogo from "../../assets/images/logoFec.svg";

export default function FecLocalisation({ className }) {
    return (
      <div className={className}>
        <img
          src={imgLogo}
          alt="Logo de la fédération"
          className="w-32 mb-1 md:w-40"
        />
        <div>
          <h2 className="font-semibold text-lg md:text-xl mb-1 sm:mb-4 xl:mb-7">
            Fédération des entreprises du Congo
          </h2>
          <p>
            10 Av des aviateurs, Gombe,
            <br />
            Kinshasa, RDC
          </p>
          <p>Téléphone: +243825505783</p>
          <p>Email: contact@federation-entreprises-congo.fr</p>
          <p>
            Lundi – Vendredi: 8h00 – 16h00,
            <br />
            Samedi - Dimanche: Fermé.
          </p>
        </div>
      </div>
    );
  }