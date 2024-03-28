import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">

        <NavBar></NavBar>
      </div>

        <Outlet />
    </div>
  );
};

export default MainLayouts;