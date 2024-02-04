import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthProvider from "./contexts/AuthContext";
import ThemeProvider from "./contexts/ThemeContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
         <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}
