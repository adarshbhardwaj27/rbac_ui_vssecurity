import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Assignment from "./Assignment";

const Assignments = () => {
  const { courseId } = useParams();
  const [assignments, setAssignments] = useState([
    {
      assignmentId: 101,
      title: "Assignment 1: Algorithms",
      dueDate: "2024-12-01",
      courseId: 1, // References "Introduction to Computer Science"
      description: "Implement basic sorting algorithms",
      students: ["John Doe"], // Students who are assigned this task
    },
    {
      assignmentId: 102,
      title: "Assignment 2: Java OOP",
      dueDate: "2024-12-10",
      courseId: 2, // References "Advanced Java Programming"
      description: "Create a Java program to demonstrate OOP concepts",
      students: ["John Doe", "Jane Smith"], // Students who are assigned this task
    },
    {
      assignmentId: 103,
      title: "Assignment 3: React Components",
      dueDate: "2024-12-15",
      courseId: 3, // References "Web Development with React"
      description: "Build a simple React app with functional components",
      students: ["Emma Brown"], // Students who are assigned this task
    },
    {
      assignmentId: 104,
      title: "Assignment 4: SQL Queries",
      dueDate: "2024-12-20",
      courseId: 4, // References "Database Systems"
      description: "Write SQL queries to manage database records",
      students: ["John Doe", "Jane Smith", "Emma Brown"], // Students who are assigned this task
    },
  ]);
  return (
    <>
      <div className="assignments">
        <h1 className="md:text-7xl text-6xl my-2">Assignments</h1>
        <hr />
        <div className="flex flex-wrap justify-center gap-6 my-4 w-full">
          {assignments.map((course) => {
            return (
              <div
                className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
                key={course.assignmentId}
              >
                <Assignment setAssignments={setAssignments} data={course} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Assignments;
