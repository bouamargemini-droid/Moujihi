"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "Comment fonctionne l'orientation IA de Moujihi ?",
    answer:
      "Tu discutes pendant 30 minutes avec un conseiller IA via vidéo. Il analyse ton profil scolaire, tes centres d'intérêt et tes ambitions pour te recommander les meilleures filières et écoles. Tout se passe naturellement, comme une vraie conversation.",
  },
  {
    question: "Moujihi postule vraiment à ma place ?",
    answer:
      "Oui ! Avec les packs Premium et Illimité, Moujihi surveille les ouvertures d'inscriptions, prépare ton dossier et soumet tes candidatures automatiquement aux écoles que tu as sélectionnées. Tu reçois des notifications WhatsApp à chaque étape.",
  },
  {
    question: "C'est quoi la Bourse Moujihi ?",
    answer:
      "La Bourse Moujihi est une réduction exclusive de 2 000 à 5 000 MAD sur les frais de scolarité des écoles partenaires. Elle est réservée aux étudiants qui postulent via Moujihi. C'est un avantage financier que tu ne trouves nulle part ailleurs.",
  },
  {
    question: "Est-ce que mes données sont en sécurité ?",
    answer:
      "Absolument. Toutes tes données personnelles (CIN, Code Massar) sont chiffrées avec AES-256. Nous sommes conformes à la loi 09-08 de protection des données au Maroc. Tes informations ne sont jamais partagées sans ton consentement.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#A46EDB] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-[#A46EDB] flex-shrink-0" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="text-white/70"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div
      id="faq"
      className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter font-bold">
          Questions fréquentes
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
