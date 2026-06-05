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
              Une symphonie de techniques ancestrales venues des cinq continents, pour un massage holistique unique. Ce soin exceptionnel unit le corps et l'esprit dans une harmonie parfaite.
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
                src="/image/massage_des_5_cts.png"
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
          <div className="mb-12 md:mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-6">
              Une Philosophie Unique
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Le massage des 5 continents est une technique de bien-être relativement récente qui combine plusieurs traditions du monde pour offrir une expérience à la fois relaxante, énergisante et détoxifiante. Chaque geste est une invitation au voyage, vers l'harmonie profonde de l'être.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {/* Relaxation */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">self_improvement</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Relaxation profonde</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Un état de relâchement total, où le corps et l'esprit se déposent dans un silence intérieur retrouvé. Le souffle s'apaise, les tensions s'effacent.
              </p>
            </div>
            {/* Énergie */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">bolt</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Énergie vitalisée</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les mouvements dynamisants réveillent la circulation et insufflent une nouvelle vitalité à l'ensemble du corps, pour une sensation de renouveau.
              </p>
            </div>
            {/* Détoxification */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">water_drop</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Détoxification</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les pressions ciblées stimulent le système lymphatique et favorisent l'élimination naturelle des toxines, laissant le corps plus léger.
              </p>
            </div>
          </div>
          {/* Origines et inspirations */}
          <div className="mt-16 md:mt-20 lg:mt-24 text-center">
            <p className="font-label-caps text-label-caps uppercase text-[11px] tracking-[0.2em] text-primary mb-6 md:mb-8">
              Origines et inspirations
            </p>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
              Ce massage puise ses inspirations dans différentes pratiques issues du monde entier, réunies pour agir en profondeur sur le corps et l'énergie :
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Ayurvéda <span className="text-primary/60">· Inde</span>
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Californien <span className="text-primary/60">· Occident</span>
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Tuina <span className="text-primary/60">· Chine</span>
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Lomi-lomi <span className="text-primary/60">· Hawaï</span>
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Techniques énergétiques
              </span>
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
                src="/image/5continents.png"
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
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20 leading-none">01</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Relaxation profonde &amp; réduction du stress</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Le corps se relâche, les tensions nerveuses s'apaisent et l'esprit se dépose dans un état de calme durable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20 leading-none">02</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Libération des tensions physiques et émotionnelles</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Les pressions ciblées dénouent les blocages du corps et libèrent les charges émotionnelles accumulées.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20 leading-none">03</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Stimulation de la circulation sanguine et énergétique</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Les manœuvres dynamisantes activent la circulation et rééquilibrent les flux d'énergie vitale.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20 leading-none">04</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Lâcher-prise &amp; revitalisation</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Une expérience qui laisse le corps léger, l'esprit apaisé et une énergie nouvelle prête à rayonner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement d'une séance Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-primary text-on-primary rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] mx-4 md:mx-12 mb-8 md:mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] mb-6">
              Déroulement d'une séance
            </h2>
            <p className="font-body-lg text-on-primary-container leading-relaxed">
              Une séance dure en général <span className="text-on-primary font-medium">1h à 1h30</span>, au cours de laquelle je vous accompagne dans un véritable rituel de bien-être : massage du corps entier — dos, jambes, bras, ventre — à l'aide d'<span className="text-on-primary font-medium">huiles essentielles spécifiques</span> détox et relaxation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="p-8 md:p-10 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl md:text-5xl mb-4 md:mb-6 block">self_improvement</span>
              <h3 className="font-headline-lg mb-3 md:mb-4">Mouvements lents &amp; enveloppants</h3>
              <p className="font-body-md text-on-primary-container leading-relaxed">
                Des gestes fluides et profonds qui apaisent le système nerveux, invitent au lâcher-prise et favorisent une relaxation profonde du corps.
              </p>
            </div>
            <div className="p-8 md:p-10 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl md:text-5xl mb-4 md:mb-6 block">bolt</span>
              <h3 className="font-headline-lg mb-3 md:mb-4">Gestes dynamiques &amp; stimulants</h3>
              <p className="font-body-md text-on-primary-container leading-relaxed">
                Des techniques plus vives qui réveillent la circulation, stimulent l'énergie vitale et tonifient l'ensemble du corps.
              </p>
            </div>
          </div>
          <p className="text-on-primary-container text-center mt-8 md:mt-12 italic font-body-md max-w-2xl mx-auto">
            Un travail ciblé sur les points énergétiques et la circulation, pour une expérience complète et harmonieuse.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
