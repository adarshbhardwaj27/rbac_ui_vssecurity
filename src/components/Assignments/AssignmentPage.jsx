import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AssignmentPage = () => {
  const { courseId, assignmentId } = useParams();
  const [filechosen, setFileChosen] = useState(null);
  const [course, setCourse] = useState([
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
  // States to hold the current course and assignment
  const [currCourse, setCurrCourse] = useState(null);
  const [currAssignment, setCurrAssignment] = useState(null);

  // Fetching course and assignment data based on URL params
  useEffect(() => {
    // Find the course and assignment based on the courseId and assignmentId from URL
    const foundCourse = course.find((course) => course.id == courseId);
    const foundAssignment = assignments.find(
      (assignment) => assignment.assignmentId == assignmentId
    );

    // Update the state with the found data
    setCurrCourse(foundCourse);
    setCurrAssignment(foundAssignment);
  }, []); // Depend on courseId and assignmentId to trigger when params change

  // Render a loading state if course or assignment isn't found yet
  if (!currCourse || !currAssignment) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="content flex flex-col gap-6">
        <h1 className="md:text-7xl text-5xl my-2">{currAssignment.title}</h1>
        <hr />
        <p className="text-2xl">
          <strong>
            Course:
            <br />{" "}
          </strong>
          {currCourse.name}
        </p>
        <p className="text-2xl">
          <strong>Instructor: </strong>
          {currCourse.instructor}
        </p>
        <p className="text-2xl">
          <strong>Due Date: </strong>
          {currAssignment.dueDate}
        </p>
        <p className="text-2xl">
          <strong>
            Description:
            <br />{" "}
          </strong>
          {currAssignment.description}
        </p>
        <div className="uploadDiv flex flex-col gap-6 max-w-[300px] border-2 shadow-sm p-2">
          <div className="status flex justify-between items-center">
            <h3 className="text-2xl">
              <strong>Status:</strong>
            </h3>
            <h3 className="text-red-500">Not Complete</h3>
          </div>
          <input
            type="file"
            name="assignment"
            id="assignment"
            className="w-full "
            onChange={(e) => {
              setFileChosen(e.target.files[0]);
            }}
          />
          {filechosen && (
            <button
              type="button"
              className="font-mono bg-green-300"
              onClick={() => {
                alert("Uploaded Successfully");
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AssignmentPage;
