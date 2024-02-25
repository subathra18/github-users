import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserListing, UserDetails, ErrorPage, Landing, Layout } from "./pages";
import { loader as userDetailsLoader } from "./pages/UserDetails";
import Error from "./components/Error";
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
          errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path: "users",
          element: <UserListing></UserListing>,
          errorElement: <Error></Error>,
        },
        {
          path: "users/:id",
          element: <UserDetails></UserDetails>,
          errorElement: <ErrorPage></ErrorPage>,
          loader: userDetailsLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
