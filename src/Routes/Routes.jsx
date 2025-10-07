import { createBrowserRouter } from "react-router";
import RootLayout from "../root-layout/RootLayout";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import InstalledApps from "../pages/InstalledApps";

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
                element: <AllApps></AllApps>
            },
            {
                path: "/installedApps",
                element: <InstalledApps></InstalledApps>
            }
            
        ]
    }
]);

export default router