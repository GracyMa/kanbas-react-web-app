import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="Algorithm Course" />
            <div>
              <h5>CS4550 Algorithm</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
            <img src="/images/reactjs.jpg" width={200} alt="Found of Software Engineer Course" />
            <div>
              <h5>CS4620 Found of Software Engineer</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 2</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
            <img src="/images/reactjs.jpg" width={200} alt="Discrete Course" />
            <div>
              <h5>CS4800 Discrete</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
            <img src="/images/reactjs.jpg" width={200} alt="Database Design Course" />
            <div>
              <h5>CS3200 Database Design</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 2</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/reactjs.jpg" width={200} alt="Web Development Course" />
            <div>
              <h5>CS5610 Web Development</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
            <img src="/images/reactjs.jpg" width={200} alt="Data Science Course" />
            <div>
              <h5>DS2500 Data Science</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 2</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7890/Home">
            <img src="/images/reactjs.jpg" width={200} alt="AI Fundamentals Course" />
            <div>
              <h5>CS4100 AI Fundamentals</h5>
              <p className="wd-dashboard-course-title">Fall 2023 - Section 1</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
