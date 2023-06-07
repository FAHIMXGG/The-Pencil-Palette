import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Page/Login/Login";
import SignUp from "../Page/signUp/signUp";
import ClassesPage from "../Page/ClassesPage/ClassesPage";

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
    }
])