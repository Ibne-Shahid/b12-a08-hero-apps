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
                loader: async({params})=>{
                    const res = await fetch('/apps.json')
                    const data = await res.json()
                    const app = data.find(a=> a.id === parseInt(params.id))
                    if (!app) throw new Response('not found', {status: 404})
                        return app
                },
                errorElement: <AppError></AppError>
                
            },
            {
                path: '*',
                element: <Error></Error>
            }
            
        ]
    }
]);

export default router