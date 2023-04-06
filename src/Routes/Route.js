import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddUsers from "../Components/AddUsers";
import Update from "../Components/Update";
import PrivateRoute from "./PrivateRoute";




export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
                loader:()=> fetch('https://todo-list-server-nine.vercel.app/users')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
          
            {
                path:'/adduser',
                element:<PrivateRoute><AddUsers></AddUsers></PrivateRoute>
            },
            {
                path: '/users/add',
                element: <PrivateRoute><AddUsers></AddUsers></PrivateRoute>
              },
              {
                path:'/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://todo-list-server-nine.vercel.app/users/${params.id}`)
              }
            
        ]
    }
])