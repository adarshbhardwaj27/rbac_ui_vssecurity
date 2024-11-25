// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Authentication/AuthProvider";

// const Course = ({ data, setCourse }) => {
//   const { user } = useContext(AuthContext);
//   return (
//     <div
//       className="flex flex-col justify-between border shadow-md h-full p-4 md:w-full w-11/12 min-w-[300px] "
//       key={data.id}
//     >
//       <div>
//         <h1 className="text-xl font-semibold min-h-16">{data.name}</h1>
//         <h2 className="text-sm font-mono">{data.instructor}</h2>
//         <h3 className="italic opacity-50">{data.description}</h3>
//       </div>
//       <div className="button my-2">
//         <Link
//           to={`/course/${data.id}`}
//           className="w-full bg-black text-white p-1 rounded-sm text-center inline-block"
//         >
//           Open
//         </Link>
//       </div>
//       {(user.role === "instructor" || user.role === "admin") && (
//         <>
//           <div className="button mb-2">
//             <button
//               type="button"
//               className="w-full bg-red-600 text-white p-1 rounded-sm"
//               onClick={() => {
//                 setCourse((prev) => {
//                   return prev.filter((course) => course.id !== data.id);
//                 });
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Course;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Course = ({ data, setCourse }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-between border shadow-md p-4 h-full w-full bg-white">
      <div>
        <h1 className="text-xl font-semibold min-h-16">{data.name}</h1>
        <h2 className="text-sm font-mono">{data.instructor}</h2>
        <h3 className="italic opacity-50 h-20">{data.description}</h3>
      </div>
      <div className="my-2">
        <Link
          to={`/course/${data.id}`}
          className="w-full bg-black text-white p-1 rounded-sm text-center inline-block"
        >
          Open
        </Link>
      </div>
      {(user.role === "instructor" || user.role === "admin") && (
        <div className="mb-2">
          <button
            type="button"
            className="w-full bg-red-600 text-white p-1 rounded-sm"
            onClick={() => {
              setCourse((prev) =>
                prev.filter((course) => course.id !== data.id)
              );
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Course;
