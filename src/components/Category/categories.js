import React, { useState } from "react";
import ExploreHome from "../HomeScreen/ExploreHome";
import Category from "./category";

const Categories = ({ categories }) => {
  const [data, setData] = useState([]);

  const sendDataToParent = (categoryData) => {
    setData(categoryData);
  };
  return (
    <div>
      <h1>What Would You Like to Learn Today?</h1>
      <div className="categoryFlex">
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            sendDataToParent={sendDataToParent}
          />
        ))}
      </div>
      <div className="exploreHome">
        <ExploreHome categoryData={data} />
      </div>
    </div>
  );
};

export default Categories;
