import { useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("login");

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={tab === "login" ? "Login" : "Register"}
    >
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <Button
          variant={tab === "login" ? "primary" : "outline"}
          onClick={() => setTab("login")}
        >
          Login
        </Button>
        <Button
          variant={tab === "register" ? "primary" : "outline"}
          onClick={() => setTab("register")}
        >
          Register
        </Button>
      </div>

      {tab === "login" ? (
        <div className="grid">
          <div>
            <label className="label">Email address</label>
            <input className="input" placeholder="email@domain.com" />
          </div>
          <div>
            <label className="label">Phone Number</label>
            <input className="input" placeholder="+91…" />
          </div>
          <div>
            <label className="label">Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <Button variant="primary" onClick={() => alert("Hook to API")}>
            Login
          </Button>
        </div>
      ) : (
        <div className="grid">
          <div>
            <label className="label">Full Name</label>
            <input className="input" placeholder="Your name" />
          </div>
          <div>
            <label className="label">Email address</label>
            <input className="input" placeholder="email@domain.com" />
          </div>
          <div>
            <label className="label">Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <div>
            <label className="label">Confirm Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <Button variant="primary" onClick={() => alert("Hook to API")}>
            Create Account
          </Button>
        </div>
      )}
    </Modal>
  );
}
