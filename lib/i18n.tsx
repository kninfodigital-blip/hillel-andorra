"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "ca";

const DICT = {
  es: {
    locale: "es",
    nav: {
      about: "Quiénes Somos",
      gallery: "Galería",
      ministries: "Ministerios",
      team: "Equipo",
      events: "Agenda",
      visit: "Visítanos",
    },
    hero: {
      eyebrow: "Hillel — Església d'Andorra",
      h1Pre: "Bienvenido a",
      h1Emph: "Casa",
      lede: "Una comunidad que cree en personas. En Andorra, contigo.",
      ctaPrimary: "Visítanos este domingo",
      ctaSecondary: "Conoce más",
      next: "Próxima reunión · Domingo · 11:00h",
    },
    statement: {
      preEmph: "Una iglesia que no se parece a una iglesia.",
      lineTwo: "Una comunidad que se parece a una",
      emph: "familia.",
    },
    gallery: {
      eyebrow: "Nuestra vida",
      h2Pre: "Momentos que",
      h2Emph: "importan",
    },
    values: {
      eyebrow: "Lo que nos define",
      h2Pre: "Un lugar para",
      h2Emph: "ser",
      lede: "No importa de dónde vengas ni en qué punto estés. Aquí hay un sitio para ti.",
      items: [
        { n: "01", title: "Comunidad", body: "Cenas, grupos pequeños, vida real. Relaciones auténticas que van más allá del domingo." },
        { n: "02", title: "Fe", body: "Un Jesús cercano, no una religión rígida. Espiritualidad que se vive, no que se impone." },
        { n: "03", title: "Familia", body: "Espacio para todas las edades. Desde los más pequeños hasta los jóvenes y adultos." },
      ],
    },
    next: {
      eyebrow: "Próxima reunión",
      h2Pre: "Este",
      h2Emph: "domingo",
      lede: "Te esperamos. Ven como eres.",
      dayLabel: "Día",
      dayValue: "Domingo",
      hourLabel: "Hora",
      hourValue: "11:00h",
      placeLabel: "Lugar",
      placeValue: "La Massana",
      cta: "Cómo llegar",
      ctaAdd: "Añadir al calendario",
      lblDays: "Días",
      lblHrs: "Horas",
      lblMin: "Min",
    },
    events: {
      eyebrow: "Agenda",
      h2Pre: "Lo que",
      h2Emph: "viene",
      lede: "Próximas reuniones, encuentros y noches especiales.",
      seeAll: "Ver agenda completa →",
      items: [
        { date: "Dom · 18 May", title: "Reunión semanal", time: "11:00h", place: "La Massana", cta: "Añadir al calendario", featured: true },
        { date: "Jue · 22 May", title: "Grupos pequeños", time: "20:00h", place: "En casas", cta: "Cómo unirme", featured: false },
        { date: "Sáb · 31 May", title: "Hillel Jóvenes", time: "19:30h", place: "Local", cta: "Más info", featured: false },
        { date: "Dom · 15 Jun", title: "Noche de adoración", time: "20:00h", place: "La Massana", cta: "Reservar plaza", featured: false },
      ],
    },
    ministries: {
      eyebrow: "Ministerios",
      h2Pre: "Hay un lugar para",
      h2Emph: "ti",
      lede: "Diferentes espacios, un mismo propósito: crecer juntos.",
      learn: "Saber más",
      items: [
        { n: "01", name: "Hillel Kids", desc: "Un espacio seguro y divertido donde los más pequeños descubren valores para toda la vida." },
        { n: "02", name: "Hillel Jóvenes", desc: "Comunidad, amistad y propósito. Un grupo que camina junto en la vida real." },
        { n: "03", name: "ONG Hillel", desc: "Acción social en Andorra y más allá. Porque la fe se demuestra con las manos." },
        { n: "04", name: "Hillel Online", desc: "Conéctate desde donde estés. Streaming en directo y comunidad digital." },
      ],
    },
    pastoral: {
      eyebrow: "Equipo pastoral",
      h2Pre: "Las personas detrás de",
      h2Emph: "Hillel",
      lede: "Con los pies en la tierra y el corazón en las personas.",
      members: [
        { name: "Meri Mas", role: "Pastora", quote: "\u201CLa iglesia no es un edificio. Es la gente que decide aparecer.\u201D", bio: "Apasionada por las personas y por construir una comunidad donde todos se sientan en casa. Cree en una iglesia con los pies en la tierra y el corazón abierto." },
        { name: "Juanma Jurado", role: "Pastor", quote: "\u201CNo te pedimos que cambies para venir. Ven, y ya veremos qué pasa.\u201D", bio: "Liderando con cercanía, autenticidad y una visión fresca para Andorra. Convencido de que la fe se vive de lunes a sábado, no solo el domingo." },
      ],
    },
    faq: {
      eyebrow: "Tu primera vez",
      h2Pre: "No te preocupes,",
      h2Emph: "todos fuimos nuevos",
      lede: "Algunas respuestas para que vengas tranquilo.",
      items: [
        { q: "¿Cómo me visto?", a: "Como quieras. En serio. Aquí nadie mira lo que llevas puesto. Ven cómodo." },
        { q: "¿Cuánto dura?", a: "Alrededor de 1 hora y media. Música, un mensaje y tiempo para conectar al final." },
        { q: "¿Puedo ir solo?", a: "Claro. Muchos vinieron solos la primera vez y hoy son parte de la familia." },
        { q: "¿Dónde aparco?", a: "Hay parking gratuito junto al local. Llegarás sin problema." },
      ],
    },
    location: {
      eyebrow: "Encuéntranos",
      h2Pre: "Dónde y",
      h2Emph: "cuándo",
      addressLabel: "Dirección",
      addressLines: ["La Massana, Andorra", "Principat d'Andorra"],
      meetingsLabel: "Reuniones",
      meetingsLines: ["Domingos a las 11:00h", "Jueves a las 20:00h (grupos)"],
      contactLabel: "Contacto",
      email: "info@hillelandorra.com",
      cta: "Cómo llegar",
    },
    newsletter: {
      eyebrow: "Mantente conectado",
      h2Pre: "Recibe",
      h2Emph: "novedades",
      lede: "Una vez al mes. Sin spam. Con corazón.",
      placeholder: "tu@email.com",
      submit: "Suscribirme",
    },
    footer: {
      tagline: "Una comunidad que cree en personas. En Andorra, contigo.",
      navTitle: "Navegación",
      communityTitle: "Comunidad",
      contactTitle: "Contacto",
      rights: "© 2026 Hillel — Església d'Andorra. Todos los derechos reservados.",
      privacy: "Privacidad",
      legal: "Aviso legal",
      cookies: "Cookies",
      sunday: "Domingos 11:00h",
      youth: "Hillel Jóvenes",
    },
  },
  ca: {
    locale: "ca",
    nav: {
      about: "Qui som",
      gallery: "Galeria",
      ministries: "Ministeris",
      team: "Equip",
      events: "Agenda",
      visit: "Vine'ns a veure",
    },
    hero: {
      eyebrow: "Hillel — Església d'Andorra",
      h1Pre: "Benvingut a",
      h1Emph: "Casa",
      lede: "Una comunitat que creu en les persones. A Andorra, amb tu.",
      ctaPrimary: "Vine aquest diumenge",
      ctaSecondary: "Coneix més",
      next: "Pròxima reunió · Diumenge · 11:00h",
    },
    statement: {
      preEmph: "Una església que no s'assembla a una església.",
      lineTwo: "Una comunitat que s'assembla a una",
      emph: "família.",
    },
    gallery: {
      eyebrow: "La nostra vida",
      h2Pre: "Moments que",
      h2Emph: "importen",
    },
    values: {
      eyebrow: "El que ens defineix",
      h2Pre: "Un lloc per",
      h2Emph: "ser",
      lede: "No importa d'on vinguis ni en quin punt siguis. Aquí hi ha un lloc per a tu.",
      items: [
        { n: "01", title: "Comunitat", body: "Sopars, grups petits, vida real. Relacions autèntiques que van més enllà del diumenge." },
        { n: "02", title: "Fe", body: "Un Jesús proper, no una religió rígida. Espiritualitat que es viu, no que s'imposa." },
        { n: "03", title: "Família", body: "Espai per a totes les edats. Des dels més petits fins als joves i adults." },
      ],
    },
    next: {
      eyebrow: "Pròxima reunió",
      h2Pre: "Aquest",
      h2Emph: "diumenge",
      lede: "T'esperem. Vine com ets.",
      dayLabel: "Dia",
      dayValue: "Diumenge",
      hourLabel: "Hora",
      hourValue: "11:00h",
      placeLabel: "Lloc",
      placeValue: "La Massana",
      cta: "Com arribar",
      ctaAdd: "Afegir al calendari",
      lblDays: "Dies",
      lblHrs: "Hores",
      lblMin: "Min",
    },
    events: {
      eyebrow: "Agenda",
      h2Pre: "Allò que",
      h2Emph: "ve",
      lede: "Pròximes reunions, trobades i nits especials.",
      seeAll: "Veure agenda completa →",
      items: [
        { date: "Dg · 18 maig", title: "Reunió setmanal", time: "11:00h", place: "La Massana", cta: "Afegir al calendari", featured: true },
        { date: "Dj · 22 maig", title: "Grups petits", time: "20:00h", place: "A cases", cta: "Com m'uneixo", featured: false },
        { date: "Ds · 31 maig", title: "Hillel Joves", time: "19:30h", place: "Local", cta: "Més info", featured: false },
        { date: "Dg · 15 juny", title: "Nit d'adoració", time: "20:00h", place: "La Massana", cta: "Reservar plaça", featured: false },
      ],
    },
    ministries: {
      eyebrow: "Ministeris",
      h2Pre: "Hi ha un lloc per a",
      h2Emph: "tu",
      lede: "Diferents espais, un mateix propòsit: créixer plegats.",
      learn: "Saber-ne més",
      items: [
        { n: "01", name: "Hillel Kids", desc: "Un espai segur i divertit on els més petits descobreixen valors per a tota la vida." },
        { n: "02", name: "Hillel Joves", desc: "Comunitat, amistat i propòsit. Un grup que camina plegat a la vida real." },
        { n: "03", name: "ONG Hillel", desc: "Acció social a Andorra i més enllà. Perquè la fe es demostra amb les mans." },
        { n: "04", name: "Hillel Online", desc: "Connecta't des d'on siguis. Streaming en directe i comunitat digital." },
      ],
    },
    pastoral: {
      eyebrow: "Equip pastoral",
      h2Pre: "Les persones darrere de",
      h2Emph: "Hillel",
      lede: "Amb els peus a terra i el cor a les persones.",
      members: [
        { name: "Meri Mas", role: "Pastora", quote: "\u201CL'església no és un edifici. És la gent que decideix aparèixer.\u201D", bio: "Apassionada per les persones i per construir una comunitat on tothom se senti a casa. Creu en una església amb els peus a terra i el cor obert." },
        { name: "Juanma Jurado", role: "Pastor", quote: "\u201CNo et demanem que canviïs per venir. Vine, i ja veurem què passa.\u201D", bio: "Liderant amb proximitat, autenticitat i una visió fresca per Andorra. Convençut que la fe es viu de dilluns a dissabte, no només el diumenge." },
      ],
    },
    faq: {
      eyebrow: "El teu primer cop",
      h2Pre: "No et preocupis,",
      h2Emph: "tots vam ser nous",
      lede: "Algunes respostes perquè vinguis tranquil.",
      items: [
        { q: "Com em vesteixo?", a: "Com vulguis. De debò. Aquí ningú mira el que portes posat. Vine còmode." },
        { q: "Quant dura?", a: "Al voltant d'una hora i mitja. Música, un missatge i temps per connectar al final." },
        { q: "Puc anar-hi sol?", a: "És clar. Molts van venir sols el primer cop i avui són part de la família." },
        { q: "On aparco?", a: "Hi ha aparcament gratuït al costat del local. Hi arribaràs sense problema." },
      ],
    },
    location: {
      eyebrow: "Troba'ns",
      h2Pre: "On i",
      h2Emph: "quan",
      addressLabel: "Adreça",
      addressLines: ["La Massana, Andorra", "Principat d'Andorra"],
      meetingsLabel: "Reunions",
      meetingsLines: ["Diumenges a les 11:00h", "Dijous a les 20:00h (grups)"],
      contactLabel: "Contacte",
      email: "info@hillelandorra.com",
      cta: "Com arribar",
    },
    newsletter: {
      eyebrow: "Mantén-te connectat",
      h2Pre: "Rep",
      h2Emph: "novetats",
      lede: "Una vegada al mes. Sense spam. Amb cor.",
      placeholder: "el-teu@email.com",
      submit: "Subscriure'm",
    },
    footer: {
      tagline: "Una comunitat que creu en les persones. A Andorra, amb tu.",
      navTitle: "Navegació",
      communityTitle: "Comunitat",
      contactTitle: "Contacte",
      rights: "© 2026 Hillel — Església d'Andorra. Tots els drets reservats.",
      privacy: "Privacitat",
      legal: "Avís legal",
      cookies: "Cookies",
      sunday: "Diumenges 11:00h",
      youth: "Hillel Joves",
    },
  },
} as const;

export type Dictionary = (typeof DICT)["es"] | (typeof DICT)["ca"];
export type Theme = "mono" | "night";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "es",
  setLang: () => {},
  t: DICT.es,
  theme: "mono",
  setTheme: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [theme, setTheme] = useState<Theme>("mono");
  const t = DICT[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t, theme, setTheme }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
