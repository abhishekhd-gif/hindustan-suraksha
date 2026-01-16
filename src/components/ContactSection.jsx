import { CONTACT } from "../data/content";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <h2 className="h2">Contact</h2>

        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", marginTop: 16 }}
        >
          <Card style={{ padding: 16 }}>
            <strong>Reach us</strong>
            <p className="p" style={{ marginTop: 8 }}>
              Phone: {CONTACT.phone}
            </p>
            <p className="p">Email: {CONTACT.email}</p>
            <p className="p">Address: {CONTACT.address}</p>
          </Card>

          <Card style={{ padding: 16 }}>
            <strong>Schedule Pickup (form)</strong>
            <div style={{ marginTop: 10 }}>
              <label className="label">Full Name</label>
              <input className="input" placeholder="Your name" />
            </div>
            <div style={{ marginTop: 10 }}>
              <label className="label">Phone</label>
              <input className="input" placeholder="10-digit mobile" />
            </div>
            <div style={{ marginTop: 10 }}>
              <label className="label">City</label>
              <input className="input" placeholder="City" />
            </div>
            <div style={{ marginTop: 12 }}>
              <Button
                variant="primary"
                onClick={() => alert("Connect this to API later")}
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
