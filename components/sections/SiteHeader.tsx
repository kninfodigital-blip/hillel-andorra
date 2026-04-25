"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const navLinks = [
    { href: "#about", label: "Quiénes Somos" },
    { href: "#gallery", label: "Galería" },
    { href: "#ministries", label: "Ministerios" },
    { href: "#team", label: "Equipo" },
    { href: "#location", label: "Reuniones" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="/" aria-label="Hillel Andorra - Inicio">
            <Image
              src="/images/logo/511CF14D-1899-49C8-983B-580C49A2B454.PNG"
              alt="Hillel — Església d'Andorra"
              width={130}
              height={52}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              className="bg-white text-black px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-white/90 transition-opacity"
            >
              Visítanos
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-[200]"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-opacity duration-150 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav
        className={`fixed inset-0 bg-black z-[150] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="font-serif text-3xl font-medium text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#location"
          onClick={closeMobile}
          className="mt-4 bg-white text-black px-8 py-3 rounded-full font-medium"
        >
          Visítanos
        </a>
      </nav>
    </>
  );
}
