import {useState, useEffect, Children, cloneElement} from 'react'

import '../../css/home_page_style/projectsCarousel.css'

const PAGE_WIDTH = 474

export const ProjectsCarousel = ({children, offset}) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [children])

    return(
        <div className="projects-container">
            <div className="projects_window">
                <div className="all-projects-container"
                style={{
                    transform: `translateX(${offset}px)`, 
                }}
                >
                    {projects}
                </div>
            </div>
        </div>
    )

}