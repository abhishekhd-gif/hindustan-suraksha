// import "./NumbersSection.css";
import { NUMBERS_SECTION } from "../data/content";

// If you already use lucide-react, use these:
import { Users, HandHeart, Bird } from "lucide-react";

const ICONS = {
  users: Users,
  hands: HandHeart,
  dove: Bird,
};

export default function NumbersSection() {
  const { title, desc, items } = NUMBERS_SECTION;

  return (
    <section className="nsWrap" id="numbers">
      <div className="nsInner">
        {/* Left side */}
        <div className="nsLeft">
          <h2 className="nsTitle">{title}</h2>
          <div className="nsUnderline" />
          <p className="nsDesc">{desc}</p>
        </div>

        {/* Right side */}
        <div className="nsRight">
          {items.map((it, idx) => {
            const Icon = ICONS[it.icon] || Users;

            return (
              <div className="nsMetric" key={idx}>
                <div
                  className={
                    it.variant === "circle" ? "nsIconCircle" : "nsIconLine"
                  }
                >
                  <Icon size={34} />
                </div>

                <div className="nsValue">{it.value}</div>
                <div className="nsLabel">{it.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
