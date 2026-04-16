"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "C'est quoi Moujihi ?",
    answer:
      "Moujihi est une plateforme d'orientation post-bac propulsée par l'IA. Tu discutes avec un conseiller virtuel qui analyse ton profil, tes passions et tes notes pour te recommander les meilleures filières et écoles. Ensuite, Moujihi peut postuler automatiquement à ta place.",
  },
  {
    question: "Comment fonctionne la session d'orientation ?",
    answer:
      "Tu lances une session de 30 minutes avec un avatar IA. Il te pose des questions naturelles sur ton parcours, tes intérêts et tes ambitions. En arrière-plan, l'IA calcule ton profil RIASEC et génère un bilan personnalisé avec des recommandations de filières.",
  },
  {
    question: "Quelles langues sont supportées ?",
    answer:
      "Moujihi supporte 5 langues : français, arabe (darija et fusha), anglais, espagnol et tamazight. Tu peux parler dans la langue avec laquelle tu es le plus à l'aise.",
  },
  {
    question: "Comment fonctionne la candidature automatique ?",
    answer:
      "Moujihi détecte l'ouverture des inscriptions pour les écoles que tu as sélectionnées. Il prépare ton dossier automatiquement à partir de ton profil et de tes documents, puis soumet la candidature. Tu reçois une notification à chaque étape.",
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="pr-4 text-base font-medium text-white">
          {item.question}
        </span>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10">
          {isOpen ? (
            <Minus className="h-4 w-4 text-white/60" />
          ) : (
            <Plus className="h-4 w-4 text-white/60" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-white/50">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
