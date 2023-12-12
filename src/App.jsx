import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import ForumPage from "./pages/forums-page";
import RegistrationForm from "./components/Register/register";
import LoginForm from "./components/Login/login";

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
          element: <RegistrationForm />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
