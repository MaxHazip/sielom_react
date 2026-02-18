import React from "react"
import '../css/home_page_style/news.css'

class News extends React.Component {

    render() {

        return(
            <section className="news">
                <div className="container news-container">
                    <div className="news_title_flex">
                        <h2 className="news_title">Новости</h2>
                        <a href="#" className="news_link">Перейти</a>
                    </div>
                    <p className="news_title_text">Наши студенты не просто заучивают синтаксис, а быстро учатся работать с новыми технологиями (от нейросетей и блокчейна до квантовых вычислений), часто осваивая их параллельно с основной учебой. Многие уже на 1-2 курсе ищут стажировки, фриланс или начинают собственные пет-проекты. Они понимают, что портфолио важнее оценок. А также Легко объединяются в команды для хакатонов, курсовых и стартапов, распределяя роли (бэкенд, фронтенд, дизайн, менеджмент).</p>
                    <div className="news_arrows">
                        <button className="news_arrow" id="arrow_left"></button>
                        <button className="news_arrow" id="arrow_right"></button>
                    </div>
                    <ul className="news_list">
                        <li className="news_item">
                            <div className="news_item_image" id="first_news_image"></div>
                            <p className="news_item_info">Конкурс по кибербезопасности в финансах</p>
                        </li>
                        <li className="news_item">
                            <div className="news_item_image" id="second_news_image"></div>
                            <p className="news_item_info">Наши студенты — на Международном IT-Форуме в Ханты-Мансийске!</p>
                        </li>
                        <li className="news_item">
                            <div className="news_item_image" id="third_news_image"></div>
                            <p className="news_item_info">Наш студент - бронзовый призёр финала чемпионата «Профессионалы»</p>
                        </li>
                    </ul>
                </div>
            </section>
        )

    }

}

export default News