export default function Temoignage({ className, text, imgTestim, name, statut }) {
    return (
      <div className={`${className} h-max w-full bg-white sm:max-w-[450px] sm:h-[450px] sm:flex sm:flex-col sm:justify-between text-black p-6  rounded-xl md:relative lg:max-w-[420px] shadow-lg mx-auto`}>
        <blockquote
          className="mb-3 sm:text-lg text-justify first-letter:font-bold first-letter:text-3xl first-letter:text-secondary-blue
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl"
        >
          {text}
        </blockquote>
        <div className="flex gap-x-3 items-center border-t-2 p-3 pt-4 lg:bottom-8">
          <div>
            <img src={imgTestim} alt="temoignages" />
          </div>
          <div>
            <h4 className="text-secondary-blue font-bold text-lg">{name}</h4>
            <p className="text-md">{statut}</p>
          </div>
        </div>
      </div>
    );
  }