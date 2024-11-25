import React, { useState } from "react";

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

  // Update user role
  const handleRoleChange = (index, newRole) => {
    const updatedUsers = [...users];
    updatedUsers[index].role = newRole;
    setUsers(updatedUsers);
    alert(`Role changed to ${newRole} for ${users[index].name}`);
  };

  // Update user status
  const handleStatusChange = (index, newStatus) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = newStatus;
    setUsers(updatedUsers);
    alert(`Status changed to ${newStatus} for ${users[index].name}`);
  };

  return (
    <section className="admin">
      <h1 className="text-6xl my-8">Admin Panel</h1>
      <hr />
      <div className="relative overflow-x-auto flex justify-center">
        <table className="w-9/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">
                  <select
                    name="role"
                    id="role"
                    value={user.role}
                    onChange={(e) => handleRoleChange(index, e.target.value)}
                  >
                    <option value="student">student</option>
                    <option value="instructor">instructor</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td
                  className={`px-6 py-4 ${
                    user.status === "Disabled"
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  <select
                    name="status"
                    id="status"
                    value={user.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminPannel;
