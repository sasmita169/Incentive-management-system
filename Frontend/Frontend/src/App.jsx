import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import HolidayPage from "./components/HolidayPage";
import HolidayPage1 from "./components/HolidayPage1";
import HolidayPage2 from "./components/HolidayPage2";
import HolidayPage3 from "./components/HolidayPage3";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
 

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/holidayPage" element={<HolidayPage />} /> 
          <Route path="/holidayPage1" element={<HolidayPage1 />} /> 
          <Route path="/holidayPage2" element={<HolidayPage2 />} /> 
          <Route path="/holidayPage3" element={<HolidayPage3 />} /> 
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
