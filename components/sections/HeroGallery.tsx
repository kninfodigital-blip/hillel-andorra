"use client";

import React from "react";
import Image from "next/image";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";
import { Badge } from "@/components/ui/badge";
import { galleryImages } from "@/lib/gallery-data";

export function HeroGallery() {
  return (
    <section id="gallery" className="relative bg-black">
      {/* Hero intro text */}
      <div className="h-screen flex flex-col items-center justify-center space-y-6 px-6">
        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
          Hillel — Església d&apos;Andorra
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-center">
          Bienvenido a{" "}
          <em className="font-normal italic">Casa</em>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-md text-center font-light">
          Una comunidad que cree en personas. En Andorra, contigo.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="#location"
            className="bg-white text-black px-7 py-3 rounded-full font-medium hover:bg-white/90 transition-opacity"
          >
            Visítanos este domingo
          </a>
          <a
            href="#about"
            className="border border-white/40 text-white px-7 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
          >
            Conoce más
          </a>
        </div>
        <div className="absolute bottom-8 animate-bounce text-white/40">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Radial Scroll Gallery with all Hillel images */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10 text-center pt-12 pointer-events-none">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-3">
            Nuestra vida
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            Momentos que <em className="font-normal italic">importan</em>
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
                  className="group relative w-[140px] h-[190px] sm:w-[180px] sm:h-[250px] md:w-[200px] md:h-[280px] overflow-hidden rounded-xl bg-neutral-900 border border-white/10 shadow-2xl"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={image.img}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 200px"
                      className={`object-cover transition-transform duration-700 ease-out ${
                        isActive
                          ? "scale-110 blur-0"
                          : "scale-100 blur-[0.5px] grayscale-[20%]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                    <div className="flex justify-between items-start">
                      <Badge
                        variant="secondary"
                        className="text-[9px] sm:text-[10px] px-2 py-0 bg-black/60 backdrop-blur-sm text-white/90 border-white/10"
                      >
                        {image.cat}
                      </Badge>
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
                        className={`h-[2px] bg-white mt-2 transition-all duration-500 ${
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
