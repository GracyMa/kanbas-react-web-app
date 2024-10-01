import React from "react";
import { Link } from "react-router-dom";


const courses = [
  { _id: "1234", name: "Algorithem", number: "CS4550", term: "Fall", year: 2023, section: "1", color: "#007bff" },
  { _id: "2345", name: "Found of Software Engineer", number: "CS4620", term: "Fall", year: 2023, section: "2", color: "#28a745" },
  { _id: "3456", name: "Discrete", number: "CS4800", term: "Fall", year: 2023, section: "1", color: "#dc3545" },
  { _id: "4567", name: "Database Design", number: "CS3200", term: "Fall", year: 2023, section: "2", color: "#ffc107" },
  { _id: "5678", name: "Web Development", number: "CS5610", term: "Fall", year: 2023, section: "1", color: "#17a2b8" },
  { _id: "6789", name: "Data Science", number: "DS2500", term: "Fall", year: 2023, section: "2", color: "#6610f2" },
  { _id: "7890", name: "AI Fundamentals", number: "CS4100", term: "Fall", year: 2023, section: "1", color: "#fd7e14" }
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row g-4" >
        {courses.map((course) => (
          <div key={course._id} className="col-xl-3 col-lg-4 col-md-6">
            <div className="card h-100" style={{ width: "260px" }}>
              <div 
                className="card-img-top" 
                style={{ 
                  height: "150px", 
                  backgroundColor: course.color 
                }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link 
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="text-decoration-none text-primary"
                  >
                    {course.number} {course.name}
                  </Link>
                </h5>
                <p className="card-text">
                  {course.term} {course.year} - Section {course.section}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}