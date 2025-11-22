import React from 'react'
import './Hero.css'

export default function Hero() {
  const total = 33
  const items = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <section className="hero">
      <div className="hero-grid">
        {items.map((n) => (
          <div className="hero-item" key={n}>
            <img
              src={`/image${n}.webp`}
              alt={`image ${n}`}
              className="hero-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
