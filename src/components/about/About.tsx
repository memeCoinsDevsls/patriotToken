import "./about.css";
export const About = () => {
  const buyToken = () => {
    window.open("https://dexscreens.com/solana/yzXVWWVoKzSMk9M6U117kPud6A7GNpKZY9Lh8Zgpump", "_blank");
  }
  return (
    <section id="about-us" className="about-us">
      <div className="p-5 pb-1">
        <img src="/patriotTokenCircle.png" alt="" />

        <h1>Patriot Token: </h1>
        <h1>Leading the Dawn of a New Era</h1>
        <h2 className="info-about">
          The memecoin that unites progress, leadership and community in a
          global movement.
        </h2>
        <h2 onClick={buyToken}  className="join-movement">
          Join the movement and let's aim straight for the moon together! 🚀
        </h2>
      </div>

      <div className="banner-news">
        <div className="news-1">
          <p>BREAKING NEWS</p>
        </div>
        <div className="news-2">
          <p>
            Donald Trump IS THE NEW PRESIDENT AND WILL LEAD US INTO THE BULLRUN{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
