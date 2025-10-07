import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layout/RootLayout";
import Home from "../components/pages/Home";
import AllApps from "../components/pages/AllApps";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apps",
                element: <AllApps></AllApps>
            }
        ]
    }
]);

export default router