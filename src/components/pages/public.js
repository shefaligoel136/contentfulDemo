import React from "react";

const PublicPage = ({ pageData }) => {
  return (
    <div className="publicPage">
      {console.log(pageData)}
      <h1>{pageData?.headerText}</h1>
      <img src={pageData?.image?.fields?.file.url} alt="contentImg" />
      <h3>{pageData?.descriptionText}</h3>
    </div>
  );
};

export default PublicPage;
