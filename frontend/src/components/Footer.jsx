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
    <div className="grid grid-cols-5 grid-rows-[repeat(6,max-content)] gap-6 p-6 text-lg sm:grid-cols-4 sm:grid-rows-[repeat(4,max-content)] lg:grid-cols-3 lg:grid-rows-[repeat(3,max-content)] lg:content-center 2xl:grid-cols-[max-content,1fr,max-content,repeat(2,1fr)] 2xl:grid-rows-[repeat(2,max-content)] 2xl:px-44 shadow-top">
      <div className="flex justify-center align-center col-start-1 col-end-6 row-start-1 row-end-2 sm:col-end-3 lg:col-end-2 px-6">
        <img src={imgLogo} alt="Logo de la fédération" className="w-[180px]" />
      </div>
      <div className="col-start-1 col-end-6 row-start-2 row-end-3 sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-2 lg:col-start-2 lg:col-end-3 flex flex-col items-center">
        <div>
          <h2 className="font-semibold text-xl mb-4 lg:text-2xl after:content-[''] after:block after:bg-secondary-blue after:h-[3px] after:w-full after:mt-1" >
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
      <div className="col-start-1 col-end-6 row-start-3 row-end-4 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 flex flex-col items-center px-6 tracking-wider">
        <ul>
          <h2 className="font-semibold text-2xl mb-3 w-max after:content-[''] after:block after:bg-secondary-blue after:h-[3px] after:w-full after:mt-1">Menu</h2>
          <li>
            <Link to="/" className="text-black hover:text-[#4885ff]">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-black hover:text-[#4885ff]">
              Avantages
            </Link>
          </li>
          <li>
            <Link
              to="formulaireDmd"
              className="text-black hover:text-[#4885ff]"
            >
              Adhésion
            </Link>
          </li>
          <li>
            <Link to="/faq" className="text-black hover:text-[#4885ff]">
              Faq
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-[#4885ff]">
              Contact
            </Link>
          </li>
          <li>
            <Link to="login" className="text-black hover:text-[#4885ff]">
              Se connecter
            </Link>
          </li>
          <li>
            <Link to="signup" className="text-black hover:text-[#4885ff]">
              S'inscrire
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-start-1 col-end-6 row-start-4 row-end-5 sm:col-start-3 sm:col-end-5 sm:row-start-2 sm:row-end-3 lg:col-start-1 lg:col-end-3 2xl:col-start-4 2xl:col-end-5 2xl:row-start-1 2xl:row-end-2 flex flex-col items-center">
        <div>
          <div className="newsletter">
            <h2 className="font-semibold text-2xl mb-4 xl:mb-7 after:content-[''] after:block after:bg-secondary-blue after:h-[3px] after:w-full after:mt-1">
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
                className="shrink-0 w-max p-3 bg-gray-400 text-white font-semibold rounded-r-lg hover:opacity-80"
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
              <Link to="#" className="hover:opacity-80">
                <img src={imgFacebook} alt="facebook" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <img src={imgInstagram} alt="instagramme" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <img src={imgTwitter} alt="twitter" className="w-8" />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <img src={imgLinkedin} alt="twitter" className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-6 row-start-5 row-end-5 sm:row-start-3 sm:row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 2xl:col-start-5 2xl:col-end-6 2xl:row-start-1 2xl:row-end-2 flex flex-col items-center">
        <div>
          <h2 className="font-semibold text-2xl mb-5 w-max after:content-[''] after:block after:bg-secondary-blue after:h-[3px] after:w-full after:mt-1">Actions</h2>
          <div className="flex flex-col gap-y-4">
            <Link
              to="formulaireDmd"
              className="text-xl font-semibold text-white font-bold bg-red-600 p-2 rounded-xl hover:opacity-80 w-max"
            >
              Adhérer maintenant
            </Link>
            <Link
              to="suiviDmd"
              className="text-primary-blue font-bold text-primary-blue border-2 border-primary-blue p-2 bg-white rounded-xl hover:bg-gray-100 text-xl w-max"
            >
              Suivi de la demande
            </Link>
            <a
              href="#root"
              className="w-12 h-12 rounded-full flex items-center justify-center p-1 border-4 border-black"
            >
              <img src={imgBackTop} alt="bouton de retour" className="w-full" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-6 row-start-6 row-end-7 sm:row-start-4 sm:row-end-5 sm:col-end-5 lg:col-end-4 lg:row-start-3 lg:row-end-4 2xl:col-end-6 2xl:row-start-2 2xl:row-end-3">
        <div className="border-t-2 pt-5">
          &copy; 2024 - Fédération des Entreprises du Congo. Tous droits
          réservés
        </div>
      </div>
    </div>
  );
}
