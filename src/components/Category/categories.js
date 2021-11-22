import React from "react";
import Category from "./category";

const Categories = ({ categories }) => {
  return (
    <div>
      <h1>What Would You Like to Learn Today?</h1>
      <div className="categoryFlex">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
