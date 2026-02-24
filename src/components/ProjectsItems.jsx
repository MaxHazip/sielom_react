import React from "react";

import { ProjectsCarousel } from "./carousels/ProjectsCarousel";

class ProjectsItems extends React.Component {

    render() {

        return(
            <ProjectsCarousel offset={this.props.offset}>
                <div className="student-projects_scrol_list_item">
                <div
                    className="student-projects_scrol_list_item_image-block"
                    id="first_project_image"
                ></div>
                <p className="student-projects_scrol_list_item_text">
                    24–25 сентября в СурГУ состоялся конкурс по кибербезопасности в
                    финансах
                </p>
                <a href="#" className="student-projects_scrol_list_item_button">
                    Перейти
                </a>
                </div>
                <div className="student-projects_scrol_list_item">
                <div
                    className="student-projects_scrol_list_item_image-block"
                    id="second_project_image"
                ></div>
                <p className="student-projects_scrol_list_item_text">
                    Наш студент - бронзовый призёр финала чемпионата «Профессионалы»
                </p>
                <a href="#" className="student-projects_scrol_list_item_button">
                    Перейти
                </a>
                </div>
                <div className="student-projects_scrol_list_item">
                <div
                    className="student-projects_scrol_list_item_image-block"
                    id="third_project_image"
                ></div>
                <p className="student-projects_scrol_list_item_text">
                    Цифровой челлендж взят!
                    <br />
                    Наши команды громко заявили о себе на хакатоне
                </p>
                <a href="#" className="student-projects_scrol_list_item_button">
                    Перейти
                </a>
                </div>
                <div className="student-projects_scrol_list_item">
                <div
                    className="student-projects_scrol_list_item_image-block"
                    id="fourth_project_image"
                ></div>
                <p className="student-projects_scrol_list_item_text">
                    С 25 по 27 июня прошёл один из крупнейших событий года в сфере
                    цифровых технологий — XVI Международный IT-Форум
                </p>
                <a href="#" className="student-projects_scrol_list_item_button">
                    Перейти
                </a>
                </div>
            </ProjectsCarousel>
        )

    }


}

export default ProjectsItems