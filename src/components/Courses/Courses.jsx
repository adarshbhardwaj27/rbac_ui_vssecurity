import React, { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    setCourse([
      {
        id: 1,
        name: "Introduction to Computer Science",
        description: "Basics of computer science, including algorithms",
        instructor: "Dr. Alice Johnson",
        students: ["John Doe"],
      },
      {
        id: 2,
        name: "Advanced Java Programming",
        description:
          "In-depth Java programming, covering object-oriented principles",
        instructor: "Prof. Bob Smith",
        students: ["John Doe", "Jane Smith"],
      },
      {
        id: 3,
        name: "Web Development with React",
        description: "Build web apps using React, including components, hooks",
        instructor: "Dr. Charlie Davis",
        students: ["Emma Brown"],
      },
      {
        id: 4,
        name: "Database Systems",
        description: "Study database management, including SQL",
        instructor: "Prof. David Green",
        students: ["John Doe", "Jane Smith", "Emma Brown"],
      },
    ]);
  }, []);
  return (
    <>
      <div className="courses ">
        <h1 className="text-7xl my-2">Courses</h1>
        <hr />
        <div className="flex flex-wrap gap-4 h-60 my-4">
          {course.map((currcourse) => {
            return (
              <>
                <div className="md:w-1/5 h-full">
                  <Course
                    setCourse={setCourse}
                    data={currcourse}
                    key={currcourse.id}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
