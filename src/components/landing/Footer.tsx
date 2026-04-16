import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        {/* Left */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
            <span className="text-xs font-bold text-white">M</span>
          </div>
          <span className="text-sm text-white/40">
            Moujihi — Orientation post-bac par l&apos;IA
          </span>
        </div>

        {/* Right links */}
        <div className="flex items-center gap-6">
          <a
            href="#pricing"
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            Tarifs
          </a>
          <a
            href="#faq"
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            FAQ
          </a>
          <Link
            href="/contact"
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.03] py-6 text-center">
        <p className="text-xs text-white/25">
          &copy; 2026 Moujihi. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
