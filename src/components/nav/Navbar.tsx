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
        <a href="https://t.me/patriotokenportal" target="_blank" rel="noopener noreferrer">
          <img className="mx-2" src="/telegram.svg" alt="" /> Join Us
        </a>
        <a onClick={toggleMenu} className="buy-patriot mb-2" href="https://dexscreener.com/solana/yzXVWWVoKzSMk9M6U117kPud6A7GNpKZY9Lh8Zgpump" target="_blank">Buy PatriotToken</a>
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
      <section className="w-50 h-100 d-flex justify-content-end align-items-center"  >
        <a className="buy-patriot" target="_blank" href="https://dexscreener.com/solana/yzXVWWVoKzSMk9M6U117kPud6A7GNpKZY9Lh8Zgpump">
        Buy PatriotToken
        </a>
      </section> 
      </div>
    </nav>
  );
};
