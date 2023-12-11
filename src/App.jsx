import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import ForumPage from "./pages/forum-page";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ForumPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
