import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Course = ({ data, setCourse }) => {
  const { user } = useContext(AuthContext);
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
        <Link
          to={`/course/${data.id}`}
          className="w-full bg-black text-white p-1 rounded-sm text-center inline-block"
        >
          Open
        </Link>
      </div>
      {(user.role === "instructor" || user.role === "admin") && (
        <>
          <div className="button">
            <button
              type="button"
              className="w-full bg-red-600 text-white p-1 rounded-sm"
              onClick={() => {
                setCourse((prev) => {
                  return prev.filter((course) => course.id !== data.id);
                });
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

export default Course;
