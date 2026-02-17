import React from "react";
import '../css/null.css'
import '../css/home_page_style/footer.css'
import logo from '../imgs/logo.svg'

class Footer extends React.Component {

  render() {

    return (
        <footer>
            <div className="contacts">
                <a href="tel:+7 (3462) 55-09-18">+7 (3462) 55-09-18 </a>
                <a href="mailto:sielom@yandex.ru">sielom@yandex.ru</a>
            </div>
            <div className="logo_container">
                <img src={logo} alt="Логотип института" />
            </div>
            <p className="copyRyght">&copy Сургутский институт экономики,<br />управления и права. 2025</p>
        </footer>
    )

  }

}

export default Footer;
