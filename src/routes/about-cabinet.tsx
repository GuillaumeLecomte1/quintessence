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
            Situé au cœur de la ville, mon cabinet offre un espace calme et
            apaisant, conçu pour favoriser votre détente et votre bien-être.
          </p>
          <p>
            Chaque détail a été pensé pour créer une atmosphère de sérénité, où
            vous pourrez vous ressourcer en toute confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}
