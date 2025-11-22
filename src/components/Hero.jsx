import React from "react";
import "./Hero.css";

export default function Hero() {
  const total = 33;
  const items = Array.from({ length: total }, (_, i) => i + 1);

  const handleImageLoad = (e) => {
    e.currentTarget.classList.add("loaded");
  };

  return (
    <section className="hero">
      <div className="hero-grid">
        {items.map((n) => (
          <div className="hero-item" key={n}>
            <img
              src={`/image${n}.webp`}
              alt={`Image ${n}`}
              className="hero-img"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
    </section>
  );
}