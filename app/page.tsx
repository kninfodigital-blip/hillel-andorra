import Image from "next/image";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroGallery } from "@/components/sections/HeroGallery";
import { FooterCollage } from "@/components/sections/FooterCollage";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute top-[-100%] left-4 bg-white text-black px-4 py-2 rounded-full z-[9999] text-sm focus:top-4"
      >
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="main">
        {/* Hero + Radial Gallery */}
        <HeroGallery />

        {/* Welcome Features */}
        <section id="about" className="py-20 md:py-28 lg:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
                Lo que nos define
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                Un lugar para <em className="font-normal italic">ser</em>
              </h2>
              <p className="text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed">
                No importa de dónde vengas ni en qué punto estés. Aquí hay un sitio para ti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Comunidad",
                  desc: "Cenas, grupos pequeños, vida real. Relaciones auténticas que van más allá del domingo.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ),
                  title: "Fe",
                  desc: "Un Jesús cercano, no una religión rígida. Espiritualidad que se vive, no que se impone.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                  title: "Familia",
                  desc: "Espacio para todas las edades. Desde los más pequeños hasta los jóvenes y adultos.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`text-center py-10 px-8 ${
                    i < 2 ? "md:border-r md:border-white/10" : ""
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Service Banner */}
        <section className="py-16 md:py-20 bg-neutral-950 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="font-serif text-3xl font-medium mb-2">Próxima reunión</h3>
              <p className="text-neutral-400">Te esperamos este domingo. Ven como eres.</p>
            </div>
            <div className="flex gap-8 flex-wrap justify-center">
              {[
                { label: "Día", value: "Domingo" },
                { label: "Hora", value: "11:00h" },
                { label: "Lugar", value: "La Massana" },
              ].map((d) => (
                <div key={d.label} className="text-center">
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-1">
                    {d.label}
                  </p>
                  <p className="font-serif text-xl font-medium">{d.value}</p>
                </div>
              ))}
            </div>
            <a
              href="#location"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-opacity flex-shrink-0"
            >
              Cómo llegar
            </a>
          </div>
        </section>

        {/* Ministries */}
        <section id="ministries" className="py-20 md:py-28 lg:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="mb-14">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
                Ministerios
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Hay un lugar para <em className="font-normal italic">ti</em>
              </h2>
              <p className="text-lg text-neutral-400 max-w-lg leading-relaxed">
                Diferentes espacios, un mismo propósito: crecer juntos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  img: "/images/gallery/PHOTO-2026-01-26-14-24-22.jpg",
                  title: "Hillel Kids",
                  desc: "Un espacio seguro y divertido donde los más pequeños descubren valores para toda la vida.",
                },
                {
                  img: "/images/gallery/PHOTO-2026-01-18-19-59-02.jpg",
                  title: "Hillel Jóvenes",
                  desc: "Comunidad, amistad y propósito. Un grupo que camina junto en la vida real.",
                },
                {
                  img: "/images/gallery/PHOTO-2026-01-26-20-05-33.jpg",
                  title: "ONG Hillel",
                  desc: "Acción social en Andorra y más allá. Porque la fe se demuestra con las manos.",
                },
                {
                  img: "/images/gallery/PHOTO-2026-04-12-18-56-37.jpg",
                  title: "Hillel Online",
                  desc: "Conéctate desde donde estés. Streaming en directo y comunidad digital.",
                },
              ].map((m) => (
                <div
                  key={m.title}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900"
                >
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-serif text-xl font-medium mb-2">{m.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pastoral Team */}
        <section id="team" className="py-20 md:py-28 lg:py-32 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
                Equipo pastoral
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                Las personas detrás de <em className="font-normal italic">Hillel</em>
              </h2>
              <p className="text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed">
                Con los pies en la tierra y el corazón en las personas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              {[
                {
                  img: "/images/gallery/Tezza-2339.JPG",
                  name: "Meri Mas",
                  role: "Pastora",
                  bio: "Apasionada por las personas y por construir una comunidad donde todos se sientan en casa.",
                },
                {
                  img: "/images/gallery/Tezza-2445.JPG",
                  name: "Juanma Jurado",
                  role: "Pastor",
                  bio: "Liderando con cercanía, autenticidad y una visión fresca para Andorra.",
                },
              ].map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-neutral-800">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-1">{member.name}</h3>
                  <p className="text-neutral-500 text-sm mb-3">{member.role}</p>
                  <p className="text-neutral-400 text-[15px] leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tu primera vez */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="mb-14">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
                Tu primera vez
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                No te preocupes, <em className="font-normal italic">todos fuimos nuevos</em>
              </h2>
              <p className="text-lg text-neutral-400 max-w-lg leading-relaxed">
                Algunas respuestas para que vengas tranquilo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {[
                { q: "¿Cómo me visto?", a: "Como quieras. En serio. Aquí nadie mira lo que llevas puesto. Ven cómodo." },
                { q: "¿Cuánto dura?", a: "Alrededor de 1 hora y media. Música, un mensaje y tiempo para conectar al final." },
                { q: "¿Puedo ir solo?", a: "Claro. Muchos vinieron solos la primera vez y hoy son parte de la familia." },
                { q: "¿Dónde aparco?", a: "Hay parking gratuito junto al local. Llegarás sin problema." },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 bg-neutral-950 border border-white/10 rounded-xl"
                >
                  <h4 className="font-serif text-lg font-medium mb-2">{faq.q}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="py-20 md:py-28 lg:py-32 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="mb-14">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
                Encuéntranos
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium">
                Dónde y <em className="font-normal italic">cuándo</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  { title: "Dirección", text: "La Massana, Andorra\nPrincipat d'Andorra", iconPath: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
                  { title: "Reuniones", text: "Domingos a las 11:00h\nJueves a las 20:00h (grupos)", iconPath: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18" },
                  { title: "Contacto", text: "info@hillelandorra.com", iconPath: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mt-1 flex-shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={item.iconPath} />
                    </svg>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-neutral-400 text-sm whitespace-pre-line leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
                <a
                  href="https://maps.google.com/?q=La+Massana+Andorra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-opacity"
                >
                  Cómo llegar
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>

              <div className="rounded-xl overflow-hidden bg-neutral-800 min-h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23291.5!2d1.5147!3d42.5447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5f3e9e6b5bbbb%3A0x400fae021d4f850!2sLa%20Massana%2C%20Andorra!5e0!3m2!1ses!2s!4v1"
                  className="w-full h-full min-h-[350px] border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Hillel Andorra"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 md:py-28 bg-black border-t border-white/10">
          <div className="max-w-lg mx-auto text-center px-6">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Mantente conectado
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Recibe <em className="font-normal italic">novedades</em>
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Entérate de próximos eventos, reuniones especiales y novedades de la comunidad.
            </p>
            <form className="flex gap-3 max-w-sm mx-auto flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Tu email"
                required
                className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-transparent text-white placeholder:text-neutral-500 text-sm outline-none focus:border-white/50 transition-colors"
                aria-label="Dirección de email"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-opacity whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </section>

        {/* Footer Collage */}
        <FooterCollage />
      </main>

      <SiteFooter />
    </>
  );
}
