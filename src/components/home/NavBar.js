import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h1>Forum App</h1>
        <div>
          <a className="nav-link" aria-current="page" href="/">
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
