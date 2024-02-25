import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1 className="header">Github Users</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
