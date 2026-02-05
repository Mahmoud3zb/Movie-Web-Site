import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Outlet />
        
      </div>
    </>
  );
}

export default Layout;