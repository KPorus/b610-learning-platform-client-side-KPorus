import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import CheckOut from "../component/CheckOut";
import Courses from "../component/Courses";
import ErrorPage from "../component/ErrorPage";
import FAQ from "../component/FAQ";
import WebCourse from "../component/WebCourse";
import Home from "../component/Home";
import Login from "../component/Login";
import Registration from "../component/Registration";
import Main from "../layout/Main";
import CourseExplain from "../component/CourseExplain";
import PrivateRoute from "./Private";

let route = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage />,
        children : [
            {
                path:"/",
                element:<Home></Home>,
                loader:async ()=>{return fetch("http://localhost:5000/")}
            },
            {
                path:"/courses",
                element:<PrivateRoute><Courses></Courses></PrivateRoute>,
                loader: async ()=>
                {
                    return fetch('http://localhost:5000/allcourses');
                }
            },
            {
                path:"/allcourses/:catagory_id",
                element:<WebCourse></WebCourse>,
                loader: async ({catagory_id})=>
                {
                    return fetch(`http://localhost:5000/allcourses/${catagory_id}`);
                }
            },
            {
                path:"/course-detail/:id",
                element:<CourseExplain></CourseExplain>,
                loader: async ({id})=>
                {
                    return fetch(`http://localhost:5000/course-detail/${id}`);
                }
            },
            {path:"/faq",element:<FAQ></FAQ>},
            {path:"/blog",element:<Blog></Blog>},
            {path:"/login",element:<Login></Login>},
            {path:"/reg",element:<Registration></Registration>},
            {path:"/check-out",element:<CheckOut></CheckOut>},
        ]
    }
]);

export default route;