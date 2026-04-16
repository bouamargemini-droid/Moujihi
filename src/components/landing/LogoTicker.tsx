"use client";

const schools = [
  { name: "ENSA", color: "#F7AABE" },
  { name: "ENCG", color: "#B57CEC" },
  { name: "UIR", color: "#E472D1" },
  { name: "UM6P", color: "#9560EB" },
  { name: "EMSI", color: "#A46EDB" },
  { name: "FST", color: "#B48CDE" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-lg text-center text-white/70 mb-16">
          Les écoles qui font confiance à Moujihi
        </h2>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {[...schools, ...schools].map((school, index) => (
              <li key={index} className="flex-shrink-0">
                <div
                  className="flex items-center justify-center h-14 px-8 rounded-xl border border-white/20 bg-white/5"
                  style={{ minWidth: "140px" }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: school.color }}
                  >
                    {school.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            {[...schools, ...schools].map((school, index) => (
              <li key={index} className="flex-shrink-0">
                <div
                  className="flex items-center justify-center h-14 px-8 rounded-xl border border-white/20 bg-white/5"
                  style={{ minWidth: "140px" }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: school.color }}
                  >
                    {school.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
