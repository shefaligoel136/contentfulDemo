import React from "react";

const Category = ({ category }) => {
  const { name } = category.fields;
  return <div className="category">{name}</div>;
};

export default Category;
