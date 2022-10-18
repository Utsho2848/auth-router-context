import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import Orders from "../components/Orders";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/order',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])
export default router;