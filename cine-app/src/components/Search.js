import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <div className="input-search">
          <input type="text" placeholder="nom de film" />
          <input type="submit" value="Rechercher" />
        </div>
        <div className="rank">
          <button>
            top <i class="fa-solid fa-arrow-up-long"></i>
          </button>
          <button>
            flop <i class="fa-solid fa-arrow-down-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
