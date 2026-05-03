import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function AppLayout() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Noto+Serif:ital,wght@0,400;0,500;1,400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-teal-50/20 shadow-[0_40px_40px_-15px_rgba(0,70,74,0.04)]">
      <div className="max-w-7xl mx-auto px-12 h-24 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-serif tracking-widest text-teal-900 hover:opacity-80 transition-opacity"
        >
          QUINTESSENCE
        </Link>
        <div className="hidden md:flex gap-12">
          <a className="font-serif tracking-wide uppercase text-sm font-medium text-teal-700 border-b border-teal-700/50 pb-1 cursor-pointer transition-transform duration-700 hover:scale-105" href="#">Expérience</a>
          <a className="font-serif tracking-wide uppercase text-sm font-medium text-teal-900/60 hover:text-teal-700 transition-all duration-500 ease-out hover:scale-105" href="#">Services</a>
          <a className="font-serif tracking-wide uppercase text-sm font-medium text-teal-900/60 hover:text-teal-700 transition-all duration-500 ease-out hover:scale-105" href="#">Galerie</a>
          <a className="font-serif tracking-wide uppercase text-sm font-medium text-teal-900/60 hover:text-teal-700 transition-all duration-500 ease-out hover:scale-105" href="#">À propos</a>
          <Link to="/contact" className="font-serif tracking-wide uppercase text-sm font-medium text-teal-900/60 hover:text-teal-700 transition-all duration-500 ease-out hover:scale-105">Contact</Link>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform duration-300">Prendre Rendez-vous</button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full py-24 mt-32 bg-slate-50 border-t border-teal-100">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="font-serif italic text-xl text-teal-900">QUINTESSENCE</div>
          <p className="font-serif text-sm leading-relaxed text-teal-900/50">Votre havre de paix pour une santé holistique et un bien-être profond.</p>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-caps text-label-caps text-teal-900">Services</h5>
          <ul className="space-y-4">
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Naturopathie</a></li>
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Réflexologie</a></li>
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Reiki</a></li>
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Fleurs de Bach</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-caps text-label-caps text-teal-900">Sanctuaire</h5>
          <ul className="space-y-4">
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Mon Histoire</a></li>
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Le Cabinet</a></li>
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Blog & Conseils</a></li>
            <li><Link to="/contact" className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-caps text-label-caps text-teal-900">Légal</h5>
          <ul className="space-y-4">
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Politique de confidentialité</a></li>
            <li><a className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors" href="#">Conditions générales</a></li>
          </ul>
          <div className="pt-4">
            <p className="font-serif text-sm text-teal-900/50">© 2026 Quintessence Wellness. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
