// import "./FeatureTiles.css";
import { FEATURE_TILES } from "../data/content";

export default function FeatureTiles() {
  return (
    <section className="featureTilesSection">
      <div className="featureTilesContainer">
        {FEATURE_TILES.map((tile, idx) => (
          <div
            key={`${tile.title}-${idx}`}
            className={`featureTile ${tile.highlight ? "active" : ""}`}
          >
            <div className="featureTileIcon">
              {/* ICON PLACE:
                 Put icons as images in src/assets/images/
                 and import them in content.js (tile.icon)
              */}
              <img src={tile.icon} alt="" />
            </div>

            <h3 className="featureTileTitle">{tile.title}</h3>
            <p className="featureTileDesc">{tile.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
