// import "./JourneyAndSpotlight.css";
import { JOURNEY_STEPS, SPOTLIGHT } from "../data/content"; // adjust path if needed

export default function JourneyAndSpotlight() {
  return (
    <section className="jsWrap">
      <div className="jsInner">
        {/* LEFT COLUMN */}
        <div className="jsLeft">
          <h2 className="jsTitle">How Your Journey Unlocks Rewards</h2>
          <div className="jsUnderline" />

          <div className="jsSteps">
            {JOURNEY_STEPS.map((s, i) => (
              <div key={i} className="jsStepRow">
                <div className="jsStepImgBox">
                  <img className="jsStepImg" src={s.image} alt={s.title} />
                </div>

                <div className="jsStepText">
                  <h3 className="jsStepTitle">{s.title}</h3>

                  <div className="jsStepMeta">
                    <a href={s.meta1Href || "#"}>{s.meta1}</a>
                    <span className="jsMetaDot">•</span>
                    <a href={s.meta2Href || "#"}>{s.meta2}</a>
                  </div>

                  <p className="jsStepDesc">{s.description}</p>

                  <a className="jsStepCta" href={s.ctaHref || "#"}>
                    {s.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="jsRight">
          <h2 className="jsTitle">Reality Show Spotlight</h2>
          <div className="jsUnderline" />

          <div className="spotCard">
            <div className="spotTop">
              <div className="spotImgBox">
                <img
                  className="spotImg"
                  src={SPOTLIGHT.image}
                  alt="Spotlight"
                />
              </div>

              <div className="spotText">
                <h3 className="spotTitle">{SPOTLIGHT.title}</h3>

                <div className="spotMeta">
                  <a href={SPOTLIGHT.meta1Href || "#"}>{SPOTLIGHT.meta1}</a>
                  <span className="jsMetaDot">•</span>
                  <a href={SPOTLIGHT.meta2Href || "#"}>{SPOTLIGHT.meta2}</a>
                </div>

                <p className="spotDesc">{SPOTLIGHT.description}</p>

                <button className="spotBtn">{SPOTLIGHT.buttonText}</button>
              </div>
            </div>

            <div className="spotProgressWrap">
              <div className="spotBar">
                <div
                  className="spotFill"
                  style={{ width: `${SPOTLIGHT.progressPct}%` }}
                />
                <div
                  className="spotBadge"
                  style={{ left: `calc(${SPOTLIGHT.progressPct}% - 18px)` }}
                >
                  {SPOTLIGHT.progressPct}%
                </div>
              </div>

              <div className="spotFoot">
                <span>{SPOTLIGHT.leftFoot}</span>
                <span>{SPOTLIGHT.rightFoot}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
