import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import ForumPage from "./pages/forums-page";
import UserProfileForm from "./components/userProfile/userProfile";
import LoginForm from "./components/auth/Login/login";
import RegisterPage from "./pages/register-page";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ForumPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/userProfile",
          element: <UserProfileForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
