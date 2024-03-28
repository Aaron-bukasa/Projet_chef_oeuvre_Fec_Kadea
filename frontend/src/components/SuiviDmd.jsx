export default function SuiviDmd() {
    return(
        <div className="mx-6 my-12 md:my-24">
        <form
          action="/submit"
          method="POST"
          enctype="multipart/form-data"
          className="bg-secondary-blue text-white p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto"
        >
          <h1 className="font-bold text-xl text-center text-white p-6 sm:text-2xl md:text-3xl xl:text-4xl">
            Suivi de la demande
          </h1>
          <div className="pb-3">
            <div className="flex flex-col gap-y-1 mb-4">
              <label for="email">Nom complet</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Nom complet"
                required
                className="border-2 h-10 rounded-lg text-black p-3"
              />
            </div>
            <div className="flex flex-col gap-y-1 mb-4">
              <label for="password">Numero de la demande</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Entrer le numero de votre demande"
                required
                className="border-2 h-10 rounded-lg text-black p-3"
              />
            </div>
          </div>
          <button
            type="button"
            onclick="window.location.href='/cancel'"
            className="bg-sky-blue text-white font-bold bg-sky-blue py-3 px-6 rounded-xl hover:opacity-80"
          >
            Suivre
          </button>
        </form>
        <div className="font-bold text-lg italic p-6 w-full rounded-xl mb-12 mt-6 w-full md:max-w-[768px] md:mx-auto border-4">En attente...</div>
      </div>
    )
}