import React, { useEffect } from "react";

import "./admin.scss";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function AdminLayout({ mode, submenu, onSubmenu, children, onFinanceType }) {
  const [contentHeight, setContentHeight] = React.useState(window.innerHeight);

  // check for authenticated, if not --> redirect to login

  useEffect(() => {
    function handleResize() {
      setContentHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <Sidebar mode={mode} submenu={submenu} onSubmenu={onSubmenu} />
      <div className="p-4 admin-wrapper">
        <Header isFinance={submenu === 'finance' } onFinanceType={onFinanceType} />
        <div className="content-wrapper" style={{height: (contentHeight - 114) + 'px'}}>
          {children}
        </div>
      </div>
    </>
  );
}
