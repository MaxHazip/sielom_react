import React from "react"
import '../css/home_page_style/teachers.css'

class Teachers extends React.Component {

    render() {

        return(
            <section className="teachers">
                <h2 className="teachers_title">Преподаватели</h2>
                <div className="teachers_container">
                    <div className="gradient"></div>
                    <ul className="teachers_list" id="teachers_tracker">
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="AUB">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Бойко Андрей<br />Юрьевич</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые дисциплины:</h3>
                                <ul className="teacher_courses_list" id="AUB_list">
                                    <div className="AUB_list_left AUB_list_grid">
                                        <li className="teacher_courses_list_item">Операционные системы и среды</li>
                                        <li className="teacher_courses_list_item">Разработка кода информационных систем </li>
                                        <li className="teacher_courses_list_item">Разработка мобильных приложений</li>
                                    </div>
                                    <div className="AUB_list_right AUB_list_grid">
                                        <li className="teacher_courses_list_item">Разработка программных модулей</li>
                                        <li className="teacher_courses_list_item">Системное программирование</li>
                                        <li className="teacher_courses_list_item">Технология разработки и защиты баз данных</li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="AEG">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Гагилев Алексей<br />Евгеньевич</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые учебные предметы, курсы, дисциплины (модули):</h3>
                                <ul className="teacher_courses_list">
                                    <li className="teacher_courses_list_item">Разработка кода информационных систем</li>
                                    <li className="teacher_courses_list_item">Проектирование и дизайн информационных систем</li>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="VVP">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Панасеня Владимир Васильевич</p>
                                    <p className="teachers_list_item_card_post">Заместитель директора по IT</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые учебные предметы, курсы, дисциплины (модули):</h3>
                                <ul className="teacher_courses_list">
                                    <li className="teacher_courses_list_item">Введение в специальность</li>
                                    <li className="teacher_courses_list_item">Основы проектирования баз данных</li>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="ADK">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Колесникова Алена<br />Дмитриевна</p>
                                    <p className="teachers_list_item_card_post">Заведующий учебной частью по специальности<br />«Информационные системы и программирование» (СП № 7)</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover"></div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="DES">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Шинкевич Диана<br />Евгеньевна</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые дисциплины:</h3>
                                <ul className="teacher_courses_list" id="DES_list">
                                    <div className="DES_left DES_list_grid">
                                        <li className="teacher_courses_list_item">Проектирование и разработка интерфейсов пользователя</li>
                                        <li className="teacher_courses_list_item">Графический дизайн и мультимедиа</li>
                                    </div>
                                    <div className="DES_right DES_list_grid">
                                        <li className="teacher_courses_list_item">Разработка веб-приложений</li>
                                        <li className="teacher_courses_list_item">Введение в специальность</li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="AVB">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Бессмертный Андрей<br />Витальевич</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые дисциплины:</h3>
                                <ul className="teacher_courses_list" id="AVB_list">
                                    <div className="AVB_list_left">
                                        <li className="teacher_courses_list_item">Архитектура аппаратных средств</li>
                                        <li className="teacher_courses_list_item">Информационные технологии</li>
                                        <li className="teacher_courses_list_item">Компьютерные сети</li>
                                        <li className="teacher_courses_list_item">Математическое моделирование</li>
                                    </div>
                                    <div className="AVB_list_right">
                                        <li className="teacher_courses_list_item">Основы алгоритмизации и программирования</li>
                                        <li className="teacher_courses_list_item">Разработка мобильных приложений</li>
                                        <li className="teacher_courses_list_item">Стандартизация, сертификация и техническое документоведение</li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="MVK">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Колмыков Максим<br />Владимирович</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые дисциплины:</h3>
                                <ul className="teacher_courses_list" id="MVK_list">
                                    <li className="teacher_courses_list_item">Оптимизация веб-приложений</li>
                                    <li className="teacher_courses_list_item">Технология разработки программного обеспечения</li>
                                    <li className="teacher_courses_list_item">Проектирование и разработка информационных сетей</li>
                                    <li className="teacher_courses_list_item">Технология разработки и защиты без данных</li>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="NAM">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Мацюк Никита<br />Александрович</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые учебные предметы, курсы, дисциплины (модули):</h3>
                                <ul className="teacher_courses_list" id="NAM_list">
                                    <li className="teacher_courses_list_item">Оптимизация веб-приложений</li>
                                    <li className="teacher_courses_list_item">Операционные системы и среды</li>
                                    <li className="teacher_courses_list_item">Проектирование и разработка веб-приложений</li>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="NVK">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Каюк Николай<br />Васильевич</p>
                                    <p className="teachers_list_item_card_post">Заведующий кафедрой «Информационные системы и программирование», Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые дисциплины:</h3>
                                <ul className="teacher_courses_list" id="NVK_list">
                                    <li className="teacher_courses_list_item">Организация, принципы построения и функционирования компьютерных сетей </li>
                                    <li className="teacher_courses_list_item">Эксплуатация объектов сетевой инфраструктуры</li>
                                    <li className="teacher_courses_list_item">Организация администрирования компьютерных систем</li>
                                </ul>
                            </div>
                        </li>
                        <li className="teachers_list_item">
                            <div className="teachers_list_item_card" id="MMZ">
                                <div className="teacher_wrap"></div>
                                <div className="teachers_list_item_card_content">
                                    <p className="teachers_list_item_card_name">Зыков Михаил<br />Михайлович</p>
                                    <p className="teachers_list_item_card_post">Преподаватель</p>
                                </div>
                            </div>
                            <div className="teacher_list_item_hover">
                                <div className="teacher_list_item_wraper"></div>
                                <h3 className="teacher_courses_title">Преподаваемые учебные предметы, курсы, дисциплины (модули):</h3>
                                <ul className="teacher_courses_list" id="MMZ_list">
                                    <li className="teacher_courses_list_item">Внедрение и поддержка компьютерных систем</li>
                                    <li className="teacher_courses_list_item">Обеспечение качества функционирования компьютерных систем</li>
                                    <li className="teacher_courses_list_item">Разработка кода информационных систем</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="teacher_tracker_buttons">
                    <button className="student-projects_arrow" id="teacher-prev"></button>
                    <button className="student-projects_arrow" id="teacher-next"></button>
                </div>
            </section>
        )

    }

}

export default Teachers