import React from 'react';
import '../css/header.css';

const Search = () => {
  return (
    <header>
      <ul className="left-menu">
        <li>
          <i className="fa-solid fa-bars"></i>
        </li>
        <li className="logo">
          <i className="fa-brands fa-youtube"></i>
          Premium
          <span className="logo-country">KR</span>
        </li>
      </ul>

      <form action="" className="search-form">
        <input type="search" className="search-input" placeholder="검색" />
        <button className="btn-find-text">
          <i className="fa-solid fa-magnifying-glass "></i>
        </button>
        <button className="btn-find-voice">
          <i className="fa-solid fa-microphone"></i>
        </button>
      </form>

      <ul className="right-menu">
        <li className="btn-alarm">
          <i className="fa-regular fa-bell"></i>
        </li>
        <li id="profile-icon"></li>
      </ul>
    </header>
  );
};

export default Search;
