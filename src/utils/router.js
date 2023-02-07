import { createBrowserRouter } from "react-router-dom";

import Login from '../pages/Login/Login';

import ERP from "../pages/ERP/Index";
import CRM from "../pages/CRM/Index";
import POS from "../pages/POS/Index";

import Project from "../pages/ERP/Project/Index";
import Inventory from "../pages/ERP/Inventory/Index";
import Finance from "../pages/ERP/Finance/Expense/Index";
import Supplier from "../pages/ERP/Supplier/Index";
import Warehouse from "../pages/ERP/Warehouse/Index";
import ErrorPage from "../pages/error-page";

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/erp",
    element: <ERP />,
    children: [
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "finance",
        element: <Finance />,
      },
      {
        path: "supplier",
        element: <Supplier />,
      },
      {
        path: "warehouse",
        element: <Warehouse />,
      },
    ],
  },
  {
    path: "/crm",
    element: <CRM />,
  },
  {
    path: "/pos",
    element: <POS />,
  },
]);

export default router;