import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Page/Login/Login";
import SignUp from "../Page/signUp/signUp";
import ClassesPage from "../Page/ClassesPage/ClassesPage";
import Dashboard from "../Page/DashBoard/Dashboard";
import Course from "../Page/DashBoard/Course/Course";
import Add from "../Page/DashBoard/Add";
import MyCart from "../Page/DashBoard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Page/DashBoard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'course',
                element: <ClassesPage></ClassesPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'courseManage',
                element: <Course></Course>
            },
            {
                path: 'add',
                element: <Add></Add>
            },
            {
                path: 'cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])