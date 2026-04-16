"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "./AnimatedGradientText";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />

      <div className="container mx-auto px-4 relative">
        {/* Animated badge */}
        <div className="flex items-center justify-center -mt-10">
          <div className="z-10 flex -mt-9 items-center justify-center">
            <AnimatedGradientText>
              🎓{" "}
              <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Orientation post-bac par l&apos;IA
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <motion.h1
              className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ton orientation
              <br />
              guidée par l&apos;IA
            </motion.h1>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute right-[calc(100%+20px)] top-[20px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <div className="w-[80px] h-[80px] rounded-2xl bg-gradient-to-br from-[#F7AABE] to-[#B57CEC] flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30">
                🎯
              </div>
            </motion.div>
            <motion.div
              className="absolute left-[calc(100%+20px)] top-[60px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <div className="w-[80px] h-[80px] rounded-2xl bg-gradient-to-br from-[#9560EB] to-[#E472D1] flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30">
                💬
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Parle avec un conseiller IA qui analyse ton profil, recommande les
            meilleures filières et postule à ta place. En 30 minutes.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/inscription"
            className="bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-white/90 transition"
          >
            Commencer gratuitement
          </Link>
        </div>
      </div>
    </div>
  );
};
