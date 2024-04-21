import { Link } from "react-router-dom";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";
import imgBackTop from "../assets/images/expand_less.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Footer() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/newsletter/subscribe', {
        email: data.email
      });
      
      if (response.status === 201) { 
          return alert(response.data)
      } else {
        console.error('Erreur lors de la soumission de demande');
      }
    } catch (error) {
      console.error('Axios error:', error);
    } finally {
      data.email = '';
    }
  };

  return (
    <div className="lg:py-6 bg-zinc-300 text-[#000033]">
      <div className="grid gap-6 grid-cols-1 grid-rows-[repeat(4,max-content)] gap-6 p-6 text-lg sm:grid-cols-3 sm:grid-rows-[repeat(2,max-content)] 2xl:px-44 max-w-[1586px] mx-auto justify-between">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <img src={imgLogo} alt="Logo de la fédération" className="w-[180px]" />
        <div>
          <h2 className="font-semibold text-xl my-4" >
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
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 tracking-wider flex sm:justify-center">
        <ul className="flex flex-col gap-y-1">
          <h2 className="font-semibold text-2xl mb-3 w-max">Menu</h2>
          <li>
            <Link to="/" className="text-primary-blue hover:text-focus-color">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-primary-blue  hover:text-focus-color">
              Avantages
            </Link>
          </li>
          <li>
            <Link
              to="formulaireDmd"
              className="text-primary-blue  hover:text-focus-color"
            >
              Adhésion
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-primary-blue hover:text-focus-color">
              Faq
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-primary-blue  hover:text-focus-color">
              Contact
            </Link>
          </li>
          <li>
            <Link to="login" className="text-primary-blue  hover:text-focus-color">
              Se connecter
            </Link>
          </li>
          <li>
            <Link to="signup" className="text-primary-blue  hover:text-focus-color">
              S'inscrire
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2">
        <div>
          <div className="newsletter">
            <h2 className="font-semibold text-2xl mb-4 xl:mb-7">
              Inscrivez-vous à notre newsletter
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-y-3">
              <input
                {...register("email", {
                  required: 'Adresse email requise',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: 'Adresse email invalide'
                  }
                })}
                type="text"
                name="email"
                placeholder="Email"
                className={`className="w-[200px] p-3 rounded-l-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300" ${errors.email ? 'border-red-500' : ''}`}
              />
              <button
                type="submit"
                className="shrink-0 w-max p-3 bg-[#003366] text-white font-semibold rounded-r-lg hover:opacity-80"
              >
                Soumettre
              </button>
              </div>
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </form>
          </div>
          <div className="">
            <h2 className="font-semibold text-2xl mt-6 w-max after:content-[''] after:block after:bg-secondary-blue after:w-full after:mt-1">Suivez-nous</h2>
            <div className="flex items-center gap-x-4 my-6">
              <Link to="#" className="hover:opacity-60">
                <img src={imgFacebook} alt="facebook" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-60">
                <img src={imgInstagram} alt="instagramme" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-60">
                <img src={imgTwitter} alt="twitter" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-60">
                <img src={imgLinkedin} alt="twitter" className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-2 row-start-4 row-end-5 sm:col-end-4 sm:row-start-2 sm:row-end-3">
        <div className="border-t-2 pt-5">
          &copy; 2024 - Fédération des Entreprises du Congo. Tous droits
          réservés
        </div>
      </div>
    </div>
    </div>
  );
}
