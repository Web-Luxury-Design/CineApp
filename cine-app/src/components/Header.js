import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="button">
        <NavLink to="/">
          <button>Accueil</button>
        </NavLink>
        <NavLink to="/coup-de-coeur">
          <button>coup de coeur</button>
        </NavLink>
      </div>
      <div className="title">
        <h1>React Movies</h1>
      </div>
    </div>
  );
};

export default Header;
