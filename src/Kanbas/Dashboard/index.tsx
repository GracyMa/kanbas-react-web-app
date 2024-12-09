import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Protected from "./Protected";

export default function Dashboard(

  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; 
    enrolling: boolean; 
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
  }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      
      <div className="wd-dashboard-title">
        <h1 id="wd-dashboard-title">
          Dashboard
          <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        </h1> <hr />
      </div>

      <Protected>
      <h5>New Course
            <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
                Update
            </button>
      </h5><hr /><br />
      
      <input value={course.name} className="form-control mb-2" 
            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      
      <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
        
        <hr />
      </Protected>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
          .map((course: any) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                {<Link to={`/Kanbas/Courses/${course?._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course?.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course?._id, !course?.enrolled);
                          }} className={`btn ${ course?.enrolled ? "btn-danger" : "btn-success" } float-end`}> 
                          {course?.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course?.name} 
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course?.description} </p>

                    <button className="btn btn-primary"> Go </button>

                    <Protected>
                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course?._id);
                        }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>
                      <button id="wd-edit-course-click"
                          onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end">
                        Edit
                      </button>
                    </Protected>
                  </div>
                </Link>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}