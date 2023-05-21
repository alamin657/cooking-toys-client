import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Blog from "../pages/Home/Blog/Blog";
import AllToys from "../pages/Home/AllToys/AllToys";
import SingleToyDetails from "../pages/Home/SingleToyDetails/SingleToyDetails";
import AddAToy from "../pages/Home/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyToys from "../pages/Home/MyToys/MyToys";
import UpdateMyToys from "../pages/Home/MyToys/UpdateMyToys";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/toys/${params.id}`)
            },
            {
                path: '/addatoy',
                element: <PrivateRoute> <AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/updatetoys/:id',
                element: <UpdateMyToys></UpdateMyToys>,
                loader: ({ params }) => fetch(`http://localhost:4000/toys/${params.id}`)
            }
        ]
    }
])
export default router;