// import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaDribbble,
  FaBehance,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="ftWrap" id="footer">
      <div className="ftOverlay">
        <div className="ftInner">
          {/* Left */}
          <div className="ftCol">
            {/* <img
              className="ftLogo"
              src="/logo.png"
              alt="Hindustan Suraksha Kavach"
            /> */}
            <p className="ftText">
              Hindustan Suraksha Kavach turns every lifes into a safety net for
              both donors and recipients.
            </p>

            <div className="ftSocial">
              <a href="#" aria-label="Pinterest">
                <FaPinterestP />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Dribbble">
                <FaDribbble />
              </a>
              <a href="#" aria-label="Behance">
                <FaBehance />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Middle */}
          <div className="ftCol">
            <h4 className="ftTitle">Useful Links</h4>
            <ul className="ftLinks">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#faqs">Faq's</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="#refund">Refund Policy</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="ftCol">
            <h4 className="ftTitle">Contact</h4>

            <div className="ftContact">
              <div className="ftRow">
                <span className="ftIcon">
                  <FiPhoneCall />
                </span>
                <span>+91 8073631123</span>
              </div>

              <div className="ftRow">
                <span className="ftIcon">
                  <FiMail />
                </span>
                <span>contact@hindustansurakshakavach.com</span>
              </div>

              <div className="ftRow">
                <span className="ftIcon">
                  <FiMapPin />
                </span>
                <span>Bengaluru Urban- 560002</span>
              </div>
            </div>

            <form className="ftForm" onSubmit={(e) => e.preventDefault()}>
              <input className="ftInput" placeholder="Your email" />
              <button className="ftBtn" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>

        <div className="ftBottom">
          <span>
            Copyright ©2026 All rights reserved |{" "}
            <a href="#home">Hindustan Suraksha Kavach</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
