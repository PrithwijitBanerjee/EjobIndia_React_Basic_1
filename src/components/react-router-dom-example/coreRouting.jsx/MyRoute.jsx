import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Dasboard from "../pages/Dasboard"
import Header from "../commons/Header"
import ProtectedRoute from "../hoc/ProtectedRoute"
import DataTableEx2 from "../../react_datatable_component/DataTableEx2"

const publicRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]

const privateRoutes = [
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/dashboard',
        element: <Dasboard />
    },
    {
        path: '/products',
        element: <DataTableEx2 />
    }
]

const MyRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    {
                        publicRoutes?.map((route, index) => (
                            <Route key={index} path={route?.path} element={route?.element} />
                        ))
                    }
                    {
                        privateRoutes?.map((route, index) => (
                            <Route key={index} path={route?.path} element={<ProtectedRoute>{route?.element}</ProtectedRoute>} />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoute