import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <div className="pt-16">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
