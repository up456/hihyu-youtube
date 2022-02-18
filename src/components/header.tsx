import React, { useRef } from 'react';
import '../css/header.css';

const Search = () => {
  const hiddenSearchIconRef = useRef(null);
  const searchCancelRef = useRef(null);

  const handleHiddenSerachIconClick = () => {
    if (hiddenSearchIconRef.current) {
      const searchForm = document.querySelector('.search-form');
      const searchCancel = document.querySelector('#search-cancel');
      const rightMenu = document.querySelector('.right-menu');
      [searchForm, searchCancel, rightMenu].forEach((el) => {
        el?.classList.add('click');
      });
    }
  };

  const handleSearchCancelClick = () => {
    if (searchCancelRef.current) {
      if (searchCancelRef.current) {
        console.log(searchCancelRef.current);
        const searchForm = document.querySelector('.search-form');
        const searchCancel = document.querySelector('#search-cancel');
        const rightMenu = document.querySelector('.right-menu');
        [searchForm, searchCancel, rightMenu].forEach((el) => {
          el?.classList.remove('click');
        });
      }
    }
  };

  return (
    <header>
      <ul className="left-menu">
        <li>
          <i className="fa-solid fa-bars"></i>
        </li>
        <li className="logo">
          <i className="fa-brands fa-youtube"></i>
          <span className="logo-title">Premium</span>
          <span className="logo-country">KR</span>
        </li>
      </ul>

      <form action="" className="search-form">
        <div
          id="search-cancel"
          ref={searchCancelRef}
          onClick={handleSearchCancelClick}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <input type="search" className="search-input" placeholder="검색" />
        <button className="btn-find-text">
          <i className="fa-solid fa-magnifying-glass "></i>
        </button>
        <button className="btn-find-voice">
          <i className="fa-solid fa-microphone"></i>
        </button>
      </form>

      <ul className="right-menu">
        <li
          id="search-hidden-icon"
          ref={hiddenSearchIconRef}
          onClick={handleHiddenSerachIconClick}
        >
          <i className="fa-solid fa-magnifying-glass "></i>
          <i className="fa-solid fa-microphone"></i>
        </li>
        <li className="btn-alarm">
          <i className="fa-regular fa-bell"></i>
        </li>
        <li id="profile-icon"></li>
      </ul>
    </header>
  );
};

export default Search;
