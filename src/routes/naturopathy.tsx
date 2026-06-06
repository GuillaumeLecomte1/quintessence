import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function NaturopathyPage() {
  return (
    <>
      <Helmet>
        <title>Naturopathie | Quintessence</title>
        <meta name="description" content="Découvrez la naturopathie à Roppe : une approche naturelle pour optimiser votre santé par l'alimentation, l'hydratation, la respiration et les plantes." />
        <meta name="keywords" content="naturopathie, naturopathie Roppe, santé naturelle, micronutrition, higiene de vie, Belfort, bien-être" />
        <link rel="canonical" href="https://quintessence.fr/naturopathy" />
        <meta property="og:title" content="Naturopathie - Quintessence | L'Art de l'Équilibre" />
        <meta property="og:description" content="Naturopathie à Roppe. Une approche naturelle pour retrouver votre santé et votre vitalités par les lois de la vie." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">Médecine Naturelle</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-primary leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Naturopathie : <br /><span className="italic font-normal">La Force Vitale en Vous</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8 md:mb-10">
              La naturopathie est une approche holistique qui stimule les capacités naturelles de votre corps à s'auto-guérir. En combinant alimentation, plantes et hygiène de vie, elle optimise votre santé durablement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                Réserver une consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[1.5rem_1.5rem_0_10rem] overflow-hidden shadow-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover"
                alt="Naturopathie - Santé naturelle"
                src="/image/Naturopathie.png"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-12 hidden lg:block bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
              <p className="font-display-md italic text-primary text-lg mb-2">"Que ton alimentation soit ta première médecine."</p>
              <p className="text-sm text-on-surface-variant">— Hippocrate</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Les Principes de la Naturopathie Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-8 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Les Fondements de la Naturopathie
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              La naturopathie repose sur des siècles de sagesse et les lois de la nature. Elle vise à traiter la cause profonde des déséquilibres, pas seulement les symptômes, pour une santé durable et naturelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {/* Alimentation */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">restaurant</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Alimentation Naturelle</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Une nutrition adaptée à vos besoins individuelles, privilégiant les aliments vivants et proches de la nature pour nourrir votre corps et votre microbiote.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Micronutrition</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Protocoles anti-inflammatoires</li>
              </ul>
            </div>
            
            {/* Respiration */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">air</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Respiration Vitalisante</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                La respiration est notre fonction vitale la plus oubliée. Des techniques simples mais puissantes pour oxygéner vos tissus et calmer votre système nerveux.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Exercices respiratoires</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Cohérence cardiaque</li>
              </ul>
            </div>
            
            {/* Équilibre */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">spa</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Équilibre Mental</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Le stress et les émotions influencent profondément notre santé. Nous vous aidons à retrouver un équilibre psycho-émotionnel pour une vie sereine.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Gestion du stress</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Réflexologie</li>
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
                alt="Consultation naturopathie"
                src="/image/photo_naturopathie2.png"
              />
              <div className="absolute -top-4 md:-top-10 -right-4 md:-right-10 w-28 md:w-48 h-28 md:h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg rotate-12">
                <p className="text-on-secondary-container font-headline font-bold text-xs md:text-sm leading-tight">Vitalité Naturelle Durable</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 lg:space-y-[48px]">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Les Bienfaits d'un Accompagnement Naturopathique
            </h2>
            <div className="space-y-8 md:space-y-12 lg:space-y-[48px]">
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">01</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Optimisation de la Vitalité</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    En soutenant les fonctions naturelles de votre corps, la naturopathie permet de retrouver une énergie durable et un bien-être au quotidien.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">02</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Renforcement de l'Immunité</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    En rééquilibrant votre terrain et en comblant les carences nutritionnelles, votre système immunitaire devient plus resilient face aux agressions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">03</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Approche Personnalisée</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Chaque accompagnement naturopathique est unique, basé sur votre constitution, vos antécédents et vos objectifs de santé personnels.
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
            Comment se déroule une consultation ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[32px]">
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">1.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Bilan de Santé</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Analyse approfondie de votre terrain, vos antécédents et votre mode de vie actuel.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">2.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Évaluation</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Identification des causes profondes de vos déséquilibres et de vos besoins spécifiques.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">3.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Programme</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base"> élaboration d'un programme naturopathique personnalisé avec recommandations concrètes.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">4.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Suivi</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Accompagnement dans la durée pour adapter le programme et célébrer vos progrès.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>

      {/* Tarifs & Accompagnements */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-10 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
              Mes tarifs
            </span>
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Investissez dans votre bien-être
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Chaque accompagnement est pensé sur mesure, en fonction de vos
              besoins et de votre rythme. Voici les formules proposées pour
              vous accueillir, que ce soit pour une première découverte ou pour
              un suivi durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {/* Première consultation */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                  medical_services
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
                Bilan initial
              </h3>
              <div className="h-px w-12 bg-primary/20 mb-4 md:mb-6" />
              <div className="mb-6">
                <div className="font-display-md text-4xl md:text-5xl text-primary leading-none mb-2">
                  70 <span className="text-2xl md:text-3xl">€</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  Durée ~ 1 h 30
                </span>
              </div>
              <div className="flex-grow">
                <p className="font-label-caps text-label-caps text-on-surface mb-3">
                  Ce qui est inclus
                </p>
                <ul className="space-y-2 font-body-md text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Bilan de vitalité complet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Échange approfondi sur vos besoins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Programme d'hygiène vital personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Remise du programme par mail après la séance</span>
                  </li>
                </ul>
              </div>
              <p className="font-body-md italic text-on-surface-variant mt-6 pt-6 border-t border-outline-variant/30">
                <span className="text-primary font-medium not-italic">Pour qui :</span>{" "}
                nouvelle venue, premier accompagnement.
              </p>
            </div>

            {/* Consultation de suivi */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                  event_repeat
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
                Suivi
              </h3>
              <div className="h-px w-12 bg-primary/20 mb-4 md:mb-6" />
              <div className="mb-6">
                <div className="font-display-md text-4xl md:text-5xl text-primary leading-none mb-2">
                  55 <span className="text-2xl md:text-3xl">€</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  Durée ~ 1 h
                </span>
              </div>
              <div className="flex-grow">
                <p className="font-label-caps text-label-caps text-on-surface mb-3">
                  Ce qui est inclus
                </p>
                <ul className="space-y-2 font-body-md text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Reprise du bilan de vitalité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Ajustement du programme en place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Réponses à vos questions du quotidien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Conseils ciblés sur vos blocages actuels</span>
                  </li>
                </ul>
              </div>
              <p className="font-body-md italic text-on-surface-variant mt-6 pt-6 border-t border-outline-variant/30">
                <span className="text-primary font-medium not-italic">Pour qui :</span>{" "}
                patient déjà accompagné, retour ponctuel.
              </p>
            </div>

            {/* Forfait 3 suivis */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                  workspace_premium
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
                Forfait 3 séances
              </h3>
              <div className="h-px w-12 bg-primary/20 mb-4 md:mb-6" />
              <div className="mb-6">
                <div className="font-display-md text-4xl md:text-5xl text-primary leading-none mb-2">
                  160 <span className="text-2xl md:text-3xl">€</span>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  3 × ~ 1 h · économique
                </span>
              </div>
              <div className="flex-grow">
                <p className="font-label-caps text-label-caps text-on-surface mb-3">
                  Ce qui est inclus
                </p>
                <ul className="space-y-2 font-body-md text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Trois consultations de suivi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Suivi régulier et ajustements progressifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Accompagnement par mail / SMS entre les séances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <span>Bilan final et conseils pour maintenir vos acquis</span>
                  </li>
                </ul>
              </div>
              <p className="font-body-md italic text-on-surface-variant mt-6 pt-6 border-t border-outline-variant/30">
                <span className="text-primary font-medium not-italic">Pour qui :</span>{" "}
                engagement durable, accompagnement mensuel.
              </p>
            </div>
          </div>

          <p className="text-center font-body-md text-on-surface-variant mt-10 md:mt-12 max-w-2xl mx-auto">
            Tarifs indiqués à titre indicatif. Pour toute question ou pour
            convenir d'un créneau, n'hésitez pas à me contacter.
          </p>
        </div>
      </section>

      {/* CTA Réservation */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center flex flex-col items-center gap-6">
          <h3 className="font-display-md text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
            Prêt(e) à prendre soin de vous ?
          </h3>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Réservez votre première consultation ou demandez des informations
            complémentaires. Je vous répondrai avec plaisir.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            Réserver une consultation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
