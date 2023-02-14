import React, { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import Project from '../components/ui/ERP/Project/Index';
import Inventory from '../components/ui/ERP/Inventory/Index';
import Supplier from '../components/ui/ERP/Supplier/Index';
import Finance from '../components/ui/ERP/Finance/Index';
import Warehouse from '../components/ui/ERP/Warehouse/Index';
import Setting from './Setting';

export default function ERP() {
  const [subPage, setSubPage] = useState('project'); // default is project
  const [financeType, setFinanceType] = useState('sales');

  function content() {
    if (subPage === 'project') return <Project />;
    if (subPage === 'inventory') return <Inventory />;
    if (subPage === 'supplier') return <Supplier />;
    if (subPage === 'finance') return <Finance showType={financeType} />;
    if (subPage === 'warehouse') return <Warehouse />;
    if (subPage === 'setting') return <Setting />;
  }

  function onSubmenu(submenu) {
    if (submenu === subPage) return;
    setSubPage(submenu);
  }

  return (
    <AdminLayout mode="erp" submenu={subPage} onSubmenu={onSubmenu} onFinanceType={setFinanceType}>
      {content()}
    </AdminLayout>
  );
}
