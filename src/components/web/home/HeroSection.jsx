import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = ["/img/banner-hero/1.png", "/img/banner-hero/2.png"];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative overflow-hidden pt-10 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* frame */}
          <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-sm">
            <div className="relative aspect-video">
              {slides.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`slide-${i}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={[
                    "absolute inset-0 w-full h-full object-cover",
                    "transition-opacity duration-700 ease-in-out",
                    i === index ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  style={{ willChange: "opacity" }}
                />
              ))}

              {/* overlay เบา ๆ (ถ้าไม่อยากให้หม่น ให้ลบออกได้เลย) */}
              <div className="absolute inset-0 pointer-events-none bg-black/5" />
            </div>
          </div>

          {/* arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 backdrop-blur px-3 py-3 shadow hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-blue-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 backdrop-blur px-3 py-3 shadow hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-blue-700" />
          </button>

          {/* dots */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-10 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.45)]"
                    : "w-4 bg-blue-300/60",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
