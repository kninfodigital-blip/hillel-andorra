"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroGallery } from "@/components/sections/HeroGallery";
import { FooterCollage } from "@/components/sections/FooterCollage";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { LangProvider, useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/use-reveal";

function HomeContent() {
  const { lang, t, theme } = useLang();
  useReveal([lang]);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <a
        href="#main"
        className="absolute top-[-100%] left-4 bg-[var(--fg)] text-[var(--bg)] px-4 py-2 rounded-full z-[9999] text-sm focus:top-4"
      >
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="main">
        {/* Hero + Radial Gallery */}
        <HeroGallery />

        {/* Statement / Manifesto */}
        <section
          className="border-y border-[var(--line-soft)] bg-[var(--surface-1)]"
          id="about"
          style={{ paddingBlock: "clamp(7rem, 14vw, 12rem)" }}
        >
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div
              className="reveal font-serif font-medium text-[var(--fg)] max-w-[28ch] mx-auto"
              style={{
                fontSize: "clamp(1.5rem, 3.8vw, 3rem)",
                lineHeight: "1.15",
                letterSpacing: "-0.015em",
                fontVariationSettings: '"opsz" 48',
                textAlign: "left",
              }}
            >
              {t.statement.preEmph}
              <span className="block text-[var(--fg-3)]">
                {t.statement.lineTwo}{" "}
                <span className="italic font-light">{t.statement.emph}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Values — Comunidad / Fe / Familia */}
        <section style={{ paddingBlock: "var(--section-y)" }}>
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div className="reveal flex flex-col gap-3 max-w-[720px] mb-[clamp(2.5rem,5vw,4rem)]">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                {t.values.eyebrow}
              </div>
              <h2
                className="font-serif font-medium text-[var(--fg)] m-0"
                style={{
                  fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
                  letterSpacing: "-0.022em",
                  lineHeight: "1.05",
                  fontVariationSettings: '"opsz" 60',
                  textWrap: "balance",
                }}
              >
                {t.values.h2Pre} <span className="italic font-light">{t.values.h2Emph}</span>
              </h2>
              <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] max-w-[56ch] m-0">
                {t.values.lede}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(2rem,4vw,4rem)]">
              {t.values.items.map((v, i) => (
                <div
                  key={v.n}
                  className="reveal flex flex-col gap-[18px] pt-5 border-t border-[var(--line-medium)]"
                  style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
                >
                  <div className="font-mono text-[12px] tracking-[0.2em] text-[var(--fg-3)]">{v.n}</div>
                  <h3
                    className="font-serif font-medium text-[var(--fg)] m-0 leading-[1.05]"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
                  >
                    {v.title}
                  </h3>
                  <p className="font-sans text-[0.95rem] leading-[1.6] text-[var(--fg-2)] m-0">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Meeting — black block with countdown */}
        <NextMeetingSection />

        {/* Events / Agenda */}
        <section style={{ paddingBlock: "var(--section-y)" }} id="events">
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div className="reveal flex flex-col gap-3 max-w-[720px] mb-[clamp(2.5rem,5vw,4rem)]">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                {t.events.eyebrow}
              </div>
              <h2
                className="font-serif font-medium text-[var(--fg)] m-0"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", letterSpacing: "-0.022em", lineHeight: "1.05", fontVariationSettings: '"opsz" 60' }}
              >
                {t.events.h2Pre} <span className="italic font-light">{t.events.h2Emph}</span>
              </h2>
              <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] max-w-[56ch] m-0">
                {t.events.lede}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.events.items.map((e, i) => (
                <div
                  key={i}
                  className={`reveal p-[22px] border rounded-xl flex flex-col gap-2 min-h-[220px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                    e.featured
                      ? "bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)] col-span-1 sm:col-span-2 lg:col-span-1 p-7"
                      : "bg-[var(--surface-1)] border-[var(--line-soft)] hover:border-[var(--line-medium)]"
                  }`}
                  style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className={`font-mono text-[11px] tracking-[0.18em] uppercase ${e.featured ? "text-[color-mix(in_oklab,var(--bg)_65%,transparent)]" : "text-[var(--fg-3)]"}`}>
                    {e.date}
                  </div>
                  <h3
                    className={`font-serif font-medium leading-[1.1] m-0 ${e.featured ? "text-[var(--bg)] text-2xl" : "text-[var(--fg)] text-xl"}`}
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {e.title}
                  </h3>
                  <div className={`font-sans text-[0.875rem] ${e.featured ? "text-[color-mix(in_oklab,var(--bg)_80%,transparent)]" : "text-[var(--fg-2)]"}`}>
                    {e.time} · {e.place}
                  </div>
                  <div className={`mt-auto pt-3.5 border-t font-sans text-[0.875rem] flex items-center gap-1.5 ${
                    e.featured
                      ? "border-[color-mix(in_oklab,var(--bg)_22%,transparent)] text-[var(--bg)]"
                      : "border-[var(--line-soft)] text-[var(--fg)]"
                  }`}>
                    <span>{e.cta}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <a href="#" className="font-sans text-[14px] font-medium px-5 py-3 rounded-lg bg-transparent text-[var(--fg)] border border-[var(--line-medium)] transition-all duration-300 hover:bg-[var(--surface-2)] hover:border-[var(--line-strong)]">
                {t.events.seeAll}
              </a>
            </div>
          </div>
        </section>

        {/* Ministries */}
        <section id="ministries" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div className="reveal flex flex-col gap-3 max-w-[720px] mb-[clamp(2.5rem,5vw,4rem)]">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                {t.ministries.eyebrow}
              </div>
              <h2
                className="font-serif font-medium text-[var(--fg)] m-0"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", letterSpacing: "-0.022em", lineHeight: "1.05", fontVariationSettings: '"opsz" 60' }}
              >
                {t.ministries.h2Pre} <span className="italic font-light">{t.ministries.h2Emph}</span>
              </h2>
              <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] max-w-[56ch] m-0">
                {t.ministries.lede}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,3.5rem)]">
              {t.ministries.items.map((m, i) => {
                const photos = [
                  "/images/gallery/PHOTO-2026-01-26-14-24-22.jpg",
                  "/images/gallery/PHOTO-2026-01-18-19-59-02.jpg",
                  "/images/gallery/PHOTO-2026-01-26-20-05-33.jpg",
                  "/images/gallery/PHOTO-2026-04-12-18-56-37.jpg",
                ];
                return (
                  <a
                    key={m.n}
                    href="#"
                    className="reveal grid grid-cols-1 sm:grid-cols-[0.8fr_1.2fr] gap-7 items-center py-3 cursor-pointer group"
                    style={{ "--reveal-delay": `${(i % 2) * 100}ms`, color: "inherit", textDecoration: "none" } as React.CSSProperties}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface-2)]">
                      <Image
                        src={photos[i]}
                        alt={m.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover saturate-[0.92] transition-transform duration-700"
                        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                        loading="lazy"
                      />
                      <div className="absolute top-3.5 left-4 font-mono text-[11px] tracking-[0.2em] text-white z-[2]">
                        {m.n}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <h3
                        className="font-serif font-medium text-[var(--fg)] m-0 leading-[1.1]"
                        style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", letterSpacing: "-0.02em" }}
                      >
                        {m.name}
                      </h3>
                      <p className="font-sans text-[0.95rem] leading-[1.6] text-[var(--fg-2)] m-0">{m.desc}</p>
                      <span className="font-sans text-[0.9rem] text-[var(--fg)] inline-flex items-center gap-2 mt-2 border-b border-[var(--fg)] self-start pb-0.5 transition-all duration-300 group-hover:gap-3.5">
                        {t.ministries.learn} <span>→</span>
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pastoral Team */}
        <section id="team" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div className="reveal flex flex-col gap-3 max-w-[720px] mb-[clamp(2.5rem,5vw,4rem)]">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                {t.pastoral.eyebrow}
              </div>
              <h2
                className="font-serif font-medium text-[var(--fg)] m-0"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", letterSpacing: "-0.022em", lineHeight: "1.05", fontVariationSettings: '"opsz" 60' }}
              >
                {t.pastoral.h2Pre} <span className="italic font-light">{t.pastoral.h2Emph}</span>
              </h2>
              <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] max-w-[56ch] m-0">
                {t.pastoral.lede}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)]">
              {t.pastoral.members.map((p, i) => {
                const photos = ["/images/gallery/Tezza-2339.JPG", "/images/gallery/Tezza-2445.JPG"];
                return (
                  <div
                    key={p.name}
                    className="reveal flex flex-col gap-6 group"
                    style={{ "--reveal-delay": `${i * 140}ms` } as React.CSSProperties}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-[var(--surface-2)]">
                      <Image
                        src={photos[i]}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-[1.02] transition-all duration-[600ms]"
                        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                        {p.role}
                      </div>
                      <h3
                        className="font-serif font-medium text-[var(--fg)] mt-1.5 mb-0 leading-[1.05]"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
                      >
                        {p.name}
                      </h3>
                      <blockquote
                        className="font-serif italic font-light text-[1.25rem] leading-[1.35] text-[var(--fg)] border-l-2 border-[var(--fg)] pl-[18px] my-3"
                        style={{ letterSpacing: "-0.005em" }}
                      >
                        {p.quote}
                      </blockquote>
                      <p className="font-sans text-[0.95rem] leading-[1.65] text-[var(--fg-2)] m-0 max-w-[42ch]">
                        {p.bio}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ — Accordion */}
        <FaqSection />

        {/* Location */}
        <section id="location" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div className="reveal flex flex-col gap-3 max-w-[720px] mb-[clamp(2.5rem,5vw,4rem)]">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                {t.location.eyebrow}
              </div>
              <h2
                className="font-serif font-medium text-[var(--fg)] m-0"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", letterSpacing: "-0.022em", lineHeight: "1.05", fontVariationSettings: '"opsz" 60' }}
              >
                {t.location.h2Pre} <span className="italic font-light">{t.location.h2Emph}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[clamp(2rem,4vw,3.5rem)]">
              {/* Stylized map */}
              <div className="reveal relative aspect-square bg-[var(--surface-1)] border border-[var(--line-soft)] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse at 50% 60%, color-mix(in oklab, var(--fg) 6%, transparent), transparent 60%),
                      repeating-linear-gradient(0deg, transparent 0 24px, color-mix(in oklab, var(--fg) 4%, transparent) 24px 25px),
                      repeating-linear-gradient(90deg, transparent 0 24px, color-mix(in oklab, var(--fg) 4%, transparent) 24px 25px),
                      var(--surface-1)
                    `,
                  }}
                />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeOpacity="0.10" fill="none">
                    <path d="M0,30 Q30,40 60,28 T100,40" />
                    <path d="M0,60 Q40,50 70,65 T100,58" />
                    <path d="M30,0 Q35,30 50,55 T56,100" />
                    <path d="M60,0 Q50,30 60,60 T55,100" />
                  </g>
                </svg>
                <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-full flex flex-col items-center gap-1">
                  <div
                    className="w-3.5 h-3.5 rounded-full bg-[var(--fg)]"
                    style={{ boxShadow: "0 0 0 6px color-mix(in oklab, var(--fg) 14%, transparent)" }}
                  />
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--fg)] bg-[var(--bg)] px-2 py-1 border border-[var(--line-medium)] mt-1.5 whitespace-nowrap">
                    Hillel · La Massana
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-7">
                {[
                  { label: t.location.addressLabel, lines: t.location.addressLines },
                  { label: t.location.meetingsLabel, lines: t.location.meetingsLines },
                ].map((item) => (
                  <div key={item.label} className="reveal flex flex-col gap-1.5 pt-[18px] border-t border-[var(--line-soft)]">
                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--fg-3)]">
                      {item.label}
                    </div>
                    <div className="font-sans text-[1rem] leading-[1.55] text-[var(--fg-2)]">
                      {item.lines.map((l, i) => <div key={i}>{l}</div>)}
                    </div>
                  </div>
                ))}
                <div className="reveal flex flex-col gap-1.5 pt-[18px] border-t border-[var(--line-soft)]">
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--fg-3)]">
                    {t.location.contactLabel}
                  </div>
                  <div className="font-sans text-[1rem] leading-[1.55] text-[var(--fg-2)]">
                    <a href={`mailto:${t.location.email}`} className="border-b border-[var(--line-medium)] text-[var(--fg)]">
                      {t.location.email}
                    </a>
                  </div>
                </div>
                <div className="reveal flex gap-3 flex-wrap">
                  <a
                    href="https://maps.google.com/?q=La+Massana+Andorra"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[14px] font-medium px-[26px] py-[14px] rounded-full bg-[var(--fg)] text-[var(--bg)] border border-[var(--fg)] transition-all duration-300 hover:bg-transparent hover:text-[var(--fg)]"
                  >
                    {t.location.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          className="border-y border-[var(--line-soft)] bg-[var(--surface-1)]"
          style={{ paddingBlock: "var(--section-y)" }}
        >
          <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
              <div className="reveal">
                <div className="flex flex-col gap-3 mb-0">
                  <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
                    {t.newsletter.eyebrow}
                  </div>
                  <h2
                    className="font-serif font-medium text-[var(--fg)] m-0"
                    style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", letterSpacing: "-0.022em", lineHeight: "1.05", fontVariationSettings: '"opsz" 60' }}
                  >
                    {t.newsletter.h2Pre} <span className="italic font-light">{t.newsletter.h2Emph}</span>
                  </h2>
                  <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] max-w-[56ch] m-0">
                    {t.newsletter.lede}
                  </p>
                </div>
              </div>
              <div className="reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
                <form
                  className="flex rounded-full overflow-hidden max-w-[520px] bg-[var(--bg)]"
                  style={{ boxShadow: "0 0 0 1px var(--line-medium)" }}
                  onSubmit={(e) => { e.preventDefault(); }}
                >
                  <input
                    type="email"
                    placeholder={t.newsletter.placeholder}
                    aria-label="Email"
                    className="flex-1 border-none outline-none bg-transparent font-sans text-[15px] px-6 py-4 text-[var(--fg)] min-w-0 placeholder:text-[var(--fg-4)]"
                  />
                  <button
                    type="submit"
                    className="bg-[var(--fg)] text-[var(--bg)] border-none cursor-pointer font-sans text-[14px] font-medium px-7 transition-opacity duration-300 hover:opacity-85"
                  >
                    {t.newsletter.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Collage */}
        <FooterCollage />
      </main>

      <SiteFooter />
    </>
  );
}

/* ============================================================
   Next Meeting — inverted black block with countdown
   ============================================================ */
function NextMeetingSection() {
  const { t } = useLang();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const target = useMemo(() => {
    const d = new Date(now);
    d.setHours(11, 0, 0, 0);
    let days = (7 - d.getDay()) % 7;
    if (days === 0 && d.getTime() < now.getTime()) days = 7;
    d.setDate(d.getDate() + days);
    return d;
  }, [now]);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const ds = Math.floor(diff / 86400000);
  const hs = Math.floor((diff % 86400000) / 3600000);
  const ms = Math.floor((diff % 3600000) / 60000);

  return (
    <section className="next-block relative overflow-hidden" id="next" style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
      <div
        className="reveal grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(2rem,6vw,6rem)] items-center mx-auto px-[var(--gutter)]"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: "color-mix(in oklab, var(--bg) 60%, transparent)" }}>
            {t.next.eyebrow}
          </div>
          <h2
            className="font-serif font-medium text-[var(--bg)] my-3.5"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              letterSpacing: "-0.022em",
              lineHeight: "1.0",
              fontVariationSettings: '"opsz" 72',
            }}
          >
            {t.next.h2Pre} <span className="italic font-light">{t.next.h2Emph}</span>
          </h2>
          <p className="font-sans text-[1.05rem] leading-[1.6] max-w-[36ch] mb-7" style={{ color: "color-mix(in oklab, var(--bg) 78%, transparent)" }}>
            {t.next.lede}
          </p>

          {/* Data grid */}
          <div
            className="grid grid-cols-3 gap-5 py-6 mb-6"
            style={{ borderTop: "1px solid color-mix(in oklab, var(--bg) 18%, transparent)", borderBottom: "1px solid color-mix(in oklab, var(--bg) 18%, transparent)" }}
          >
            {[
              { label: t.next.dayLabel, value: t.next.dayValue },
              { label: t.next.hourLabel, value: t.next.hourValue },
              { label: t.next.placeLabel, value: t.next.placeValue },
            ].map((d) => (
              <div key={d.label} className="flex flex-col gap-1.5">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "color-mix(in oklab, var(--bg) 55%, transparent)" }}>
                  {d.label}
                </div>
                <div className="font-serif font-medium text-[var(--bg)]" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", letterSpacing: "-0.015em" }}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="#location" className="btn-primary font-sans text-[14px] font-medium px-[26px] py-[14px] rounded-full border transition-all duration-300">
              {t.next.cta}
            </a>
            <a href="#location" className="btn-secondary font-sans text-[14px] font-medium px-[26px] py-[14px] rounded-full border transition-all duration-300">
              {t.next.ctaAdd}
            </a>
          </div>
        </div>

        {/* Countdown */}
        <div>
          <div className="flex gap-1.5" aria-label="Cuenta atrás">
            {[
              { num: ds, label: t.next.lblDays },
              { num: hs, label: t.next.lblHrs },
              { num: ms, label: t.next.lblMin },
            ].map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center px-[18px] py-3.5 rounded-lg min-w-[72px]"
                style={{ border: "1px solid color-mix(in oklab, var(--bg) 18%, transparent)" }}
              >
                <div className="font-serif text-[2rem] font-medium text-[var(--bg)] leading-none" style={{ letterSpacing: "-0.02em" }}>
                  {String(c.num).padStart(2, "0")}
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase mt-1.5" style={{ color: "color-mix(in oklab, var(--bg) 55%, transparent)" }}>
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ — Accordion
   ============================================================ */
function FaqSection() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <section style={{ paddingBlock: "var(--section-y)" }} id="faq">
      <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
        <div className="reveal flex flex-col gap-3 max-w-[720px] mb-[clamp(2.5rem,5vw,4rem)]">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)]">
            {t.faq.eyebrow}
          </div>
          <h2
            className="font-serif font-medium text-[var(--fg)] m-0"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)", letterSpacing: "-0.022em", lineHeight: "1.05", fontVariationSettings: '"opsz" 60' }}
          >
            {t.faq.h2Pre} <span className="italic font-light">{t.faq.h2Emph}</span>
          </h2>
          <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] max-w-[56ch] m-0">
            {t.faq.lede}
          </p>
        </div>

        <div className="reveal border-t border-[var(--line-medium)] max-w-[880px]">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item border-b border-[var(--line-soft)] py-[22px] ${isOpen ? "open" : ""}`}>
                <div
                  className="flex justify-between items-center cursor-pointer gap-6"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <div
                    className="font-serif font-medium text-[var(--fg)]"
                    style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.4rem)", letterSpacing: "-0.012em" }}
                  >
                    {f.q}
                  </div>
                  <div className="faq-icon" />
                </div>
                <p className="faq-answer font-sans text-[1rem] leading-[1.65] text-[var(--fg-2)] max-w-[56ch] m-0">
                  <span>{f.a}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <HomeContent />
    </LangProvider>
  );
}
