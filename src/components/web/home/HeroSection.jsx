import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/img/banner-hero/1.png",
  "/img/banner-hero/2.png",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto">
      {/* ===== SLIDES WRAPPER ===== */}
      <div
        className="
          flex
          transition-[transform] duration-1000 ease-[cubic-bezier(.4,0,.2,1)]
        "
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="
              min-w-full
              transition-opacity duration-700
            "
            style={{
              opacity: i === index ? 1 : 0.4,
            }}
          >
            {/* Full width to edges, fixed height (won't grow on wider screens) */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img
                src={img}
                alt={`slide-${i}`}
                className="
                  absolute inset-0
                  w-full h-full
                  object-contain
                  transition-transform duration-[1200ms]
                "
                style={{
                  transform:
                    i === index ? "scale(1)" : "scale(1.02)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ===== ARROWS ===== */}
      <button
        onClick={prev}
        className="
          absolute left-4 top-1/2 -translate-y-1/2 z-20
          text-slate-100
          p-2 rounded-full
          hover:bg-white/20
          transition
          outline-none focus:outline-none
        "
        aria-label="Previous slide"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={next}
        className="
          absolute right-4 top-1/2 -translate-y-1/2 z-20
          text-slate-100
          p-2 rounded-full
          hover:bg-white/20
          transition
          outline-none focus:outline-none
        "
        aria-label="Next slide"
      >
        <ChevronRight size={26} />
      </button>

      {/* ===== DOTS ===== */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-[3px]
              rounded-full
              transition-all duration-500
              ${i === index ? "w-8 bg-white" : "w-4 bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
