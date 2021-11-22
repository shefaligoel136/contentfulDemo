import React from "react";

const PopularMicrocourses = ({ popularMicrocourses }) => {
  return (
    <div>
      <h1>Popular Microcourses</h1>
      <div className="slide">
        {popularMicrocourses.map((course) =>
          course.fields.microCourse.map((data) => (
            <div className="courseCard1">{data.fields.name}</div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default PopularMicrocourses;
