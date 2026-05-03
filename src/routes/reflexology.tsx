import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";

export function ReflexologyPage() {
  return (
    <>
      <Helmet>
        <title>Réflexologie - Quintessence | L'Art de l'Équilibre</title>
        <meta name="description" content="Découvrez nos techniques de réflexologie spécialisée : plantaire, palmaire et crânio-faciale. Une approche millénaire pour harmoniser le corps et l'esprit." />
        <meta property="og:title" content="Réflexologie - Quintessence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Pierres de basalte zen sur surface blanche"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvcG55SlTrBWf8FOzRtC3YY5Qh1fpBoFqnqbUZc5-s-jf9xwTPibwQh9qpRzJwM0lLIrW9cdI03tBpGqoNtw_iZtlHHu2srrO5fEG6kQOjQubYFJVmwdD43_N3SiCdYM3-LTay6qrw4f-T-gIj1swOjmy01C1-2yUNj6lbpoMsHs08KZWtNV2KeSJNGS-UMAsp-QRqE7BbXaT9qvE7USGK3KGxSvflAPB-6iJQP0d-UP7Rm8DvspIN57BHHbtqLQJxTZV2Exk7GEjE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 w-full grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-[32px]">
            <span className="font-label-caps text-label-caps text-secondary uppercase">Soin Holistique</span>
            <h1 className="font-display-lg text-[64px] leading-[1.1] tracking-[-0.02em] text-primary max-w-lg">
              Réflexologie : <span className="italic font-normal">L'Art de l'Équilibre</span>
            </h1>
            <p className="font-body-lg text-[18px] leading-[1.7] text-on-surface-variant max-w-md">
              Une approche millénaire pour harmoniser le corps et l'esprit à travers des points de pression précis, stimulant les capacités d'auto-guérison de votre organisme.
            </p>
            <div className="pt-[32px] flex gap-[32px]">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-caps text-label-caps transition-all duration-300 hover:opacity-90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center gap-2">
                Réserver une séance
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Techniques Section */}
      <section className="py-[120px] bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-[48px] text-center max-w-3xl mx-auto">
            <h2 className="font-display-md text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-6">
              Nos Techniques Spécialisées
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Chaque partie de notre corps porte une cartographie de notre bien-être global. Nous utilisons des méthodes ciblées pour répondre à vos besoins spécifiques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {/* Plantar */}
            <div className="group bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">footprint</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Réflexologie Plantaire</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                La plus pratiquée, elle repose sur le principe que chaque zone du pied correspond à un organe ou une fonction du corps. Une pression ferme et rythmée libère les tensions profondes.
              </p>
              <ul className="mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Stimulation des organes</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Équilibre énergétique</li>
              </ul>
            </div>
            {/* Palmar */}
            <div className="group bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">pan_tool</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Réflexologie Palmaire</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Concentrée sur les mains, cette technique est particulièrement efficace pour apaiser le système nerveux. Idéale pour les personnes sensibles ou en complément d'un soin complet.
              </p>
              <ul className="mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Soulagement des articulations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Détente nerveuse immédiate</li>
              </ul>
            </div>
            {/* Cranio-facial */}
            <div className="group bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">face</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Réflexologie Crânio-faciale</h3>
              <p className="font-body-md text-on-surface-variant flex-grow leading-relaxed">
                Une méthode subtile de digitopression sur le visage et le crâne. Elle favorise un lâcher-prise total, idéal pour les troubles du sommeil et la fatigue mentale chronique.
              </p>
              <ul className="mt-[16px] space-y-2 font-label-caps text-label-caps text-on-surface">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Clarté mentale</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Drainage lymphatique facial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-[120px] bg-surface">
        <div className="max-w-7xl mx-auto px-12 flex flex-col lg:flex-row gap-[120px] items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                className="rounded-[4rem] shadow-xl aspect-square object-cover w-full"
                alt="Mains effectuant un soin de réflexologie"
                src="https://www.koreva-formation.com/img/min/images/fiches_metier/bien_etre/reflexologie_400x350.jpg"
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg rotate-12">
                <p className="text-on-secondary-container font-headline font-bold text-sm leading-tight">Harmonisation Naturelle du Corps</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-[48px]">
            <h2 className="font-display-md text-[48px] leading-[1.2] tracking-[-0.01em] text-primary leading-tight">
              Les Bienfaits d'une Séance
            </h2>
            <div className="space-y-[48px]">
              <div className="flex items-start gap-[32px]">
                <span className="text-[48px] font-serif text-primary/20">01</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Réduction Profonde du Stress</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    En sollicitant le système parasympathique, la réflexologie induit un état de relaxation profonde, abaissant le niveau de cortisol.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[32px]">
                <span className="text-[48px] font-serif text-primary/20">02</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Amélioration de la Circulation</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Les pressions stimulent le flux sanguin et lymphatique, favorisant l'apport en nutriments et l'évacuation des toxines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[32px]">
                <span className="text-[48px] font-serif text-primary/20">03</span>
                <div>
                  <h4 className="font-headline-md text-primary mb-2">Équilibre des Fonctions Vitales</h4>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Un soutien efficace pour la digestion, le sommeil et le système immunitaire en régulant l'homéostasie générale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-[120px] bg-primary text-on-primary rounded-[4rem] mx-4 mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-12 text-center relative z-10">
          <h2 className="font-display-md text-[48px] leading-[1.2] tracking-[-0.01em] mb-[64px]">
            À quoi s'attendre lors d'une séance ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-serif italic mb-4">1.</div>
              <h5 className="font-headline-md text-on-primary mb-3">L'Entretien</h5>
              <p className="font-body-md text-on-primary-container">Un moment d'échange pour comprendre vos besoins, votre état de santé et vos attentes.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-serif italic mb-4">2.</div>
              <h5 className="font-headline-md text-on-primary mb-3">L'Installation</h5>
              <p className="font-body-md text-on-primary-container">Confortablement installé sur une table de massage, dans une atmosphère calme et apaisante.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-serif italic mb-4">3.</div>
              <h5 className="font-headline-md text-on-primary mb-3">Le Soin</h5>
              <p className="font-body-md text-on-primary-container">Application de pressions spécifiques, adaptées à votre sensibilité et vos zones de tension.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-serif italic mb-4">4.</div>
              <h5 className="font-headline-md text-on-primary mb-3">Le Retour</h5>
              <p className="font-body-md text-on-primary-container">Un temps de repos post-séance pour intégrer les bienfaits et partager vos ressentis.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
