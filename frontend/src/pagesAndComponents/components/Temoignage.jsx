export default function Temoignage({ className, text, imgTestim, name, statut }) {
    return (
      <div className={`${className} h-max w-full bg-white sm:max-w-[450px] sm:h-[485px] sm:flex sm:flex-col text-black p-6  rounded-xl lg:max-w-[420px] shadow-lg mx-auto xl:h-96`}>
        <div className="flex gap-x-3 items-center border-b-2 p-3 pb-4 ">
          <div>
            <img src={imgTestim} alt="temoignages" />
          </div>
          <div>
            <h4 className="text-secondary-blue font-bold text-lg">{name}</h4>
            <p className="text-md">{statut}</p>
          </div>
        </div>
        <blockquote
          className="mb-3 pt-3 sm:text-lg text-justify first-letter:font-bold first-letter:text-3xl first-letter:text-secondary-blue
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl xl:pt-6"
        >
          {text}
        </blockquote>
      </div>
    );
  }