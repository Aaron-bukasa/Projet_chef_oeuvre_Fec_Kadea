import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgFec01 from "../assets/images/fec001.jpg";
import imgFec02 from "../assets/images/fec002.jpg";
import imgMembre from "../assets/images/membre01.jpg";
import iconArrow from "../assets/images/arrow_downward.svg";
import imgAvantage01 from "../assets/images/assistance.jpg";
import imgAvantage02 from "../assets/images/avantage02.jpg";
import imgAvantage03 from "../assets/images/representation.jpg";
import imgAvantage04 from "../assets/images/appui.jpg";
import logoMember001 from "../assets/images/member001.png";
import logoMember002 from "../assets/images/member002.png";
import logoMember003 from "../assets/images/member003.png";
import logoMember004 from "../assets/images/member004.png";
import logoMember005 from "../assets/images/member005.png";
import logoMember006 from "../assets/images/member006.png";
import logoMember007 from "../assets/images/member007.png";
import logoMember008 from "../assets/images/member008.png";
import logoMember009 from "../assets/images/member009.png";
import logoMember010 from "../assets/images/member010.png";
import logoMember011 from "../assets/images/member011.png";
import logoMember012 from "../assets/images/member012.png";
import logoMember013 from "../assets/images/member013.png";
import imgTesti_01 from "../assets/images/testi_avatar01.png";
import imgTesti_02 from "../assets/images/testi_avatar02.png";
import imgTesti_03 from "../assets/images/testi_avatar03.jpg";
import bg_banner from "../assets/images/bg_banner.jpg";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  localStorage.getItem("token");

  return (
    <div className="leading-6 lg:leading-8">
      <Bannere />
      <div className="w-screen mx-auto">
        <DevenirMembre />
        <Avantages />
        <Temoignages />
        <Faq />
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
    <div className="relative xl:h-[85vh]">
      <div className="w-full absolute bottom-[15%] py-6 z-10 sm:px-6 md:px-12 lg:px-24 xl:bottom-[30%] flex flex-col items-center">
        <h1 className="inline-block font-bold text-2xl text-center text-white bg-[#00194c69] p-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          FÉDÉRATION DES ENTREPRISES DU CONGO
        </h1>
        <img
          src={iconArrow}
          alt="la fleche pointe vers le bas de la page pour montre les informations supplementaires"
          className="w-24 relative top-12 animated-arrow hidden lg:block xl:top-24"
        />
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
  const intersectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="bg-bg_banner bg-cover">
      <div
        id="devenir_membre"
        className="p-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:py-24 xl:gap-x-12 xl:max-w-[1536px] mx-auto"
      >
        <div className="lg:col-start-1 lg:col-end-2">
          <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl 2xl:text-4xl">
            Devenez membre de la fédération des entreprises
          </h2>
          <p className="md:text-lg 2xl:text-xl">
            La fédération des entreprises est une organisation qui rassemble et
            représente les entreprises de tous les secteurs d'activité.
          </p>
          <p className="md:text-lg 2xl:text-xl">
            En adhérant à la fédération, vous bénéficierez de nombreux
            avantages, tels que:
          </p>
          <ul className="list-disc ml-6 py-2 md:text-lg 2xl:text-xl">
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
          </ul>
          <Link
            to="formulaireDmd"
            className="text-white font-bold bg-sky-blue inline-block p-3 rounded-xl my-3 hover:opacity-80 lg:text-xl lg:mt-12"
          >
            Adhérer à la fédération
          </Link>
        </div>
        <div
          ref={intersectionRef}
          className={`${
            isVisible && "animated-visible"
          } opacity-0 lg:col-start-2 lg:col-end-3 lg:flex lg:justify-center`}
        >
          <img
            src={imgMembre}
            alt="la fédération des entreprises du congo"
            className="mx-auto sm:w-[80%] lg:w-full lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function Avantages() {
  return (
    <div className="relative">
      <div className="absolute w-full top-0 rotate-[180deg] z-[-999]">
        <img src={bg_banner} alt="image background" className="w-full" />
      </div>
      <div
        id="avantages"
        className="mx-6 max-w-[1536px] xl:mx-auto xl:pb-24 xl:pt-12 "
      >
        <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Les avantages de l'adhésion
        </h2>
        <div className="grid grid-col-2 grid-row-4 lg:grid-row-2 justify-center gap-6 mb-12 lg:gap-x-24">
          <div className="max-w-[480px] col-start-1 col-end-3 row-start-1 row-end-2 lg:col-start-1 lg:col-end-2 p-3 rounded-xl shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage01}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-240q21 0 35.5-14.5T530-290q0-21-14.5-35.5T480-340q-21 0-35.5 14.5T430-290q0 21 14.5 35.5T480-240Zm-36-154h74q0-36 8-53t34-43q35-35 49.5-58.5T624-602q0-53-36-85.5T491-720q-55 0-93.5 27T344-618l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-33 29-45.5 55.5T444-394ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                Une Assistance
              </h3>
              <p className="text-lg">
                L’assistance en matière d'interprétation des textes légaux et
                règlementaires.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 p-3 lg:row-start-1 lg:row-end-2 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage02}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>
                Une Défense
              </h3>
              <p className="text-lg">
                La défense des intérêts des membres en cas de conflit collectif
                du travail.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-3 row-start-3 row-end-4 lg:col-start-1 lg:col-end-2 p-3 lg:row-start-2 lg:row-end-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage03}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z"/></svg>
                Une Réprésentation
              </h3>
              <p className="text-lg">
                La représentation des membres dans les réunions, commissions,
                Organismes nationaux et internationaux.
              </p>
            </div>
          </div>
          <div className="max-w-[480px] col-start-1 col-end-3 row-start-4 row-end-5 lg:col-start-2 lg:col-end-3 p-3 lg:row-start-2 lg:row-end-3 rounded-xl  shadow-lg">
            <div className="mb-3 h-[280px]">
              <img
                src={imgAvantage04}
                alt="Réseau"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center justify-center gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/></svg>
                Un Appui aux Entreprises
              </h3>
              <p className="text-lg">
                L’appui des entreprises auprès des administrations sur toute
                question à caractère juridique, social et fiscal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 z-[-999]">
        <img src={bg_banner} alt="image background" className="w-full" />
      </div>
    </div>
  );
}

function Temoignages() {
  const faqAutoplay = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  const partenairesRTL = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
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
    <div id="Temoignages" className="">
      <div className="bg-bg_temoignages px-6">
        <div className=" px-6 py-12 xl:max-w-[1536px] mx-auto">
          <h2 className="font-bold text-center text-white text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Ce qu’ils disent de nous
          </h2>
          <div className="text-white leading-7 md:tracking-wider">
            <Slider {...faqAutoplay}>
              <div className="max-w-[450px] md:h-[353px] text-black p-6 bg-gray-100 rounded-xl md:relative">
                <div
                  className="mb-3 first-letter:font-bold first-letter:text-3xl first-letter:text-secondary-blue
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl"
                >
                  Avant d'être membre a la FEC, je travaillais avec des micros
                  et des petites entreprises. Aujourd'hui, ça fait 26 ans que je
                  suis à la FEC, j'ai comme clients des moyennes et des grandes
                  entreprises. ça c'est grâce&nbsp;à&nbsp;la&nbsp;FEC&nbsp;!
                </div>
                <div className="flex gap-x-3 items-center bg-gray-200 p-3 mt-6 md:absolute md:bottom-2 md:w-[90%] lg:bottom-8">
                  <div>
                    <img src={imgTesti_01} alt="" />
                  </div>
                  <div>
                    <h4 className="text-secondary-blue font-bold text-lg">
                      Eliane MUNKENI
                    </h4>
                    <p className="text-sm">Présidente Nationale, FEC</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[450px] md:h-[353px] text-black p-6 bg-gray-100 rounded-xl md:relative">
                <blockquote
                  className="mb-3 first-letter:font-bold first-letter:text-3xl first-letter:text-secondary-blue
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl"
                >
                  La FEC est comme un employé en plus dans votre société. Elle
                  vous donne le meilleur d'elle-même. Elle résout vos problèmes
                  sans être présente dans vos locaux ou bureaux. Il faut juste
                  la contacter. Elle vous défend et fait votre marketing. Il
                  faut&nbsp;en&nbsp;être&nbsp;membre
                </blockquote>
                <div className="flex gap-x-3 items-center bg-gray-200 p-3 md:absolute md:bottom-2 md:w-[90%] lg:bottom-8">
                  <div>
                    <img src={imgTesti_02} alt="" />
                  </div>
                  <div>
                    <h4 className="text-secondary-blue font-bold text-lg">
                      Eric MONGA
                    </h4>
                    <p className="text-sm">Vice Président Nationale, FEC</p>
                  </div>
                </div>
              </div>
              <div className="max-w-[450px] md:h-[353px] text-black p-6 bg-gray-100 rounded-xl md:relative">
                <blockquote
                  className="mb-3 first-letter:font-bold first-letter:text-3xl first-letter:text-secondary-blue
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl"
                >
                  J&#32;'ai la vision d'un Congo fort et prospère. Je reste
                  convaincu que si chacun d'entre nous, à son niveau, met le
                  professionnalisme et le sérieux dans ce qu'il a à faire, nous
                  réussirons à redevenir&nbsp;ce&nbsp;grand Congo
                </blockquote>
                <div className="flex gap-x-3 items-center bg-gray-200 p-3 mt-6 md:absolute md:bottom-2 md:w-[90%] lg:bottom-8">
                  <div>
                    <img src={imgTesti_03} alt="" />
                  </div>
                  <div>
                    <h4 className="text-secondary-blue font-bold text-lg">
                      Yvonne KUSUAMINA
                    </h4>
                    <p className="text-sm">DG Pay Network</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="my-12">
        <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
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
      <div className="my-12 max-w-ful">
        <Slider {...partenairesRTL} className="max-w-full">
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

function Faq() {
  return (
    <div
      id="faq"
      className="p-6 md:text-lg 2xl:text-xl flex flex-col bg-bg_blog xl:pb-12"
    >
      <div className="xl:max-w-[1536px] mx-auto">
        <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Foire aux questions
        </h2>
        <ul>
          <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
            <h3 className="font-bold text-xl mb-3">
              Qu'est-ce que la fédération des entreprises ?
            </h3>
            <p>
              La fédération des entreprises est une organisation qui rassemble
              et représente les entreprises de tous les secteurs d'activité.
            </p>
          </li>
          <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
            <h3 className="font-bold text-xl mb-3">
              Quels sont les avantages de l'adhésion ?
            </h3>
            <p>
              En adhérant à la fédération, vous bénéficierez de nombreux
              avantages, tels que :
            </p>
            <ul className="list-disc ml-6">
              <li>Une assistance</li>
              <li>Une Défense</li>
              <li>Une Réprésentation</li>
              <li>
              Un Appui aux Entreprises
              </li>
            </ul>
          </li>
          <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
            <h3 className="font-bold text-xl mb-3">
              Comment puis-je adhérer à la fédération ?
            </h3>
            <p>
              Pour adhérer à la fédération, veuillez remplir le formulaire de
              demande d'adhésion disponible sur notre site web.
            </p>
          </li>
          <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
            <h3 className="font-bold text-xl mb-3">
              Combien coûte l'adhésion ?
            </h3>
            <p>
              Le coût de l'adhésion dépend de la taille de votre entreprise.
              Veuillez consulter notre site web pour plus d'informations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
