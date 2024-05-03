import imgLogo from "../../assets/images/logoFec.svg";

export default function FecLocalisation({ className }) {
    return (
      <div className={className}>
        <img
          src={imgLogo}
          alt="Logo de la fédération"
          className="w-32 mb-1 md:w-40"
        />
        <div className="mt-6">
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