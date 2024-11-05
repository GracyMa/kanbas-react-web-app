// import { FaPlus, FaSearch } from "react-icons/fa";


// export default function AssignmentsControls() {
//   return (
//     <div id="wd-assignments-controls" className="text-nowrap">
//       <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Assignment
//       </button>

//       <button id="wd-add-group-btn" className="btn btn-lg btn-outline-secondary me-1 float-end">
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Group
//       </button>

//       <div className="input-group me-1 float-start" style={{ width: "50%" }}>
//         <span className="input-group-text">
//           <FaSearch />
//         </span>
//         <input
//           type="text"
//           className="form-control"
//           id="wd-search-assignments"
//           placeholder="Search for Assignments"
//         />
//       </div>
//     </div>
//   );
// }
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function AssignmentsControls() {

    const location = useLocation();

    return (

        <div className="d-flex mb-3">

            <div className="input-group w-50 me-2">
                <span className="input-group-text bg-transparent">
                    <FaMagnifyingGlass />
                </span>
                <input className="form-control me-2 w-50" type="search" placeholder="Search..."/>
            </div>
            
            <div className="ms-auto">

                <Link to={`${location.pathname}/Editor`}>
                    <button className="btn btn-lg btn-danger me-2">
                        <FaPlus className="fs-5 me-2 mb-1"/>
                        Assignment
                    </button>
                </Link>

                <button className="btn btn-lg btn-secondary me-2">
                    <FaPlus className="fs-5 me-2 mb-1"/>
                    Group
                </button>
            </div>

        </div>
    );
}
