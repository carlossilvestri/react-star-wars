import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/home"} className="navbar-brand title-1" >
          <img
            src="https://es.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11.png"
            alt="Star Wars Img"
            height="24"
            className="d-inline-block align-top mx-3"
          />
          Home
        </Link>
      </div>
    </nav>
  );
};
