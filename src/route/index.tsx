import { createBrowserRouter } from "react-router-dom";
import Page1 from "../Page1";
import Page2 from "../Page2";
import UrlParameter from "../UrlParameter";
import Root from "./root";
import DetailA from "../DetailA";
import ErrorPage from "./error-page";
import Contact from "./contact";
import { loader as rootLoader, action as rootAction } from "./root";
// import HeaderOnly from "../components/templates/HeaderOnly";
import DefaultLayout from "../components/templates/DefaultLayout";
import Users from "../components/pages/Users";
import FetchTest from "../components/pages/FetchTest";
import Todos from "../components/pages/Todos";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "page1",
        element: <Page1 />,
        children: [
          {
            path: "detail-a",
            element: <DetailA />,
          },
        ],
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "fetchtest",
        element: <FetchTest />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
    ],
  },
  {
    path: "page2/:id",
    element: <UrlParameter />,
  },
  {
    path: "testroot",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
