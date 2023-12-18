import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="link">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "onPage-link" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/coup-de-coeur"
          className={(nav) => (nav.isActive ? "onPage-link" : "")}
        >
          <li>coup de coeur</li>
        </NavLink>
      </ul>
      <div className="title">
        <h1>React Movies</h1>
      </div>
    </div>
  );
};

export default Header;
