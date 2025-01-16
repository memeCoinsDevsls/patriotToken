import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid h-75">
        <div className="row h-100">
        <div className="col-6 col-md-6 col-lg-6 col-xl-6 p-4 d-flex justify-content-between align-items-end flex-column">
          <a href="#meet-us">Meet PatriotToken</a>

          <a href="https://x.com/PatriotT39252" target="_blank">
            <img className="mx-2" src="/x.svg" alt="" />
          </a>

          <a href="https://t.me/patriotokenportal" target="_blank">
            <img className="mx-2" src="/telegram.svg" alt="" />
          </a>
        </div>
        <div className="col-6 col-md-6 col-lg-6 col-xl-6 p-4">
            <img src="/patriotTokenCircle.png" alt="" />
        </div>
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-12 col-xl-12 h-25 d-flex justify-content-center align-items-center pt-2">
        <p className="mb-0 text-center">
          &copy; 2025 PatriotToken. All rights reserved. | Proudly created by
          crypto community enthusiasts.
        </p>
      </div>
    </footer>
  );
};
