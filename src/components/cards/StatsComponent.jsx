import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function StatsComponent({ item }) {
  return (
    <>
      <div className="bg-contrast flex flex-col text-center items-center gap-5 p-5 shadow-md rounded-xl ">
        <div>
          <item.icon className="h-10 rounded p-1 w-10 bg-disabled-purple " />
        </div>
        <div>
          <p className="text-gray-500 mb-1 font-semibold">{item.name}</p>
          <div className="flex gap-2 items-baseline justify-center">
            <p className="md:text-2xl text-xl font-bold text-primary">
              {item.stat}
            </p>
            <p
              className={
                item.changeType != "increase"
                  ? `text-red-600 font-semibold text-xs flex items-center`
                  : "text-green-600 font-semibold text-xs flex items-center"
              }
            >
              {item.change}{" "}
              {item.changeType != "increase" ? (
                <AiOutlineArrowDown />
              ) : (
                <AiOutlineArrowUp />
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
