import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgFec01 from "../assets/images/fec001.png";
import imgFec02 from "../assets/images/fec002.jpg";
import imgMembre from "../assets/images/membre01.png";
import iconArrow from "../assets/images/arrow_downward.svg";
import imgAvantage01 from "../assets/images/avantage01.jpg";
import imgAvantage02 from "../assets/images/avantage02.jpg";
import imgAvantage03 from "../assets/images/avantage03.jpg";
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
import bgTemoignages from "../assets/images/bg_temoignages.jpg";

// import imgAvantage04 from "../assets/images/fec001.png";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  localStorage.getItem('token');

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
    <div className="bg-bg_banner" >
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
          En adhérant à la fédération, vous bénéficierez de nombreux avantages,
          tels que:
        </p>
        <ul className="list-disc ml-6 py-2 md:text-lg 2xl:text-xl">
          <li>
            <strong className="font-normal">Une assistance</strong>
          </li>
          <li>
            <strong className="font-normal">
              Une représentation auprès des pouvoirs publics
            </strong>
          </li>
          <li>
            <strong className="font-normal">
              Un soutien auprès des pouvoirs publics
            </strong>
          </li>
          <li>
            <strong className="font-normal">
              Des formations et des ateliers exclusifs
            </strong>
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
  const sliderRef = useRef(null);

  const avantagesSlides = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "100px",
        },
      },
    ],
  };

  return (
    <div id="avantages" className="mx-6 xl:max-w-[1536px] xl:mx-auto xl:pb-24 xl:pt-12">
      <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl 2xl:text-4xl">Les avantages de l'adhésion</h2>
      <div className="relative">
        <Slider {...avantagesSlides}>
          <div className="relative h-[480px] max-w-[420px]">
            <img
              src={imgAvantage01}
              alt="Réseau"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 p-3 bg-[#00194cc2] text-white">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-center lg:text-2xl 2xl:text-2xl font-bold">
                Réseau de contacts professionnels
              </h3>
              <p>
                Développez votre réseau et rencontrez de nouveaux clients et
                partenaires.
              </p>
            </div>
          </div>
          <div className="relative h-[480px] max-w-[420px]">
            <img
              src={imgAvantage02}
              alt="Formation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 p-3 bg-[#00194cc2] text-white">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-center lg:text-2xl 2xl:text-2xl font-bold">
                Formations et ateliers exclusifs
              </h3>
              <p>
                Bénéficiez de formations et d'ateliers sur des thématiques qui
                vous concernent.
              </p>
            </div>
          </div>
          <div className="relative h-[480px] max-w-[420px]">
            <img
              src={imgAvantage03}
              alt="Ressources"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 p-3 bg-[#00194cc2] text-white">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-center lg:text-2xl 2xl:text-2xl font-bold">
                Accès à des ressources et des services
              </h3>
              <p>
                Profitez d'un large éventail de ressources et de services pour
                vous aider à développer votre entreprise.
              </p>
            </div>
          </div>
          <div className="relative h-[480px] max-w-[420px]">
            <img
              src={imgAvantage02}
              alt="Soutien"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 p-3 bg-[#00194cc2] text-white">
              <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-center lg:text-2xl 2xl:text-2xl font-bold">
                Soutien et représentation
              </h3>
              <p>
                Bénéficiez d'un soutien et d'une représentation auprès des
                pouvoirs publics.
              </p>
            </div>
          </div>
        </Slider>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-md"
          onClick={() => sliderRef.current.slickPrev()}
        >
          Précédent
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-md"
          onClick={() => sliderRef.current.slickNext()}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

function Temoignages() {
  const faqAutoplay = {
    dots: true,
    className: "center",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
      <div className="bg-bg_temoignages">
        <div className=" px-6 py-12 xl:max-w-[1536px]">
          <h2 className="font-bold text-center text-white text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl 2xl:text-4xl">
            Ce qu’ils disent de nous
          </h2>
          <div className="text-white md:tracking-wider max-w-[380px] mx-auto">
            <Slider {...faqAutoplay}>
              <div className="w-[80%] md:max-w-[35%]">
                <blockquote
                  className='mb-3 italic relative before:content-["❝"] before:absolute before:-left-3 first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl md:w-[380px]'
                >
                  Avant d'être membre a la FEC, je travaillais avec des micros
                  et des petites entreprises. Aujourd'hui, ça fait 26 ans que je
                  suis à la FEC, j'ai comme clients des moyennes et des grandes
                  entreprises. ça c'est grâce&nbsp;à&nbsp;la&nbsp;FEC&nbsp;!
                  <span className="inline-block ml-3 text-xl">❞</span>
                </blockquote>
                <p className="text-center ml-auto mr-0 w-[250px] md:mt-12">
                  Eliane MUNKENI{" "}
                  <span className="block">Vice Présidente Nationale, FEC</span>
                </p>
              </div>
              <div className="w-[80%] mx-auto md:max-w-[35%]">
                <blockquote
                  className='mb-3 italic relative before:content-["❝"] before:absolute before:-left-3 first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
                first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl md:w-[380px]'
                >
                  La FEC est comme un employé en plus dans votre société. Elle
                  vous donne le meilleur d'elle-même. Elle résout vos problèmes
                  sans être présente dans vos locaux ou bureaux. Il faut juste
                  la contacter. Elle vous défend et fait votre marketing. Il
                  faut&nbsp;en&nbsp;être&nbsp;membre
                  <span className="inline-block ml-3 text-xl">❞</span>
                </blockquote>
                <p className="text-center ml-auto mr-0 w-[250px]">
                  Eric MONGA,{" "}
                  <span className="block">Vice Président Nationale, FEC</span>
                </p>
              </div>
              <div className="w-[80%] mx-auto md:max-w-[35%]">
                <blockquote
                  className='mb-3 italic relative before:content-["❝"] before:absolute before:-left-3 first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
                first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl md:w-[380px]'
                >
                  Avant d'être membre a la FEC, je travaillais avec des micros
                  et des petites entreprises. Aujourd'hui, ça fait 26 ans que je
                  suis à la FEC, j'ai comme clients des moyennes et des grandes
                  entreprises. ça c'est grâce&nbsp;à&nbsp;la&nbsp;FEC&nbsp;!
                  <span className="inline-block ml-3 text-xl">❞</span>
                </blockquote>
                <p className="text-center ml-auto mr-0 w-[250px]">
                  Eliane MUNKENI,{" "}
                  <span className="block">Présidente Nationale</span>
                </p>
              </div>
              <div className="w-[80%] mx-automd:max-w-[35%]">
                <blockquote
                  className='mb-3 italic relative before:content-["❝"] before:absolute before:-left-3 first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
                first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl md:w-[380px]'
                >
                  J&#32;'ai la vision d'un Congo fort et prospère. Je reste
                  convaincu que si chacun d'entre nous, à son niveau, met le
                  professionnalisme et le sérieux dans ce qu'il a à faire, nous
                  réussirons à redevenir&nbsp;ce&nbsp;grand Congo
                  <span className="inline-block ml-3 text-xl">❞</span>
                </blockquote>
                <p className="text-center ml-auto mr-0 w-[250px]">
                  Yvonne KUSUAMINA DG,{" "}
                  <span className="block">Pay Network</span>
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="my-12">
        <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl 2xl:text-4xl">Ils nous accompagnent</h2>
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
    <div id="faq" className="p-6 md:text-lg 2xl:text-xl flex flex-col bg-bg_blog xl:pb-12">
      <div className="xl:max-w-[1536px] mx-auto">
      <h2 className="font-bold text-center text-secondary-blue text-3xl mb-12 pt-6 lg:mb-12 lg:text-center lg:text-3xl 2xl:text-4xl">
        Foire aux questions
      </h2>
      <ul>
        <li className="border-[3px] border-secondary-blue p-3 rounded-xl my-4">
          <h3 className="font-bold text-xl mb-3">
            Qu'est-ce que la fédération des entreprises ?
          </h3>
          <p>
            La fédération des entreprises est une organisation qui rassemble et
            représente les entreprises de tous les secteurs d'activité.
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
            <li>Un réseau de contacts professionnels</li>
            <li>Des formations et des ateliers exclusifs</li>
            <li>Un accès à des ressources et des services</li>
            <li>
              Un soutien et une représentation auprès des pouvoirs publics
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
          <h3 className="font-bold text-xl mb-3">Combien coûte l'adhésion ?</h3>
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
