import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      This is the layout<Outlet></Outlet>
    </div>
  );
};

export default Layout;
