import React from 'react';
import { Outlet } from 'react-router-dom';
import Admin from '../../layouts/Admin';

export default function CRM() {
  return <Admin mode="crm">
    <div>
      <Outlet />
    </div>
  </Admin>
}