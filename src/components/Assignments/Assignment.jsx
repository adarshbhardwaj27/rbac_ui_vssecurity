import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Assignment = ({ data, setAssignments }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-between border shadow-md h-full p-4 ">
      <div>
        <h1 className="text-xl font-semibold min-h-16">{data.title}</h1>{" "}
        {/* Title of the assignment */}
        <h2 className="text-sm font-mono">Due Date: {data.dueDate}</h2>{" "}
        {/* Display the due date */}
        <h3 className="italic opacity-50 h-12">{data.description}</h3>{" "}
        {/* Description of the assignment */}
      </div>
      <div className="button my-2">
        <Link to={`/course/${data.courseId}/assignment/${data.assignmentId}`}>
          {/* Link to the course and assignment */}
          <button
            type="button"
            className="w-full bg-black text-white p-1 rounded-sm"
          >
            View
          </button>
        </Link>
      </div>
      {(user.role === "instructor" || user.role === "admin") && (
        <>
          <div className="button mb-2">
            <button
              type="button"
              className="w-full bg-red-600 text-white p-1 rounded-sm"
              onClick={() => {
                setAssignments((prev) =>
                  prev.filter(
                    (assignment) =>
                      assignment.assignmentId !== data.assignmentId
                  )
                );
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Assignment;
