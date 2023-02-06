import "./common.scss";
// import Landing from "views/Landing.js";
// import Profile from "views/Profile.js";
// import Index from "views/Index.js";

import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEdit,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBell,
  faCalendarCheck,
} from '@fortawesome/free-regular-svg-icons';

import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth";

import ERP from "./views/admin/ERP/Index";
import CRM from "./views/admin/CRM/Index";
import POS from "./views/admin/POS/Index";

import Project from "./views/admin/ERP/Project/Index";
import Inventory from "./views/admin/ERP/Inventory/Index";
import Finance from "./views/admin/ERP/Finance/Index";
import Supplier from "./views/admin/ERP/Supplier/Index";
import Warehouse from "./views/admin/ERP/Warehouse/Index";

library.add(faEdit, faSearch, faTrash, faBell, faCalendarCheck);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="auth" element={<Auth />} />
      <Route path="admin" element={<Admin />}>
        <Route path="erp" element={<ERP />} />
        <Route index element={<Project />} />
        <Route path={"/admin/erp/project"} element={<Project />} />
        <Route path={"/admin/erp/finance"} element={<Finance />} />
        <Route path={"/admin/erp/inventory"} element={<Inventory />} />
        <Route path={"/admin/erp/supplier"} element={<Supplier />} />
        <Route path={"/admin/erp/warehouse"} element={<Warehouse />} />
        <Route path="crm" element={<CRM />} />
        <Route path="pos" element={<POS />} />
      </Route>
    </Routes>
  );
}

export default App;
