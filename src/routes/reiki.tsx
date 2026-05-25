import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function ReikiPage() {
  return (
    <>
      <Helmet>
        <title>Reiki | Quintessence</title>
        <meta name="description" content="Découvrez le Reiki à Roppe : une approche énergétique pour harmoniser le corps et l'esprit, réduire le stress et favoriser l'auto-guérison naturelle." />
        <meta name="keywords" content="reiki, Reiki Roppe, soin énergétique, harmonisation, Belfort, bien-être" />
        <link rel="canonical" href="https://quintessence.fr/reiki" />
        <meta property="og:title" content="Reiki - Quintessence | L'Art de l'Équilibre" />
        <meta property="og:description" content="Reiki à Roppe. Une méthode naturelle pour harmoniser votre corps et libérer vos tensions." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">Soin Énergétique</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display-lg font-bold text-primary leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Reiki : <br /><span className="italic font-normal">L'Énergie de la Guérison</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-8 md:mb-10">
              Une pratique ancestrale japonaise pour canaliser l'énergie vitale et restaurer l'harmonie corps-esprit. Le Reiki apporte détente profonde et bien-être durable.
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
                alt="Reiki - Energy healing"
                src="/image/Reiki 2.JPG"
              />
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-12 hidden lg:block bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
              <p className="font-display-md italic text-primary text-lg mb-2">"L'énergie suit l'intention."</p>
              <p className="text-sm text-on-surface-variant">— Mikao Usui, fondateur du Reiki</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Qu'est-ce que le Reiki Section */}
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-8 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              Qu'est-ce que le Reiki ?
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Le Reiki est une technique de soins énergétiques née au Japon à la fin du XIXe siècle. Le mot signifie "énergie vitale universelle" et permet de rééquilibrer le corps et l'esprit par le toucher ou l'imposition des mains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px]">
            {/* Niveau 1 */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">spa</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Reiki Usui Shoden</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Premier niveau dédié à l'auto-guérison et à l'harmonisation personnelle. Vous apprendrez à vous traiter vous-même et à traiter les autres de manière simple et efficace.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Découverte de l'énergie vitale</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Auto-traitement de base</li>
              </ul>
            </div>
            {/* Niveau 2 */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">auto_awesome</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Reiki Okuden</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Deuxième niveau permettant l'envoi de Reiki à distance, dans le temps et dans l'espace. Apprentissage des symboles de pouvoir et de guérison.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Symboles sacrés du Reiki</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Soins à distance</li>
              </ul>
            </div>
            {/* Niveau 3 */}
            <div className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">wb_sunny</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">Reiki Shinpinden</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Troisième niveau pour devenir Maître Reiki. Approfondissement de la connexion énergétique et transmission de l'enseignement sacré.
              </p>
              <ul className="mt-4 md:mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Maîtrise complète</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Enseignement du Reiki</li>
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
                alt="Mains en position de Reiki"
                src="/image/Reiki 2.JPG"
              />
              <div className="absolute -top-4 md:-top-10 -right-4 md:-right-10 w-28 md:w-48 h-28 md:h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg rotate-12">
                <p className="text-on-secondary-container font-headline font-bold text-xs md:text-sm leading-tight">Harmonisation Énergétique Complète</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 lg:space-y-[48px]">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Les Bienfaits d'une Séance de Reiki
            </h2>
            <div className="space-y-8 md:space-y-12 lg:space-y-[48px]">
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">01</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Relaxation Profonde</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Le Reiki induit un état de relaxation profond, permettant au corps de se libérer des tensions accumulées et de retrouver son équilibre naturel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">02</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Harmonisation des Chakras</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Les centres énergétiques sont rééquilibrés, favorisant une circulation optimale de l'énergie vitale dans tout le corps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-[32px]">
                <span className="text-3xl md:text-[48px] font-serif text-primary/20">03</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Soutien aux Processus de Guérison</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Le Reiki accompagne et renforce tous les processus de guérison, en complément de tout traitement médical ou thérapeutique.
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
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Un moment d'échange pour comprendre vos besoins et créer un espace de confiance.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">2.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">L'Installation</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Confortablement installé sur une table de massage, habillé, dans une atmosphère calme.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">3.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">Le Soin</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Imposition des mains légère sur différentes parties du corps, sans massage ni pression.</p>
            </div>
            <div className="p-6 md:p-8 border border-white/10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4">4.</div>
              <h5 className="font-headline-md text-on-primary mb-2 md:mb-3">L'Intégration</h5>
              <p className="font-body-md text-on-primary-container text-sm md:text-base">Un temps de repos pour intégrer les bénéfices du soin et partager vos ressentis.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
