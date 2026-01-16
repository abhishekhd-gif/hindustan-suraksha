import { SITE } from "../data/content";
import Button from "../ui/Button";

export default function Navbar({ onAuthOpen }) {
  return (
    <header className="nav">
      <div className="container navRow">
        <a
          href="#home"
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <img
            src={SITE.logo}
            alt="logo"
            style={{
              width: 80,
              height: 70,
              borderRadius: 10,
              // border: "1px solid var(--border)",
            }}
          />
          <strong>{SITE.brandName}</strong>
        </a>

        <nav className="navLinks">
          {SITE.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{ fontWeight: 700, color: "var(--muted)" }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" onClick={onAuthOpen}>
          Login/Signup
        </Button>
      </div>
    </header>
  );
}
