"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";
import { Badge } from "@/components/ui/badge";
import { galleryImages } from "@/lib/gallery-data";
import { useLang } from "@/lib/i18n";

function LetterReveal({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll(".letter");
    letters.forEach((el) => {
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add("in"), 80);
      });
    });
  }, [text]);

  return (
    <span ref={ref}>
      {[...text].map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="letter"
          style={{ "--letter-delay": `${startDelay + i * 35}ms` } as React.CSSProperties}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export function HeroGallery() {
  const { t } = useLang();
  const preLen = t.hero.h1Pre.length;

  return (
    <section id="gallery" className="relative bg-[var(--bg)]">
      {/* Hero intro */}
      <div className="min-h-screen flex flex-col items-center justify-center px-[var(--gutter)] pt-24 pb-16 relative">
        {/* Hero card - glass overlay */}
        <div
          className="max-w-[720px] w-full"
          style={{
            background: "color-mix(in oklab, var(--bg) 88%, transparent)",
            backdropFilter: "blur(20px) saturate(140%)",
            WebkitBackdropFilter: "blur(20px) saturate(140%)",
            padding: "36px 40px 32px",
            border: "1px solid var(--line-soft)",
          }}
        >
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)] mb-3.5">
            {t.hero.eyebrow}
          </div>
          <h1
            className="font-serif font-medium leading-[1.02] tracking-[-0.025em] text-[var(--fg)] mb-3.5"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 5.5rem)",
              fontVariationSettings: '"opsz" 96',
            }}
          >
            <span>
              <LetterReveal text={t.hero.h1Pre + " "} startDelay={0} />
            </span>
            <span className="italic font-light">
              <LetterReveal text={t.hero.h1Emph} startDelay={(preLen + 1) * 35} />
            </span>
          </h1>
          <p className="font-sans text-[1.05rem] leading-[1.55] text-[var(--fg-2)] mb-6 max-w-[48ch]">
            {t.hero.lede}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#location"
              className="font-sans text-[14px] font-medium px-[26px] py-[14px] rounded-full bg-[var(--fg)] text-[var(--bg)] border border-[var(--fg)] transition-all duration-300 hover:bg-transparent hover:text-[var(--fg)]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#about"
              className="font-sans text-[14px] font-medium px-[26px] py-[14px] rounded-full bg-transparent text-[var(--fg)] border border-[var(--fg)] transition-all duration-300 hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Next meeting pill */}
        <div
          className="absolute bottom-[38px] right-[var(--gutter)] z-[3] hidden md:flex items-center gap-2.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--fg)] px-4 py-3 rounded-full border border-[var(--line-soft)]"
          style={{
            background: "color-mix(in oklab, var(--bg) 70%, transparent)",
            backdropFilter: "blur(14px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          <span>{t.hero.next}</span>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute left-1/2 bottom-8 z-[3] w-[1px] h-14 -translate-x-1/2"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--fg) 30%, var(--fg) 70%, transparent)",
          }}
          aria-hidden="true"
        >
          <span
            className="absolute -left-[2px] top-0 w-[5px] h-[5px] rounded-full bg-[var(--fg)]"
            style={{ animation: "scrollDot 2.2s var(--ease-in-out) infinite" }}
          />
        </div>
      </div>

      {/* Radial Scroll Gallery */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10 text-center pt-12 pointer-events-none">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)] mb-3">
            {t.gallery.eyebrow}
          </p>
          <h2
            className="font-serif font-medium"
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
              letterSpacing: "-0.022em",
              lineHeight: "1.05",
              fontVariationSettings: '"opsz" 60',
            }}
          >
            {t.gallery.h2Pre}{" "}
            <span className="italic font-light">{t.gallery.h2Emph}</span>
          </h2>
        </div>

        <RadialScrollGallery
          className="!min-h-[700px]"
          baseRadius={480}
          mobileRadius={200}
          visiblePercentage={48}
          scrollDuration={3000}
          startTrigger="center center"
        >
          {(hoveredIndex) =>
            galleryImages.map((image, index) => {
              const isActive = hoveredIndex === index;
              return (
                <div
                  key={image.id}
                  className="group relative w-[140px] h-[190px] sm:w-[180px] sm:h-[250px] md:w-[200px] md:h-[280px] overflow-hidden bg-[var(--surface-2)] border border-[var(--line-soft)]"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={image.img}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 200px"
                      className={`object-cover transition-all duration-700 ease-out ${
                        isActive
                          ? "scale-110 blur-0 saturate-100 brightness-105 contrast-[1.02]"
                          : "scale-100 saturate-[0.95] brightness-100 contrast-[1.02]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-50" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                    <div className="flex justify-between items-start">
                      <span
                        className={`font-mono text-[10px] tracking-[0.18em] uppercase text-white px-2 py-1 transition-all duration-300 ${
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                        }`}
                        style={{
                          background: "rgba(0,0,0,0.32)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {image.cat}
                      </span>
                    </div>

                    <div
                      className={`transition-transform duration-500 ${
                        isActive ? "translate-y-0" : "translate-y-2"
                      }`}
                    >
                      <h3 className="text-base sm:text-lg font-semibold leading-tight text-white">
                        {image.title}
                      </h3>
                      <div
                        className={`h-[1px] bg-white mt-2 transition-all duration-500 ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          }
        </RadialScrollGallery>
      </div>
    </section>
  );
}
