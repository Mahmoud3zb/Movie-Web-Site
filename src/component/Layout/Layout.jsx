import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <div className="pt-16">
        {" "}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
