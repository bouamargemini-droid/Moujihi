import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const schools = [
  "ENSA",
  "ENCG",
  "UIR",
  "UM6P",
  "EMSI",
  "FST",
  "EHTP",
  "INPT",
  "EMI",
  "ENSIAS",
];

function SchoolBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center rounded-full border border-white/[0.05] bg-white/[0.03] px-5 py-2">
      <span className="text-sm font-medium text-white/40">{name}</span>
    </div>
  );
}

export function LogoTicker() {
  return (
    <section className="relative py-16">
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-white/30">
          Écoles partenaires
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <Marquee pauseOnHover className="[--duration:30s]">
          {schools.map((school) => (
            <SchoolBadge key={school} name={school} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="mt-3 [--duration:30s]">
          {[...schools].reverse().map((school) => (
            <SchoolBadge key={school} name={school} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
