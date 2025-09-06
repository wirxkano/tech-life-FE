import ErrorPage from "~/pages/Error";
import { createBrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout";
import Home from "~/pages/Home";
import Blog from "~/pages/Blog";
import BlogDetail from "~/pages/BlogDetail";
import AboutMePage from "~/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogDetail /> },
      { path: "about", element: <AboutMePage /> },
    ],
  },
]);
