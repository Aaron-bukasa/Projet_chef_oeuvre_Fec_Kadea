export default function Service({
    imgService,
    iconService,
    titleService,
    paramService,
    className,
  }) {
    return (
      <div className={`${className} rounded-xl shadow-lg bg-white`}>
        <div className="mb-3 h-[280px]">
          <img
            src={imgService}
            alt="Réseau"
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-xl mb-4 lg:mb-6 lg:text-2xl 2xl:text-2xl font-extrabold text-primary-blue flex items-center gap-x-4">
            <img src={iconService} alt="icon du service" className="w-8" />
            {titleService}
          </h3>
          <p className="text-lg text-justify">{paramService}</p>
        </div>
      </div>
    );
  }