import { createBrowserRouter } from "react-router-dom";
import ManagerHomePage from "../pages/Manager/Home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/LayoutDashboard";
import ManagerCoursesPage from "../pages/Manager/Courses";
import ManageCreateCoursePage from "../pages/Manager/CreateCourse";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  },
  {
    path: "/manager",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: '/manager/courses',
        element: <ManagerCoursesPage />
      },
      {
        path: '/manager/courses/create',
        element: <ManageCreateCoursePage />
      }
    ],
  },
]);
export default router;
