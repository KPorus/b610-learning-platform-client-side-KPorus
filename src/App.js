import { RouterProvider } from "react-router-dom";
import route from "./Route/Router";
import { Toaster } from 'react-hot-toast';
import "./App.css"

function App() {

  return (
    <div>
      <RouterProvider router={route} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
