import { useState } from "react";
import { FAQS } from "../data/content";
import Card from "../ui/Card";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="h2">FAQ's</h2>

        <div className="grid" style={{ marginTop: 16 }}>
          {FAQS.map((f, idx) => (
            <Card key={f.q} style={{ padding: 14 }}>
              <button
                className="btn"
                onClick={() => setOpen(open === idx ? -1 : idx)}
                style={{ width: "100%", textAlign: "left" }}
              >
                {f.q}
              </button>
              {open === idx && (
                <p className="p" style={{ marginTop: 10 }}>
                  {f.a}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
