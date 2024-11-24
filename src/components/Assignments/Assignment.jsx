import React from "react";

const Assignment = ({ data }) => {
  return (
    <div
      className="flex flex-col justify-between border shadow-md h-full p-4 "
      key={data.assignmentId} // Use assignmentId as the key
    >
      <div>
        <h1 className="text-xl font-semibold min-h-16">{data.title}</h1>{" "}
        {/* Title of the assignment */}
        <h2 className="text-sm font-mono">Due Date: {data.dueDate}</h2>{" "}
        {/* Display the due date */}
        <h3 className="italic opacity-50">{data.description}</h3>{" "}
        {/* Description of the assignment */}
      </div>
      <div className="button">
        <a href={`/course/${data.courseId}/assignment/${data.assignmentId}`}>
          {/* Link to the course and assignment */}
          <button
            type="button"
            className="w-full bg-black text-white p-1 rounded-sm"
          >
            View
          </button>
        </a>
      </div>
    </div>
  );
};

export default Assignment;
