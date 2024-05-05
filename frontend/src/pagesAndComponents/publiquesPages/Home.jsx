import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgFec01 from "../../assets/images/fec001.jpg";
import imgFec02 from "../../assets/images/fec002.jpg";
import imgMembre from "../../assets/images/membre01.jpg";
import iconArrow from "../../assets/images/arrow_downward.svg";
import imgAvantage01 from "../../assets/images/assistance.jpg";
import imgAvantage02 from "../../assets/images/avantage02.jpg";
import imgAvantage03 from "../../assets/images/representation.jpg";
import imgAvantage04 from "../../assets/images/appui.jpg";
import imgAvantage05 from "../../assets/images/avantage05.jpg";
import imgService003 from "../../assets/images/service003.jpg";
import logoMember001 from "../../assets/images/member001.png";
import logoMember002 from "../../assets/images/member002.png";
import logoMember003 from "../../assets/images/member003.png";
import logoMember004 from "../../assets/images/member004.png";
import logoMember005 from "../../assets/images/member005.png";
import logoMember006 from "../../assets/images/member006.png";
import logoMember007 from "../../assets/images/member007.png";
import logoMember008 from "../../assets/images/member008.png";
import logoMember009 from "../../assets/images/member009.png";
import logoMember010 from "../../assets/images/member010.png";
import logoMember011 from "../../assets/images/member011.png";
import logoMember012 from "../../assets/images/member012.png";
import logoMember013 from "../../assets/images/member013.png";
import imgTesti_01 from "../../assets/images/testi_avatar01.png";
import imgTesti_02 from "../../assets/images/testi_avatar02.png";
import imgTesti_03 from "../../assets/images/testi_avatar03.jpg";
import iconAvantage01 from "../../assets/images/help_center.svg";
import iconAvantage02 from "../../assets/images/security.svg";
import iconAvantage03 from "../../assets/images/co_present.svg";
import iconAvantage04 from "../../assets/images/support_agent.svg";
import Service from "../components/service";
import Temoignage from "../components/Temoignage";
import bg_002 from "../../assets/images/bg_002.jpg"

import { useEffect, useRef, useState } from "react";

export default function Home() {
  localStorage.getItem("token");

  const [isVisible, setIsVisible] = useState(false);
  const intersectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, []);

  return (
    <div className="leading-6 lg:leading-8">
      <Bannere />
      <div className="w-screen mx-auto">
        <DevenirMembre />
        <Avantages />
        <Temoignages />
      </div>
    </div>
  );
}

function Bannere() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative xl:h-[93vh]">
      <div className="w-full absolute bottom-0 top-0 pt-6 z-10 bg-[#00194c36] sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">
        <h1 className="inline-block font-bold text-xl text-center text-white p-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:text-6xl">
          FÉDÉRATION DES ENTREPRISES DU CONGO
        </h1>
          <div className="mt-6">
            <Link
              to="formulaireDmd"
              className="text-lg tracking-wide font-semibold text-white font-bold bg-red-600 p-3 rounded-lg hover:opacity-80 sm:text-xl sm:p-4 xl:text-xl"
            >
              Adhérer maintenant
            </Link>
          </div>
        <a href="#devenir_membre" className="py-3">
          <img
            src={iconArrow}
            alt="la fleche pointe vers le bas de la page pour montre les informations supplementaires"
            className="w-24 relative top-0 animated-arrow hidden lg:block"
          />
        </a>
      </div>
      <div>
        <img
          src={imgFec02}
          alt="fec"
          className="invisible w-full object-contain"
        />
      </div>
      <div className="absolute top-0 w-full h-full">
        <img
          src={imgFec01}
          alt="Image 1"
          style={{
            opacity: activeIndex === 0 ? 1 : 0,
            transition: "opacity 1s",
          }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 w-full h-full">
        <img
          src={imgFec02}
          alt="Image 2"
          style={{
            opacity: activeIndex === 1 ? 1 : 0,
            transition: "opacity 1s",
          }}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function DevenirMembre() {

  return (
    <div id="devenir_membre" className="relative">
       <div className="absolute top-0 left-0 w-full h-full z-[-999]">
          <img src={bg_002} alt="" className="" />
        </div>
      <div
        className="py-8 px-[10%] mx-auto md:pt-12 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:py-24 lg:px-[5%] 2xl:px-[13%]"
      >
        <div className="mb-4 sm:mx-auto tracking-wide md:mb-8 lg:col-start-1 lg:col-end-2">
          <h2 className="roboto-bold text-primary-blue mb-3 text-xl sm:mb-6 sm:text-2xl md:text-3xl lg:mb-12 lg:text-4xl">
            Devenez membre de la fédération des entreprises
          </h2>
          <p
            className="text-justify first-letter:font-bold first-letter:text-3xl first-letter:text-secondary-blue
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl md:text-xl"
          >
            La fédération des entreprises est une organisation qui rassemble et
            représente les entreprises de tous les secteurs d'activité.
          </p>
          <p className="text-justify md:text-xl">
            En adhérant à la fédération, vous bénéficierez de nombreux
            avantages, tels que:
          </p>
          <ul className="list-disc ml-6 py-3 md:text-lg md:text-xl">
            <li>
              <strong className="font-normal">Une Assistance</strong>
            </li>
            <li>
              <strong className="font-normal">Une Défense</strong>
            </li>
            <li>
              <strong className="font-normal">Une Réprésentation</strong>
            </li>
            <li>
              <strong className="font-normal">Un Appui aux Entreprises</strong>
            </li>
            <li>
              etc.
            </li>
          </ul>
          <Link
            to="formulaireDmd"
            className="bg-red-600 text-white font-bold inline-block p-3 rounded-xl my-2 hover:opacity-80 md:text-xl lg:text-xl lg:mt-6"
          >
            Adhérer à la fédération
          </Link>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:flex lg:justify-center">
          <img
            src={imgMembre}
            alt="la fédération des entreprises du congo"
            className="mx-auto lg:w-full lg:object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function Avantages({intersectionRef}) {
  return (
    <div className="relative bg-bg_icon-gray">
      <div
        ref={intersectionRef}
        id="avantages"
        className="px-[10%] pb-8  md:py-6 lg:px-[5%] xl:mx-auto xl:pt-4 2xl:px-[13%]"
      >
        <h2 className="font-bold text-center text-xl text-primary-blue mb-6 pt-6 sm:text-2xl sm:my-12 md:text-3xl md:my-6 md:pt-0 md:pb-4 lg:text-center lg:text-4xl xl:my-12 xl:text-5xl">
          Les avantages de l'adhésion
        </h2>
        <div className="grid grid-col-1 grid-row-6 sm:grid-col-2 sm:grid-row-3 lg:grid-col-3 lg:grid-row-2 justify-center gap-6 mb-12 lg:gap-3 lg:justify-between xl:gap-6">
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
          <Service
            imgService={imgService003}
            iconService={iconAvantage04}
            titleService="Service d’accompagnement et de facilitation"
            paramService="pour l'accomplissement des formalités administratives relatives
                  à la création ou à la reprise d'entreprise."
            className="max-w-[480px] col-start-1 col-end-2 row-start-6 row-end-7 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3"
          />
        </div>
        <div className="mx-auto w-max lg:mt-24 lg:mb-12">
          <Link
            to="/services"
            className="text-white rounded-lg font-bold tracking-wider flex items-center justify-center bg-red-600 py-3 px-6 sm:text-lg sm:py-3 sm:px-6 md:py-4 lg:text-xl xl:px-12"
          >
            <span>Voir plus</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-arrowForward" fill="#ffffff" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Temoignages() {
  const partenaires = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Temoignages" className="relative">
       <div className="absolute top-0 left-0 w-full h-full z-[-999]">
          <img src={bg_002} alt="" className="w-full h-full object-cover"/>
        </div>
      <div className="px-[10%] lg:px-[5%] 2xl:px-[13%]">
        <div className="sm:py-6 md:py-12 mx-auto">
          <h2 className="font-bold text-center text-primary-blue text-xl sm:text-2xl mb-6 sm:mb-12 md:text-3xl pt-6 lg:mb-12 lg:text-center lg:text-4xl xl:text-5xl">
            Ce qu’ils disent de nous
          </h2>
          <div className="text-white leading-7 md:tracking-wider">
            <div className="grid gap-6 grid-cols-1 grid-rows-[repeat(3,max-content)] sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:justify-between">
              <Temoignage
                text="Avant d'être membre a la FEC, je travaillais avec des micros
                  et des petites entreprises. Aujourd'hui, ça fait 26 ans que je
                  suis à la FEC, j'ai comme clients des moyennes et des grandes
                  entreprises. ça c'est grâce&nbsp;à&nbsp;la&nbsp;FEC&nbsp;!"
                imgTestim={imgTesti_01}
                name="Eliane MUNKENI"
                statut="Présidente Nationale, FEC"
                className="col-start-1 col-end-2 row-start-1 row-end-2 md:h-max"
              />
              <Temoignage
                text="La FEC est comme un employé en plus dans votre société. Elle
                vous donne le meilleur d'elle-même. Elle résout vos problèmes
                sans être présente dans vos locaux ou bureaux. Il faut juste
                la contacter. Elle vous défend et fait votre marketing. Il
                faut&nbsp;en&nbsp;être&nbsp;membre"
                imgTestim={imgTesti_02}
                name="Eric MONGA"
                statut="Vice Président Nationale, FEC"
                className="col-start-1 col-end-2 row-start-2 row-end-3 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 md:h-max"
              />
              <Temoignage
                text="J&#32;'ai la vision d'un Congo fort et prospère. Je reste
                convaincu que si chacun d'entre nous, à son niveau, met le
                professionnalisme et le sérieux dans ce qu'il a à faire, nous
                réussirons à redevenir&nbsp;ce&nbsp;grand Congo"
                imgTestim={imgTesti_03}
                name="Yvonne KUSUAMINA"
                statut="DG Pay Network"
                className="col-start-1 col-end-2 row-start-3 row-end-4 sm:row-start-2 sm:row-end-3 md:h-max lg:h-auto lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 px-[10%] sm:py-12 mx-auto md:py-0 lg:px-[5%] xl:py-12 2xl:px-[13%]">
        <h2 className="font-bold text-center text-primary-blue text-xl mb-8 pt-6 sm:mb-12 sm:text-2xl md:text-3xl lg:mb-12 lg:text-center lg:text-4xl xl:text-5xl xl:mb-16">
          Ils nous accompagnent
        </h2>
        <Slider {...partenaires} className="w-full">
          <div className="w-28 h-28">
            <img src={logoMember001} alt="membre 1" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember002} alt="membre 2" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember003} alt="membre 3" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember004} alt="membre 4" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember005} alt="membre 5" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember006} alt="membre 6" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember007} alt="membre 7" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember008} alt="membre 8" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember009} alt="membre 9" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember010} alt="membre 10" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember011} alt="membre 11" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember012} alt="membre 12" />
          </div>
          <div className="w-28 h-28">
            <img src={logoMember013} alt="membre 13" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
