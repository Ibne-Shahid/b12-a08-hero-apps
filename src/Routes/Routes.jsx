import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layout/RootLayout";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import InstalledApps from "../pages/InstalledApps";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('/apps.json')
            },
            {
                path: "/apps",
                element: <AllApps></AllApps>,
                loader: ()=>fetch('/apps.json')
            },
            {
                path: "/installedApps",
                element: <InstalledApps></InstalledApps>
            },
            {
                path: "/appDetails/:id",
                element: <AppDetails></AppDetails>,
                loader: ()=>fetch('/apps.json')
            }
            
        ]
    }
]);

export default router