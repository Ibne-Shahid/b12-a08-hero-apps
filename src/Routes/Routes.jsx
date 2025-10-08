import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layout/RootLayout";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import InstalledApps from "../pages/InstalledApps";
import AppDetails from "../pages/AppDetails";
import Error from "../pages/Error";
import AppError from "../pages/AppError";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/apps",
                element: <AllApps></AllApps>,
            },
            {
                path: "/installedApps",
                element: <InstalledApps></InstalledApps>
            },
            {
                path: "/appDetails/:id",
                element: <AppDetails></AppDetails>
            },
            {
                path: '*',
                element: <Error></Error>
            }
            
        ]
    }
]);

export default router