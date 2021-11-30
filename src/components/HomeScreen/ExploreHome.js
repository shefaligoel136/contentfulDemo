import React from "react";

const ExploreHome = ({ categoryData }) => {
  return (
    <div>
      {categoryData.map((data) => (
        <>
          <h3>{data?.subject?.name}</h3>
          <div>
            {data?.subject?.["list-documents"].map((instance) => (
              <p
                style={{
                  border: "1px dotted black",
                  padding: "5px",
                  width: "fit-content",
                }}
              >
                {instance?.subject.name}
              </p>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
export default ExploreHome;
