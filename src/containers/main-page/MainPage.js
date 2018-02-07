import React from "react";
import Header from "../../components/header/Header";
import "./mainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="main-page-container">
        <Header />
      </div>
    );
  }
}

export default MainPage;
