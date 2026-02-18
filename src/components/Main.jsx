import React from "react";
import Advantages from './Advantages'
import StudentProjects from "./StudentProjects";
import Teachers from "./Teachers";
import StartupClub from "./StartupClub";
import News from "./News"

class Main extends React.Component {

  render() {

    return (
        <main>
            <Advantages />
            <StudentProjects />
            <Teachers />
            <StartupClub />
            <News />
        </main>
    )

  }

}

export default Main
