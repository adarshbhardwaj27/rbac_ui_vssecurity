import React from "react";

const Course = ({ data }) => {
  return (
    <div
      className="flex flex-col justify-between border shadow-md h-full p-4 "
      key={data.id}
    >
      <div>
        <h1 className="text-xl font-semibold min-h-16">{data.name}</h1>
        <h2 className="text-sm font-mono">{data.instructor}</h2>
        <h3 className="italic opacity-50">{data.description}</h3>
      </div>
      <div className="button">
        <a href={`/course/${data.id}`}>
          <button
            type="button"
            className="w-full bg-black text-white p-1 rounded-sm"
          >
            Open
          </button>
        </a>
      </div>
    </div>
  );
};

export default Course;
