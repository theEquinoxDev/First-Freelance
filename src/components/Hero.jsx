import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const total = 33;
  const items = Array.from({ length: total }, (_, i) => i + 1);

  const [allLoaded, setAllLoaded] = useState(false);
  let loadedCount = 0;

  const handleImgLoad = () => {
    loadedCount++;
    if (loadedCount === total) {
      setAllLoaded(true);
    }
  };

  return (
    <section className="hero">
      <div className="hero-grid">
        {items.map((n, i) => {
          const firstVisit = !sessionStorage.getItem("pm-visited");

          const randomDelay = Math.random() * 500;
          const smoothDelay = 0; // all together

          const delay = firstVisit ? randomDelay : smoothDelay;

          return (
            <div
              key={n}
              className={`hero-item ${allLoaded ? "show" : ""}`}
              style={{ animationDelay: `${delay}ms` }}
            >
              <img
                src={`/image${n}.webp`}
                alt={`image ${n}`}
                className="hero-img"
                loading="lazy"
                decoding="async"
                onLoad={handleImgLoad}
              />
            </div>
          );
        })}
        {sessionStorage.setItem("pm-visited", "true")}
      </div>
    </section>
  );
}
