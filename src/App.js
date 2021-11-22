import React from "react";

import "./index.css";

import { client } from "./client";
import Categories from "./components/Category/categories";

class App extends React.Component {
  state = {
    categories: [],
    featuredMicroCourses: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        for (const item of response.items) {
          console.log(item.sys.contentType.sys.id);
          if (item.sys.contentType.sys.id === "whatWouldYouLikeToLearnToday") {
            this.setState({
              categories: [...this.state.categories, item],
            });
          } else if (
            item.sys.contentType.sys.id === "componentFeaturedMicrocourses"
          ) {
            this.setState({
              featuredMicroCourses: [...this.state.featuredMicroCourses, item],
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
              <Categories categories={this.state.categories} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
