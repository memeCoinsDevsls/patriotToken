import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav-patriot">
      <section className="w-50 h-100 d-flex justify-content-between align-items-center">
     
          <a href="#about-us">Meet PatriotToken</a>

         <a href=""> <img className="mx-2" src="/x.svg" alt="" /> Follow Us</a>

          <a href=""><img className="mx-2" src="/telegram.svg" alt="" /> Join Us</a>
      </section>
      <section className="w-50 h-100 d-flex justify-content-end align-items-center">
        <a className="buy-patriot" href="">Buy PatriotToken</a>
      </section>
    </nav>
  );
};
