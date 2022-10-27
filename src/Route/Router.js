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
                element:<Courses></Courses>,
                loader: async ()=>
                {
                    return fetch('http://localhost:5000/allcourses');
                }
            },
            {
                path:"/courses/:id",
                element:<WebCourse></WebCourse>,
                loader: async ({params})=>
                {
                    return fetch(`http://localhost:5000/allcourses/${params.catagory_id}`);
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