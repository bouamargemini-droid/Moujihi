"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container mx-auto bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md" />
              {/* Logo Moujihi */}
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#9560EB] to-[#E472D1] flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
            </div>

            <button
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="text-white w-5 h-5" />
              ) : (
                <Menu className="text-white w-5 h-5" />
              )}
            </button>

            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#fonctionnalites"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Fonctionnalités
              </a>
              <a
                href="#orientation"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Orientation
              </a>
              <a
                href="#tarifs"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Tarifs
              </a>
              <a
                href="#faq"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                FAQ
              </a>
              <Link
                href="/inscription"
                className="bg-white py-2 px-4 rounded-lg text-black"
              >
                Commencer
              </Link>
            </nav>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <nav className="flex flex-col gap-4 pb-4 sm:hidden text-white">
              <a
                href="#fonctionnalites"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Fonctionnalités
              </a>
              <a
                href="#orientation"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Orientation
              </a>
              <a
                href="#tarifs"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Tarifs
              </a>
              <a
                href="#faq"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                FAQ
              </a>
              <Link
                href="/inscription"
                className="bg-white py-2 px-4 rounded-lg text-black text-center"
              >
                Commencer
              </Link>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};
