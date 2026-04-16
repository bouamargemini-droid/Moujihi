"use client";

import Link from "next/link";

interface PricingCardProps {
  popular?: boolean;
  planName: string;
  price: number;
  planDescription: string;
  features: string[];
}

function PricingCard(props: PricingCardProps) {
  return (
    <div className="h-full">
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-black border border-white/30 shadow shadow-black/80">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Populaire
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-white/70 font-semibold mb-1">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-white/50 font-bold text-4xl">
              {props.price}
            </span>
            <span className="text-white/70 font-medium ml-1">MAD</span>
          </div>
          <div className="text-sm text-white/70 mb-5">
            {props.planDescription}
          </div>
          <Link
            href="/inscription"
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#5D2CA8] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#5D2CA2] focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
          >
            Choisir ce plan
          </Link>
        </div>
        <div className="text-slate-200 font-medium mb-3">Inclus :</div>
        <ul className="text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Pricing = () => {
  return (
    <div
      id="tarifs"
      className="bg-black text-white bg-gradient-to-b from-black via-[#5D2CA8] to-black py-[72px] sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Choisis ta formule
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Un paiement unique. Pas d&apos;abonnement. 10x moins cher qu&apos;un
            conseiller privé.
          </p>
        </div>
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none px-0 sm:px-24 py-[72px] sm:py-24">
          <PricingCard
            planName="Essentiel"
            price={199}
            planDescription="Bilan d'orientation complet avec domaines recommandés et rapport PDF."
            features={[
              "Session IA de 30 minutes",
              "Profil RIASEC complet",
              "Bilan PDF téléchargeable",
              "Accès espace parent",
            ]}
          />
          <PricingCard
            popular={true}
            planName="Premium"
            price={499}
            planDescription="Orientation + candidatures automatiques aux écoles recommandées."
            features={[
              "Tout de l'Essentiel",
              "Noms des écoles recommandées",
              "Jusqu'à 10 candidatures auto",
              "Alertes inscriptions WhatsApp",
              "Bourse Moujihi exclusive",
            ]}
          />
          <PricingCard
            planName="Illimité"
            price={799}
            planDescription="Orientation complète + candidatures illimitées + suivi prioritaire."
            features={[
              "Tout du Premium",
              "Candidatures illimitées",
              "Suivi prioritaire",
              "Relance auto si dossier incomplet",
              "Moujihi Predict avancé",
              "Support dédié",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
