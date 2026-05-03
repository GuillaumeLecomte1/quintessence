import { Helmet } from "react-helmet-async";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const ROPPE_COORDS: [number, number] = [47.6687, 6.8576];

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Quintessence | Prenez rendez-vous pour votre bien-être</title>
        <meta name="description" content="Contactez Delphine pour prendre rendez-vous ou poser vos questions. Naturopathie, réflexologie, Reiki et fleurs de Bach à Roppe, Bourgogne-Franche-Comté." />
        <meta property="og:title" content="Contact - Quintessence" />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative min-h-[480px] flex items-end justify-end px-4 pb-10 pt-24 overflow-hidden shadow-[0_20px_40px_rgba(0,70,74,0.06)">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://api.cloudly.space/resize/crop/1024/512/60/aHR0cHM6Ly9jZHQ0MC5tZWRpYS50b3VyaW5zb2Z0LmV1L3VwbG9hZC82Mjk5MzUtcGF0aC0xMzQ1NzIxLTEyODAuanBn/image.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="relative z-10 w-full max-w-2xl text-left">
          <h1 className="font-headline text-5xl text-on-primary mb-2">
            A Doorway to Serenity
          </h1>
          <p className="font-body text-lg text-on-primary/90 max-w-lg">
            Begin your journey to wellness. Reach out to us to schedule an appointment or simply to ask a question.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="bg-surface-container-low rounded-xl p-8 md:p-12 my-12 shadow-[0_20px_40px_rgba(0,70,74,0.06)] relative overflow-hidden max-w-7xl mx-auto px-12">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* Left: Contact Form */}
          <div className="flex flex-col gap-8">
            <h3 className="font-headline text-2xl text-primary font-medium tracking-tight">Connect With Us</h3>
            <form className="flex flex-col gap-6">
              <label className="flex flex-col group">
                <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">Name</span>
                <input 
                  className="w-full bg-surface-container-high rounded-md border-0 h-14 px-4 text-on-surface focus:bg-surface-container-highest focus:ring-0 transition-colors font-body text-base placeholder:text-on-surface-variant/50" 
                  placeholder="Your full name" 
                  type="text"
                />
              </label>
              <label className="flex flex-col group">
                <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">Email</span>
                <input 
                  className="w-full bg-surface-container-high rounded-md border-0 h-14 px-4 text-on-surface focus:bg-surface-container-highest focus:ring-0 transition-colors font-body text-base placeholder:text-on-surface-variant/50" 
                  placeholder="Your email address" 
                  type="email"
                />
              </label>
              <label className="flex flex-col group">
                <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">Your Journey</span>
                <textarea 
                  className="w-full bg-surface-container-high rounded-md border-0 min-h-[120px] p-4 text-on-surface focus:bg-surface-container-highest focus:ring-0 transition-colors font-body text-base resize-y placeholder:text-on-surface-variant/50" 
                  placeholder="How can we help you on your path?"
                />
              </label>
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-body text-base font-medium h-14 rounded-full px-8 self-start mt-2 hover:shadow-[0_10px_20px_rgba(0,70,74,0.15)] transition-all duration-300 transform hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
          {/* Right: Contact Info */}
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 py-2">
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider">Phone</span>
              <a className="font-headline text-3xl text-primary hover:text-primary-container transition-colors" href="tel:0767728236">07 67 72 82 36</a>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 py-2">
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider">Email</span>
              <a className="font-body text-xl text-primary hover:text-primary-container transition-colors" href="mailto:quintessence.delphine@gmail.com">quintessence.delphine@gmail.com</a>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6 py-2">
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider">Sanctuary</span>
              <address className="font-body text-lg text-on-surface not-italic leading-relaxed">
                90380 Roppe<br />
                Bourgogne-Franche-Comté<br />
                France
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 max-w-3xl mx-auto px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-px bg-outline-variant/30 flex-grow" />
          <h2 className="font-headline text-3xl text-primary tracking-tight px-4 text-center">Journal of Care</h2>
          <span className="h-px bg-outline-variant/30 flex-grow" />
        </div>
        <div className="flex flex-col gap-6">
          <details className="group bg-surface-container-lowest rounded-xl shadow-[0_10px_30px_rgba(0,70,74,0.03)] overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline text-xl text-on-surface group-open:text-primary transition-colors">
              What should I bring to my first session?
              <span className="material-symbols-outlined text-primary/60 group-open:rotate-180 transition-transform duration-300">expand_more</span>
            </summary>
            <div className="p-6 pt-0 font-body text-base text-on-surface-variant leading-relaxed">
              Simply bring yourself in comfortable clothing. If you have any recent medical records or a list of current medications/supplements, those can be helpful for our initial consultation. We provide all necessary materials, including water and herbal teas.
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-xl shadow-[0_10px_30px_rgba(0,70,74,0.03)] overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline text-xl text-on-surface group-open:text-primary transition-colors">
              Are sessions reimbursed by health insurance?
              <span className="material-symbols-outlined text-primary/60 group-open:rotate-180 transition-transform duration-300">expand_more</span>
            </summary>
            <div className="p-6 pt-0 font-body text-base text-on-surface-variant leading-relaxed">
              While naturopathy is not covered by standard state health insurance, many private mutual insurances (mutuelles) offer partial or full reimbursement for holistic and alternative therapies. We provide an invoice after each session for you to submit to your provider.
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-xl shadow-[0_10px_30px_rgba(0,70,74,0.03)] overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-headline text-xl text-on-surface group-open:text-primary transition-colors">
              Accessibility & Parking
              <span className="material-symbols-outlined text-primary/60 group-open:rotate-180 transition-transform duration-300">expand_more</span>
            </summary>
            <div className="p-6 pt-0 font-body text-base text-on-surface-variant leading-relaxed">
              Our sanctuary is fully accessible on the ground floor. There is dedicated free parking available directly in front of the practice. The environment is designed to be quiet and undisturbed.
            </div>
          </details>
        </div>
      </div>

      {/* Map */}
      <div className="mt-8 mb-24 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,70,74,0.08)] max-w-7xl mx-auto px-12">
        <div className="absolute inset-x-0 top-0 z-10 bg-secondary-container/90 backdrop-blur-md py-3 px-6 text-center shadow-sm">
          <p className="font-body text-sm font-semibold text-secondary flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">stars</span>
            Located just 10 minutes from Belfort city center.
          </p>
        </div>
        <MapContainer
          center={ROPPE_COORDS}
          zoom={15}
          className="w-full h-[400px]"
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={ROPPE_COORDS}>
            <Popup>
              <strong>Quintessence</strong><br />
              90380 Roppe, France
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
