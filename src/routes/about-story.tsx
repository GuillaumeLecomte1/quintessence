import { Link } from "@tanstack/react-router";

export function AboutStoryPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display-lg text-on-surface text-5xl md:text-6xl mb-8">
          Mon Histoire
        </h1>
        <div className="prose prose-lg font-body-lg text-on-surface/80">
          <p>
            Mon parcours vers la naturopathie et la réflexologie a commencé il
            y a de nombreuses années, lorsque j'ai moi-même découvert les
            bienfaits d'une approche naturelle de la santé.
          </p>
          <p>
            Après des années de pratique et de formation continue, j'ai créé
            Quintessence pour offrir un espace de soins dédié au bien-être
            holistique.
          </p>
        </div>
      </div>
    </div>
  );
}
