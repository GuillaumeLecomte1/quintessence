import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function ReflexologyPage() {
  return (
    <>
      <Helmet>
        <title>Réflexologie - Quintessence | L'Art de l'Équilibre</title>
        <meta name="description" content="Découvrez nos techniques de réflexologie spécialisée : plantaire, palmaire et crânio-faciale. Une approche millénaire pour harmoniser le corps et l'esprit." />
        <meta property="og:title" content="Réflexologie - Quintessence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden px-8 pt-24">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">Soin Holistique</span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary leading-[1.1] mb-8 tracking-tighter">
              Réflexologie : <br /><span className="italic font-normal">L'Art de l'Équilibre</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Une approche millénaire pour harmoniser le corps et l'esprit à travers des points de pression précis, stimulant les capacités d'auto-guérison de votre organisme.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2">
                Réserver une séance
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[1.5rem_1.5rem_0_10rem] overflow-hidden shadow-2xl bg-surface-container-high">
              <img
                className="w-full h-full object-cover"
                alt="Zen basalt stones on white surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvcG55SlTrBWf8FOzRtC3YY5Qh1fpBoFqnqbUZc5-s-jf9xwTPibwQh9qpRzJwM0lLIrW9cdI03tBpGqoNtw_iZtlHHu2srrO5fEG6kQOjQubYFJVmwdD43_N3SiCdYM3-LTay6qrw4f-T-gIj1swOjmy01C1-2yUNj6lbpoMsHs08KZWtNV2KeSJNGS-UMAsp-QRqE7BbXaT9qvE7USGK3KGxSvflAPB-6iJQP0d-UP7Rm8DvspIN57BHHbtqLQJxTZV2Exk7GEjE"
              />
            </div>
            <div className="absolute -bottom-6 -left-12 hidden lg:block bg-surface-container-lowest p-8 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
              <p className="font-headline italic text-primary text-lg mb-2">"Le pied est le miroir du corps."</p>
              <p className="text-sm text-on-surface-variant">— Sagesse Traditionnelle</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Techniques Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-primary mb-6">Nos Techniques Spécialisées</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Chaque partie de notre corps porte une cartographie de notre bien-être global. Nous utilisons des méthodes ciblées pour répondre à vos besoins spécifiques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plantar */}
            <div className="group bg-surface-container-lowest p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">footprint</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Réflexologie Plantaire</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                La plus pratiquée, elle repose sur le principe que chaque zone du pied correspond à un organe ou une fonction du corps. Une pression ferme et rythmée libère les tensions profondes.
              </p>
              <ul className="space-y-3 text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Stimulation des organes
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Équilibre énergétique
                </li>
              </ul>
            </div>
            {/* Palmar */}
            <div className="group bg-surface-container-lowest p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">pan_tool</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Réflexologie Palmaire</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Concentrée sur les mains, cette technique est particulièrement efficace pour apaiser le système nerveux. Idéale pour les personnes sensibles ou en complément d'un soin complet.
              </p>
              <ul className="space-y-3 text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Soulagement des articulations
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Détente nerveuse immédiate
                </li>
              </ul>
            </div>
            {/* Cranio-facial */}
            <div className="group bg-surface-container-lowest p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">face</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Réflexologie Crânio-faciale</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Une méthode subtile de digitopression sur le visage et le crâne. Elle favorise un lâcher-prise total, idéal pour les troubles du sommeil et la fatigue mentale chronique.
              </p>
              <ul className="space-y-3 text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Clarté mentale
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>circle</span>
                  Drainage lymphatique facial
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                className="rounded-[4rem] shadow-xl aspect-square object-cover"
                alt="Hands performing reflexology"
                src="https://www.koreva-formation.com/img/min/images/fiches_metier/bien_etre/reflexologie_400x350.jpg"
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg rotate-12">
                <p className="text-on-secondary-container font-headline font-bold text-sm leading-tight">Harmonisation Naturelle du Corps</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold text-primary mb-8 leading-tight">Les Bienfaits d'une Séance</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="text-5xl font-headline font-light text-primary/20">01</span>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Réduction Profonde du Stress</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    En sollicitant le système parasympathique, la réflexologie induit un état de relaxation profonde, abaissant le niveau de cortisol.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-5xl font-headline font-light text-primary/20">02</span>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Amélioration de la Circulation</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Les pressions stimulent le flux sanguin et lymphatique, favorisant l'apport en nutriments et l'évacuation des toxines.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-5xl font-headline font-light text-primary/20">03</span>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Équilibre des Fonctions Vitales</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Un soutien efficace pour la digestion, le sommeil et le système immunitaire en régulant l'homéostasie générale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-32 px-8 bg-primary text-on-primary rounded-[4rem] mx-4 mb-20 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-16">À quoi s'attendre lors d'une séance ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-headline italic mb-4">1.</div>
              <h5 className="text-lg font-bold mb-3">L'Entretien</h5>
              <p className="text-on-primary/70 text-sm">Un moment d'échange pour comprendre vos besoins, votre état de santé et vos attentes.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-headline italic mb-4">2.</div>
              <h5 className="text-lg font-bold mb-3">L'Installation</h5>
              <p className="text-on-primary/70 text-sm">Confortablement allongé sur une table de massage, dans une atmosphère calme et apaisante.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-headline italic mb-4">3.</div>
              <h5 className="text-lg font-bold mb-3">Le Soin</h5>
              <p className="text-on-primary/70 text-sm">Application de pressions spécifiques, adaptées à votre sensibilité et vos zones de tension.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-headline italic mb-4">4.</div>
              <h5 className="text-lg font-bold mb-3">Le Retour</h5>
              <p className="text-on-primary/70 text-sm">Un temps de repos post-séance pour intégrer les bienfaits et partager vos ressentis.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </section>
    </>
  );
}
