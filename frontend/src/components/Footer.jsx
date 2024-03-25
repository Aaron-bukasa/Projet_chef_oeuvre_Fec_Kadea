import imgLogo from '../assets/images/logoFec.svg'

export default function Footer() {
  return (
    <div className='text-white bg-primary-blue p-6'>
        <div>
            <div className="contact">
                <h2>Fédération des entreprises</h2>
                <div>
                12 rue de l'Industrie
                <br />
                75000 Paris
                <br />
                France
                <br />
                Téléphone: +33 1 23 45 67 89
                <br />
                Email: contact@federation-entreprises.fr
                </div>
            </div>
        </div>
      <div>
        <div className="newsletter">
          <h3>Inscrivez-vous à notre newsletter</h3>
          <form action="#">
            <input type="email" placeholder="Votre adresse email" />
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/federationentreprises">facebook</a>
          <a href="https://www.twitter.com/federationentreprises">twitter</a>
          <a href="https://www.linkedin.com/company/federationentreprises">
            linkedin
          </a>
        </div>
        <div className="adhesion">
          <a href="adhesion.html">Adhérez à la fédération</a>
        </div>
      </div>
    <div>
        <img src={imgLogo} />
      <div className="copyright">&copy; 2023 - Fédération des entreprises</div>
    </div>
    </div>
  );
}
