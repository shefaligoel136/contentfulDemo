import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./index.css";

import { client } from "./client";
import PublicPage from "./components/pages/public";
import PrivatePage from "./components/pages/private";

class App extends React.Component {
  state = {
    privatePage: {},
    publicPage: {},
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        for (const item of response.items) {
          if (item.sys.contentType.sys.id === "pages") {
            item.fields.pageName === "private-page" &&
              this.setState({ privatePage: { ...item.fields } });
            item.fields.pageName === "public-page" &&
              this.setState({ publicPage: { ...item.fields } });
          }
        }
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" exact element={<h1>Home Screen</h1>}></Route>
            <Route
              exact
              path="/public"
              element={<PublicPage pageData={this.state.publicPage} />}
            ></Route>
            <Route
              exact
              path="/private"
              element={
                this.state.privatePage?.isVisible ? (
                  <PrivatePage pageData={this.state.privatePage} />
                ) : (
                  <h1>
                    You don't have access to this page Redirect To{" "}
                    <Link to="/">HomePage</Link>{" "}
                  </h1>
                )
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
