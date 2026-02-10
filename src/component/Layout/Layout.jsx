// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <div style={{ paddingTop: "60px" }}>
//         <Outlet />

//       </div>
//     </>
//   );
// }

// export default Layout;

// src/component/Layout/Layout.jsx

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Layout() {
  

  // Apply theme class to the root element


  return (
    <div className={`min-h-screen`}>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Adjust padding to account for fixed navbar */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
