import { Helmet } from "react-helmet-async";

export function LegalPage() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Quintessence</title>
        <meta name="description" content="Mentions légales de Quintessence - Informations sur l'éditeur du site et l'hébergeur conformement à la loi LCEN." />
        <link rel="canonical" href="https://quintessence.fr/legal" />
        <meta property="og:title" content="Mentions Légales | Quintessence" />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative min-h-[40vh] flex items-end justify-start px-6 md:px-12 pb-10 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-surface" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-display-md text-4xl md:text-5xl text-primary mb-4">
            Mentions Légales
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant">
            Conformément aux dispositions de l'article 6-III-1 de la Loi n° 2004-575 du 21 juin 2004
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 space-y-12">
        
        {/* Éditeur du site */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">1. Éditeur du site</h2>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
            <p className="font-body-lg text-on-surface"><strong>Delphine</strong></p>
            <p className="font-body-lg text-on-surface">Exerçant sous le nom commercial : <strong>Quintessence</strong></p>
            <p className="font-body-lg text-on-surface">Activité : Naturopathie et Réflexologie</p>
            <p className="font-body-lg text-on-surface">Adresse : 90380 Roppe, Bourgogne-Franche-Comté, France</p>
            <p className="font-body-lg text-on-surface">Téléphone : 07 67 72 82 36</p>
            <p className="font-body-lg text-on-surface">Email : <a href="mailto:quintessence.delphine@gmail.com" className="text-primary hover:underline">quintessence.delphine@gmail.com</a></p>
          </div>
        </section>

        {/* Directeur de publication */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">2. Directeur de publication</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Le directeur de publication est <strong>Delphine</strong>, gérante de Quintessence.
          </p>
        </section>

        {/* Hébergeur */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">3. Hébergement</h2>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
            <p className="font-body-lg text-on-surface">Le site est hébergé par :</p>
            <p className="font-body-lg text-on-surface"><strong>Vercel Inc.</strong></p>
            <p className="font-body-lg text-on-surface">440 N Barringer Ave</p>
            <p className="font-body-lg text-on-surface">San Francisco, CA 94102, États-Unis</p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">4. Propriété intellectuelle</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            L'ensemble du contenu présent sur ce site (textes, images, logo, graphismes) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable de Quintessence.
          </p>
        </section>

        {/* Crédits photos */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">5. Crédits photographs</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Les photographies utilisées sur ce site sont soit la propriété de Quintessence, soit utilisées avec l'accord de leurs auteurs respectifs.
          </p>
        </section>

        {/* Liens hypertextes */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">6. Liens hypertextes</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Ce site peut contenir des liens vers des sites tiers. Quintessence n'est pas responsable du contenu de ces sites externes et de leurs pratiques en matière de protection des données personnelles.
          </p>
        </section>

        {/* Droit applicable */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">7. Droit applicable</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="font-display-md text-2xl text-primary">8. Nous contacter</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Pour toute question concernant ce site, vous pouvez nous contacter :
          </p>
          <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
            <p className="font-body-lg text-on-surface">Email : <a href="mailto:quintessence.delphine@gmail.com" className="text-primary hover:underline">quintessence.delphine@gmail.com</a></p>
            <p className="font-body-lg text-on-surface">Téléphone : 07 67 72 82 36</p>
            <p className="font-body-lg text-on-surface">Adresse : 90380 Roppe, France</p>
          </div>
        </section>

      </div>
    </>
  );
}
