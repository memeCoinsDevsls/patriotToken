import { useState, useEffect } from "react";
import "./follow.css";

export const FollowUs = () => {
  const words = ["Follow", "Join", "Trust", "Build with", "Grow with"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Cambia la palabra cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [words.length]);

  return (
    <section className="follow-info">
      <div className="div-follow-info">
        <div className="title-follow">
          <span className="dynamic-word">{words[currentWordIndex]}</span>
          <span className="us">Us</span>
        </div>
        <a className="link-follow" href="" target="_blank">
          <span>Telegram community</span>
          <img className="h-75" src="/open_in_new.png" alt="icon-new-tab" />
        </a>
        <a className="link-follow" href="" target="_blank">
          <span>Stay tuned on X</span>
          <img className="h-75" src="/open_in_new.png" alt="icon-new-tab" />
        </a>
      </div>
    </section>
  );
};
