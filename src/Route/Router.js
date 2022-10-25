import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog";
import Courses from "../component/Courses";
import ErrorPage from "../component/ErrorPage";
import FAQ from "../component/FAQ";
import Faq from "../component/FAQ";
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
            {path:"/",element:<Home></Home>},
            {path:"/courses",element:<Courses></Courses>},
            {path:"/faq",element:<FAQ></FAQ>},
            {path:"/blog",element:<Blog></Blog>},
            {path:"/login",element:<Login></Login>},
            {path:"/reg",element:<Registration></Registration>},
        ]
    }
]);

export default route;