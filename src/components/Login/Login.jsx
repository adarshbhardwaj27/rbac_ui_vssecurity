import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext); // Use AuthProvider's login function
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample users for authentication
    const users = [
      { username: "student", password: "student", role: "student" },
      { username: "teacher", password: "teacher", role: "teacher" },
      { username: "admin", password: "admin", role: "admin" },
    ];

    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      login(user); // Use context's login to set the user
      if (user.role === "student" || user.role === "teacher") {
        navigate("/courses");
      } else if (user.role === "admin") {
        navigate("/admin");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <div className="flex flex-col gap-8 py-6 items-center bg-slate-100 max-w-[400px] w-full m-auto rounded-md shadow-xl p-6">
        <h1 className="text-3xl">Login</h1>
        <form onSubmit={handleLogin} className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="p-1 h-10 w-full"
                value={username}
                placeholder="username.."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-1 h-10 w-full"
                value={password}
                placeholder="password.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md mt-4 w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
