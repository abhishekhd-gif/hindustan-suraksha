// import "./BenefitsSnapshot.css";
import { BENEFITS_SNAPSHOT } from "../data/content"; // adjust path if needed

export default function BenefitsSnapshot() {
  return (
    <section className="bsWrap">
      <div className="bsInner">
        <h2 className="bsTitle">Benefits Snapshot</h2>
        <p className="bsSub">
          A quick view of what opens up the moment you donate clothes through
          Hindustan Suraksha Kavach.
        </p>

        <div className="bsGrid">
          {BENEFITS_SNAPSHOT.map((b, i) => (
            <article key={i} className="bsCard">
              <div className="bsIconWrap">
                <img className="bsIcon" src={b.icon} alt="" />
              </div>

              <h3 className="bsCardTitle">{b.title}</h3>
              <p className="bsCardDesc">{b.description}</p>
            </article>
          ))}
        </div>

        <div className="bsCtaRow">
          <button className="bsBtn">View Complete List</button>
        </div>
      </div>
    </section>
  );
}
