import { createBrowserRouter } from "react-router";

import Layout from "../components/layout/Layout.jsx";
import HomePage from "../pages/Home/Home.jsx";
import AboutPage from "../pages/About/About.jsx";
import ContactsPage from "../pages/Contacts/Contacts.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);