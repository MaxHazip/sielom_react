import {useState, useEffect, Children, cloneElement} from 'react'

import '../../css/home_page_style/teacherCarousel.css'

const PAGE_WIDTH = 368

export const TeacherCarousel = ({children}) => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        setPages(

            Children.map(children, child => {
                return cloneElement(child, {
                    style: {

                        height:'100%',
                        // padding: 
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                        
                    },
                })
            })

        )
    }, [])

    return (
        <div className="main-container">
            <div className="window">
                <div className="all-pages-container">{children}</div>
            </div>
        </div>
    ) 

}