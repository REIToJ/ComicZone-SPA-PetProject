import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-left">
          <span>RUB</span>
          <span>Пункт выдачи: ул. Крутая, 322/1</span>
        </div>
        <div className="header-top-right">
          <a href="#">Мобильное приложение</a>
          <a href="#">Подарочные сертификаты</a>
          <a href="#">Помощь</a>
          <a href="#">Пункты выдачи</a>
        </div>
      </div>
      <div className="header-bottom">
        <img src="logo.png" alt="Logo" className="logo" />
        <button className="catalog-button">Каталог</button>
        <input type="text" className="search-bar" placeholder="Искать на Ozon" />
        <button className="search-button">🔍</button>
        <nav className="navbar">
          <a href="#">Одежда и обувь</a>
          <a href="#">Электроника</a>
          <a href="#">Дом и сад</a>
          <a href="#">Детские товары</a>
          <a href="#">Акции</a>
        </nav>
        <div className="user-menu">
          <a href="#">Личный кабинет</a>
          <a href="#">Заказы</a>
          <a href="#">Избранное</a>
          <a href="#">Корзина</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
