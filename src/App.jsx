import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/sidebar/Header";
import Sidebar from "./components/sidebar/Sidebar";
// import ToggleSwitch from "./components/switch/ToggleSwitch";
import Courses from "./components/Courses/Courses";
import Assignments from "./components/Assignments/Assignments";
import AssignmentPage from "./components/Assignments/AssignmentPage";
import { AuthProvider } from "./components/Authentication/AuthProvider";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Unauthorized from "./components/Authentication/Unauthorized";
import AdminPannel from "./components/admin/AdminPannel";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {/* No Layout */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* With Layout */}
            <Route element={<Layout />}>
              <Route
                path="/admin"
                element={
                  <PrivateRoute requiredRole={["admin"]}>
                    <AdminPannel />
                  </PrivateRoute>
                }
              />
              <Route
                path="/courses"
                element={
                  <PrivateRoute
                    requiredRole={["student", "instructor", "admin"]}
                  >
                    <Courses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:courseId"
                element={
                  <PrivateRoute
                    requiredRole={["student", "instructor", "admin"]}
                  >
                    <Assignments />
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:courseId/assignment/:assignmentId"
                element={
                  <PrivateRoute
                    requiredRole={["student", "instructor", "admin"]}
                  >
                    <AssignmentPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

const Layout = () => {
  return (
    <>
      {/* <Login /> */}
      <section className="flex flex-col w-screen h-screen max-h-screen">
        <div className="logout absolute top-14 md:top-4 right-4 cursor-pointer z-50 ">
          <Link to="/login" className="cursor-pointer">
            <button className="bg-red-600 text-white p-2 rounded-lg cursor-pointer">
              Logout
            </button>
          </Link>
        </div>
        <div className="block md:hidden">
          {/* Mobile Header */}
          <Header />
        </div>
        <section className="flex w-full h-screen max-h-screen overflow-hidden relative">
          {/*Desktop Sidebar */}
          {/* <div className="md:block hidden">
            <ToggleSwitch />
          </div> */}
          <Sidebar />
          {/* Main Content */}
          <main className="w-full overflow-auto p-8">
            <Outlet />
          </main>
        </section>
      </section>
    </>
  );
};
