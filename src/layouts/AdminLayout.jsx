import React, { useContext, useEffect } from "react";

import "./admin.scss";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { TokenContext } from "../context/TokenContext";

export default function AdminLayout({ mode, submenu, onSubmenu, children, onFinanceType }) {
  const [contentHeight, setContentHeight] = React.useState(window.innerHeight);

  // check for authenticated, if not --> redirect to login
  const token = useContext(TokenContext);

  // for resize
  useEffect(() => {
    function handleResize() {
      console.log('resize', window.innerHeight)
      setContentHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('useEffect -> token', token);
  }, [token]);

  return (
    <>
      <Sidebar mode={mode} submenu={submenu} onSubmenu={onSubmenu} />
      <div className="p-5 admin-wrapper">
        <Header isFinance={submenu === 'finance' } onFinanceType={onFinanceType} />
        <div className="content-wrapper" style={{height: contentHeight - 114 + 'px'}}>
          {children}
        </div>
      </div>
    </>
  );
}
