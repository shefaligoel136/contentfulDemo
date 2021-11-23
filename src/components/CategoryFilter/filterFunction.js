import React, { useEffect, useState } from "react";
import axios from "axios";

function FilterFunction({ allData }) {
  const [instanceCount, setInstanceCount] = useState(0);
  const [instance, setInstance] = useState('');

  console.log("data", allData);
  useEffect(() => {
    getAllInstanceCount();
  }, []);

  const getAllInstanceCount = async () => {
    const allIntance = await axios.get(
      `${allData.baseUrl}filter={"where":{"tagId":"${allData.tagId}"}}`
    );
    setInstanceCount(allIntance.data.length);
  };

  const instancesDetails = async () => {
    for (let i = 0; i < instanceCount; i++) {
      const data = await axios.get(
        `${allData.baseUrl}filter={"limit":1,"skip":${i},"include":{"relation":"subject"},"order":"order ASC","where":{"tagId":"${allData.tagId}"}}&exploreHomeSubjectFilter={"ExploreList":{"include":{"relation":"list-documents","scope":{"include":{"relation":"subject","scope":{"include":[{"relation":"curators","scope":{"fields":["firstName","lastName","name","recentJobTitle","recentCompany","_profileImage","_companyLogo","slug","id"]}},{"relation":"microCourse","scope":{"include":[{"relation":"curators","scope":{"fields":["firstName","lastName","name","recentJobTitle","recentCompany","_profileImage","_companyLogo","slug","id"]}},{"relation":"tags"}]}},{"relation":"tags","scope":{"fields":["name","id"]}},{"relation":"user","scope":{"fields":["firstName","lastName","name","recentJobTitle","recentCompany","_profileImage","_companyLogo","slug","id","createdByChet"]}}]}},"order":"order ASC"}}},"MicroCourse":{"order":"order ASC","include":[{"relation":"curators","scope":{"fields":["firstName","lastName","name","recentJobTitle","recentCompany","_profileImage","_companyLogo","slug","id"]}}]}}  `
      );
      console.log(data);
      setInstance(...instance, data?.data[0]?.subject);
    }
  };

  instancesDetails()

  return <>{console.log(instance)}</>;
}

export default FilterFunction;

// data.data[0].subject => list-documents, name(heading)
// list-documents is array => required field for the app are => chapterIds.length, curators[array]=> (get name, recentJobTitle and _profileImage)
// name, totalViewCount, coverImage, tags[]
