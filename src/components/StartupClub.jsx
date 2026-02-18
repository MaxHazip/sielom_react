import React from "react"
import '../css/home_page_style/startupClub.css'

class StartupClub extends React.Component {

    render() {

        return(
            <section className="startup_club">
                <div className="startup_container">
                    <h2 className="startup_title">Стартап клуб</h2>
                    <p className="startup_text">Здесь мы будем делиться всем , что происходит в<br /> нашем стартап-клубе:</p>
                    <ul className="startup_list">
                        <li className="startup_list_item">Выступления — вдохновляющие лекции от успешных<br /> программистов.</li>
                        <li className="startup_list_item">Проекты — как мы создаем продукты, которые<br /> решают реальные проблемы.</li>
                        <li className="startup_list_item">Мероприятия — хакатоны, мастер-классы, встречи и<br /> коворкинги.</li>
                        <li className="startup_list_item">Истории успеха — о тех, кто уже запустил<br /> свой стартап или изменил правила игры.</li>
                        <li className="startup_list_item">Важные новости — дедлайны, конкурсы и<br /> возможности для участия.</li>
                    </ul>
                </div>
            </section>
        )

    }

}

export default StartupClub