import React, { useState } from 'react';
import Coupon from '../components/ui/POS/Coupon/Index';
import Invoices from '../components/ui/POS/Invoices/Index';
import Order from '../components/ui/POS/Order/Index';
import AdminLayout from '../layouts/AdminLayout';

export default function POS() {
  const [subPage, setSubPage] = useState('order');

  function content() {
    if (subPage === 'order') return <Order />;
    if (subPage === 'invoice') return <Invoices />;
    if (subPage === 'coupon') return <Coupon />;
  }

  function onSubmenu(submenu) {
    if (submenu === subPage) return;
    setSubPage(submenu);
  }

  return <AdminLayout mode="pos" submenu={subPage} onSubmenu={onSubmenu}>
    {content()}
  </AdminLayout>
}
