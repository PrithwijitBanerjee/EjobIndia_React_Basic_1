import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import layout from "../layout/layout"


const EnhancedHome = layout(Home);
const EnhancedAbout = layout(About);
const EnhancedServices = layout(Services);

const route = createBrowserRouter([
    {
        path: '/',
        // element: <Home />
        element: <EnhancedHome />
    },
    {
        path: '/about',
        // element: <About />
        element: <EnhancedAbout />
    },
    {
        path: '/services',
        // element: <Services />
        element: <EnhancedServices />
    }
]);

const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}

export default AppRoutes