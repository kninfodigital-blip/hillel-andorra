"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
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

  const toggleLang = () => setLang(lang === "es" ? "ca" : "es");

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#ministries", label: t.nav.ministries },
    { href: "#team", label: t.nav.team },
    { href: "#events", label: t.nav.events },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[600ms] ${
          scrolled
            ? "bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-[18px] backdrop-saturate-[140%] border-b border-[var(--line-soft)] py-[18px]"
            : "bg-transparent py-7"
        }`}
        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
      >
        <div
          className="flex items-center justify-between gap-6 mx-auto w-full px-[var(--gutter)]"
          style={{ maxWidth: "var(--container-max)" }}
        >
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Hillel — inicio">
            <Image
              src="/images/logo/511CF14D-1899-49C8-983B-580C49A2B454.PNG"
              alt=""
              width={38}
              height={38}
              className="h-[38px] w-auto object-contain"
              priority
            />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="font-serif text-[16px] font-medium tracking-[-0.015em] text-[var(--fg)]">
                Hillel
              </span>
              <span className="font-sans text-[10px] text-[var(--fg-3)] tracking-[0.01em]">
                Església d&apos;Andorra
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[13.5px] text-[var(--fg-2)] py-1 relative transition-colors duration-300 hover:text-[var(--fg)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-[600ms] hover:after:scale-x-100"
                style={{ transitionTimingFunction: "var(--ease-smooth)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              className="font-sans text-[13.5px] text-[var(--fg-2)] py-1 relative transition-colors duration-300 hover:text-[var(--fg)]"
            >
              {t.nav.visit}
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="font-mono text-[11px] tracking-[0.14em] text-[var(--fg-2)] bg-transparent border border-[var(--line-medium)] rounded-full px-2.5 py-1.5 cursor-pointer flex gap-1.5 items-center transition-all duration-300 hover:bg-[var(--surface-2)]"
              aria-label="Cambiar idioma"
            >
              <span className={lang === "es" ? "font-medium text-[var(--fg)]" : "text-[var(--fg-4)]"}>ES</span>
              <span className="text-[var(--fg-4)]">·</span>
              <span className={lang === "ca" ? "font-medium text-[var(--fg)]" : "text-[var(--fg-4)]"}>CA</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 z-[200]"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-[var(--fg)] transition-transform duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[var(--fg)] transition-opacity duration-150 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[var(--fg)] transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav
        className={`fixed inset-0 bg-[var(--bg)] z-[150] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="font-serif text-3xl font-medium text-[var(--fg)]"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#location"
          onClick={closeMobile}
          className="mt-4 bg-[var(--fg)] text-[var(--bg)] px-8 py-3 rounded-full font-medium"
        >
          {t.nav.visit}
        </a>
        <button
          onClick={() => { toggleLang(); closeMobile(); }}
          className="font-mono text-sm tracking-[0.14em] text-[var(--fg-3)] mt-2"
        >
          {lang === "es" ? "Canviar a Català" : "Cambiar a Español"}
        </button>
      </nav>
    </>
  );
}
