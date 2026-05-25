import { Helmet } from "react-helmet-async";

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Quintessence</title>
        <meta
          name="description"
          content="Politique de confidentialité de Quintessence. Découvrez comment nous protégeons vos données personnelles conformément au RGPD."
        />
        <link rel="canonical" href="https://quintessence.fr/privacy" />
        <meta
          property="og:title"
          content="Politique de Confidentialité | Quintessence"
        />
        <meta
          property="og:description"
          content="Politique de confidentialité de Quintessence - Protection de vos données personnelles."
        />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative min-h-[40vh] flex items-end justify-start px-6 md:px-12 pb-10 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-surface" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-display-md text-4xl md:text-5xl text-primary mb-4">
            Politique de Confidentialité
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant">
            Dernière mise à jour : Mai 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 space-y-12">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°
            2004-575 du 21 juin 2004 pour la Confiance dans l'économie
            numérique, nous vous informons que ce site collecte vos données
            personnelles de manière licite, loyale et transparente, conformément
            au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        {/* Responsable du traitement */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            1. Responsable du traitement
          </h2>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
            <p className="font-body-lg text-on-surface">
              <strong>Delphine</strong>
            </p>
            <p className="font-body-lg text-on-surface">
              Quintessence - Praticienne en Naturopathie et Réflexologie
            </p>
            <p className="font-body-lg text-on-surface">
              90380 Roppe, Bourgogne-Franche-Comté, France
            </p>
            <p className="font-body-lg text-on-surface">
              Email :{" "}
              <a
                href="mailto:quintessence.delphine@gmail.com"
                className="text-primary hover:underline"
              >
                quintessence.delphine@gmail.com
              </a>
            </p>
            <p className="font-body-lg text-on-surface">
              Téléphone : 07 67 72 82 36
            </p>
          </div>
        </section>

        {/* Données collectées */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            2. Données personnelles collectées
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Nous collectons uniquement les données que vous nous comuniquez
            volontairement via notre formulaire de contact :
          </p>
          <ul className="list-disc list-inside space-y-2 font-body-lg text-on-surface-variant">
            <li>Nom</li>
            <li>Adresse email</li>
            <li>Contenu de votre message</li>
          </ul>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Ces données sont collectées directement auprès de vous et ne sont
            utilisées que pour répondre à vos demandes.
          </p>
        </section>

        {/* Finalités */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            3. Finalités du traitement
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Vos données personnelles sont collectées pour les finalités
            suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 font-body-lg text-on-surface-variant">
            <li>Répondre à vos demandes de contact</li>
            <li>Vous recontacter pour planifier un rendez-vous</li>
            <li>
              Vous informer sur nos services (uniquement si vous en faites la
              demande)
            </li>
          </ul>
        </section>

        {/* Base légale */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            4. Base légale du traitement
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Le traitement de vos données repose sur :
          </p>
          <ul className="list-disc list-inside space-y-2 font-body-lg text-on-surface-variant">
            <li>
              <strong>Votre consentement</strong> : vous nous transmettez
              volontairement vos données via le formulaire de contact.
            </li>
            <li>
              <strong>L'intérêt légitime</strong> : pour répondre à vos demandes
              et assurer le suivi de nos échanges.
            </li>
          </ul>
        </section>

        {/* Durée de conservation */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            5. Durée de conservation
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Vos données personnelles sont conservées pendant une durée de{" "}
            <strong>3 ans</strong> à compter de notre dernier échange, sauf
            demande préalable de votre part de suppression.
          </p>
        </section>

        {/* Droits */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            6. Vos droits (RGPD)
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles :
          </p>
          <ul className="list-disc list-inside space-y-2 font-body-lg text-on-surface-variant">
            <li>
              <strong>Droit d'accès</strong> : obtenir une copie de vos données
            </li>
            <li>
              <strong>Droit de rectification</strong> : corriger vos données
              inexactes
            </li>
            <li>
              <strong>Droit à l'effacement</strong> : demander la suppression de
              vos données
            </li>
            <li>
              <strong>Droit à la limitation</strong> : limiter le traitement de
              vos données
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : recevoir vos données
              dans un format structuré
            </li>
            <li>
              <strong>Droit d'opposition</strong> : vous opposer au traitement
              de vos données
            </li>
          </ul>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Pour exercer l'un de ces droits, contactez-nous à :{" "}
            <a
              href="mailto:quintessence.delphine@gmail.com"
              className="text-primary hover:underline"
            >
              quintessence.delphine@gmail.com
            </a>
          </p>
        </section>

        {/* Destinataires */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            7. Destinataires des données
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Vos données personnelles sont traitées uniquement par Delphine,
            gérante de Quintessence. Elles ne sont jamais vendues, louées ni
            transmises à des tiers sans votre consentement, sauf obligation
            légale.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            8. Cookies et traceurs
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Ce site n'utilise pas de cookies de tracking, de publicité ou de
            statistiques. Seul un cookie technique strictement nécessaire au
            fonctionnement du site peut être déposé lors de votre visite.
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Vous pouvez configurer votre navigateur pour refuser l'ensemble des
            cookies. Cependant, certaines fonctionnalités du site pourraient ne
            plus fonctionner correctement.
          </p>
        </section>

        {/* Sécurité */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            9. Sécurité des données
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre tout accès
            non autorisé, modification, divulgation ou destruction.
          </p>
        </section>

        {/* Modification */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            10. Modification de cette politique
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Nous pouvons mettre à jour cette politique de confidentialité
            périodiquement. Toute modification sera publiée sur cette page. Nous
            vous encourageons à consulter régulièrement cette page pour rester
            informé des éventuels changements.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">
            11. Nous contacter
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Pour toute question concernant cette politique de confidentialité ou
            pour exercer vos droits, contactez-nous :
          </p>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
            <p className="font-body-lg text-on-surface">
              Email :{" "}
              <a
                href="mailto:quintessence.delphine@gmail.com"
                className="text-primary hover:underline"
              >
                quintessence.delphine@gmail.com
              </a>
            </p>
            <p className="font-body-lg text-on-surface">
              Téléphone : 07 67 72 82 36
            </p>
            <p className="font-body-lg text-on-surface">
              Adresse : 90380 Roppe, France
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
