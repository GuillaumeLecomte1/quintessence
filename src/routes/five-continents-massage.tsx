import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function FiveContinentsMassagePage() {
  return (
    <>
      <Helmet>
        <title>Massage des 5 Continents | Quintessence</title>
        <meta name="description" content="Découvrez le Massage des 5 Continents à Roppe : un voyage sensoriel unique combinant techniques ancestrales du monde entier pour une harmonisation globale corps-esprit." />
        <meta name="keywords" content="massage des 5 continents, massage holistique, massage monde, bien-être, Roppe, Belfort, relaxation" />
        <link rel="canonical" href="https://quintessence.fr/five-continents-massage" />
        <meta property="og:title" content="Massage des 5 Continents - Quintessence | L'Art de l'Équilibre" />
        <meta property="og:description" content="Massage des 5 Continents à Roppe. Une expérience unique combinant les meilleures techniques de massage du monde entier." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">Voyage Sensoriel</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-primary leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Massage des 5 Continents : <br /><span className="italic font-normal">Un Voyage au Cœur de Soi</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8 md:mb-10">
              Une symphonie de techniques ancestrales venues des cinq continents, pour un massage holistique unique. Ce soin exceptionnels unité le corps et l'esprit dans une harmonie parfaite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                Réserver une séance
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[1.5rem_1.5rem_0_10rem] overflow-hidden shadow-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover"
                alt="Massage des 5 continents - Voyage sensoriel"
                src="/image/Massage des 5 continents.jpg"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-12 hidden lg:block bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
              <p className="font-display-md italic text-primary text-lg mb-2">"Le corps est le véhicule de l'âme."</p>
              <p className="text-sm text-on-surface-variant">— Olivier Honsperger, fondateur</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Qu'est-ce que le Massage des 5 Continents Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-8 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Une Philosophie Unique
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Créé en Suisse dans les années 2000, le Massage des 5 Continents est une approche holistique qui rassemble les meilleures techniques de massage du monde. Chaque geste est une invitation au voyage, vers l'harmonie profonde de l'être.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {/* Afrique */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">landscape</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Afrique</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les techniques africaines apportent rythme et ancrage. Elles utilisent des pressions profondes et des mouvements dynamisants pour libérer les blocages énergétiques.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Effleurages profonds</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Percussions vivifiantes</li>
              </ul>
            </div>
            {/* Amériques */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">park</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Amériques</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les traditions des Amériques apportent chaleur et ressenti. Ces techniques douces mais puissantes favorisent la reconnexion à soi et l'acceptation.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Lissage profond</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Pressions ciblées</li>
              </ul>
            </div>
            {/* Europe */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">architecture</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Europe</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                L'héritage européen apporte structure et équilibre. Les techniques scandinaves et méditerranéennes offrent des bienfaits relaxants et drainants.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Drainage lymphatique</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Relaxation profonde</li>
              </ul>
            </div>
            {/* Asie */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">temple_buddhist</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Asie</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les sagesses asiatiques apportent fluidité et énergie vitale. Les techniques japonaises et indiennes favorisent l'équilibre des Chakras et la détente mentale.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Shiatsu énergétique</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Massage crânien</li>
              </ul>
            </div>
            {/* Océanie */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">water</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Océanie</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les traditions océaniennes apportent ouverture et spiritualité. Les techniques hawaïennes et polynésiennes invitent à l'abandon et à la reconnexion source.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Lomi Lomi hawaiien</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Rocking profond</li>
              </ul>
            </div>
            {/* 6ème Continent */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">favorite</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Le 6ème Continent</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Le cœur, considéré comme le 6ème continent, est au centre de la pratique. C'est vers lui que convergent tous les soins, dans une symphonie d'harmonisation intérieure.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Écoute du cœur</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Harmonisation globale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-[120px] items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-xl aspect-square object-cover w-full"
                alt="Massage holistique détente"
                src="/image/Massage des 5 continents.jpg"
              />
              <div className="absolute -top-4 md:-top-10 -right-4 md:-right-10 w-28 md:w-48 h-28 md:h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg rotate-12">
                <p className="text-on-secondary-container font-headline font-bold text-xs md:text-sm leading-tight">Voyage Sensoriel Unique</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 lg:space-y-[48px]">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Les Bienfaits d'une Séance
            </h2>
            <div className="space-y-8 md:space-y-12 lg:space-y-[48px]">
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">01</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Détoxification Profonde</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Les mouvements drainants stimulent le système lymphatique et favorisent l'élimination des toxines, pour un corps désengorgé et légèreté retrouvée.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">02</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Relaxation Absolue</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    L'alliance des techniques crée un état de relaxation profond jamais atteint, permettant au corps et à l'esprit de se reposer véritablement.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">03</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Reconnexion à Soi</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Ce massage invite à un voyage intérieur unique, vers le cœur de votre être. Une expérience transformatrice qui révèle votre essence profonde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-primary text-on-primary rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] mx-4 md:mx-12 mb-8 md:mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
          <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] mb-8 md:mb-12 lg:mb-[64px]">
            À quoi s'attendre lors d'une séance ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[32px]">
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">1.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">L'Accueil</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Un moment d'échange pour comprendre vos besoins et créer une intention pour le soin.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">2.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">L'Installation</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Confortablement installé(e) sur une table chaude, dans une ambiance douce et parfumée.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">3.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Le Voyage</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Un parcours sensitif à travers les continents, avec mouvements fluides et enveloppants de la tête aux pieds.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">4.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">L'Intégration</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Un temps de repos pour assimiler l'expérience et un retour progressif au monde extérieur.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
