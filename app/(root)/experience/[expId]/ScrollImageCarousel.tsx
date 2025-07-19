'use client';

import Image from "next/image";
import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface ScrollImageCarouselProps {
  images: string[];
}

export default function ScrollImageCarousel({ images }: ScrollImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg p-2 rounded-full hover:bg-muted transition hidden md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Image Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-muted-foreground/50 px-1"
      >
        {images.map((src, idx) => (
          <div key={idx} className="snap-start flex-shrink-0">
            <Image
              src={src}
              alt={`Screenshot ${idx}`}
              width={150}
height={85}

              className="rounded-lg border bg-muted"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg p-2 rounded-full hover:bg-muted transition hidden md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
