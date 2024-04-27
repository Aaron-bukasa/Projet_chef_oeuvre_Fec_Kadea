import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import imgFacebook from "../assets/images/facebook.svg";
import imgInstagram from "../assets/images/instagram.svg";
import imgTwitter from "../assets/images/twitter.png";
import imgLinkedin from "../assets/images/linkedin.svg";
import { useState } from "react";
import Response from "./Response";

export default function Contact() {
  const [isResponse, setIsResponse] = useState(false);
  const [isData, setIsData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    setIsLoading(true);

    data.message = data.message
      .replace(/</g, "&#60;")
      .replace(/>/g, "&#62;")
      .replace(/{/g, "&#123;")
      .replace(/}/g, "&#125;");

    try {
      const response = await axios.post(
        "http://localhost:3000/messages/receive",
        data
      );

      setIsLoading(false);
      setIsResponse(true);

      if (response.status === 200) {
        setIsError(false);
        return setIsData(response.data);
      } else {
        setIsError(true);
        return setIsData("Erreur lors de la soumission de la demande");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsResponse(true);
      return setIsData(
        "erreur lors de la soumission de votre demande au serveur"
      );
    }
  };

  return (
    <div className="bg-bg_desktop bg-cover">
      <div className="py-8 px-[10%] mx-auto 2xl:px-[13%]">
        <div className="mb-6 md:mb-8 max-w-5xl mx-auto">
          <h1 className="font-bold text-center text-primary-blue text-2xl mb-4 sm:text-3xl sm:pt-2 md:text-4xl lg:mb-8 lg:text-center xl:text-5xl xl:text-center">
            Nous contactez
          </h1>
          <p className="text-justify md:text-start md:leading-normal md:text-center md:text-xl xl:text-center">
            Que vous soyez un membre actuel, un futur membre ou un partenaire
            potentiel, nous sommes là pour vous.
          </p>
          <p className="text-justify md:leading-normal md:text-start md:text-xl md:text-lg">
            Voici quelques raisons de nous contacter : En savoir plus sur les
            avantages de l'adhésion, Demander une adhésion, Poser des questions
            sur les partenariats, Obtenir de l'aide pour un problème lié à votre
            adhésion.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-6 xl:gap-12">
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 md:text-lg lg:text-xl">
            <div className="md:text-lg">
              <h2 className="text-center sm:text-left font-semibold text-xl my-4  lg:text-2xl tracking-wider">
                Fédération des entreprises du Congo
              </h2>
              <div className="border-2 border-gray-300 p-3 my-4 rounded-lg ">
                <p className="mb-2">Adresse</p>
                <p>
                  10 Av des aviateurs, Gombe,
                  <br />
                  Kinshasa, RDC
                </p>
              </div>
              <div className="border-2 border-gray-300 p-3 my-4 rounded-lg">
                <p className="py-1">
                  Email :{" "}
                  <a
                    href="mailto:contact@federation-entreprises-congo.fr"
                    className="text-black"
                  >
                    contact@federation-entreprises-congo.fr
                  </a>
                </p>
                <p className="py-1">
                  Téléphone :{" "}
                  <a href="tel:+243825505783" className="text-black">
                    +243825505783
                  </a>
                </p>
              </div>
              <div className="border-2 border-gray-300 p-3 my-4 rounded-lg">
                <p className="mb-2">Heure de travail</p>
                <p>
                  Lundi – Vendredi: 8h00 – 16h00,
                  <br />
                  Samedi - Dimanche: Fermé.
                </p>
              </div>
            </div>
            <div >
              <h2 className="font-semibold text-xl my-2 lg:text-2xl tracking-wider">
                Suivez-nous
              </h2>
              <div className="flex items-center gap-x-4 md:my-6">
                <Link to="#" className="hover:opacity-80">
                  <img src={imgFacebook} alt="facebook" className="w-6 xl:w-8" />
                </Link>
                <Link to="#" className="hover:opacity-80">
                  <img src={imgInstagram} alt="instagramme" className="w-6 xl:w-8" />
                </Link>
                <Link to="#" className="hover:opacity-80">
                  <img src={imgTwitter} alt="twitter" className="w-6 xl:w-7" />
                </Link>
                <Link to="#" className="hover:opacity-80">
                  <img src={imgLinkedin} alt="twitter" className="w-6 xl:w-8" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-10 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              method="POST"
              encType="multipart/form-data"
              className="linear-bg border-2 text-white w-full px-3 py-4 rounded-xl sm:mb-6 md:mb-12 max-w-[768px] md:mx-auto flex flex-col gap-y-3 md:pb-6"
            >
              <h2 className="font-bold text-center text-2xl text-secondary-blue mb-1 sm:text-3xl sm:p-3 md:text-4xl lg:mb-6 lg:text-center lg:text-3xl xl:text-4xl">
                Nous écrire
              </h2>
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
                className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
              />
              {errors.nom && (
                <p className="text-red-500">{errors.nom.message}</p>
              )}
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
                className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
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
                className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none"
              />
              {errors.organisation && (
                <p className="text-red-500">{errors.objet.message}</p>
              )}
              <textarea
                id="message"
                placeholder="Entrez votre message ici"
                rows="5"
                className="border-2 rounded-lg text-black p-1 sm:p-3 text-sm sm:text-base outline-none xl:my-1"
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
              <input
                type="submit"
                value="Envoyer"
                className="text-white font-bold bg-btn-color p-3 md:p-4 rounded-xl hover:opacity-80 cursor-pointer xl:my-4"
              />
            </form>
            <Response
              isLoading={isLoading}
              setIsResponse={setIsResponse}
              isResponse={isResponse}
              isError={isError}
              isData={isData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
