import './Home.css';

export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2 className='course_status_title'>Course Status</h2>

            <div className="course_status_btns">
                <div className="publish-btns">
                    <button>Unpublish</button>
                    <button>Publish</button>
                </div>
                <div className="course_other_btns">
                    <button>Import Existing Content</button>
                    <button>Import from Commons</button>
                    <button>Choose Home Page</button>
                    <button>View Course Stream</button>
                    <button>New Announcement</button>
                    <button>New Analytics</button>
                    <button>View Course Notifications</button>
                </div>
            </div>
        </div>
    );
}
