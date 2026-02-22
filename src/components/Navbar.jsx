import { Link } from "react-router-dom";
import xplorrlogo1 from "../assets/img/xplorrlogo 1.jpg";

export const Navbar = () => {
  return (
    <div className="topNavbar row d-flex align-items-center">
      <div className="navHomeButton col-1">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img className="xplorrLogo" src={xplorrlogo1} />
        </button>
      </div>
      <div className="col-3 ps-5" id="navbarNav">
        <h2 className="navBarTitle">Xplorr</h2>
      </div>
      <div className="col-6" id="navbarNav"></div>
      <div className="col-2 ps-5" id="navbarNav">
        <button
          className="navbar-toggler justify-content-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <h2 className="navBarTitle">+</h2>
          {/* I cant get the dropdown menu to center in it's div - will need to replace the + with an actual icon and then center that icon. */}
        </button>
      </div>
    </div>
  );
};
