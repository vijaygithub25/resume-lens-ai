import { createBrowserRouter, Outlet } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";
import Navbar from "./components/Navbar/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                index: true,
                element: <Protected><Home /></Protected>
            },
            {
                path:"interview/:interviewId",
                element: <Protected><Interview /></Protected>
            }
        ]
    }
])