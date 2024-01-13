import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";
import HomePage from "../pages/HomePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import CategoriesPage from "../pages/CategoriesPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";

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
        element: <CategoriesPage />,
      },
      {
        path: "/categories/:id",
        element: <CategoryPage />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
