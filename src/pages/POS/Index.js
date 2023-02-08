import React from 'react';
import Admin from '../../layouts/Admin';

import {
  Outlet
} from 'react-router-dom';

export default function POS () {
  return <Admin mode="pos">
    <div>
      <Outlet />
    </div>
  </Admin>
}
