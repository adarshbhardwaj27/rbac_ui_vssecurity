import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AdminPannel = () => {
  const [users, setUsers] = useState([
    { name: "Adarsh", role: "student", status: "Active" },
    { name: "Neha", role: "instructor", status: "Disabled" },
    { name: "Puneet", role: "admin", status: "Active" },
    { name: "Raj", role: "instructor", status: "Active" },
    { name: "Sonia", role: "student", status: "Active" },
    { name: "Vinay", role: "instructor", status: "Active" },
    { name: "Amit", role: "admin", status: "Disabled" },
    { name: "Shiv", role: "instructor", status: "Disabled" },
  ]);

  return (
    <>
      <section className="admin">
        <h1 className="text-6xl my-8">Admin Panel</h1>
        <hr />
        <div class="relative overflow-x-auto flex justify-center">
          <table class="w-9/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.name}
                    </th>
                    <td class="px-6 py-4">
                      <select
                        name="role"
                        id="role"
                        onChange={() =>
                          alert(`Role changed to ${user.role} successfully`)
                        }
                      >
                        <option disabled selected>
                          {user.role}
                        </option>
                        <option value="student">student</option>
                        <option value="instructor">instructor</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td
                      class={`px-6 py-4 ${
                        user.status == "Disabled"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      <select
                        name="status"
                        id="status"
                        onChange={() =>
                          alert(`Status changed to ${user.status} successfully`)
                        }
                      >
                        <option disabled selected>
                          {user.status}
                        </option>
                        <option value="Active">Active</option>
                        <option value="Disabled">Disabled</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* <div className="accordian cursor-pointer rounded-lg shadow-lg w-11/12 mx-auto flex justify-between items-center p-4 mt-2 bg-slate-100 border border-b-0 border-gray-200">
          <h2 className="text-2xl">Instructors</h2>
          <FaChevronDown />
        </div>
        <div className="accord_data"></div> */}
      </section>
    </>
  );
};

export default AdminPannel;
