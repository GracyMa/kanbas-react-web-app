import { Outlet } from "react-router-dom";
import AccountNavigation from "./Navigation";

export default function AccountLayout() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2"> 
          <AccountNavigation />
        </div>

        <div className="col-md-3"> 
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}
