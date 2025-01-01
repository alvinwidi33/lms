import { createBrowserRouter } from "react-router-dom";
import ManagerHomePage from "../pages/Manager/Home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/LayoutDashboard";
import ManagerCoursesPage from "../pages/Manager/Courses";
import ManageCreateCoursePage from "../pages/Manager/CreateCourse";
import ManageCourseDetailPage from "../pages/Manager/CourseDetail";
import ManageContentCreatePage from "../pages/Manager/CourseContentCreate";
import ManageCoursePreviewPage from "../pages/Manager/CoursePreview";
import ManageStudentsPage from "../pages/Manager/Students";
import StudentPage from "../pages/Students";
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
      },
      {
        path: '/manager/courses/:id',
        element:<ManageCourseDetailPage />
      },
      {
        path: '/manager/courses/:id/create',
        element: <ManageContentCreatePage />
      },
      {
        path : '/manager/courses/:id/preview',
        element : <ManageCoursePreviewPage />
      },
      {
        path: '/manager/students',
        element: <ManageStudentsPage />
      }
    ],
  },
  {
    path : '/student',
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        path: "/student",
        index: true,
        element: <StudentPage />
      },
      {
        path: "/student/detail-course/:id",
        element: <ManageCoursePreviewPage />
      }
    ]
  }
]);
export default router;
