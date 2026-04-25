"use client";

import Image from "next/image";
import { collageRow1, collageRow2 } from "@/lib/gallery-data";

export function FooterCollage() {
  const row1 = [...collageRow1, ...collageRow1];
  const row2 = [...collageRow2, ...collageRow2];

  return (
    <section className="py-12 overflow-hidden bg-black" aria-label="Fotos de la comunidad">
      <div className="mb-3">
        <div
          className="flex gap-3"
          style={{ animation: "marquee-scroll 50s linear infinite" }}
        >
          {row1.map((img, i) => (
            <div key={`r1-${i}`} className="relative h-[160px] md:h-[200px] w-[240px] md:w-[300px] flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={img.img}
                alt={img.alt}
                fill
                sizes="300px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          className="flex gap-3"
          style={{ animation: "marquee-scroll 55s linear infinite reverse" }}
        >
          {row2.map((img, i) => (
            <div key={`r2-${i}`} className="relative h-[160px] md:h-[200px] w-[240px] md:w-[300px] flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={img.img}
                alt={img.alt}
                fill
                sizes="300px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
