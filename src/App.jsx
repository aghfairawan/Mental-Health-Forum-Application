import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import ForumPage from "./pages/forums-page";
import RegistrationForm from "./components/Register/register";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
