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
        <h1 className="text-7xl my-2">Assignments</h1>
        <hr />
        <div className="flex flex-wrap gap-4 h-60 my-4">
          {assignments.map((course) => {
            return (
              <>
                <div className="md:w-1/5 h-full">
                  <Assignment data={course} key={course.id} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Assignments;
