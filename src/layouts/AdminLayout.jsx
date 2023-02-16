import React, { useContext, useEffect } from "react";

import "./admin.scss";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/TokenContext";

export default function AdminLayout({ mode, submenu, onSubmenu, children, onFinanceType }) {
  const [contentHeight, setContentHeight] = React.useState(window.innerHeight);

  // check for authenticated, if not --> redirect to login
  const token = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    // i cannot call this every time... so i have to change something ...
    if (!token) {
      // no token
      // navigate('/login');
      return;
    }
    
    function handleResize() {
      setContentHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Sidebar mode={mode} submenu={submenu} onSubmenu={onSubmenu} />
      <div className="p-5 admin-wrapper">
        <Header isFinance={submenu === 'finance' } onFinanceType={onFinanceType} />
        <div className="content-wrapper" style={{height: (contentHeight - 122) + 'px'}}>
          {children}
        </div>
      </div>
    </>
  );
}
