import React from "react";
import '../css/home_page_style/advantages.css'


class Advantages extends React.Component {

    render() {

        return(
            <section className="advantages">
                <div className="container">
                    <h2 className="advantages_title">Преимущества обучения у нас</h2>
                    <ul className="advantages_list">
                        <li className="advantages_list_item">
                            <div className="advantages_list_item_number">
                                <p className="advantages_list_item_number_text">1</p>
                            </div>
                            <div className="advantages_list_item_content">
                                <h3 className="advantages_list_item_title">Современный подход и технологии</h3>
                                <p className="advantages_list_item_text">В отличии от многих образовательных учреждений мы используем современный и эффективный подход к обучению, обучаем технологиям которые востребованы на рынке и просты в использовании</p>
                            </div>
                        </li>
                        <li className="advantages_list_item">
                            <div className="advantages_list_item_number" id="second-number">
                                <p className="advantages_list_item_number_text">2</p>
                            </div>
                            <div className="advantages_list_item_content">
                                <h3 className="advantages_list_item_title">Много практики, алгоритмическое мышление, портфолио</h3>
                                <p className="advantages_list_item_text">По выходу из института у вас будет не только знание языков программирования, а также понимание и алгоритмическое мышление. А так же проекты приближенные к коммерческим решениям</p>
                            </div>
                        </li>
                        <li className="advantages_list_item">
                            <div className="advantages_list_item_number" id="third-number">
                                <p className="advantages_list_item_number_text">3</p>
                            </div>
                            <div className="advantages_list_item_content">
                                <h3 className="advantages_list_item_title">Квалифицированные педагоги-практики</h3>
                                <p className="advantages_list_item_text">В стенах нашего института работают специалисты , которые знают свое дело не только в теории, но и в практике и готовым передать вам опыт</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )

    }

}

export default Advantages