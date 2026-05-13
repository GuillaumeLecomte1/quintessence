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
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_40px_40px_-15px_rgba(0,70,74,0.04)]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 md:h-24 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-display-md tracking-widest text-primary hover:opacity-80 transition-opacity"
        >
          QUINTESSENCE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <a className="font-display-md tracking-wide uppercase text-sm font-medium text-primary border-b border-primary/50 pb-1 transition-transform duration-700 hover:scale-105" href="#">Expérience</a>
          <a className="font-display-md tracking-wide uppercase text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-500 hover:scale-105" href="#">Services</a>
          <a className="font-display-md tracking-wide uppercase text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-500 hover:scale-105" href="#">Galerie</a>
          <a className="font-display-md tracking-wide uppercase text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-500 hover:scale-105" href="#">À propos</a>
          <Link to="/contact" className="font-display-md tracking-wide uppercase text-sm font-medium text-on-surface-variant hover:text-primary transition-all duration-500 hover:scale-105">Contact</Link>
          <button className="bg-primary text-on-primary px-6 lg:px-8 py-3 rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform duration-300">
            Prendre Rendez-vous
          </button>
        </div>

        {/* Mobile Menu Button - Just the hamburger, no drawer */}
        <button 
          className="md:hidden p-2 -mr-2 text-primary"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-24 mt-16 md:mt-24 lg:mt-32 bg-surface-container border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-4 md:space-y-6">
          <div className="font-display-md italic text-xl text-primary">QUINTESSENCE</div>
          <p className="font-body-lg text-sm leading-relaxed text-on-surface-variant">Votre havre de paix pour une santé holistique et un bien-être profond.</p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h5 className="font-label-caps text-label-caps text-primary">Services</h5>
          <ul className="space-y-3 md:space-y-4">
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Naturopathie</a></li>
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Réflexologie</a></li>
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Reiki</a></li>
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Fleurs de Bach</a></li>
          </ul>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h5 className="font-label-caps text-label-caps text-primary">Sanctuaire</h5>
          <ul className="space-y-3 md:space-y-4">
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Mon Histoire</a></li>
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Le Cabinet</a></li>
            <li><a className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Blog & Conseils</a></li>
            <li><Link to="/contact" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h5 className="font-label-caps text-label-caps text-primary">Légal</h5>
          <ul className="space-y-3 md:space-y-4">
            <li><Link to="/privacy" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Politique de confidentialité</Link></li>
            <li><Link to="/legal" className="font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors">Conditions générales</Link></li>
          </ul>
          <div className="pt-4">
            <p className="font-body-md text-sm text-on-surface-variant">© 2026 Quintessence Wellness. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
