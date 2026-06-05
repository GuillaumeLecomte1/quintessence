import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function BachFlowersPage() {
  return (
    <>
      <Helmet>
        <title>Fleurs de Bach | Quintessence</title>
        <meta name="description" content="Découvrez les fleurs de Bach à Roppe : une approche douce pour harmoniser vos émotions et retrouver l'équilibre intérieur naturellement." />
        <meta name="keywords" content="fleurs de Bach, Bach flowers, élixirs floraux, harmonie émotionnelle, Roppe, Belfort, bien-être" />
        <link rel="canonical" href="https://quintessence.fr/bach-flowers" />
        <meta property="og:title" content="Fleurs de Bach - Quintessence | L'Art de l'Équilibre" />
        <meta property="og:description" content="Fleurs de Bach à Roppe. Une méthode douce pour harmoniser vos émotions et retrouver votre équilibre intérieur." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">Soin Vibratoire</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-primary leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Fleurs de Bach : <br /><span className="italic font-normal">L'Harmonie Émotionnelle</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8 md:mb-10">
              Une méthode douce et naturelle pour harmoniser vos émotions. Les élixirs floraux du Dr Edward Bach vous accompagnent vers un équilibre intérieur durable.
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
                alt="Fleurs de Bach - Élixirs floraux"
                src="/image/Fleurs de Bach.png"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-12 hidden lg:block bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
              <p className="font-display-md italic text-primary text-lg mb-2">"La santé est notre héritage, notre droit."</p>
              <p className="text-sm text-on-surface-variant">— Dr Edward Bach</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Qu'est-ce que les Fleurs de Bach Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-8 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Qu'est-ce que les Fleurs de Bach ?
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Mise au point dans les années 1930 par le Dr Edward Bach, médecin homéopathe anglais, cette méthode utilise 38 élixirs floraux préparés à partir de fleurs sauvages. Chaque élixir vise à harmoniser un état émotionnel spécifique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {/* Rescue */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">emergency</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Rescue Remedy</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                L'élixir d'urgence emblématique, composé de 5 fleurs. Idéal pour gérer les situations de stress aigu, les chocs émotionnels ou les moments d'anxiété intense.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Star of Bethlehem</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Rock Rose</li>
              </ul>
            </div>
            {/* Fleurs Dupes */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Fleurs de l'État</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Ces 12 fleurs dites "dupes" traitent les peurs et anxieties. Elles permettent de retrouver calme et confiance face aux épreuves du quotidien.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Mimulus, Cherry Plum</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Red Chestnut</li>
              </ul>
            </div>
            {/* Fleurs Christiques */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">self_improvement</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Fleurs Christiques</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Les 7 fleurs pour ceux qui portent des responsabilités. Elles apaisent le sentiment d'être submergé et renforcent la capacité à prendre du recul.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Walnut, Hornbeam</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Centaury</li>
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
                alt="Élixirs floraux naturelle"
                src="/image/Fleurs_de_bach.png"
              />
              <div className="absolute -top-4 md:-top-10 -right-4 md:-right-10 w-28 md:w-48 h-28 md:h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg rotate-12">
                <p className="text-on-secondary-container font-headline font-bold text-xs md:text-sm leading-tight">Harmonisation Émotionnelle Naturelle</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 lg:space-y-[48px]">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Les Bienfaits des Fleurs de Bach
            </h2>
            <div className="space-y-8 md:space-y-12 lg:space-y-[48px]">
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">01</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Harmonisation des Émotions</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Chaque élixir cible un état émotionnel précis, permettant de retrouver un équilibre intérieur et de gérer plus sereinement les défis quotidiens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">02</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Approche Douce et Naturelle</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Préparés à partir de fleurs sauvages, les élixirs sont parfaitement naturels, sans effets secondaires et adaptés à tous, enfants comme adultes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">03</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Accompagnement Global</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Les fleurs de Bach fonctionnent en harmonie avec tout autre traitement, offrant un soutien complémentaire précieux pour le bien-être global.
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
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">L'Échange</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Nous explorons ensemble vos émotions et votre état actuel pour identifier les fleurs adaptées.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">2.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">La Sélection</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Choix personnalisé des élixirs floraux les plus appropriés à votre situation du moment.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">3.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">La Prescription</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Préparation de votre flacon personnalisé avec les élixirs sélectionnés et instructions de prise.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">4.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Le Suivi</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Un accompagnement pour ajuster la sélection si besoin et suivre l'évolution de votre bien-être.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
