import { Navigate, createBrowserRouter } from "react-router-dom";
import Category from "../pages/Home/Category/Category";
import About from "../pages/shared/About/About";
import Main from "../layout/Main";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsLight from "../pages/Home/NewsLight/NewsLight";
import LoginField from "../layout/LoginField/LoginField";
import LoginForm from "../layout/LoginField/LoginForm/LoginForm";
import RegisterForm from "../layout/LoginField/RegisterForm/RegisterForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
       path: "/",
       element: <Main />,
       children: [
         {
           path: "/",
           element: <Category></Category>,
           loader: () => fetch("https://dragon-newspaper-server.vercel.app/news"),
         },
         {
           path: "/category/:id",
           element: <Category></Category>,
           loader: ({ params }) => fetch(`https://dragon-newspaper-server.vercel.app/category/${params.id}`)
         },
         {
           path: "/about",
           element: <About></About>
         }
       ]
    },
    {
      path: "/news",
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: "/news/:id",
          element: <PrivateRoute><NewsLight></NewsLight></PrivateRoute>,
          loader: ({ params }) => fetch(`https://dragon-newspaper-server.vercel.app/news/${params.id}`) 
        }
      ]
    },
    {
      path:"/",
      element: <LoginField></LoginField>,
      children: [
        {
          path: "/",
          element: <Navigate to={`/category/0`}></Navigate>
        },
        {
          path: "/login",
          element: <LoginForm></LoginForm>
        },
        {
          path: "/register",
          element: <RegisterForm></RegisterForm>
        },
      ]
    }
 ])


 export default router;