"use client";

import Image from "next/image";
import { collageRow1, collageRow2 } from "@/lib/gallery-data";

export function FooterCollage() {
  const items = [...collageRow1.slice(0, 12), ...collageRow1.slice(0, 12)];

  return (
    <div
      className="overflow-hidden border-y border-[var(--line-soft)] bg-[var(--bg)]"
      aria-hidden="true"
    >
      <div
        className="flex gap-0 w-max"
        style={{ animation: "marquee-scroll 90s linear infinite" }}
      >
        {items.map((img, i) => (
          <div
            key={`m-${i}`}
            className="relative h-[180px] w-[22vw] max-w-[280px] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={img.img}
              alt=""
              fill
              sizes="280px"
              className="object-cover grayscale contrast-[1.02]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
