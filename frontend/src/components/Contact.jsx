export default function Contact() {
    return(
        <div>
            <form id="contact" >
                <h2 className="font-bold text-xl mb-4 lg:text-2xl">Contactez-nous</h2>
                <input type="text" placeholder="Inserer votre nom" className="h-10 px-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300" />
                <input type="email" placeholder="Inserer votre mail" className="h-10 px-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300" />
                <textarea type="textearea" placeholder="Message" className="h-24 p-3 rounded-lg bg-gray-200 text-black placeholder:text-gray-500 outline-0 focus:bg-gray-300"></textarea>
                <button type="button" className="w-24 py-2 mt-1 bg-sky-blue font-semibold rounded-md hover:opacity-80">Envoyer</button>
            </form>
        </div>
    )
}