import {useState, useEffect, Children, cloneElement} from 'react'

import '../../css/home_page_style/projectsCarousel.css'

const PAGE_WIDTH = 474
const MARGIN = 47
const PAGE_WIDTH_MARGINS = PAGE_WIDTH + MARGIN 

const MIN_OFFSET = 0;
const MAX_OFFSET = -((PAGE_WIDTH + MARGIN) * 5)

export const ProjectsCarousel = ({children, offset}) => {

    // console.log(localOffset)

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects([
            cloneElement(children[Children.count(children) - 1], {
                style: {
                    height: "100%",
                    minWidth: `${PAGE_WIDTH}px`,
                    maxWidth: `${PAGE_WIDTH}px`
                }
            }),
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            }),
            cloneElement(children[0], {
                style: {
                    height: "100%",
                    minWidth: `${PAGE_WIDTH}px`,
                    maxWidth: `${PAGE_WIDTH}px`
                }
            })
        ])
    }, [children])

    // useEffect(() => {

    //     if (localOffset == 0) {

    //         setTimeout(() => {
    //             localOffset = -(PAGE_WIDTH_MARGINS * (projects.length - 2))
    //         }, 300)

    //     }

    // }, [localOffset, projects, PAGE_WIDTH_MARGINS])

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