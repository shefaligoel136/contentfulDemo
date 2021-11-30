import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = ({ category, sendDataToParent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    sendDataToParent(data);
  }, [data]);

  const FilterFunction = async (allcategoryData) => {
    const allInstance = await axios.get(`${allcategoryData.apiUrl.fields.apiUrl}`);
    setData(allInstance.data);

    // for (const instance of allInstance.data) {
    //   setData((prevData) => [...prevData, instance]);
    // }
  };

  const { name } = category.fields;
  return (
    <>
      <div
        className="category"
        onClick={() => {
          FilterFunction(category.fields);
        }}
      >
        {name}
      </div>
    </>
  );
};

export default Category;
