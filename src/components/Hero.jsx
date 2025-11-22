import React from "react";
import "./Hero.css";

export default function Hero() {
  const total = 33;
  const items = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <section className="hero">
      <div className="hero-grid">
        {items.map((n, i) => (
          <div
            className="hero-item"
            key={n}
            style={{ animationDelay: `${i * 38}ms` }}
          >
            <img
              src={`/image${n}.webp`}
              alt={`image ${n}`}
              className="hero-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
