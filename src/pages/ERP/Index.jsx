import React from "react";
import Admin from "../../layouts/Admin";

import { Outlet } from "react-router-dom";

export default function ERP() {
  return (
    <Admin mode="erp">
      <div>
        <Outlet />
      </div>
    </Admin>
  );
}
