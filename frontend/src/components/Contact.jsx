import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import imgLogo from "../assets/images/logoFec.svg";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.message = data.message
      .replace(/</g, "&#60;")
      .replace(/>/g, "&#62;")
      .replace(/{/g, "&#123;")
      .replace(/}/g, "&#125;");
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:3000/message/send",
        data
      );

      if (response.status === 200) {
        alert(response.data);
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error("Erreur Axios:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Cordonnées</h2>
        <div>
          <h3 className="font-semibold text-xl mb-4 lg:text-2xl after:content-[''] after:block after:bg-secondary-blue after:h-[3px] after:w-full after:mt-1">
            Fédération des entreprises du Congo
          </h3>
          <div>
            <p>Adresse :</p>
            <p>
              10 Av des aviateurs, Gombe,
              <br />
              Kinshasa, RDC
            </p>
          </div>
          <div>
            <p>Email: contact@federation-entreprises-congo.fr</p>
            <p>Téléphone: +243825505783</p>
          </div>
          <div>
            <p>Heure de travail</p>
            <p>
              Lundi – Vendredi: 8h00 – 16h00,
              <br />
              Samedi - Dimanche: Fermé.
            </p>
          </div>
        </div>
        <div>
        <img src={imgLogo} alt="Logo de la fédération" className="w-[180px]" />
        </div>
        <div>
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
      <div className="mx-2 md:mx-6 my-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          method="POST"
          encType="multipart/form-data"
          className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-6 pb-12"
        >
          <h1 className="font-bold text-xl text-center p-6 sm:text-2xl md:text-3xl xl:text-4xl xl:mb-6">
            Nous écrire
          </h1>
          <input
            {...register("nom", {
              required: "Nom complet requis",
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                message: "Veuillez saisir un nom valide",
              },
            })}
            type="text"
            placeholder="Nom complet"
            className="border-2 h-10 rounded-lg text-black p-3"
          />
          {errors.nom && <p className="text-red-500">{errors.nom.message}</p>}
          <input
            {...register("email", {
              required: "Adresse email requise",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Veuillez saisir une adresse email valide",
              },
            })}
            type="text"
            placeholder="Email"
            className="border-2 h-10 rounded-lg text-black p-3"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("objet", {
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Veuillez saisir un objet valide",
              },
            })}
            type="text"
            placeholder="Objet"
            className="border-2 h-10 rounded-lg text-black p-3"
          />
          {errors.organisation && (
            <p className="text-red-500">{errors.objet.message}</p>
          )}
          <textarea
            id="message"
            placeholder="Entrez votre message ici"
            {...register("message", {
              required: "Ce champ est requis",
              maxLength: {
                value: 256,
                message: "Le message ne peut pas dépasser 100 caractères",
              },
            })}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}

          <div>
            <input
              type="submit"
              value="Soumettre la demande"
              className="text-white font-bold bg-sky-blue p-3 rounded-xl hover:opacity-80 cursor-pointer"
            />
            <button
              type="submit"
              className="ml-6 bg-[#dc3545] text-white font-bold bg-sky-blue p-3 rounded-xl hover:opacity-80"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
