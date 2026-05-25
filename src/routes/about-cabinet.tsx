import { Link } from "@tanstack/react-router";

export function AboutCabinetPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display-lg text-on-surface text-5xl md:text-6xl mb-8">
          Mon Cabinet
        </h1>
        <div className="prose prose-lg font-body-lg text-on-surface/80">
          <p>
            Situé à Roppe, mon cabinet offre un espace calme et apaisant, conçu
            pour favoriser votre détente et votre bien-être.
          </p>
          <p>
            Chaque détail a été pensé pour créer une atmosphère de sérénité, où
            vous pourrez vous ressourcer en toute confidentialité.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 lg:py-[120px] max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[32px] items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl max-w-md mx-auto lg:max-w-none">
              <img
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Interior of the healing space with natural elements"
                src="/public/image/Bureau (2).jpg"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 md:space-y-8 lg:space-y-[48px] mt-8 lg:mt-0">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Un Sanctuaire de Bien-être
            </h2>
            <div className="space-y-4 md:space-y-[16px] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Niché au cœur de Roppe, mon cabinet est un espace conçu pour
                vous accueillir dans le respect de votre intimité et de votre
                cheminement personnel.
              </p>
              <p>
                La lumière naturelle, les matériaux naturels et les finitions
                apaisantes créent une atmosphère de sérénité dès votre arrivée.
                Chaque élément a été choisi pour favoriser votre lâcher-prise.
              </p>
              <p>
                La salle de soin est équiper pour vous offrir un confort
                optimal, avec une table de massage professionnelle, des huiles
                essentielles de qualité et une ambiance sonore calibrée pour
                votre détente.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="h-px w-16 md:w-24 bg-primary/20" />
              <span className="font-label-caps text-label-caps text-primary">
                Un espace dédié à votre bien-être
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[32px] items-center">
          <div className="lg:col-span-6 space-y-6 md:space-y-8 lg:space-y-[48px] mt-8 lg:mt-0">
            <h2 className="font-display-md text-3xl md:text-4xl lg:text-[48px] leading-[1.2] tracking-[-0.01em] text-primary">
              Mon Approche Holistique
            </h2>
            <div className="space-y-4 md:space-y-[16px] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Ma pratique repose sur une vision globale de l'être humain.
                Chaque séance débute par un temps d'échange pour comprendre vos
                besoins du moment et adapter l'accompagnement.
              </p>
              <p>
                Je travaille avec les outils que la nature nous offre :
                réflexologie, Reiki, fleurs de Bach et naturopathie. Cette
                approche complémentaire permet de répondre à vos besoins de
                manière personnalisée.
              </p>
              <p>
                Ici, pas de jugement, pas de attente. Vous êtes accueilli tel
                que vous êtes, avec vos forces et vos vulnérabilités. C'est dans
                cet espace de confiance que la guérison peut s'opérer.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="h-px w-16 md:w-24 bg-primary/20" />
              <span className="font-label-caps text-label-caps text-primary">
                Delphine, Praticienne Holistique
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl max-w-md mx-auto lg:max-w-none">
              <img
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Hands gently holding healing crystals"
                src="/public/image/Bureau1.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
