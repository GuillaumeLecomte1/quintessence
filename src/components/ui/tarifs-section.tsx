import { Link } from "@tanstack/react-router";

export type TarifService = {
  icon: string;
  title: string;
  /** Numeric or symbolic price. Rendered as-is with a trailing " €". */
  price: string;
  duration: string;
  inclus: string[];
  pourQui: string;
};

type TarifsSectionProps = {
  intro: string;
  services: TarifService[];
  title?: string;
  bottomNote?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonTo?: string;
};

export function TarifsSection({
  intro,
  services,
  title = "Investissez dans votre bien-être",
  bottomNote = "Tarifs indiqués à titre indicatif. Pour toute question ou pour convenir d'un créneau, n'hésitez pas à me contacter.",
  ctaTitle = "Prêt(e) à prendre soin de vous ?",
  ctaDescription = "Réservez votre séance ou demandez des informations complémentaires. Je vous répondrai avec plaisir.",
  ctaButtonText = "Réserver une consultation",
  ctaButtonTo = "/contact",
}: TarifsSectionProps) {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-[120px] bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-10 md:mb-12 lg:mb-[48px] text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
              Mes tarifs
            </span>
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary mb-4 md:mb-6">
              {title}
            </h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              {intro}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-[32px] ${
              services.length >= 3 ? "lg:grid-cols-3" : "max-w-4xl mx-auto"
            }`}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-surface p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
                  {service.title}
                </h3>
                <div className="h-px w-12 bg-primary/20 mb-4 md:mb-6" />
                <div className="mb-6">
                  <div className="font-display-md text-4xl md:text-5xl text-primary leading-none mb-2">
                    {service.price} <span className="text-2xl md:text-3xl">€</span>
                  </div>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    {service.duration}
                  </span>
                </div>
                <div className="flex-grow">
                  <p className="font-label-caps text-label-caps text-on-surface mb-3">
                    Ce qui est inclus
                  </p>
                  <ul className="space-y-2 font-body-md text-on-surface-variant">
                    {service.inclus.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-body-md italic text-on-surface-variant mt-6 pt-6 border-t border-outline-variant/30">
                  <span className="text-primary font-medium not-italic">
                    Pour qui :
                  </span>{" "}
                  {service.pourQui}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center font-body-md text-on-surface-variant mt-10 md:mt-12 max-w-2xl mx-auto">
            {bottomNote}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center flex flex-col items-center gap-6">
          <h3 className="font-display-md text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
            {ctaTitle}
          </h3>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            {ctaDescription}
          </p>
          <Link
            to={ctaButtonTo}
            className="bg-primary text-on-primary px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            {ctaButtonText}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
