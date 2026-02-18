import React from "react";
import logo from '../imgs/logo.svg'
import '../css/home_page_style/header.css'

class Header extends React.Component {

  render() {

    return (
        <header>
            <div className="container">
              <div className="main-header">
                  <nav className="main-nav">
                      <ul className="main-nav_list">
                          <li className="main-nav_list_item">
                              <a href="#">О НАС</a>
                          </li>
                          <li className="main-nav_list_item">
                              <a href="#">ПРИЕМУЩЕСТВА</a>
                          </li>
                          <li className="main-nav_list_item">
                              <a href="#">ПРОЕКТЫ</a>
                          </li>
                          <li className="main-nav_list_item">
                              <a href="#">СТАРТАП</a>
                          </li>
                          <li className="main-nav_list_item">
                              <a href="#">НОВОСТИ</a>
                          </li>
                      </ul>
                  </nav>
                  <div className="header_content">
                      <div className="logo_block">
                          <img src={logo} alt="Логотип института" className="logo_image" />
                      </div>
                      <h1 className="header_title">Информационные<br /> системы и<br /> программирование</h1>
                      <p className="header_text">Программист — это инженер, который превращает идеи в машинный код. Простыми словами,<br /> программист создаёт инструкции для компьютера. Компьютер выполняет эти инструкции, и<br /> получается рабочий продукт: веб-сайт, мобильное приложение, компьютерная игра.<br /> Профессия будущего, способная изменить мир!</p>
                      <div className="header_buttons">
                          <a className="enroll_button" href="#">
                              <div className="enroll_button_container">
                                  <p className="enroll_text" >Поступить</p>
                                  <div className="hovered"></div>
                                  <p className="enroll_text_hovered">Поступить</p>
                              </div>
                          </a>
                          <a className="contact_button" href="#">Связаться</a>
                      </div>
                  </div>
              </div>
          </div> 
        </header>
    )

  }

}

export default Header;
