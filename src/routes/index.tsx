import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Quintessence - Naturopathie, Réflexologie et Bien-être | Roppe
        </title>
        <meta
          name="description"
          content="Votre sanctuaire de bien-être holistique à Roppe. Delphine vous accompagne en naturopathie, réflexologie plantaire, palmaire et crânio-faciale, Reiki et fleurs de Bach. Prenez soin de vous."
        />
        <meta
          name="keywords"
          content="naturopathie, réflexologie, Reiki, fleurs de Bach, bien-être holistique, santé naturelle, Roppe, Belfort, Bourgogne-Franche-Comté"
        />
        <link rel="canonical" href="https://quintessence.fr/" />
        <meta
          property="og:title"
          content="Quintessence - Votre sanctuaire de bien-être holistique"
        />
        <meta
          property="og:description"
          content="Delphine vous accompagne dans une approche holistique unique : naturopathie, réflexologie, Reiki et fleurs de Bach à Roppe."
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/aida-public/AB6AXuB2k5Gz3iW-gvyHBtbVaXxeVORWQr8jvrMKddIJOZ3QiFWEirIxQGT8W0e335Z_ecph9W9keSyYokL2L34itHXtQCZbpCmR8zKDUnyyxAauZzZfTC6Ce8SLokFtwxAnpDmhj-SdETnLSIt58P0hRpQjDLmX7B6F62Qta7kSPi7wijP-bm0jrARXEhi4uvFFf2ViTzXLDXnZ3b4vvUgUjGzNvaa4dNHuW6k1M6C3uhNyyFpVlgLNjss_lrqJ9dZbOhISBa6DaQZ5o6WK"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* The Narrative: Delphine's Path */}
      <NarrativeSection />

      {/* Naturopathy Section */}
      <NaturopathySection />

      {/* Reflexology Section */}
      <ReflexologySection />

      {/* Energy & Emotions Section */}
      <EnergySection />

      {/* Consultation Process */}
      <ConsultationSection />

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="A serene spa environment with soft sunlight streaming through linen curtains"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2k5Gz3iW-gvyHBtbVaXxeVORWQr8jvrMKddIJOZ3QiFWEirIxQGT8W0e335Z_ecph9W9keSyYokL2L34itHXtQCZbpCmR8zKDUnyyxAauZzZfTC6Ce8SLokFtwxAnpDmhj-SdETnLSIt58P0hRpQjDLmX7B6F62Qta7kSPi7wijP-bm0jrARXEhi4uvFFf2ViTzXLDXnZ3b4vvUgUjGzNvaa4dNHuW6k1M6C3uhNyyFpVlgLNjss_lrqJ9dZbOhISBa6DaQZ5o6WK"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 md:space-y-8 lg:space-y-[32px]">
          <span className="font-label-caps text-label-caps text-secondary-fixed-dim uppercase">
            Bienvenue chez Quintessence
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-[64px] leading-[1.1] tracking-[-0.02em] text-primary max-w-lg">
            Prendre soin de soi.
          </h1>
          <p className="font-body-lg text-base md:text-lg lg:text-[18px] leading-[1.7] text-on-surface-variant max-w-md">
            Une approche holistique pour restaurer votre équilibre vital,
            harmoniser votre esprit et reconnecter avec votre essence profonde.
          </p>
          <div className="pt-4 md:pt-8 lg:pt-[32px] flex flex-col sm:flex-row gap-4 lg:gap-[32px]">
            <a
              href="#chemin-equilibre"
              className="bg-primary text-on-primary px-6 md:px-8 lg:px-10 py-4 md:py-5 rounded-full font-label-caps text-label-caps transition-transform hover:scale-105 shadow-xl inline-block"
            >
              Commencer l'expérience
            </a>
            {/* <button className="border-b-2 border-tertiary-fixed-dim px-2 py-4 md:py-5 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors">
              Découvrir mes soins
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function NarrativeSection() {
  return (
    <section
      id="chemin-equilibre"
      className="py-16 md:py-24 lg:py-[120px] max-w-7xl mx-auto px-4 md:px-12 scroll-mt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[32px] items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl max-w-md mx-auto lg:max-w-none">
            <img
              className="w-full h-full object-cover grayscale-[20%]"
              alt="A professional and warm portrait of Delphine"
              src="/image/Portrait.jpg"
            />
          </div>
          <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 bg-primary p-6 md:p-10 rounded-2xl shadow-2xl max-w-[280px] md:max-w-xs">
            <p className="font-headline-md text-headline-md text-white italic text-sm md:text-base">
              "La santé n'est pas seulement l'absence de maladie, c'est une
              vitalité rayonnante."
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 md:space-y-8 lg:space-y-[48px] mt-8 lg:mt-0">
          <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
            Le chemin vers l'équilibre
          </h2>
          <div className="space-y-4 md:space-y-[16px] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Mon parcours n'a pas été linéaire. Après des années dans le monde
              exigeant de l'entreprise, j'ai ressenti un appel profond vers ce
              qui compte vraiment : l'humain et sa capacité innée de guérison.
            </p>
            <p>
              Je me suis construite à travers l'étude passionnée de la biologie
              humaine et des sagesses ancestrales. Aujourd'hui, je vous
              accompagne en fusionnant la rigueur de la naturopathie avec la
              douceur intuitive de la réflexologie.
            </p>
            <p>
              Chaque rencontre est une co-création. Je ne suis pas là pour
              donner des ordres, mais pour vous remettre les clés de votre
              propre sanctuaire intérieur.
            </p>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="h-px w-16 md:w-24 bg-primary/20" />
            <span className="font-label-caps text-label-caps text-primary">
              Delphine, Praticienne Holistique
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function NaturopathySection() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 lg:mb-[48px] gap-4 md:gap-[16px]">
          <div className="max-w-2xl">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mt-2">
              La Naturopathie Préventive
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Comprendre la cause, pas seulement le symptôme. Une hygiène de vie
            sur-mesure pour votre terrain biologique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
          {/* Prevention */}
          <div className="bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mb-4 md:mb-[16px]">
              eco
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
              Prévention & Vitalité
            </h3>
            <p className="font-body-md text-on-surface-variant flex-grow">
              Optimiser votre sommeil, votre alimentation et votre gestion du
              stress avant que les déséquilibres ne s'installent.
            </p>
            <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-primary-fixed-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Bilan
                de terrain
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Réglage alimentaire
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Gestion du stress et des émotions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Mouvement et respiration
              </li>
            </ul>
          </div>
          {/* Specific Troubles */}
          <div className="bg-primary text-on-primary p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col h-full">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-on-primary-container mb-4 md:mb-[16px]">
              healing
            </span>
            <h3 className="font-headline-md text-headline-md mb-3 md:mb-4">
              Troubles Spécifiques
            </h3>
            <p className="font-body-md text-on-primary-container flex-grow">
              Accompagnement naturel pour les troubles chroniques, digestifs,
              hormonaux ou inflammatoires.
            </p>
            <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps opacity-80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container" />{" "}
                Digestion difficile
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container" />{" "}
                Fatigue chronique
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container" />{" "}
                Hypothyroïdie
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container" />{" "}
                Cycles féminins
              </li>
            </ul>
          </div>
          {/* Tools */}
          <div className="bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary mb-4 md:mb-[16px]">
              medication
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
              Outils Naturels
            </h3>
            <p className="font-body-md text-on-surface-variant flex-grow">
              L'usage raisonné des plantes, des huiles essentielles et des
              compléments micronutritionnels.
            </p>
            <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-primary-fixed-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Phytothérapie
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Aromathérapie
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Gemmothérapie
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />{" "}
                Florithérapie
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReflexologySection() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-7xl mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[120px] items-center">
        <div className="space-y-6 md:space-y-8 lg:space-y-[32px]">
          <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
            L'Art de la Réflexologie
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Le corps est une carte. En stimulant des points précis, nous
            envoyons des messages d'auto-régulation à vos organes et à votre
            système nerveux.
          </p>
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-[32px] pt-4 md:pt-8 lg:pt-[32px]">
            <div className="group flex flex-col sm:flex-row gap-4 md:gap-[32px] p-4 md:p-6 rounded-2xl hover:bg-surface-container transition-colors cursor-default">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">footprint</span>
              </div>
              <div>
                <h4 className="font-headline-md text-primary mb-1">
                  Plantaire
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Ancrage profond et libération des tensions accumulées dans
                  tout le corps via les pieds.
                </p>
              </div>
            </div>
            <div className="group flex flex-col sm:flex-row gap-4 md:gap-[32px] p-4 md:p-6 rounded-2xl hover:bg-surface-container transition-colors cursor-default">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">back_hand</span>
              </div>
              <div>
                <h4 className="font-headline-md text-primary mb-1">Palmaire</h4>
                <p className="font-body-md text-on-surface-variant">
                  Détente immédiate et soulagement du stress mental, idéal pour
                  les mains sollicitées.
                </p>
              </div>
            </div>
            <div className="group flex flex-col sm:flex-row gap-4 md:gap-[32px] p-4 md:p-6 rounded-2xl hover:bg-surface-container transition-colors cursor-default">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">face</span>
              </div>
              <div>
                <h4 className="font-headline-md text-primary mb-1">
                  Cranio-faciale
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Effet revitalisant instantané et harmonisation émotionnelle
                  par le visage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <div className="aspect-square bg-surface-container rounded-full overflow-hidden border-[8px] md:border-[12px] lg:border-[16px] border-white shadow-2xl max-w-sm mx-auto lg:max-w-none">
            <img
              className="w-full h-full object-cover"
              alt="Hands performing reflexology treatment"
              src="https://sekoya-spa.fr/wp-content/uploads/2023/05/Soin-precieux-des-pieds-2.png"
            />
          </div>
          <div className="absolute top-0 -left-4 md:-left-12 w-32 md:w-48 h-32 md:h-48 bg-tertiary-fixed-dim/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

function EnergySection() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/30 via-surface to-surface" />
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-[120px]">
          <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mt-4">
            Énergie & Émotions
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 md:mt-[16px]">
            Là où les mots s'arrêtent, l'énergie et la vibration des plantes
            prennent le relais pour apaiser les tempêtes intérieures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-[48px]">
          {/* Reiki */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-[32px] md:rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/40 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[32px] border border-white/50 shadow-sm overflow-hidden">
              <div className="flex justify-between items-start">
                <h3 className="font-display-md text-primary">Reiki</h3>
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-tertiary-container">
                  light_mode
                </span>
              </div>
              <p className="font-body-lg text-on-surface-variant mt-6 md:mt-8 lg:mt-[32px] leading-relaxed">
                Une séance énergétique pour lever les blocages, réactiver vos
                centres vitaux et instaurer un état de relaxation profonde,
                quasi méditatif.
              </p>
              <div className="mt-6 md:mt-8 lg:mt-[32px] flex flex-wrap gap-2 md:gap-4">
                <span className="px-3 md:px-4 py-2 bg-surface-container rounded-full font-label-caps text-label-caps text-primary">
                  Harmonie
                </span>
                <span className="px-3 md:px-4 py-2 bg-surface-container rounded-full font-label-caps text-label-caps text-primary">
                  Sérénité
                </span>
                <span className="px-3 md:px-4 py-2 bg-surface-container rounded-full font-label-caps text-label-caps text-primary">
                  Libération
                </span>
              </div>
            </div>
          </div>
          {/* Bach Flowers */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-tertiary/5 to-on-tertiary-container/5 rounded-[32px] md:rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/40 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[32px] border border-white/50 shadow-sm overflow-hidden">
              <div className="flex justify-between items-start">
                <h3 className="font-display-md text-primary">Fleurs de Bach</h3>
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-tertiary-container">
                  local_florist
                </span>
              </div>
              <p className="font-body-lg text-on-surface-variant mt-6 md:mt-8 lg:mt-[32px] leading-relaxed">
                Les 38 élixirs du Dr Bach pour équilibrer vos états émotionnels
                passagers ou récurrents à travers les 7 familles de sentiments.
              </p>
              <div className="mt-6 md:mt-8 lg:mt-[32px] flex flex-wrap gap-2 md:gap-4">
                <span className="px-3 md:px-4 py-2 bg-on-tertiary-container/10 rounded-full font-label-caps text-label-caps text-on-tertiary-fixed-variant">
                  Rescue Remedy
                </span>
                <span className="px-3 md:px-4 py-2 bg-on-tertiary-container/10 rounded-full font-label-caps text-label-caps text-on-tertiary-fixed-variant">
                  7 Familles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-[120px] text-on-primary relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/image/Bgfloral.png)' }}
    >
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[120px]">
          <div>
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] mb-8 md:mb-12 lg:mb-[48px]">
              Le Voyage d'Accompagnement
            </h2>
            <p className="font-body-lg text-on-primary italic max-w-md">
              Une méthode structurée pour des résultats durables. Je vous reçois
              dans un espace dédié au calme et à l'écoute.
            </p>
            <div className="mt-8 md:mt-12 lg:mt-[48px] space-y-6 md:space-y-8 lg:space-y-[32px]">
              <div className="flex items-start gap-4 md:gap-[32px]">
                <div className="text-3xl md:text-[48px] font-serif text-on-primary-container">
                  01
                </div>
                <div>
                  <h4 className="font-headline-md text-on-primary">
                    Première Visite (1h30)
                  </h4>
                  <p className="font-body-md text-on-primary italic mt-2">
                    Une anamnèse complète pour comprendre votre histoire, vos
                    habitudes et votre vitalité. On repart avec un plan d'action
                    concret.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <div className="text-3xl md:text-[48px] font-serif text-on-primary-container">
                  02
                </div>
                <div>
                  <h4 className="font-headline-md text-on-primary">
                    Suivis (45min - 1h)
                  </h4>
                  <p className="font-body-md text-on-primary italic mt-2">
                    Ajustement du protocole, observation des progrès et
                    approfondissement selon vos besoins du moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-container rounded-2xl md:rounded-[40px] p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10 space-y-6 md:space-y-8 lg:space-y-[32px]">
              <h3 className="font-headline-lg text-on-primary">
                Prêt pour votre première séance ?
              </h3>
              <p className="font-body-lg text-on-primary-container">
                Réservez en ligne ou contactez-moi pour toute demande
                particulière.
              </p>
              <div className="pt-6 md:pt-8 lg:pt-[32px]">
                <button className="w-full bg-white text-primary py-4 md:py-5 rounded-full font-label-caps text-label-caps hover:bg-secondary-fixed transition-colors">
                  Réserver maintenant
                </button>
              </div>
              <div className="mt-8 md:mt-12 lg:mt-[48px] grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)] gap-4 md:gap-6 lg:gap-[32px] pt-6 md:pt-8 lg:pt-[32px] border-t border-white/10">
                <div>
                  <p className="font-label-caps text-on-primary-container uppercase text-[10px]">
                    Téléphone
                  </p>
                  <p className="font-body-md text-on-primary">07 67 72 82 36</p>
                </div>
                <div>
                  <p className="font-label-caps text-on-primary-container uppercase text-[10px]">
                    Email
                  </p>
                  <p className="font-body-md text-on-primary break-words">
                    quintessence.delphine@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-16 md:-bottom-24 -right-16 md:-right-24 w-64 md:w-96 h-64 md:h-96 bg-secondary/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] max-w-7xl mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[32px]">
        <div className="md:col-span-4">
          <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
            Questions Fréquentes
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 md:mt-[16px]">
            Tout ce que vous devez savoir avant de commencer votre parcours.
          </p>
        </div>
        <div className="md:col-span-8 space-y-4 md:space-y-[16px]">
          <FaqItem
            question="La naturopathie remplace-t-elle le médecin ?"
            answer="Non, absolument pas. La naturopathie est une pratique complémentaire. Elle ne se substitue jamais à un avis médical, un diagnostic ou un traitement en cours."
          />
          <FaqItem
            question="Comment se déroule une séance de réflexologie ?"
            answer="Vous restez habillé, confortablement installé sur une table de massage. Seules les zones travaillées (pieds, mains ou visage) sont découvertes. La séance dure environ 1 heure dans une ambiance calme et tamisée."
          />
          <FaqItem
            question="Les mutuelles remboursent-elles les séances ?"
            answer="De plus en plus de mutuelles prennent en charge tout ou partie des consultations en naturopathie et réflexologie. Je vous remettrai une facture détaillée à envoyer à votre organisme."
          />
          <FaqItem
            question="Y a-t-il des contre-indications pour le Reiki ?"
            answer="Le Reiki est une méthode douce et universelle. Cependant, par principe de précaution, nous discutons de votre état de santé global avant la séance. Il n'y a pas de manipulation physique."
          />
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-outline-variant/30 pb-[16px] group">
      <div className="flex justify-between items-center cursor-pointer py-4">
        <h4 className="font-headline-md text-primary">{question}</h4>
        <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-45">
          add
        </span>
      </div>
      <p className="font-body-md text-on-surface-variant hidden group-hover:block pb-4 transition-all">
        {answer}
      </p>
    </div>
  );
}
