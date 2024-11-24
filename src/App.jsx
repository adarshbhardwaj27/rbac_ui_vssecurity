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
import ToggleSwitch from "./components/switch/ToggleSwitch";
import Courses from "./components/Courses/Courses";
import Assignments from "./components/Assignments/Assignments";
import AssignmentPage from "./components/Assignments/AssignmentPage";
import { AuthProvider } from "./components/Authentication/AuthProvider";
import PrivateRoute from "./components/Authentication/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            {/* No Layout */}
            <Route path="/" element={<Login />} />
            <Route path="/unauthorized" element={<Login />} />

            {/* With Layout */}
            <Route element={<Layout />}>
              <Route
                path="/courses"
                element={
                  <PrivateRoute requiredRole="student">
                    <Courses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:courseId"
                element={
                  <PrivateRoute requiredRole="student">
                    <Assignments />
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:courseId/assignment/:assignmentId"
                element={
                  <PrivateRoute requiredRole="student">
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
        <div className="block md:hidden">
          {/* Mobile Header */}
          <Header />
        </div>
        <section className="flex w-full h-screen max-h-screen overflow-hidden relative">
          {/*Desktop Sidebar */}
          <div className="md:block hidden">
            <ToggleSwitch />
          </div>
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
