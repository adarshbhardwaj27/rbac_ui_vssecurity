import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import NavBar from "../navbar/NavBar";
import { useState } from "react";

const Sidebar = () => {
  // TODO: Make this sidebar responsive and adjustable
  // Current max-width is 300px

  // TODO: Make this sidebar collapsible
  // Colapsable button

  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`bg-contrast pb-2 relative border-r-2 rounded-br-2xl shadow-lg hidden md:block w-[20vw] max-w-[300px]   ${
        toggle ? " w-increasing min-w-[200px]" : " w-decreasing min-w-[100px]"
      }`}
    >
      <NavBar />

      <button
        onClick={() => setToggle(!toggle)}
        className="bg-white w-14 h-14 z-20 border-r-2 flex items-center justify-center rounded-full absolute top-0 -right-7 "
      >
        {!toggle ? (
          <HiArrowRight className="w-6 h-6 cursor-pointer" />
        ) : (
          <HiArrowLeft className="w-6 h-6 cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
