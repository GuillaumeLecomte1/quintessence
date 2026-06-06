import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const ROPPE_COORDS: [number, number] = [47.6671103, 6.9107396];

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact - Quintessence | Réservez votre séance de bien-être
        </title>
        <meta
          name="description"
          content="Contactez Delphine pour réserver votre séance de naturopathie, réflexologie, Reiki ou fleurs de Bach à Roppe, près de Belfort. Massage, relaxation et accompagnement holistique."
        />
        <meta
          name="keywords"
          content="contact naturopathie, réflexologue Roppe, prendre rendez-vous bien-être, massage relaxation, Belfort, Bourgogne-Franche-Comté"
        />
        <link rel="canonical" href="https://quintessence.fr/contact" />
        <meta
          property="og:title"
          content="Contact - Quintessence | Réservez votre séance"
        />
        <meta
          property="og:description"
          content="Réservez votre séance de naturopathie, réflexologie ou Reiki avec Delphine à Roppe. Accompagnement personnalisé pour votre bien-être."
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="A serene spa environment with soft sunlight streaming through linen curtains"
            src="image/contactforet.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-2xl text-left px-6 md:px-12">
          <h1 className="font-display-md text-4xl md:text-5xl text-on-primary mb-2">
            Une porte vers la sérénité
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-primary/90 max-w-lg">
            Commencez votre parcours vers le bien-être. Contactez-moi pour
            réserver une séance ou poser vos questions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <div className="bg-surface-container rounded-2xl md:rounded-xl p-8 md:p-12 my-8 md:my-12 shadow-[0_20px_40px_rgba(0,70,74,0.06)] relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          {/* Left: Contact Form */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h3 className="font-display-md text-2xl md:text-3xl text-primary">
              Contactez-moi
            </h3>
            <form className="flex flex-col gap-6">
              <label className="flex flex-col group">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">
                  Nom
                </span>
                <input
                  className="w-full bg-surface-container-high rounded-lg border-0 h-14 px-4 text-on-surface font-body-lg focus:bg-surface-container-highest focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
                  placeholder="Votre nom complet"
                  type="text"
                />
              </label>
              <label className="flex flex-col group">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">
                  Email
                </span>
                <input
                  className="w-full bg-surface-container-high rounded-lg border-0 h-14 px-4 text-on-surface font-body-lg focus:bg-surface-container-highest focus:ring-2 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
                  placeholder="Votre adresse email"
                  type="email"
                />
              </label>
              <label className="flex flex-col group">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">
                  Votre demande
                </span>
                <textarea
                  className="w-full bg-surface-container-high rounded-lg border-0 min-h-[120px] p-4 text-on-surface font-body-lg focus:bg-surface-container-highest focus:ring-2 focus:ring-primary transition-all resize-y placeholder:text-on-surface-variant/50"
                  placeholder="Comment puis-je vous aider ?"
                />
              </label>
              <button
                type="submit"
                className="bg-primary text-on-primary font-label-caps text-label-caps h-14 rounded-full px-8 self-start mt-2 hover:shadow-[0_10px_20px_rgba(0,70,74,0.15)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center gap-2"
              >
                Envoyer
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
          {/* Right: Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 py-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Téléphone
              </span>
              <a
                className="font-display-md text-2xl md:text-3xl text-primary hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                href="tel:0767728236"
              >
                07 67 72 82 36
              </a>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 py-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Email
              </span>
              <a
                className="font-body-lg text-lg md:text-xl text-primary hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                href="mailto:quintessence.delphine@gmail.com"
              >
                quintessence.delphine@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 py-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                Sanctuaire
              </span>
              <address className="font-body-lg text-lg md:text-xl text-on-surface not-italic leading-relaxed">
                90380 Roppe
                <br />
                Bourgogne-Franche-Comté
                <br />
                France
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-[120px] max-w-3xl mx-auto px-12">
        <div className="flex items-center gap-[32px] mb-[48px]">
          <span className="h-px bg-outline-variant/30 flex-grow" />
          <h2 className="font-display-md text-3xl md:text-[48px] text-primary text-center">
            Questions Fréquentes
          </h2>
          <span className="h-px bg-outline-variant/30 flex-grow" />
        </div>
        <div className="space-y-[16px]">
          <details className="group bg-surface-container-lowest rounded-xl shadow-[0_10px_30px_rgba(0,70,74,0.03)] overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline-md text-headline-md text-on-surface group-open:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              Que dois-je apporter à ma première séance ?
              <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-45">
                add
              </span>
            </summary>
            <div className="p-6 pt-0 font-body-lg text-on-surface-variant leading-relaxed">
              Apportez simplement des vêtements confortables. Si vous avez des
              résultats médicaux récents ou une liste de médicaments, ils
              peuvent être utiles pour notre premier entretien. Nous fournissons
              tout le nécessaire, y compris de l'eau et des tisanes.
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-xl shadow-[0_10px_30px_rgba(0,70,74,0.03)] overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline-md text-headline-md text-on-surface group-open:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              Les séances sont-elles remboursées ?
              <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-45">
                add
              </span>
            </summary>
            <div className="p-6 pt-0 font-body-lg text-on-surface-variant leading-relaxed">
              La naturopathie n'est pas prise en charge par la sécurité sociale,
              mais de plus en plus de mutuelles remboursent tout ou partie des
              consultations. Je vous remettrai une facture détaillée à envoyer à
              votre organisme.
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-xl shadow-[0_10px_30px_rgba(0,70,74,0.03)] overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline-md text-headline-md text-on-surface group-open:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              Accessibilité & Parking
              <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-45">
                add
              </span>
            </summary>
            <div className="p-6 pt-0 font-body-lg text-on-surface-variant leading-relaxed">
              Notre sanctuaire est entièrement accessible de plain-pied. Un
              parking gratuit est disponible juste devant le cabinet.
              L'environnement est conçu pour être calme et paisible.
            </div>
          </details>
        </div>
      </div>

      {/* Map */}
      <div className="my-8 md:my-12 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,70,74,0.08)] hover:shadow-[0_25px_50px_rgba(0,70,74,0.12)] transition-shadow duration-500 max-w-7xl mx-auto">
        <MapContainer
          center={ROPPE_COORDS}
          zoom={15}
          className="w-full h-[350px] md:h-[450px]"
          scrollWheelZoom={false}
          zoomControl={true}
          attributionControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={ROPPE_COORDS}>
            <Popup>
              <strong>Quintessence</strong>
              <br />
              90380 Roppe, France
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
