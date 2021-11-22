import React from "react";
import FilterFunction from "./filterFunction";

const Index = ({ categoryData }) => {
  return (
    <div>
      {console.log("all", categoryData)}
      {categoryData.map((data) => {
        if (data.fields.vale === "All") {
          return <FilterFunction allData={data} />;
        }
        return;
      })}
    </div>
  );
};

export default Index;
