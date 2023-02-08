import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";

import "./admin.scss";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function Admin({ mode }) {
  const [contentHeight, setContentHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setContentHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <Sidebar mode={mode} />
      <div className="p-4 admin-wrapper">
        <Header />
        <div className="content-wrapper" style={{height: (contentHeight - 114) + 'px'}}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
