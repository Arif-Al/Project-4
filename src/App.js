
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Store/Store";
import { Provider } from "react-redux";
import MiniDrawer from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection"
import Classroom from "./Classroom/Classroom"
import English_Communication from "./English_Communication/English_Communication";
import Professional_Development from "./Professional_Development/Professional_Development";
import Web_Development_SO2 from "./Web_Development_SO2/Web_Development_SO2";
import Classwork from "./Classwork/Classwork";
import People from "./People/People";
import English_02 from "./English 02/English_02";






function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: < MiniDrawer />,
      errorElement: <> <h1> error </h1> </>,
      children: [
        {
          path: "",
          element: <HeroSection />,
        },
        {
          path: "/Classroom",
          element: <Classroom />,
        },
        {
          path: "/Classwork",
          element: <Classwork />,
        },
      
       
        {
          path: "/English_Communication",
          element: <English_Communication />,
        },
        {
          path: "/English_02",
          element: <English_02 />,
        },
       
        {
          path: "/Professional_Development",
          element: <Professional_Development />,
        },
        
        {
          path: "/Web_Development_SO2",
          element: <Web_Development_SO2 />,
        },
        {
          path: "/People",
          element: <People />,
        },
       
       
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
