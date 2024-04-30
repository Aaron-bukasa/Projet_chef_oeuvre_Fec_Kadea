export default function Service({
    imgService,
    iconService,
    titleService,
    paramService,
    className,
  }) {
    return (
      <div className={`${className} rounded-xl shadow-lg bg-white`}>
        <div className="mb-3 h-48 sm:h-[280px]">
          <img
            src={imgService}
            alt="Réseau"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        <div className="py-2 px-6">
          <h3 className="font-semibold text-primary-blue flex items-center gap-x-4 mb-2 sm:mb-4 sm:text-lg lg:mb-6 lg:text-xl">
            {titleService}
            <img src={iconService} alt="icon du service" className="w-6 sm:w-8" />
          </h3>
          <p className="md:text-lg text-justify">{paramService}</p>
        </div>
      </div>
    );
  }