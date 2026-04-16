import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#9560EB] to-[#E472D1] flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white/80 font-medium">Moujihi</span>
          </div>
          <div className="text-center text-sm">
            &copy; 2026 Moujihi. Tous droits réservés.
          </div>
          <ul className="flex justify-center gap-4 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                CGU
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
