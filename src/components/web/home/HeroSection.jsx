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
    <section className="relative overflow-hidden pt-10 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-16 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl animate-float" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative animate-fade-up">
          <div className="hero-frame animate-glow">
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
                  {/* 16:9 */}
                  <div className="relative aspect-video">
                    <img
                      src={img}
                      alt={`slide-${i}`}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform duration-[1200ms]
                      "
                      style={{
                        transform:
                          i === index ? "scale(1.01)" : "scale(1.04)",
                      }}
                    />
                    <div className="absolute inset-0 hero-overlay" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== ARROWS ===== */}
          <button
            onClick={prev}
            className="
              icon-button
              absolute left-4 top-1/2 -translate-y-1/2 z-20
              text-blue-700
            "
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="
              icon-button
              absolute right-4 top-1/2 -translate-y-1/2 z-20
              text-blue-700
            "
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* ===== DOTS ===== */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-500
                  ${i === index ? "w-10 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" : "w-4 bg-blue-300/60"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
