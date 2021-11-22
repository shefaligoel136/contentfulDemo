import React from "react";

const FeatuedMicrocourse = ({ featuredMicroCourse }) => {
  return (
    <div>
      <h1>Featured Microcourses</h1>
      <div className="slide">
        {featuredMicroCourse.map((course) => (
          course.fields.microCourse.map((data) => (
            <div className="courseCard1">{data.fields.name}</div>
          ))
        ))}
      </div>
    </div>
  );
};

export default FeatuedMicrocourse;
