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
          <a href="#" className="top-link">Мобильное приложение</a>
          <a href="#" className="top-link">Помощь</a>
          <a href="#" className="top-link">Пункты выдачи</a>
        </div>
      </div>
      <div className="header-bottom">
        <div className="logo">
          <div className="logo-circle"></div>
          <span className="logo-text">MyShop</span>
        </div>
        <button className="catalog-button">
          <span className="material-icons">apps</span>Каталог
        </button>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Искать" />
          <button className="search-button">
            <span className="material-icons">search</span>
          </button>
        </div>
        <div className="user-menu">
          <a href="#"><span className="material-icons">account_circle</span>Личный Кабинет</a>
          <a href="#"><span className="material-icons">receipt_long</span>Заказы</a>
          <a href="#"><span className="material-icons">favorite</span>Избранное</a>
          <a href="#"><span className="material-icons">shopping_cart</span>Корзина</a>
        </div>
      </div>
      <nav className="navbar">
        <a href="#"><span className="material-icons">checkroom</span>Одежда и обувь</a>
        <a href="#"><span className="material-icons">electrical_services</span>Электроника</a>
        <a href="#"><span className="material-icons">home</span>Дом и сад</a>
        <a href="#"><span className="material-icons">child_friendly</span>Детские товары</a>
        <a href="#"><span className="material-icons">local_offer</span>Акции</a>
      </nav>
    </header>
  );
}

export default Header;
