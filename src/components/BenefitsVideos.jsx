// import "./BenefitsVideos.css";
import { BENEFITS_VIDEOS } from "../data/content";

export default function BenefitsVideos() {
  return (
    <section className="bvWrap" id="benefits-videos">
      <div className="bvInner">
        <h2 className="bvTitle">Benefits Videos</h2>
        <p className="bvSub">
          Watch our videos to learn more about the benefits
        </p>

        <div className="bvRow">
          {BENEFITS_VIDEOS.map((v, i) => (
            <div key={i} className="bvCard">
              {/* If it's iframe embed */}
              {v.type === "iframe" && (
                <iframe
                  className="bvFrame"
                  src={v.src}
                  title={v.title || `benefit-video-${i}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}

              {/* If it's a normal link (fallback) */}
              {v.type === "link" && (
                <a
                  className="bvLink"
                  href={v.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Video
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
