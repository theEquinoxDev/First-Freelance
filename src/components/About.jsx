import "./About.css";
import NewsLetter from "./NewsLetter";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-top">
        <h2 className="about-title">About Peter McKinnon</h2>

        <p className="about-paragraph">
          I want to make images that inspire me. Something big, something
          special, something real. I have built my career on sharing the journey
          of becoming a better photographer, helping others while I learn. From
          the early days of wedding photography to being featured by the Royal
          Canadian Mint; the journey and creative evolution is what I truly
          love. I’ll never stop.
        </p>
      </section>

      <section className="about-images">
        <div className="about-img">
          <img src="/About1.webp" alt="about 1" />
        </div>
        <div className="about-img">
          <img src="/About2.webp" alt="about 2" />
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-left">
          <div className="stat">
            <h3>Awards and Accolades</h3>
            <p>
              Royal Canadian Mint - Minted & Serialized into Canadian Currency &
              Archives.
            </p>
            <p>2019 Shorty Award Winner : Breakout YouTuber of The Year</p>
            <p>2020 Streamy Award Winner : Best in Cinematography</p>
          </div>
        </div>

        <div className="stat-right">
          <div className="stat">
            <h3>YouTube</h3>
            <p>5.96m Subscribers</p>
            <p>Half a billion views and counting (628,326,012)</p>
          </div>

          <div className="stat">
            <h3>Instagram</h3>
            <p>3.2m Followers</p>
          </div>
        </div>
      </section>
      <NewsLetter />
    </main>
  );
}
