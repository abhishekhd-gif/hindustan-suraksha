import { useEffect, useState } from "react";
import { HERO_SLIDES } from "../data/content";

export default function HeroSlider() {
  const [i, setI] = useState(0);

  // Auto slide
  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const slide = HERO_SLIDES[i];

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      {/* overlay */}
      <div className="heroOverlay" />

      <div className="heroInner container">
        <div className="heroContent">
          <h1 className="heroTitle">{slide.title}</h1>
          <h2 className="heroSub">{slide.subtitle}</h2>

          <p className="heroDesc">{slide.desc}</p>

          <div className="heroBtns">
            <a
              className="heroBtn heroBtnPrimary"
              href={slide.cta1?.href ?? "#"}
            >
              {slide.cta1?.label ?? "View Milestones"}
            </a>

            <a
              className="heroBtn heroBtnOutline"
              href={slide.cta2?.href ?? "#"}
            >
              {slide.cta2?.label ?? "Start Referring"}
            </a>
          </div>

          <div className="heroDots">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`heroDot ${idx === i ? "active" : ""}`}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
