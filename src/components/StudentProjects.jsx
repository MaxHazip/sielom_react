import React from "react";
import '../css/home_page_style/student_projects.css'

class StudentProjects extends React.Component {

    render() {

        return(
            <section className="student-projects">
                <div className="container" id="student-projects_container">
                    <h1 className="student-projects_title">Проекты студентов</h1>
                    <p className="student-projects_text">Наши студенты не просто заучивают синтаксис, а быстро учатся работать с новыми технологиями (от нейросетей и блокчейна до квантовых вычислений), часто осваивая их параллельно с основной учебой. Многие уже на 1-2 курсе ищут стажировки, фриланс или начинают собственные пет-проекты. Они понимают, что портфолио важнее оценок. А также Легко объединяются в команды для хакатонов, курсовых и стартапов, распределяя роли (бэкенд, фронтенд, дизайн, менеджмент).</p>
                    <div className="student-projects_arrows">
                        <button className="student-projects_arrow" id="arrow_left"></button>
                        <button className="student-projects_arrow" id="arrow_right"></button>
                    </div>
                </div>
                <div className="student-projects_scrol">
                    <ul className="student-projects_scrol_list" id="slider-track">
                        <li className="student-projects_scrol_list_item">
                            <div className="student-projects_scrol_list_item_image-block" id="first_project_image"></div>
                            <p className="student-projects_scrol_list_item_text">24–25 сентября в СурГУ состоялся конкурс по кибербезопасности в финансах</p>
                            <a href="#" className="student-projects_scrol_list_item_button">Перейти</a>
                        </li>
                        <li className="student-projects_scrol_list_item">
                            <div className="student-projects_scrol_list_item_image-block" id="second_project_image"></div>
                            <p className="student-projects_scrol_list_item_text">Наш студент - бронзовый призёр финала чемпионата «Профессионалы»</p>
                            <a href="#" className="student-projects_scrol_list_item_button">Перейти</a>
                        </li>
                        <li className="student-projects_scrol_list_item">
                            <div className="student-projects_scrol_list_item_image-block" id="third_project_image"></div>
                            <p className="student-projects_scrol_list_item_text">Цифровой челлендж взят!<br />Наши команды громко заявили о себе на хакатоне</p>
                            <a href="#" className="student-projects_scrol_list_item_button">Перейти</a>
                        </li>
                        <li className="student-projects_scrol_list_item">
                            <div className="student-projects_scrol_list_item_image-block" id="fourth_project_image"></div>
                            <p className="student-projects_scrol_list_item_text">С 25 по 27 июня прошёл один из крупнейших событий года в сфере цифровых технологий — XVI Международный IT-Форум</p>
                            <a href="#" className="student-projects_scrol_list_item_button">Перейти</a>
                        </li>
                    </ul>
                </div>
            </section>
        )

    }

}

export default StudentProjects