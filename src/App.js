import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui";
import MainPage from "./containers/main-page/MainPage";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EB5757",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#3d3d3d"
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MainPage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
