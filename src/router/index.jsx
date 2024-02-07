import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import SignInPage from "../pages/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import CategoriesPage from "../pages/CategoriesPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import CategoryLayout from "../layouts/CategoryLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/categories",
        element: <CategoryLayout />,
        children: [
          {
            path: "/categories",
            element: <CategoriesPage />,
          },
        ],
      },
      {
        path: "/categories/:id",
        element: <CategoryPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
