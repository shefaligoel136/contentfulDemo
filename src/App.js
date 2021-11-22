import React from "react";

import "./index.css";

import { client } from "./client";
import Categories from "./components/Category/categories";
// import PopularMicrocourses from "./components/popularMicrocourses";
// import FeaturedMicrocourse from "./components/featuredMicrocourses";
import IndexCategory from "./components/CategoryFilter";

class App extends React.Component {
  state = {
    categories: [],
    categoryData: [],
    // popularCourse: [],
    // featureCourse: [],
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        for (const item of response.items) {
          console.log(item);
          // if (item.sys.contentType.sys.id === "whatWouldYouLikeToLearnToday") {
          //   this.setState({
          //     categories: [...this.state.categories, item],
          //   });
          // } else if (item.sys.contentType.sys.id === "categoryAll") {
          //   this.setState({
          //     categoryData: [...this.state.categoryData, item],
          //   });
          // } else if (
          //   item.sys.contentType.sys.id === "componentPopularMicrocourses"
          // ) {
          //   console.log("item", item);
          //   this.setState({
          //     popularCourse: [...this.state.popularCourse, item],
          //   });
          // } else if (
          //   item.sys.contentType.sys.id === "componentFeaturedMicrocourses"
          // ) {
          //   console.log("item", item);
          //   this.setState({
          //     featureCourse: [...this.state.featureCourse, item],
          //   });
          // }
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
              <IndexCategory categoryData={this.state.categoryData} />
              {/* <PopularMicrocourses
                popularMicrocourses={this.state.popularCourse}
              />
              <FeaturedMicrocourse
                featuredMicroCourse={this.state.featureCourse}
              /> */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
