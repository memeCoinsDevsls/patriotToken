import  { useState } from "react";
import { CountDown } from "../countdown/CountDown";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-patriot">
      {/* Sección mobile */}
      <div className="nav-mobile">
        <a href="#meet-us" className="brand">Patriot Token</a>
        <CountDown></CountDown>
        <button onClick={toggleMenu}>☰</button>
      </div>

      {/* Enlaces principales */}
      <div className={`menu-links ${isOpen ? "open" : ""}`}>
        <a  href="https://x.com/PatriotT39252" target="_blank" rel="noopener noreferrer">
          <img className="mx-2" src="/x.svg" alt="" /> Follow Us
        </a>
        <a href="https://t.me/+6tDIuNoh-t0wZDRh" target="_blank" rel="noopener noreferrer">
          <img className="mx-2" src="/telegram.svg" alt="" /> Join Us
        </a>
        <a onClick={toggleMenu} className="buy-patriot" href="#about-us">Launch January 20th</a>
      </div>

      {/* Enlaces desktop (sin cambios en el diseño original) */}
      <div className="nav-desktop">
       <section className="w-50 h-100 d-flex justify-content-between align-items-center">
        <a href="#meet-us">Meet PatriotToken</a>

        <a href="https://x.com/PatriotT39252" target="_blank">
          <img className="mx-2" src="/x.svg" alt="" /> Follow Us
        </a>

        <a href="https://t.me/+6tDIuNoh-t0wZDRh" target="_blank">
          <img className="mx-2" src="/telegram.svg" alt="" /> Join Us
        </a>
      </section>
      <section className="w-50 h-100 d-flex justify-content-end align-items-center">
        <a className="buy-patriot" href="#about-us">
        Launch January 20th
        </a>
        <CountDown></CountDown>
      </section> 
      </div>
    </nav>
  );
};
