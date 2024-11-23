import React, { useEffect, useState } from "react";

export default function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const darkModeListener = window.matchMedia("(prefers-color-scheme: dark)");
    const initialPreference = darkModeListener.matches;

    setIsDarkMode(initialPreference);

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeListener.addEventListener("change", handleChange);

    return () => {
      darkModeListener.removeEventListener("change", handleChange);
    };
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode === null) return;

    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);
  return (
    <>
      <div
        className={`md:absolute top-5 right-5 ${
          isDarkMode ? " night" : " day"
        }`}
      >
        <label className="toggle-button">
          <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}
