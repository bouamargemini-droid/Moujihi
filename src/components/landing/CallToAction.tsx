"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 max-w-xl relative">
        {/* Decorative floating elements */}
        <motion.div
          style={{ translateY }}
          className="absolute top-6 left-[calc(100%+36px)] hidden lg:block"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9560EB] to-[#E472D1] flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30 rotate-12">
            🚀
          </div>
        </motion.div>
        <motion.div
          style={{ translateY }}
          className="absolute -top-[120px] right-[calc(100%+30px)] hidden lg:block"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F7AABE] to-[#B57CEC] flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30 -rotate-12">
            🎓
          </div>
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Prêt à construire ton avenir ?
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Rejoins les milliers de bacheliers qui ont trouvé leur voie grâce à
          Moujihi. Commence ton orientation en 30 minutes.
        </p>
        <div className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <Link
            href="/inscription"
            className="bg-white text-black h-12 rounded-lg px-5 font-medium flex items-center justify-center hover:bg-white/90 transition"
          >
            Commencer gratuitement
          </Link>
          <a
            href="#tarifs"
            className="bg-white/20 text-white h-12 rounded-lg px-5 font-medium flex items-center justify-center hover:bg-white/30 transition"
          >
            Voir les tarifs
          </a>
        </div>
      </div>
    </div>
  );
};
