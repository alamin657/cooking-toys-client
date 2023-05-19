import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Blog from "../pages/Home/Blog/Blog";
import AllToys from "../pages/Home/AllToys/AllToys";
import SingleToyDetails from "../pages/Home/SingleToyDetails/SingleToyDetails";
import AddAToy from "../pages/Home/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <SingleToyDetails></SingleToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/toys/${params.id}`)
            },
            {
                path: '/addatoy',
                element: <AddAToy></AddAToy>
            }
        ]
    }
])
export default router;