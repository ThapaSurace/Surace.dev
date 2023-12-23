import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="flex gap-1 items-center">
      <span className="text-sm font-light text-slate-700">
      </span>
      <Button
        onClick={handleToggle}
        variant="text"
      >
        {
        darkMode ? <Moon className="text-white" /> : <Sun />
         }
      </Button>
    </div>
  );
};

export default DarkModeToggle;
