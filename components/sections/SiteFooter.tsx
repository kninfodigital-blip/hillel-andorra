import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/images/logo/511CF14D-1899-49C8-983B-580C49A2B454.PNG"
              alt="Hillel — Església d'Andorra"
              width={140}
              height={56}
              className="h-11 w-auto mb-4 opacity-90"
            />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-[280px]">
              Una comunidad que cree en personas. En Andorra, contigo.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: "Instagram", d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
                { label: "YouTube", d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
                { label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
                  aria-label={social.label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-400">
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {["Quiénes Somos", "Galería", "Ministerios", "Equipo", "Reuniones"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, "")}`} className="text-sm text-neutral-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-5">
              Comunidad
            </h4>
            <ul className="space-y-3">
              {["Hillel Kids", "Hillel Jóvenes", "ONG Hillel", "Hillel Online"].map((item) => (
                <li key={item}>
                  <a href="#ministries" className="text-sm text-neutral-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-neutral-500 mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><a href="mailto:info@hillelandorra.com" className="hover:text-white transition-colors">info@hillelandorra.com</a></li>
              <li>La Massana, Andorra</li>
              <li>Domingos 11:00h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; 2026 Hillel — Església d&apos;Andorra. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Privacidad", "Aviso legal", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
