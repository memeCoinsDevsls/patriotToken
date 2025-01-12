import "./meet.css";
export const MeetUs = () => {
  return (
    <section id="meet-us" className="meetUs">
      <div className="w-50 h-100 d-flex align-items-end d-sm-none">
        <img
          className="w-auto h-75"
          src="/patriotToken1.png"
          alt="img-patriot-donaldo"
        />
      </div>
      <div className="info-meet">
        <h1 className="titulo-meet">Meet Patriot Token</h1>
        <section className="bubble-container">
          <div className="bubble">
            <p>
              <strong>PatriotToken</strong> is the{" "}
              <strong>Solana-based memecoin</strong>. Inspired by Donald Trump's
              leadership and his return to power, and how his administration
              will <strong>revolutionize the crypto world</strong>.
              <br />
              <br />
              PatriotToken is not just a coin, <strong>it's a movement.</strong>
              Let's aim straight for the moon <strong>together!</strong> 🚀
            </p>
          </div>
          <div className="bubble-tail"></div>
        </section>
      </div>
    </section>
  );
};
 