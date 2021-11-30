import React from "react";

import "./index.css";

import { client } from "./client";
import Categories from "./components/Category/categories";

class App extends React.Component {
  state = {
    categories: [],
    categoryData: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        for (const item of response.items) {
          console.log(item);
          if (item.sys.contentType.sys.id === "contentType") {
            this.setState({
              categoryData: [...this.state.categoryData, item],
            });
          }
        }
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span className="logo">React and Contentful</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Categories categories={this.state.categoryData} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
