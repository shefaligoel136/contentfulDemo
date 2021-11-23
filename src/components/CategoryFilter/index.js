import React from "react";
import FilterFunction from "./filterFunction";

const Index = ({ categoryData }) => {
  return (
    <div>
      {console.log("all", categoryData)}
      {categoryData.map((data) => {
        if (data.fields.value === "all") {
          return <FilterFunction allData={data.fields} />;
        }
        return;
      })}
    </div>
  );
};

export default Index;
