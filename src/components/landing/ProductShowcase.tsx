"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div
      id="orientation"
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Interface intuitive
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5">
            Une session d&apos;orientation fluide et naturelle. Parle avec
            l&apos;avatar IA comme avec un vrai conseiller.
          </p>
        </div>
        <div className="flex justify-center">
          <motion.div
            ref={appImage}
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            {/* Mock of orientation session interface */}
            <div className="mt-14 w-full max-w-4xl rounded-2xl border border-white/20 bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0a] p-1 shadow-2xl shadow-purple-500/20">
              <div className="rounded-xl bg-[#0a0a0a] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center text-sm text-white/50">
                    Session d&apos;orientation — Moujihi
                  </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col md:flex-row">
                  {/* Avatar area */}
                  <div className="flex-1 p-8 flex flex-col items-center justify-center min-h-[300px] border-b md:border-b-0 md:border-r border-white/10">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#9560EB] to-[#E472D1] flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                      <div className="w-28 h-28 rounded-full bg-[#1a0a2e] flex items-center justify-center">
                        <span className="text-4xl">🧑‍🏫</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm text-center">
                      Conseiller Moujihi
                    </p>
                    <div className="flex gap-2 mt-4">
                      <div className="w-2 h-2 rounded-full bg-[#9560EB] animate-pulse" />
                      <div
                        className="w-2 h-2 rounded-full bg-[#9560EB] animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-[#9560EB] animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="flex-1 p-6 flex flex-col gap-4 min-h-[300px]">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5D2CA8] flex items-center justify-center text-xs flex-shrink-0">
                        IA
                      </div>
                      <div className="bg-white/10 rounded-lg rounded-tl-none p-3 text-sm text-white/80 max-w-[80%]">
                        Bonjour ! Je suis ton conseiller Moujihi. Parle-moi de
                        tes matières préférées au lycée.
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-[#5D2CA8]/30 rounded-lg rounded-tr-none p-3 text-sm text-white/80 max-w-[80%]">
                        J&apos;adore les maths et la physique, et j&apos;aimerais
                        devenir ingénieur.
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs flex-shrink-0">
                        👤
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5D2CA8] flex items-center justify-center text-xs flex-shrink-0">
                        IA
                      </div>
                      <div className="bg-white/10 rounded-lg rounded-tl-none p-3 text-sm text-white/80 max-w-[80%]">
                        Excellent ! Avec ton profil, les ENSA et classes prépas
                        seraient idéales. Parlons de tes préférences de ville...
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="mt-auto flex items-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-sm text-white/40">
                        Sous-titres en temps réel...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
