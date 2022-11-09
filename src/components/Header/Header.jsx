import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='search'>
        <form action='#'>
          <div className='search_container'>
            <input
              type='text'
              class='search'
              placeholder='Введите название трека или преподавателя'
              required></input>
            <button type='submit' class='button-search'>
              Поиск
            </button>
          </div>
        </form>
      </div>

      <div class='nav-items'>
        <a href='#' className='login'>
          <span>Вход</span>
          <img src='/img/arrow-right.svg' alt='arrow-right' />
        </a>
        <a href='#' className='faq'>
          <span>FAQ</span>
          <img src='/img/question.svg' alt='arrow-right' />
        </a>
      </div>
    </div>
  );
}
