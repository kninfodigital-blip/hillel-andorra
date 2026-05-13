"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

function SocialIcon({ kind }: { kind: string }) {
  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (kind === "youtube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    );
  }
  if (kind === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  return null;
}

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer
      className="bg-[var(--bg)]"
      role="contentinfo"
      style={{ paddingBlock: "clamp(4rem, 7vw, 6rem) clamp(2rem, 4vw, 3rem)" }}
    >
      <div className="mx-auto px-[var(--gutter)]" style={{ maxWidth: "var(--container-max)" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-[60px] border-b border-[var(--line-soft)]">
          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo/511CF14D-1899-49C8-983B-580C49A2B454.PNG"
              alt="Hillel"
              width={56}
              height={56}
              className="h-14 w-auto object-contain logo-img transition-all duration-300"
            />
            <p className="font-sans text-[0.95rem] text-[var(--fg-2)] max-w-[32ch] leading-[1.55]">
              {t.footer.tagline}
            </p>
            <div className="flex gap-2.5">
              {["instagram", "youtube", "mail"].map((kind) => (
                <a
                  key={kind}
                  href={kind === "mail" ? `mailto:${t.location.email}` : "#"}
                  className="w-9 h-9 border border-[var(--line-medium)] rounded-full grid place-items-center text-[var(--fg)] transition-all duration-300 hover:bg-[var(--fg)] hover:text-[var(--bg)]"
                  aria-label={kind}
                >
                  <SocialIcon kind={kind} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)] font-medium mb-[18px]">
              {t.footer.navTitle}
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {[
                { label: t.nav.about, href: "#about" },
                { label: t.nav.gallery, href: "#gallery" },
                { label: t.nav.ministries, href: "#ministries" },
                { label: t.nav.team, href: "#team" },
                { label: t.nav.events, href: "#events" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="font-sans text-[0.95rem] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community col */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)] font-medium mb-[18px]">
              {t.footer.communityTitle}
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {["Hillel Kids", t.footer.youth, "ONG Hillel", "Hillel Online"].map((item) => (
                <li key={item}>
                  <a href="#ministries" className="font-sans text-[0.95rem] text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--fg-3)] font-medium mb-[18px]">
              {t.footer.contactTitle}
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 font-sans text-[0.95rem] text-[var(--fg-2)]">
              <li>
                <a href={`mailto:${t.location.email}`} className="hover:text-[var(--fg)] transition-colors duration-300">
                  {t.location.email}
                </a>
              </li>
              <li className="text-[var(--fg-3)] text-[0.9rem]">La Massana, Andorra</li>
              <li className="text-[var(--fg-3)] text-[0.9rem]">{t.footer.sunday}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-5 mt-9 font-sans text-[0.85rem] text-[var(--fg-3)]">
          <div>{t.footer.rights}</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--fg)] transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
