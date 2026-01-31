"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#policies", label: "Policies" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-text-dark cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-[28px]">
          {open ? "close" : "menu"}
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-primary/10">
          <span className="font-script text-2xl font-bold text-primary-dark">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-text-dark">
              close
            </span>
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-lg text-text-dark font-medium hover:bg-primary/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full h-12 px-6 bg-primary hover:bg-primary-dark text-text-dark text-sm font-bold transition-colors"
          >
            Book Now
          </a>
        </nav>
      </div>
    </div>
  );
}
