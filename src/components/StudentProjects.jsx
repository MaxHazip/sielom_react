import React from "react";

import "../css/home_page_style/student_projects.css";

import ProjectsItems from "./ProjectsItems";

const PAGE_WIDTH = 474;

const MIN_OFFSET = 0;
const MARGIN = 47
const MAX_OFFSET = -((PAGE_WIDTH + MARGIN) * 5)
const PAGE_WIDTH_MARGINS = PAGE_WIDTH + MARGIN

class StudentProjects extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      offset: -(PAGE_WIDTH + MARGIN),
    }

    this.leftButton = this.leftButton.bind(this)
    this.rightButton = this.rightButton.bind(this)

  }

  render() {
    return (
      <section className="student-projects">
        <div className="container" id="student-projects_container">
          <h1 className="student-projects_title">Проекты студентов</h1>
          <p className="student-projects_text">
            Наши студенты не просто заучивают синтаксис, а быстро учатся
            работать с новыми технологиями (от нейросетей и блокчейна до
            квантовых вычислений), часто осваивая их параллельно с основной
            учебой. Многие уже на 1-2 курсе ищут стажировки, фриланс или
            начинают собственные пет-проекты. Они понимают, что портфолио важнее
            оценок. А также Легко объединяются в команды для хакатонов, курсовых
            и стартапов, распределяя роли (бэкенд, фронтенд, дизайн,
            менеджмент).
          </p>
          <div className="student-projects_arrows">
            <button
              className="student-projects_arrow"
              id="arrow_left"
              onClick={() => this.leftButton(this.state.offset)}
            ></button>
            <button
              className="student-projects_arrow"
              id="arrow_right"
              onClick={() => this.rightButton(this.state.offset)}
            ></button>
          </div>
        </div>
        <ProjectsItems offset={this.state.offset} />
      </section>
    );
  }

  leftButton = (currentOffset) => {
    
    let newOffset = currentOffset + (PAGE_WIDTH + 47);

    if (newOffset >= 0) {

      newOffset = -(PAGE_WIDTH_MARGINS * 4)

    }

    console.log(newOffset)

    this.setState({offset: Math.min(newOffset, MIN_OFFSET)});
    
  };

  rightButton = (currentOffset) => {
    
    let newOffset = currentOffset - (PAGE_WIDTH + 47);

    if (newOffset === MAX_OFFSET + PAGE_WIDTH_MARGINS) {

      newOffset = -(PAGE_WIDTH_MARGINS)

    }

    this.setState({offset: Math.max(newOffset, MAX_OFFSET)});
    
  };

}

export default StudentProjects;
