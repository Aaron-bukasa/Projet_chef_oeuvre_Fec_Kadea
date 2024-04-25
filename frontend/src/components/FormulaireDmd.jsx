export default function FormulaireDmd() {
 
  const handleAccepted = (event) => {
    event.preventDefault();
    window.location.href = 'formDmd'
  }

  return (
    <div className="py-1 md:py-12 md:px-6 bg-bg_desktop">
      <div className="lg:items-center lg:gap-6 xl:gap-12 max-w-5xl items-center justify-center px-6 mx-auto">
        <form
          onSubmit={handleAccepted}
          action=""
          method="POST"
          encType="multipart/form-data"
          className='px-6 rounded-lg maw-w-[1024px] py-6'
        >
          <h2 className="font-bold text-secondary-blue text-center text-xl md:text-2xl mb-6 lg:text-center lg:text-4xl">
            Dispositions statuaires relatives aux membres
          </h2>
          <div className="text-justify text-lg">
            <p className="my-2">
              <strong>Article 5 :</strong> Peut devenir membre de la Fédération,
              toute personne physique commerçante ou morale régulièrement
              constituée en entreprise de droit privé ou public ou toute autre
              organisation structurée d’entreprises dûment revêtue de la
              personnalité juridique, qui exploite légalement sur le territoire
              de la République Démocratique du Congo une activité commerciale,
              industrielle, minière, agricole, artisanale, sociale ou libérale.
            </p>
            <p className="my-2">
              <strong>Article 6 :</strong> Le dossier de demande d’affiliation
              est constitué d’une lettre de demande d’affiliation de
              l’impétrant, du bulletin d’adhésion dûment rempli, des preuves de
              la constitution régulière de l’entité (personne morale) ou de
              qualité de commerçant (personne physique) et de la preuve de
              parrainage d’un membre en ordre de cotisation. L’’impétrant peut
              faire recours auprès du Conseil d’Administration en cas de refus
              de sa demande d’affiliation. La qualité de membre se concrétise
              par le paiement d’une cotisation annuelle à la Fédération et la
              signature du Code d’éthique. Toute entreprise, nonobstant
              l’appartenance à un groupe, s’affilie et s’acquitte de sa
              cotisation individuellement.
            </p>
            <p className="my-2">
              <strong>Article 7 :</strong> Le membre s’engage à observer le Code
              d’éthique et les décisions prises par les organes statutaires de
              la Fédération. Il veille à communiquer à celle-ci toutes les
              informations utiles à la réalisation de son objet social.
            </p>
            <p className="my-2">
              <strong>Article 8 :</strong> Tout membre peut démissionner de la
              Fédération. Il adressera à cet effet à la Fédération un courrier
              recommandé avec accusé de réception auquel la Fédération répondra
              par une prise d’acte. Il reste tenu d’acquitter les cotisations
              échues. Toute cotisation versée reste acquise à la Fédération.
            </p>
            <p className="my-2">
              <strong>Article 9 :</strong> Le Conseil d’Administration peut
              prononcer l’exclusion d’un membre en cas de violation des statuts
              et règlements de la Fédération, du Code éthique ou pour un motif
              grave lié à l’exercice de son activité. De même, le Conseil
              d’Administration peut prononcer la déchéance du mandat, au sein de
              la Fédération, de toute personne, pour les mêmes motifs cités ci
              avant. Le membre exclu reste tenu d’acquitter les cotisations
              échues.
            </p>
            <p className="my-2">
              <strong>Article 74 :</strong> Le régime des cotisations est arrêté
              annuellement par l’Assemblée Générale Ordinaire, sur proposition
              du Conseil d’Administration. Le montant de la cotisation est
              déterminé suivant des critères arrêtés par le Conseil
              d’Administration, compte tenu de la dimension économique du
              membre. Le membre est tenu de communiquer à la Fédération toutes
              les justifications utiles à la vérification de la hauteur de la
              cotisation à verser. Les cotisations sont payables au lieu et dans
              les délais fixés par le Conseil d’Administration.
            </p>
          </div>
          <div className="my-6">
            <input type="checkbox" required id="condition"/>
            <label htmlFor="condition" className="ml-3 text-lg">
              J'ai lu et j'accepte les conditions générales d'adhésion.
            </label>
          </div>
          <button type="submit" className="bg-red-600 text-white font-bold py-3 px-4 rounded-lg">J'accepte</button>
        </form>
      </div>
    </div>
  );
}
