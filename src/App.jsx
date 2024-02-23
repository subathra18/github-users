import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserListing, UserDetails, ErrorPage, Landing, Layout } from "./pages";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          element: <Landing></Landing>,
        },
        {
          path: "/users",
          element: <UserListing></UserListing>,
        },
        {
          path: "/users/:id",
          element: <UserDetails></UserDetails>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
