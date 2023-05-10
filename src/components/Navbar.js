import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://img.pokemondb.net/design/header-sm.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
      
    </nav>
  );
};

export default Navbar;
