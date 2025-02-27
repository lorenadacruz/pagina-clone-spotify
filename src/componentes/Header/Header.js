import React, { useState } from "react";
import "./Header.css";
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import search from "../../assets/icons/search.png";
import { FaMoon, FaSun } from "react-icons/fa";  // Importando ícones de lua e sol

const Header = ({ setSearchTerm }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>
      </div>

      <div className="header__search">
        <img src={search} alt="Buscar" />
        <input
          type="text"
          id="search-input"
          placeholder="O que você quer ouvir?"
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado de busca no App.js
        />
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>

      {/* Ícone de alternância de tema */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />} {/* Ícones de sol e lua */}
      </button>
    </nav>
  );
};

export default Header;
