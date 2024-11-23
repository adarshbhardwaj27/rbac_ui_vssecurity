import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/sidebar/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ToggleSwitch from "./components/switch/ToggleSwitch";
import Courses from "./components/Courses";
import Assignments from "./components/Assignments";
import AssignmentPage from "./components/AssignmentPage";
import { AuthProvider } from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Route path="/" element={<Login />} />
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
                <Routes>
                  <Route path="/unauthorized" element={<Login />} />
                  {/* <Route path="/" element={<Login />} /> */}
                  <PrivateRoute
                    path="/courses"
                    component={Courses}
                    requiredRole="student"
                  />
                  {/* <Route path="/courses" element={<Courses />} /> */}
                  {/* <Route path="/" element={<Courses />} /> */}
                  {/* <Route path="/course/:courseId" element={<Assignments />} /> */}
                  <PrivateRoute
                    path="/course/:courseId"
                    component={Assignments}
                    requiredRole="student"
                  />
                  {/* <Route
                    path="/course/:courseId/assignment/:assignmentId"
                    element={<AssignmentPage />}
                  /> */}
                  <PrivateRoute
                    path="/course/:courseId/assignment/:assignmentId"
                    component={AssignmentPage}
                    requiredRole="student"
                  />
                  {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
                </Routes>
              </main>
            </section>
          </section>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
