import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    photo: "/images/reactjs.png", description: "New Description"
  });

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const addNewCourse = async () => {

    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };

  const deleteCourse = async (courseId: string) => {

    const status = await courseClient.deleteCourse(courseId);
    console.log('Delete status:', status); 
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {

    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const fetchCourses = async () => {
    let courses = [];
    try {
        courses = await userClient.findMyCourses(); // Successfully fetched courses
        console.log("Fetched courses: ", courses);
    } catch (error) {
        console.error(error);
    }
    setCourses(courses); // Setting state after fetching
    console.log("Courses state after fetch: ", courses);
};

  

  // const fetchCourses = async () => {
  //   let courses = [];
  //   try {
  //     courses = await userClient.findMyCourses();
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setCourses(courses);
  // };

  // useEffect(() => {
  //   fetchCourses();
  // }, [currentUser]);
  useEffect(() => {
    fetchCourses();
}, [currentUser]);

  return (
    <Session>
      <div id="wd-kanbas">
            <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={
                <ProtectedRoute>
                  <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
                </ProtectedRoute>
              } />
              <Route path="/Courses/:cid/*" element={
                <ProtectedRoute>
                  <Courses courses={courses}/>
                </ProtectedRoute>
              } />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
      </div>
    </Session>
  );
}