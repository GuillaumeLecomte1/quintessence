import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

const timelineSteps = [
  {
    icon: "science",
    title: "Sciences du vivant",
    description:
      "Biologie et physiologie cellulaire : la fascination pour l'intelligence du vivant.",
  },
  {
    icon: "factory",
    title: "Détour industriel",
    description:
      "Un univers riche, mais un éloignement progressif de ce qui me faisait vibrer.",
  },
  {
    icon: "favorite",
    title: "Le déclic",
    description:
      "L'épreuve de la maladie, une rencontre, un retour à l'essentiel.",
  },
  {
    icon: "spa",
    title: "Naturopathie",
    description:
      "Formation à l'école Plantasanté : unir science, écoute et approche naturelle.",
  },
];

const approaches = [
  {
    icon: "restaurant",
    title: "Alimentation",
    description:
      "Une nutrition vivante et personnalisée, base essentielle de votre équilibre.",
  },
  {
    icon: "eco",
    title: "Phytothérapie",
    description:
      "Les bienfaits des plantes pour soutenir et rééquilibrer votre terrain.",
  },
  {
    icon: "spa",
    title: "Aromathérapie",
    description:
      "Les huiles essentielles pour agir en profondeur, avec douceur et précision.",
  },
  {
    icon: "local_florist",
    title: "Fleurs de Bach",
    description:
      "L'équilibre émotionnel au cœur de votre mieux-être au quotidien.",
  },
  {
    icon: "footprint",
    title: "Réflexologie plantaire",
    description:
      "Une approche complémentaire pour relâcher les tensions et relancer la vitalité.",
  },
  {
    icon: "air",
    title: "Respiration & stress",
    description:
      "Des outils simples pour apaiser le système nerveux et retrouver de l'énergie.",
  },
];

export function AboutStoryPage() {
  return (
    <>
      <Helmet>
        <title>
          Mon Histoire | Quintessence — Le Parcours de Delphine
        </title>
        <meta
          name="description"
          content="Découvrez le parcours de Delphine, praticienne en naturopathie à Roppe : de la biologie cellulaire à la reconversion par la maladie, jusqu'à la formation Plantasanté."
        />
        <meta
          name="keywords"
          content="naturopathie Roppe, naturopathe Belfort, parcours naturopathe, Delphine Quintessence, formation Plantasanté, éducatrice de santé, histoire, reconversion, bien-être"
        />
        <link rel="canonical" href="https://quintessence.fr/about-story" />
        <meta
          property="og:title"
          content="Mon Histoire - Quintessence | Le Parcours de Delphine"
        />
        <meta
          property="og:description"
          content="De la biologie cellulaire à la naturopathie : le parcours atypique de Delphine, praticienne à Roppe."
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
              Mon parcours
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-primary leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Mon <br />
              <span className="italic font-normal">Histoire</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8 md:mb-10">
              Je m'appelle Delphine, praticienne en naturopathie. Ma vocation
              est née d'une conviction profonde : chacun mérite de se sentir
              bien, en harmonie avec son corps et avec lui-même.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about-cabinet"
                className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                Découvrir mon cabinet
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[1.5rem_1.5rem_0_10rem] overflow-hidden shadow-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover"
                alt="Portrait de Delphine, praticienne en naturopathie à Roppe"
                src="/image/Portrait.jpg"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-12 hidden lg:block bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
              <p className="font-display-md italic text-primary text-lg mb-2">
                "Que ton alimentation soit ta première médecine."
              </p>
              <p className="text-sm text-on-surface-variant">
                — Hippocrate
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-10 md:mb-16 lg:mb-[64px] text-center max-w-3xl mx-auto">
         
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Un parcours guidé par le vivant
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Quatre étapes clés qui m'ont menée, pas à pas, jusqu'à la
              naturopathie et à la mission qui m'anime aujourd'hui.
            </p>
          </div>

          {/* Mobile: vertical / Desktop: horizontal */}
          <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-[32px]">
            {/* Connecting line (desktop only) */}
            <span
              aria-hidden
              className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-primary/20"
            />
            {timelineSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6"
              >
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface border border-primary/20 shadow-sm flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                    {step.icon}
                  </span>
                </div>
                <div className="md:text-center">
                  <span className="font-label-caps text-label-caps text-primary/60 block mb-1 md:mb-2">
                    Étape {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* De la Biologie à l'Industrie */}
      <section className="py-16 md:py-24 lg:py-[120px] max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[32px] items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl max-w-md mx-auto lg:max-w-none">
              <img
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Cabinet de Delphine, un espace apaisant à Roppe"
                src="/image/Bureau (2).jpg"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 md:space-y-8 lg:space-y-[48px] mt-8 lg:mt-0">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              De la Biologie à l'Industrie
            </h2>
            <div className="space-y-4 md:space-y-[16px] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Depuis toujours, je suis animée par le désir d'aider, d'écouter
                et d'accompagner. Aider à comprendre son corps, à retrouver de
                l'énergie, à transformer doucement ses habitudes pour aller vers
                un mieux-être durable.
              </p>
              <p>
                J'ai d'abord étudié la biologie et la physiologie cellulaire,
                fascinée par l'intelligence du vivant. Puis la vie m'a menée
                vers l'industrie, un univers riche, mais où, au fil du temps,
                je me suis un peu éloignée de ce qui me faisait profondément
                vibrer.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="h-px w-16 md:w-24 bg-primary/20" />
           
            </div>
          </div>
        </div>
      </section>

      {/* Le Tournant */}
      <section className="py-16 md:py-24 lg:py-[120px] max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[32px] items-center">
          <div className="lg:col-span-6 space-y-6 md:space-y-8 lg:space-y-[48px] mt-8 lg:mt-0 order-2 lg:order-1">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Le Tournant : la Maladie comme Éveil
            </h2>
            <div className="space-y-4 md:space-y-[16px] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                C'est finalement à travers l'épreuve de la maladie que la
                naturopathie est entrée dans ma vie. Non pas comme un simple
                métier, mais comme une évidence, une rencontre, un retour à
                l'essentiel.
              </p>
              <p>
                Elle m'a permis de me reconnecter à mes valeurs, à mes
                connaissances, et surtout à ma mission : accompagner l'humain
                avec douceur et bienveillance.
              </p>
              <p>
                Ma formation de praticienne en naturopathie à l'école
                Plantasanté m'a permis d'unir la science, l'écoute et l'approche
                naturelle pour proposer un accompagnement profondément
                personnalisé.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="h-px w-16 md:w-24 bg-primary/20" />
              <span className="font-label-caps text-label-caps text-primary">
                Une rencontre, un retour à l'essentiel
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 relative order-1 lg:order-2">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl max-w-md mx-auto lg:max-w-none">
              <img
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Approche holistique de Delphine, praticienne à Roppe"
                src="/image/delph_plantaire.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mon Approche Holistique */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-10 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
              Mes outils
            </span>
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Mon Approche Holistique
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Aujourd'hui, je vous accompagne comme éducatrice de santé, avec
              respect, écoute et bienveillance, vers un équilibre global —
              physique, émotionnel et intérieur. Mon rôle est de vous guider, pas
              à pas, vers un mode de vie plus sain, plus conscient et plus
              aligné avec vos besoins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                    {approach.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
                  {approach.title}
                </h3>
                <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mon Intention — CTA */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-primary text-on-primary rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] mx-4 md:mx-12 mb-8 md:mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-on-primary text-xs font-bold uppercase tracking-widest mb-6">
            Ma mission
          </span>
          <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] mb-6 md:mb-8">
            Mon Intention pour Vous
          </h2>
          <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
            Je crois sincèrement que, même lorsque tout semble difficile, il
            existe toujours une porte, une solution, un premier pas. Mon
            intention profonde : vous transmettre des clés, vous redonner
            confiance en votre corps, et vous rendre autonome sur le chemin de
            votre santé et de votre vitalité.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-tertiary text-on-tertiary px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
            >
              Réserver une consultation
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/naturopathy"
              className="bg-white/10 text-on-primary border border-white/20 px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Découvrir la naturopathie
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
