// import { Routes, Route, Navigate } from "react-router";
// import AccountLayout from "./Account/AccountLayout"; // New Account layout
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// import Signin from "./Account/Signin"; // Import the Signin component
// import Signup from "./Account/Signup"; // Import the Signup component
// import Profile from "./Account/Profile"; // Import the Profile component
// import "./styles.css";

// export default function Kanbas() {
//   return (
//     <div id="wd-kanbas">
//       <KanbasNavigation />
//       <div className="wd-main-content-offset p-3">
//         <Routes>
//           {/* Redirect root path to Account/Signin */}
//           <Route path="/" element={<Navigate to="/Account/Signin" />} />

//           {/* Account routes using AccountLayout */}
//           <Route path="/Account/*" element={<AccountLayout />}>
//             <Route path="Signin" element={<Signin />} />
//             <Route path="Signup" element={<Signup />} />
//             <Route path="Profile" element={<Profile />} />
//           </Route>

//           {/* Other routes */}
//           <Route path="/Dashboard" element={<Dashboard />} />
//           <Route path="/Courses/:cid/*" element={<Courses />} />
//           <Route path="/Calendar" element={<h1>Calendar</h1>} />
//           <Route path="/Inbox" element={<h1>Inbox</h1>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>

        
      </div>
    </div>
  );
}