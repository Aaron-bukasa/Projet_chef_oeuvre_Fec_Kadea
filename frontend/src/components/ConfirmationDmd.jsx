export default function ConfirmationDmd({numero}) {
    return(
        <div className="mx-6 my-12 md:my-24 leading-normal">
             <div className="p-6 w-full mx-auto rounded-xl my-24 md:max-w-[768px] md:mx-auto border-2 border-gray-400">
            <h1 className="text-secondary-blue font-bold text-xl text-center p-6 sm:text-2xl md:text-3xl xl:text-4xl">Confirmation de la soumission de la demande</h1>
            <p>Numero de la demande : <strong>{numero}</strong></p>
            <p className="text-justify">Votre demande a été soumise avec succès. Un membre de notre équipe vous contactera dans les plus brefs délais.</p>
            <p className="text-justify">Un email de suivi avec un lien vers la page de suivi de votre demande vous sera envoyé sous peu.</p>
            <p className="text-justify">En cas de questions, n'hésitez pas à nous contacter.</p>
        </div>
        </div>
    )
}