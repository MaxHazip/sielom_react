import React from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './css/home_page_style/home.css'

class App extends React.Component {

  render() {

    return (
      <div className="wrapper">
        <div className="content">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    )

  }

}

export default App;
