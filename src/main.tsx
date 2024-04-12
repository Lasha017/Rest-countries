import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Country from "./components /country/Country.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/:name",
        element: <Country />
    }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
  );