// import "./AboutSection.css";
import { ABOUT } from "../data/content"; // adjust path if needed

export default function AboutSection() {
  return (
    <section className="aboutWrap" id="about">
      <div className="aboutInner">
        {/* LEFT */}
        <div className="aboutLeft">
          <h2 className="aboutTitle">{ABOUT.title}</h2>
          <div className="aboutUnderline" />

          <p className="aboutPara">{ABOUT.description}</p>

          <ul className="aboutList">
            {ABOUT.points.map((p, idx) => (
              <li key={idx} className="aboutListItem">
                <span className="aboutDot" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="aboutCtas">
            <button className="btnPrimary">{ABOUT.ctaPrimary}</button>
            <button className="btnGhost">{ABOUT.ctaSecondary}</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="aboutRight">
          <img className="aboutImg" src={ABOUT.image} alt="About" />
        </div>
      </div>
    </section>
  );
}
