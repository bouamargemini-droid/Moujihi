"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Send,
  Languages,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Conversation IA",
    description:
      "Discute avec un conseiller IA qui comprend ton profil, tes ambitions et tes contraintes.",
  },
  {
    icon: FileText,
    title: "Bilan d'Orientation",
    description:
      "Reçois un rapport PDF complet avec ton profil RIASEC et les filières recommandées.",
  },
  {
    icon: Send,
    title: "Candidature automatique",
    description:
      "Moujihi postule à ta place aux écoles sélectionnées, automatiquement.",
  },
  {
    icon: Languages,
    title: "5 langues",
    description:
      "Français, arabe, anglais, espagnol et tamazight. Parle dans ta langue.",
  },
  {
    icon: GraduationCap,
    title: "Bourse Moujihi",
    description:
      "Profite de réductions exclusives sur les frais de scolarité via nos écoles partenaires.",
  },
  {
    icon: TrendingUp,
    title: "Moujihi Predict",
    description:
      "Découvre tes chances d'être accepté dans chaque école en temps réel.",
  },
];

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] rounded-xl border border-white/30 p-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10,
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};

const FeatureChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];
  const maxData = Math.max(...data);
  const chartHeight = 400;
  const chartWidth = 800;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => {
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mb-4 px-6 mt-6">
        <div className="flex justify-between items-center mb-6 pb-2">
          <h2 className="text-white/70 text-xl">Taux d&apos;acceptation</h2>
          <div className="flex items-center">
            <div className="h-1 bg-black w-8 rounded-lg" />
            <span className="ml-2 text-white/70 text-sm">Croissance</span>
          </div>
        </div>
        <div
          ref={chartRef}
          className="relative w-full mt-12"
          style={{ height: chartHeight }}
        >
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-full pl-11"
          >
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#5D2CA8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polyline
              fill="url(#gradient)"
              stroke="none"
              points={`${(0 / (data.length - 1)) * chartWidth},${chartHeight} ${data
                .map(
                  (value, index) =>
                    `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                )
                .join(" ")} ${(data.length - 1) * (chartWidth / (data.length - 1))},${chartHeight}`}
            />
            <motion.polyline
              fill="none"
              stroke="#5D2CA8"
              strokeWidth="3"
              points={data
                .map(
                  (value, index) =>
                    `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                )
                .join(" ")}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isVisible ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
            {Array.from(Array(7).keys()).map((i) => (
              <div
                key={i}
                className="absolute left-0 w-full flex items-center text-white/30 text-sm"
                style={{ top: `${(100 / 6) * i}%` }}
              >
                <span className="mr-4">{`${10 + i * 10}%`}</span>
                <div className="w-full border-t border-white/70" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-left p-6 mt-4">
        <h3 className="text-white text-2xl font-bold mb-2">
          Croissance remarquable
        </h3>
        <p className="text-white/70 text-lg">
          Nos étudiants obtiennent un taux d&apos;acceptation bien supérieur à
          la moyenne grâce à l&apos;orientation IA.
        </p>
      </div>
    </div>
  );
};

const LogoBeam = () => {
  const icons = ["🎓", "🤖", "📄"];
  const lineWidth = 80;
  const lineHeight = 2;

  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="bg-[#000] border border-white/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4 text-2xl">
          {icons[0]}
        </div>
        <div
          className="relative"
          style={{
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: "-40px" }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2] text-2xl">
          {icons[1]}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div
          className="relative"
          style={{
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: "40px" }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="bg-black border border-white/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4 text-2xl">
          {icons[2]}
        </div>
      </div>
    </div>
  );
};

const FeatureIcons = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative">
      <div className="flex flex-row gap-8 justify-center h-full items-center relative">
        {features.slice(0, 3).map((feature, idx) => (
          <div
            key={idx}
            className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]"
          >
            <feature.icon className="w-8 h-8 text-white" />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{ willChange: "transform" }}
            />
          </div>
        ))}
      </div>
      <div className="text-left p-6 mt-4">
        <h3 className="text-white text-2xl font-bold mb-2">
          Tout-en-un
        </h3>
        <p className="text-gray-400 text-lg">
          Orientation, candidature et suivi dans une seule plateforme.
        </p>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <div
      id="fonctionnalites"
      className="bg-black text-white py-[72px] sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Tout ce dont tu as besoin
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            De la conversation IA à la candidature automatique, Moujihi
            t&apos;accompagne à chaque étape.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <div className="bg-[#000000] flex justify-center items-center p-5 rounded-lg w-full">
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl min-h-[600px] md:min-h-[700px] md:h-[700px]">
              <CardWithEffect>
                <FeatureChart />
              </CardWithEffect>
              <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[700px]">
                <CardWithEffect>
                  <div className="flex flex-col justify-center h-full">
                    <LogoBeam />
                    <div className="text-left p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        Pipeline intelligent
                      </h3>
                      <p className="text-white/70 text-lg">
                        De la conversation à la candidature, tout est
                        automatisé et fluide.
                      </p>
                    </div>
                  </div>
                </CardWithEffect>
                <CardWithEffect>
                  <FeatureIcons />
                </CardWithEffect>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-10 h-10 text-[#A46EDB] mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
